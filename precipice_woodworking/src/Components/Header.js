import React, { Component } from 'react';

class Header extends Component {
  render() {

    if (this.props.data) {
      var logoCorner = "images/" + this.props.data.logo;
      var precipiceHr = "images/" + this.props.data.precipice_hr;
      // var networks = this.props.data.social.map(function (network) {
      //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // })
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <img className="logo-corner" src={logoCorner} alt="Precipice Logo" />
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            {/* <li><a className="smoothscroll" href="#resume">Resume</a></li> */}
            <li><a className="smoothscroll" href="#portfolio">Collection</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>

        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 id ="headerBanner" className="responsive-headline">Precipice Woodshop</h1>
            <img className="precipice-hr" src={precipiceHr} alt="Precipice Logo" />
            <h3>Wasatch Inspired</h3>
            {/* <ul className="social">
               {networks}
            </ul> */}
          </div>
        </div>


        <section id="scroll-animate" className="scrolldown animate-down">
          <a className="smoothscroll" href="#about"><span></span><span></span></a>
        </section>

        {/* <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p> */}

      </header>
    );
  }
}

export default Header;
