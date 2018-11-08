import React, { Component } from "react";
import CategoryGrid from "./Components/CategoryGrid";
import Header from "./Components/Header";


import { categories } from "./store";

class Selection extends Component {

  render() {
    return (
      <div>
        <Header />
        <CategoryGrid categories={categories} categoryStates={this.props.categoryStates}/>
      </div>
    );
  }
}

export default Selection;
