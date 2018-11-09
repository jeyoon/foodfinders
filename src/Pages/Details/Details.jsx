import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import Header from './components/Header';
import { Burger, Sushi } from '../Home/Assets';
import {Grid} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  grow: {
    flex: 1
  }
});

function saveInfo() {
  var info = {};
  info.name=localStorage.getItem("detailsName");
  info.description=localStorage.getItem("detailsDescription");
  info.address=localStorage.getItem("detailsAddress");
  info.category=localStorage.getItem("detailsCategory");
  return info;
}

function chooseImg(info) {

  if(info.category==="Japanese") {

  }
}

class Details extends Component {
  render() {
    const { classes } = this.props;
    let info =saveInfo();
    return (
      <div className={classes.root}>
        <Header />
        <Grid container>
        <Paper align="center" className={classes.grow}>
          <img src={Burger} alt={"no picture 4u"}/>

          <Typography variant="h1">
              {info.name}
          </Typography>
          <Typography variant="subtitle1">
            It will contain a picture, details, reviews, etc.
          </Typography>
        </Paper>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Details);
