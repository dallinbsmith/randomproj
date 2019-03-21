import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Collections from './Components/Collections';
import { Switch, Route } from "react-router-dom";
// import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
// import Portfolio from './Components/Portfolio';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: this.props.resumeData
    };

    // ReactGA.initialize('UA-110570651-1');
    // ReactGA.pageview(window.location.pathname);

  }

//   getResumeData() {
//     $.ajax({
//       url: '/resumeData.json',
//       dataType: 'json',
//       cache: false,
//       success: function (data) {
//         this.setState({ resumeData: data });
//       }.bind(this),
//       error: function (xhr, status, err) {
//         console.log(err);
//         alert(err);
//       }
//     });
//   }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="App snap-container">
        {/* <div className="snap-point"> */}
          {/* <Header data={this.state.resumeData.main} /> */}
        {/* </div>
        <div className="snap-point"> */}
          <Collections data={this.state.resumeData} />
        {/* </div> */}
        {/* <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <div className="snap-point"> */}
          <Contact data={this.state.resumeData} />
        {/* </div> */}
        {/* <div className="snap-point">
          <Footer data={this.state.resumeData.main} />
        </div> */}
      </div>
    );
  }
}

export default Home;