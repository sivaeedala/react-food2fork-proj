import React, { Component } from "react";
import RecipiesList from "../Component/RecipiesList";
import Search from "../Component/Search";
import { recipeData } from "../data/tempList";

export default class Recipies extends Component {
  constructor(props) {
    super(props);
    this.getRecipies = this.getRecipies.bind(this);
  }
  state = {
    search: "",
    url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
    baseUrl: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
    query: "&q=",
    error: "",
    recipies: recipeData
  };

  async getRecipies() {
    console.log(this.state.url);
    const response = await fetch(this.state.url);

    const jsonData = await response.json();
    if (jsonData.recipes.length == 0) {
      this.setState({
        error: "No Search items Found"
      });
    } else {
      this.setState({
        recipies: jsonData.recipes,
        error: ""
      });
    }
  }
  async componentDidMount() {
    await this.getRecipies();
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { baseUrl, query, search } = this.state;
    this.setState(
      {
        url: `${baseUrl}${query}${search}`
      },
      () => this.getRecipies()
    );
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Search>

        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-center text-orange">{this.state.error}</h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipiesList recipies={this.state.recipies}></RecipiesList>
        )}
      </>
    );
  }
}
