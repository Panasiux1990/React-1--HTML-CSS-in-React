import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
    <div className="container container5 text-white">
        <h2> 
        Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </h2>
        <div className="links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square fa-lg"></i>
            </a>
        </div>
    </div>
</footer>
  );
}
export default Footer;