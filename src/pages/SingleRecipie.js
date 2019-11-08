import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

export default class SingleRecipie extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: {},
      id,
      loading: true
    };
  }

  // Life Cycle Method
  async componentDidMount() {
    console.log(process.env.REACT_APP_API_KEY);
    var url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;
    var response = await fetch(url).then();
    console.log(response);
    var responseData = await response.json();
    console.log(responseData);
    this.setState({
      recipe: responseData.recipe,
      loading: false
    });
  }

  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.state.recipe;

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-orange text-center text-capitalize">
                Loading Please Wait...
              </h2>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <Link
                to="/recipies"
                className="btn btn-warning mb-5 text-capitalize"
              >
                Back to RecipiesList
              </Link>
              <img
                src={image_url}
                className="d-block w-100"
                style={{ maxHeight: "30rem" }}
                alt="RecipeImage"
              ></img>
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                Provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                className="btn btn-primary text-capitalize mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                publisher Web
              </a>
              <a
                href={source_url}
                className="btn btn-success text-capitalize mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipie Url
              </a>
              <ul className="list-group mt-2 mb-2">
                <h3 className="text-capitalize mt-2 mb-2">ingredients</h3>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
