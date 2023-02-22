import React, { useState,useEffect } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import logo1 from "../../assets/logo1.svg";
import { Link, useLocation } from "react-router-dom";





const Navbar = () => {
  const [navColor, setColor] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
 const location = useLocation();

 const changeColor = () => {
   if (window.scrollY <= 90 && location.pathname !== "/") {
     setColor(false);
   } else {
     setColor(true);
   }
 };

             
 useEffect(() => {
   window.addEventListener("scroll", changeColor);
   return () => {
     window.removeEventListener("scroll", changeColor);
   };
 }, []);

 useEffect(() => {
   if (location.pathname === "/") {
     setColor(false);
   } else {
     setColor(true);
   }
 }, [location]);


  return (
    <div className={navColor ? 'nav scroll'  : 'nav'}>

      <img className='logo' src={navColor? logo : logo1} alt='logo' />

      <ul className='nav-items'>
        <li>
          <Link to="/" className={navColor ? 'nav-links-scroll'  : 'nav-links'} href=''>Home</Link>
        </li>
        <li>
          <Link to="/about" className={navColor ? 'nav-links-scroll'  : 'nav-links'} href=''>About</Link>
        </li>
        <li>
          <Link to="/contact" className={navColor ? 'nav-links-scroll'  : 'nav-links'} href=''>Contact</Link>
        </li>
        <li>
          <Link to="" className={navColor ? 'nav-links-scroll'  : 'nav-links'} href=''>
            <i className='fa-solid fa-cart-shopping'></i>
          </Link>
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
