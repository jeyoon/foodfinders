import React, { Component } from "react";
import CategoryGrid from "./Components/CategoryGrid";
import Header from "./Components/Header";


import { categories } from "./store";

class Selection extends Component {

  onSelectionChange = (categoryTitle, newState) => {
    this.setState({ [categoryTitle]: newState })
    this.props.onSelectionChange(categoryTitle, newState)
  };

  render() {
    return (
      <div>
        <Header />
        <CategoryGrid categories={categories} categoryStates={this.props.categoryStates} selectionHandler={this.onSelectionChange}/>
      </div>
    );
  }
}

export default Selection;
