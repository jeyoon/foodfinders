import React, { Component } from "react";
import Header from "./Components/Header"
import CardPanel from "./Components/CardPanel"
import restaurants from './store.jsx'

var _ = require('lodash');

class Results extends Component {

  render() {
    const { categoryStates, restaurants, resetState } = this.props;
    const categories = _.groupBy(restaurants, restaurant => restaurant.category)
    console.log(categoryStates)

    return (
      <div>
        <Header resetState={resetState}/>
        {Object.keys(categoryStates).forEach(category =>{
          if (categoryStates[category] === 'img_liked'){
            return (
              <CardPanel
                key={category}
                category={category} cards={categories[category]}
                shouldExpand={true} />
            )
          }
        })}
        {Object.keys(categoryStates).forEach(category =>{
          if (categoryStates[category] === 'img_neutral'){
            console.log('render a cp')
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
