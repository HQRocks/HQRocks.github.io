import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {

  let [menu, setMenu] = useState(true);

  let [rules, setRules] = useState(false)

  let [contact, setContact] = useState(false);

  function showMenu() {
    setMenu(!menu);
  }

  function reload() {
    window.location.reload();
  }

  function showRules() {
    setRules(!rules);
    setMenu(true);
  }

  function showContact() {
    setContact(!contact);
    setMenu(true);
  }

  return (
    <>
      <nav>
        <p className='logo-text'>LÁNCOLJ</p>
        <i className="fa-solid fa-ellipsis-vertical" id='dots' onClick={showMenu}></i>

        <ul className={menu ? "menu-tooltip-invisible" : "menu-tooltip-visible"}>
          <li onClick={showRules}>
            <i className="fa-regular fa-circle-question"></i>
            Szabályok
          </li>

          <li onClick={showContact}>
            <i className="fa-solid fa-paper-plane"></i>
            Kapcsolat
          </li>
        </ul>

        {menu ? null : <div className="trick" onClick={showMenu}></div>}

        {rules ?
          <div className="rules-container2">
            <span className='title2'>
              <i className="fa-regular fa-circle-question"></i>
              <h1>Szabályok</h1>
            </span>
            <p>
              Fejtsd meg a láncot! <br /><br />
              5 szó áll rendelkezésedre. <br /> <br />
              Ezeket a szavakat kell a különböző mezőkbe helyezned úgy, hogy minden összekötött szópár között legyen valamilyen kapcsolat.
            </p>
            <p className='rules-close' onClick={showRules}>x</p>
          </div> 
          : 
          null
        }

        {rules ? <div className="trick2" onClick={showRules}></div> : null}

        {contact ?
          <div className="contact-container">
            <p>
              Ha bármilyen megjegyzésed van, elküldheted az alábbi e-mail cimre: <br /> <br />
              <strong>viragrozsa123@gmail.com</strong>
            </p>
            <p className='contact-close' onClick={showContact}>x</p>
          </div>
          :
          null
        }

        {contact ? <div className="trick2" onClick={showContact}></div> : null}
      </nav>
    </>
  )
}

export default Navbar
