import React, { Component } from 'react'
// import Header from "./components/Header";
// import Quote from "./components/Quote";
// import Currentwork from "./components/Currentwork";
// import Journey from './components/Journey';
// import Recent from './components/Recent';
// import Skills from './components/Skills';
import Home from "./components/Home";
import Links from "./components/Links";
import {BrowserRouter, Switch, Route} from 'react-router-dom';


export default class App extends Component {


  render() {
    return (
      <div>
      {/* <Home/> */}
      <BrowserRouter>
              <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/links" component={Links}/>
              </Switch>
          </BrowserRouter>
      </div>
    )
  }
}