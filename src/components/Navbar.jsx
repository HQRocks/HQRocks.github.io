import React, {useState} from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
        <nav>
          <p className='logo-text'>LÁNCOLJ</p>
          <i className="fa-solid fa-ellipsis-vertical" id='dots'></i>
        </nav>
    </>
  )
}

export default Navbar
