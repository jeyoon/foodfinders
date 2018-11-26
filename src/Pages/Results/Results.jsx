import React, { Component } from "react";
import Header from "./Components/Header"
import CardPanel from "./Components/CardPanel"

var _ = require('lodash');

class Results extends Component {

  render() {
    const { categoryStates, restaurants, resetState } = this.props;
    const categories = _.groupBy(restaurants, restaurant => restaurant.category)

    return (
      <div>
        <Header resetState={resetState}/>
        {Object.keys(categoryStates).map(category =>
          categoryStates[category] === 'img_liked' && (
              <CardPanel
                key={category}
                category={category} cards={categories[category]}
                shouldExpand={true} />
          )
        )}
        {Object.keys(categoryStates).map(category =>
          categoryStates[category] === 'img_neutral' && (
              <CardPanel
                key={category}
                category={category} cards={categories[category]}
                shouldExpand={false} />
          )
        )}
      </div>
    )
  }
}

export default Results;
