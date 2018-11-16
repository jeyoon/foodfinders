import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

import Header from "./Components/Title";
import CreateModal from "./Components/createModal";
import JoinModal from "./Components/joinModal";
import {Paper,Typography, Grid} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  grow: {
    flex: 1,
    alignItems: 'center'
  },
})

class Selection extends Component {

  render() {
      const {classes, addUser, handleCreate, handleJoin} = this.props;

      return (
        <Grid container direction='column' justify='center' className={classes.root}>

          <Grid item container className={classes.grow} >

            <Paper elevation={1} align="center" style={{ width: '100%', padding: 30, height: '80%' }}>
              <Grid item container>
                <Header/>
              </Grid>
              <Grid item xs={12} align="left">
                <Typography variant="subtitle1">Welcome to FoodFinders!</Typography>
                <Typography>This app will help your group decide where
                  to eat by taking into account your group's likes, dislikes, and allergies, and
                  filtering restaurants based on culture and mealtime.</Typography><hr/>
              </Grid>
              <Grid align="center" item xs={12}>
                <img src={"forkAndspoon.jpg"} /><hr/>
              </Grid>
              <Grid container item xs={12}>
                <Grid align="center" item xs={12}>
                  <CreateModal handleCreate={handleCreate} />
                </Grid>
                <Grid align="center" item xs={12}>
                  <JoinModal handleJoin={handleJoin} />
                </Grid>
              </Grid>
              <hr />
            </Paper>
          </Grid>
        </Grid>
      );
  }
}

export default withStyles(styles)(Selection);
