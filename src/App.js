import React, { Component } from 'react'

import Header from "./components/Header";
import Quote from "./components/Quote";
import Currentwork from "./components/Currentwork";
import Journey from './components/Journey';
import Recent from './components/Recent';
import Skills from './components/Skills';
// import Links from './components/Links'

export default class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <br></br>
        <Quote />
        <br></br>
        <div className="half">
          <Recent />
          <br></br>
          <Journey />
          <br></br>
          <Currentwork />
        </div>
        <Skills />
        {/* <Links /> */}
      </div>
    )
  }
}