import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav>
        <div className="container container-nav">
            <input type="checkbox" id="toggle"/>              
            <div className="moja-firma">
                <a href>moja firma</a>
            </div>
            <div className="menu-list">
                <a href="#staffPage">o nas</a>
                <a href="#offers">oferta</a>
                <a className="contact" href>kontakt</a>
            </div>
            <label forhtml ="toggle">
                <i className="fas fa-bars" id="sign-one"></i>
                <i className="fas fa-times" id="sign-two"></i>
            </label>
        </div>
    </nav>
  );
}
export default Nav;