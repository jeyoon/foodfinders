import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Card from "./Components/Card"
import Header from "./Components/Header"
import CardPanel from "./Components/CardPanel"
import { restaurants } from "./store";

var _ = require('lodash');

class Results extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { categoryStates, restaurants, resetState } = this.props;
    const categories = _.groupBy(restaurants, restaurant => restaurant.category)

    return (
      <div>
        <Header resetState={resetState}/>
        {Object.keys(categoryStates).map(category =>{
          if (categoryStates[category] === 'img_liked'){
            return (
              <CardPanel
                key={category}
                category={category} cards={categories[category]}
                shouldExpand={true} />
            )
          }
        })}
        {Object.keys(categoryStates).map(category =>{
          if (categoryStates[category] === 'img_neutral'){
            return (
              <CardPanel
                key={category}
                category={category} cards={categories[category]}
                shouldExpand={false} />
            )
          }
        })}
      </div>
    )
  }
}

export default Results;
