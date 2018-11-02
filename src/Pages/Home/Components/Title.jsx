import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Button, Grid, Input } from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundColor: "#B2EBF2"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  input: {
    margin: theme.spacing.unit,
    width: 100,
  },
});

function Title(props) {
  const { classes } = props;

  return (
    <AppBar position='static' className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Toolbar align="Center">
            <Typography variant='title' className={classes.grow}>
              FoodFinders
            </Typography>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default withStyles(styles)(Title);
