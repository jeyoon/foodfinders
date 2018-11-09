import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import CategoryTile from './CategoryTile';

const styles = theme => ({
  grid: {
    padding: 10
  }
});

class CategoryGrid extends Component {

  selectionHandler = (categoryTitle, newState) => {
    this.props.selectionHandler(categoryTitle, newState)
  };

  assignCategory = (category) => {
    const { categoryStates } = this.props

    if (category.title in categoryStates){
      return (
        <Grid item key={category.title} xs={6}>
          <CategoryTile category={category} categoryState={categoryStates[category.title]} selectionChangeHandler={this.selectionHandler}/>
        </Grid>
      )
    } else {
      return (
        <Grid item key={category.title} xs={6}>
          <CategoryTile category={category} categoryState={'img_neutral'} selectionChangeHandler={this.selectionHandler}/>
        </Grid>
      )
    }
  }

  render() {
    const { classes, categories, categoryStates } = this.props;

    return (
      <Grid container spacing={8} className={classes.grid} >
        { categories.map(category => this.assignCategory(category)) }
      </Grid>
    );
  }
}

export default withStyles(styles)(CategoryGrid);
