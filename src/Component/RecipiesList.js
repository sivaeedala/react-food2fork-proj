import React, { Component } from "react";
import Recipie from "./Recipie";

export default class RecipiesList extends Component {
  render() {
    const { recipies } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-capitalize mb-3">
              <h1 className="text-slanted">Recipies List</h1>
            </div>
          </div>
          <div className="row">
            {recipies.map(r => (
              <Recipie Key={r.recipe_id} recipe={r}></Recipie>
            ))}
          </div>
        </div>
      </>
    );
  }
}
