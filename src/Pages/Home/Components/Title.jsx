import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundColor: "#D9A18C",
    marginBottom: 30
  },
  grow: {
    flexGrow: 1
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
            <Typography variant='h6' className={classes.grow}>
              FoodFinders
            </Typography>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default withStyles(styles)(Title);
