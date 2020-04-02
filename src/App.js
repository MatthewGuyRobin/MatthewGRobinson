import React, { Component } from 'react'
import Home from "./components/Home";
import Links from "./components/Links";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class App extends Component {



  componentDidMount() {
    document.title = "Matthew Guy Robinson";
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/links" component={Links} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}