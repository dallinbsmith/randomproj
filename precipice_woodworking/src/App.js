import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Header from './Components/Header';
import Footer from './Components/Footer';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Collections from './Components/Collections';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import Projects from "./views/projects/Projects";
// import Resume from "./views/resume/Resume";
// import Contact from "./views/contact/Contact"
// import Footer from "./views/footer/Footer"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }
    render (){
      return(
        <div>
            <Header data={this.state.resumeData.main} />
            <Switch>
                <Route exact path="/" resumeData={this.state.resumeData} component={Home}/>
                <Resume path="/resume"/>
            </Switch>
            <Footer data={this.state.resumeData.main} />
        </div>
    )
}
}

export default App
