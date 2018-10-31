import React, { Component } from "react";
import CategoryGrid from "./Components/CategoryGrid";
import Navigation from "./Components/Navigation";

import { categories } from "./store";

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = { categories };
  }

  render() {
    return (
      <div>
        <Navigation />
        <CategoryGrid categories={this.state.categories} />
      </div>
    );
  }
}

export default Selection;
