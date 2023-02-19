import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import logo1 from "../../assets/logo1.svg";

const Navbar = () => {
  const [navColor, setColor] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={navColor ? 'nav scroll'  : 'nav'}>

      <img className='logo' src={navColor? logo : logo1} alt='logo' />

      <ul className='nav-items'>
        <li>
          <a className={navColor ? 'nav-links-scroll'  : 'nav-links'} href=''>Home</a>
        </li>
        <li>
          <a className={navColor ? 'nav-links-scroll'  : 'nav-links'} href=''>About</a>
        </li>
        <li>
          <a className={navColor ? 'nav-links-scroll'  : 'nav-links'} href=''>Contact</a>
        </li>
        <li>
          <a className={navColor ? 'nav-links-scroll'  : 'nav-links'} href=''>
            <i className='fa-solid fa-cart-shopping'></i>
          </a>
        </li>
        <li>
          {isLoggedIn ? (
            <button className="nav-button" onClick={() => setIsLoggedIn(false)}>LogIn</button>
          ) : (
            <button className="nav-button" onClick={() => setIsLoggedIn(true)}>LogOut</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
