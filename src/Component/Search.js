import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { search, handleChange, handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-capitalize text-slanted">
              Search Recipies with{" "}
              <strong className="text-orange">food2Fork</strong>
            </h1>
            <form className="mt-5">
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  value={search}
                  className="form-control"
                  onChange={handleChange}
                  placeholder="chicken,onion,potato"
                ></input>
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
