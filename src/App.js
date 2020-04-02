import React, { Component } from 'react'
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Success from "./components/Success"


export default class App extends Component {


  componentDidMount() {
    document.title = "Matthew Guy Robinson";
  }

  render() {
    return (
      <div>
        <BrowserRouter>

          <Switch>

            <Route path="/MatthewGRobinson" component={Home} exact />

            <Route path="/Success" component={Success} />

          </Switch>

        </BrowserRouter>
      </div>
    )
  }
}