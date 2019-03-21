import React, { Component } from 'react';

class Collections extends Component {
  render() {

    return (
      <section id="collections">
        <div className="row banner">
          <div className="banner-text">
            <h1 id="collectionsBanner" className="responsive-headline">The Collection</h1>
            <h2 className="responsive-headline">Hand carved. Real Wood.</h2>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="six columns collections collections-top-boarder">
            <h2>Tables</h2>
            <div className="image-hover">
              <img className="collections-pic collections-one" src= "images/precipice_woodshop_collections_table.png" />
              <a className = "collections-shop-button">
                <h2>View</h2>
              </a>
            </div>
          </div>
          <div className="six columns collections">
            <h2>Decor</h2>
            <div className="image-hover">
              <img className="collections-pic collections-two" src="images/precipice_woodshop_collections_decor.png" />
              <a className = "collections-shop-button">
                <h2>View</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="row cross-beam"></div>
        <div className="row">
          <div className="six columns collections collections-center-boarder">
            <h2>Chairs</h2>
            <div className="image-hover">
              <img className="collections-pic collections-three" src="images/precipice_woodshop_collections_decor.png" />
              <a className = "collections-shop-button">
                <h2>View</h2>
              </a>
            </div>
          </div>
          <div className="six columns collections">
            <h2>Benches</h2>
            <div className="image-hover">
              <img className="collections-pic collections-four" src="images/precipice_woodshop_collections_table.png" />
              <a className = "collections-shop-button">
                <h2>View</h2>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Collections;
