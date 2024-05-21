import React, { useState } from 'react';
import './Counter.css';

function Counter ({guessCounter}) {

    let [gameCounter, setGameCounter] = useState(2);

    return (
        <div className="counter-p">
            <div className='counter-c'>
                <p>JÁTÉK: #{gameCounter}</p>
                <p>TIPPEK: {guessCounter}</p>
            </div>
        </div>
    )
}

export default Counter
