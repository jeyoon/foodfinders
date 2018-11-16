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
    const { classes, cards, categoryStates } = this.props;

    return (
      <div>
        <Header />
        {Object.keys(categoryStates).map(category =>{
          if (categoryStates[category] === 'img_liked'){
            return (
              <CardPanel
                key={category}
                category={category} cards={groups[category]}
                shouldExpand={true} />
            )
          }
        })}
        {Object.keys(categoryStates).map(category =>{
          if (categoryStates[category] === 'img_neutral'){
            return (
              <CardPanel
                key={category}
                category={category} cards={groups[category]}
                shouldExpand={false} />
            )
          }
        })}
      </div>
    )
  }
}

export default Results;
