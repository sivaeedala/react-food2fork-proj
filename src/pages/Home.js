import React, { Component } from "react";
import { Header } from "../Component/Header";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Header title="Amazing receipies">
        <Link
          to="/recipies"
          className="text-uppercase btn btn-secondary btn-lg mt-3"
        >
          Search Recipies
        </Link>
      </Header>
    );
  }
}
