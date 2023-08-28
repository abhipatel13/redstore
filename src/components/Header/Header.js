import React, { useState } from 'react';
import './Header.css';
import logo from '../images/logo.png';
import Cart from '../images/cart.png';
import Menu from '../images/menu.png';
import MainImage from '../images/image1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" width="125px" />
          </div>
          <nav>
            <ul id="MenuItems" className={menuOpen ? "" : "displaynone"}>
              <li><a href="">Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Account</a></li>
            </ul>
          </nav>
          <img src={Cart} width="30px" height="30px" />
          <img src={Menu} className="menu-icon" onClick={toggleMenu} />
        </div>
        <div className="row">
          <div className="col-2">
            <h1>Give Your Workout with<br />A New Style!</h1>
            <p>Success isn't always about Greatness. It's about consistency. Consistent<br />Hardwork gains
              Success. Greatness will Come.</p>
            <a href="" className="btn">Explore Now &#8594;</a>
          </div>
          <div className="col-2">
            <img src={MainImage} alt="Image-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
