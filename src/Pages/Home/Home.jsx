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
    Height: '100%'
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
        <div>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid container className={classes.root}>
            <Grid item xs={12} >
              <Typography><br/><br/>Welcome to FoodFinders! This app will help your group decide where
                to eat by taking into account your group's likes, dislikes, and allergies, and
                filtering restaurants based on culture and mealtime.</Typography><hr/>
              </Grid>
              <Grid align="center" item xs={12}>
                  <img src={"forkAndspoon.jpg"} alt={"no pictrure 4 u"}/><hr/>
              </Grid>
              <Grid className={classes.root} container item xs={12}>
                  <Paper  elevation={1}>
                  <Grid align="center" item xs={12}>
                      <CreateModal handleCreate={handleCreate} />
                  </Grid>
                  <Grid align="center" item xs={12}>
                      <JoinModal handleJoin={handleJoin} />
                  </Grid>
                  </Paper>
              </Grid>
          </Grid>
        </div>
      );
  }
}

export default withStyles(styles)(Selection);
