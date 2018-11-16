import React, { Component } from "react";
import CategoryGrid from "./Components/CategoryGrid";
import Header from "./Components/Header";
import { categories } from "./store";
var _ = require('lodash');

class Selection extends Component {

  onSelectionChange = (categoryTitle, newState) => {
    this.setState({ [categoryTitle]: newState })
    this.props.onSelectionChange(categoryTitle, newState)
  };

  render() {
    const { categoryStates } = this.props
    let filteredCategories = _.filter(categories, category => _.has(categoryStates, category.title))

    return (
      <div>
        <Header />
        <CategoryGrid
          categories={filteredCategories}
          categoryStates={this.props.categoryStates}
          selectionHandler={this.onSelectionChange}/>
      </div>
    );
  }
}

export default Selection;
