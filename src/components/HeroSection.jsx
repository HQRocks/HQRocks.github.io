import React, { useState } from 'react';
import './HeroSection.css';
import Button from './Button';
import Game from './Game';
import Counter from './Counter';

function HeroSection() {

    let [isToggle, setIsToggle] = useState(false);

    function handleToggle () {
        setIsToggle(!isToggle)
    }

    return (
        <>
            {isToggle ?

                <Game />

                :

                <>
                    <Counter guessCounter={0}/>

                    <div className='parent'>
                        <div className="rules-container">
                            <span className='title'>
                                <i className="fa-regular fa-circle-question"></i>
                                <h1>Szabályok</h1>
                            </span>
                            <p>
                                Fejtsd meg a láncot! <br /><br />
                                5 szó áll rendelkezésedre. <br /> <br />
                                Ezeket a szavakat kell a különböző mezőkbe helyezned úgy, hogy minden összekötött szópár között legyen valamilyen kapcsolat.
                            </p>
                        </div>
                    </div>
                    <Button onClick={handleToggle}>MEHET!</Button>
                </>
            }
        </>
    )
}

export default HeroSection
