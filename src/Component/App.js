import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from './Home'
import News from './News'
import Page from './Article/ArticleA'
export class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/page" component={Page} />
        </Switch>
      </>
    );
  }
}

export default App;
