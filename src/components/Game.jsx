import React, { useState } from 'react';
import './Game.css';
import Counter from './Counter';

let initialWordList = [
    { id: 0, value: "fotó" },
    { id: 1, value: "idő" },
    { id: 2, value: "emlék" },
    { id: 3, value: "nap" },
    { id: 4, value: "fény" }
]

const initialFields = ["", "", "", "", ""];
const correctList1 = ['nap', 'fény', 'fotó', 'emlék', 'idő'];
const correctList2 = ['nap', 'idő', 'emlék', 'fotó', 'fény'];

function Game() {

    let [a, setA] = useState();
    let [b, setB] = useState(0);
    let [rightOrWrong, setRightOrWrong] = useState("field");
    let [isTick, setIsTick] = useState(true);
    let [popUp, setPopUp] = useState(null);

    const [wordList, setWordList] = useState(initialWordList);

    let [fields, setFields] = useState(initialFields);

    function handleDrag(e) {
        setA(e);
    }

    function handleDrop(index) {
        const nextFields = fields.map((f, i) => {
            if (f == "" && i === index) {
                setWordList(wordList.filter(b => b.id !== a.id))
                return a.value;
            } else {
                return f
            }
        })
        setFields(nextFields)
        setPopUp(null)
    }


    function handleDragOver(e) {
        e.preventDefault();
    }

    function remove(index) {
        if (isTick && popUp == null) {
            const newFields = fields.map((f, i) => {
                if (f != "" && i === index) {
                    let lastObject = wordList[wordList.length - 1];
                    let newId = lastObject ? lastObject.id + 1 : 0;
                    setWordList([...wordList, { id: newId, value: f }])
                    return "";
                } else {
                    return f
                }
            })
            setFields(newFields)
        }
    }

    function handleCheck() {
        if (isTick === true) {
            if (wordList.length != 0) {
                setPopUp(true);
            }

            else {
                const c = fields.indexOf("nap");

                if (fields[(c + 1) % 5] === correctList1[1] && fields[(c + 2) % 5] === correctList1[2] && fields[(c + 3) % 5] === correctList1[3]) {
                    setRightOrWrong("field-right");
                    setB(b + 1)
                    setPopUp(false)
                    setIsTick(null)
                } else if (fields[(c + 1) % 5] === correctList2[1] && fields[(c + 2) % 5] === correctList2[2] && fields[(c + 3) % 5] === correctList2[3]) {
                    setRightOrWrong("field-right");
                    setB(b + 1)
                    setPopUp(false)
                    setIsTick(null)
                } else {
                    setIsTick(false);
                    setRightOrWrong("field-wrong");
                    setB(b + 1)
                }
            }
        } else if (isTick === false) {
            setIsTick(true);
            setWordList(initialWordList);
            setFields(initialFields);
            setRightOrWrong("field");
        } else {
            window.location.reload();
        }
    }

    function togglePopUp() {
        setPopUp(null)
    }

    return (
        <div className="game-parent">
            <Counter guessCounter={b} />

            {popUp == true ?

                <div className='pop-up-empty'>
                    <p className="close-button" onClick={togglePopUp}>x</p>
                    Nem töltöttél ki minden mezőt!
                </div>

                :

                popUp == false ?

                    <p className='pop-up-won'> <strong>Gratulálok! Nyertél!</strong> <br /> Tippeid száma: <strong>{b}</strong> </p>

                    :

                    null
            }

            <ul id="words">
                {wordList.map(word => (<li key={word.id} draggable onDragStart={() => handleDrag(word)}>{word.value}</li>))}
            </ul>

            <div id="fields">
                <hr />
                {fields.map((field, i) => (<div className={rightOrWrong} key={i} onDragOver={handleDragOver} onDrop={() => handleDrop(i)} onClick={() => remove(i)}>{field}</div>))}
            </div>

            <div className='check' onClick={handleCheck}>
                {isTick == true ?

                    <i className="fa-solid fa-check i"></i>

                    :

                    isTick == false ?

                        <i className="fa-solid fa-arrows-rotate i"></i>

                        :

                        <div> <i class="fa-solid fa-rotate-left"></i> <span className='tooltip'>vissza a kezdőlapra</span></div>
                }
            </div>
        </div>
    )
}

export default Game;
