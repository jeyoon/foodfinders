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

function Header(props) {
  const { classes } = props;

  return (
    <AppBar position='static' className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Toolbar>
            <Typography variant='title' className={classes.grow}>
              Categories
            </Typography>
            <Button component={Link} to="/preferences">Back</Button>
            <Button component={Link} to="/results">Search</Button>
          </Toolbar>
        </Grid>
        <Grid item xs={12}>
          <Toolbar>
            <Typography variant='subtitle2' className={classes.grow}>
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

export default withStyles(styles)(Header);
