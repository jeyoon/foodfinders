import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Card from "./Components/Card"
import Header from "./Components/Header"
import CardPanel from "./Components/CardPanel"
import { restaurants } from "./store";

var _ = require('lodash/collection');

class Results extends Component {

  expandable = (category) => {
    const { classes, cards, categoryStates } = this.props;
    var shouldExpand = (categoryStates[category] === 'img_liked');
    return shouldExpand;
  }

  disableCategory = (category) => {
    const { classes, cards, categoryStates } = this.props;
    var shouldDisable = (categoryStates[category] === 'img_disliked')
    return shouldDisable;
  }

  render() {
    const groups = _.groupBy(restaurants, restaurant => restaurant.category)

    return (
      <div>
        <Header />
        {Object.keys(groups).map(category =>
          <CardPanel
            key={category}
            category={category} cards={groups[category]}
            shouldExpand={this.expandable(category)} shouldDisable={this.disableCategory(category)} />
        )}
      </div>
    )
  }
}

export default Results;
