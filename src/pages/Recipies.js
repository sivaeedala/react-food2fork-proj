import React, { Component } from "react";
import RecipiesList from "../Component/RecipiesList";
import Search from "../Component/Search";
import { recipeData } from "../data/tempList";

export default class Recipies extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    search: "",
    recipieData: recipeData
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Search>
        <RecipiesList recipies={this.state.recipieData}></RecipiesList>
      </>
    );
  }
}
