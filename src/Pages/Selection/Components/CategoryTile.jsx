import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';

const styles = theme => ({
  tile: {
    ...theme.mixins.gutters(),
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

function CategoryTile(props) {
  const { classes, category } = props;

  return (
    <Paper className={classes.tile}>
      <img src={category.img} />
      <Typography>{category.title}</Typography>
    </Paper>
  );
}

export default withStyles(styles)(CategoryTile);
