import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import Header from './components/Header';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  grow: {
    flex: 1
  }
})

class Details extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header />
        <Paper className={classes.grow}>
          <Typography variant="subtitle1">
            This page is to contain information about a specific restaurant.
          </Typography>
          <Typography variant="subtitle1">
            It will contain a picture, details, reviews, etc.
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Details);
