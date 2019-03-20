import React, { Component } from 'react';

class Collections extends Component {
  render() {

    if (this.props.data) {
      // var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var collections_1 = "images/" + this.props.data.collections_1;
      var collections_2 = "images/" + this.props.data.collections_2;
      // var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone = this.props.data.phone;
      // var email = this.props.data.email;
      // var resumeDownload = this.props.data.resumedownload;
    }

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
              <img className="collections-pic collections-one" src={collections_1} />
              <a className = "collections-shop-button">
                <h2>Shop</h2>
              </a>
            </div>
          </div>
          <div className="six columns collections">
            <h2>Decor</h2>
            <div className="image-hover">
              <img className="collections-pic collections-two" src={collections_2} />
              <a className = "collections-shop-button">
                <h2>Shop</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="row cross-beam"></div>
        <div className="row">
          <div className="six columns collections collections-center-boarder">
            <h2>Chairs</h2>
            <div className="image-hover">
              <img className="collections-pic collections-three" src={collections_2} />
              <a className = "collections-shop-button">
                <h2>Shop</h2>
              </a>
            </div>
          </div>
          <div className="six columns collections">
            <h2>Benches</h2>
            <div className="image-hover">
              <img className="collections-pic collections-four" src={collections_1} />
              <a className = "collections-shop-button">
                <h2>Shop</h2>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Collections;


{/* <section id="about">
<div className="row">
  <h1>The Collection</h1>
</div>
<div className="row">
  <div className="three columns">
    <img className="profile-pic" src={profilepic} />
  </div>
  <div className="three columns main-col">
    <h2>About Me</h2>
    <p>{bio}</p>
    <div className="row">
      <div className="columns contact-details">
        <h2>Contact Details</h2>
        <p className="address">
          <span>{name}</span><br />
          <span>{street}<br />
            {city} {state}, {zip}
          </span><br />
          <span>{phone}</span><br />
          <span>{email}</span>
        </p>
      </div>
      <div className="columns download">
        <p>
          <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
        </p>
      </div>
    </div>
  </div>
</div>

</section> */}
