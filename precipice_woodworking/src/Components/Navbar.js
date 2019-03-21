import React, { Component } from 'react';

class Navbar extends Component {
  render() {

    return (
        <nav id="nav-wrap">
          <img className="logo-corner" src="images/precipice_corner_logo.png" alt="Precipice Logo" />
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#collections">Collections</a></li>
            {/* <li><a className="smoothscroll" href="#resume">Resume</a></li> */}
            <li><a href="/shop">Shop</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
    );
  }
}

export default Navbar;
