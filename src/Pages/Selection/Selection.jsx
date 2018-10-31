import React, { Component } from "react";
import CategoryGrid from "./Components/CategoryGrid";
import Navigation from "./Components/Navigation";

import { categories } from "./store";

class Selection extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <CategoryGrid categories={categories} />
      </div>
    );
  }
}

export default Selection;
