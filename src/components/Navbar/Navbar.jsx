import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='logo' />
      <ul className='nav-items'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
        <li>
          <a href=''>
            <i className='fa-solid fa-cart-shopping'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
