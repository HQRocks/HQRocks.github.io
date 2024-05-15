import React, { useState } from 'react';
import './Button.css';

function Button({ children, type, onClick }) {
    return (
        <div className='button-p'>
            <button type={type} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button
