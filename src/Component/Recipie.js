import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipie extends Component {
  render() {
    const {
      publisher,
      source_url,
      image_url,
      title,
      recipe_id
    } = this.props.recipe;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image_url}
            style={{ height: "14rem" }}
            className="img-card-top"
            alt="recipeImage"
          ></img>
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">
              Provided By {publisher}
            </h6>
          </div>
          <div className="card-footer">
            <Link
              to={`/recipies/${recipe_id}`}
              className="btn btn-primary text-capitalize"
            >
              Details
            </Link>
            <a
              href={source_url}
              target="_blank"
              className="btn btn-success mx-2"
              rel="noopener noreferrer"
            >
              Recipie Url
            </a>
          </div>
        </div>
      </div>
    );
  }
}
