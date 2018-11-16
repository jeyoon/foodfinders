import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Button, Grid, Input } from '@material-ui/core';
import HomeConfirm from './homeConfirm.jsx';

const styles = theme => ({
  root: {
    backgroundColor: "#D9A18C"
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

function Header(props) {
  const { classes } = props;

  return (
    <AppBar position='static' className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Toolbar>
            <Typography variant='h6' className={classes.grow}>
              Details
            </Typography>
            <Button component={Link} to="/results">Back</Button>
            <HomeConfirm/>

          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
