import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <header id="home">

        <div className="row banner">
          <div className="banner-text">
            <h1 id ="headerBanner" className="responsive-headline">Precipice Woodshop</h1>
            <img className="precipice-hr" src= "images/precipice_hr.png" alt="Precipice Logo" />
            <h3>Wasatch Inspired</h3>
            {/* <ul className="social">
               {networks}
            </ul> */}
          </div>
        </div>

        <section id="scroll-animate" className="scrolldown animate-down">
          <a className="smoothscroll" href="#collections"><span></span><span></span></a>
        </section>

      </header>
    );
  }
}

export default Header;