import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Button, IconButton, Grid, Paper, Input } from '@material-ui/core';
import MenuIcon from '@material-ui/core/Menu';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  input: {
    color: 'inherit',
    margin: theme.spacing.unit,
  },
});

function Navigation(props) {
  const { classes } = props;

  return (
    <AppBar position='static' color='primary'>
      <Grid container>
        <Grid item xs={12}>
          <Toolbar>
            <Typography variant='title' color='inherit' className={classes.grow}>
              Categories
            </Typography>
            <Button color="inherit">Clear</Button>
            <Button color="inherit">Search</Button>
          </Toolbar>
        </Grid>
        <Grid item xs={12}>
          <Toolbar>
            <Typography variant='subtitle2' color='inherit' className={classes.grow}>
              Displaying options available within...
            </Typography>
            <Input
              defaultValue="San Diego"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </Toolbar>
        </Grid>
      </Grid>

    </AppBar>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
