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
  render() {
    const { classes, categories } = this.props;

    return (
      <Grid container spacing={8} className={classes.grid} >
        {categories.map(category => (
          <Grid item key={category.title} xs>
            <CategoryTile category={category} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(CategoryGrid);
