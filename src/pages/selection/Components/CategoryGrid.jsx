import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper, Typography } from '@material-ui/core';
import CategoryTile from './CategoryTile';

const styles = theme => ({
  grid: {
    padding: 10
  }
});

class CategoryGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'categories': props.categories };
    this.props = props;
  }

  render() {
    const { classes, categories } = this.props;

    return (
      <Grid container spacing={8} className={classes.grid} >
        {this.state.categories.map(category => (
          <Grid item key={category.title} xs>
            <CategoryTile category={category} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(CategoryGrid);
