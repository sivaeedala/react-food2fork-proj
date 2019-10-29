import React, { Component } from "react";
import { Header } from "../Component/Header";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <Header title="You are in the Wrong Page" styleClass="header-default">
        <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
          Recipies Home
        </Link>
      </Header>
    );
  }
}
