import React, { Component } from 'react'
import Header from "./Header";
import Quote from "./Quote";
import Currentwork from "./Currentwork";
import Journey from './Journey';
import Recent from './Recent';
import Skills from './Skills';
import Navbar from "./Navbar";


export default class App extends Component {


    render() {
      return (
        <div>
          <Header />
          <br></br>
          {/* <Navbar /> */}
          <br></br>
          {/* <Quote /> */}
          {/* <div className="half"> */}
          <div>
          {/* <Currentwork /> */}
            <br></br>
            {/* <Recent /> */}
            <br></br>
            {/* <Journey /> */}
            <br></br>
          </div>
          {/* <Skills /> */}
        </div>
      )
    }
  }