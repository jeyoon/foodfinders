import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Card from "./Components/Card"
import Header from "./Components/Header"
import CardPanel from "./Components/CardPanel"
import { restaurants } from "./store";

var _ = require('lodash/collection');

class Results extends Component {

  render() {
    const groups = _.groupBy(restaurants, restaurant => restaurant.category)
    _.forEach(groups, (cards, category) =>
      console.log(category)
    )

    return (
      <div>
        <Header />
        {Object.keys(groups).map(category =>
          <CardPanel key={category} category={category} cards={groups[category]} />
        )}
      </div>
    )
  }
}

export default Results;
