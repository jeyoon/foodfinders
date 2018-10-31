import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CategoryGrid from './Components/CategoryGrid';
import Navigation from './Components/Navigation';

import { categories } from './store'

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories }
  }

  render() {
    return (
      <div>
        <Navigation />
        <CategoryGrid categories={this.state.categories}/>
      </div>
    )
  }
}

export default Selection;
