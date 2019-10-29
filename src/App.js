import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipies from "./pages/Recipies";
import SingleRecipie from "./pages/SingleRecipie";
import Default from "./pages/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipies" exact component={Recipies}></Route>
            <Route path="/recipies/:id" component={SingleRecipie}></Route>
            <Route component={Default}></Route>
          </Switch>
        </main>
      </Router>

      // {/* <Home></Home>
      // <Recipies></Recipies>
      // <SingleRecipie></SingleRecipie>
      // <Default></Default> */}
    );
  }
}
