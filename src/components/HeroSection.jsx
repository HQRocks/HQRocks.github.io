import React, { useState } from 'react';
import Button from './Button';
import Game from './Game';
import Counter from './Counter';
import Rules from './Rules';

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

                    <Rules/>
                    
                    <Button onClick={handleToggle}>MEHET!</Button>
                </>
            }
        </>
    )
}

export default HeroSection
