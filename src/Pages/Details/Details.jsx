import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import Header from './components/Header';
import { Burger, Sushi, Noodle, Steak } from '../Selection/Assets';
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

class Details extends Component {

  saveInfo() {
    var info = {};
    info.name=localStorage.getItem("detailsName");
    info.address=localStorage.getItem("detailsAddress");
    info.description=localStorage.getItem("detailsDescription");
    info.category=localStorage.getItem("detailsCategory");
    info.image=localStorage.getItem("detailsImage");
    return info;
  }

  render() {
    const { classes } = this.props;
    let info = this.saveInfo();
    console.log(info)
    return (
      <div className={classes.root}>
        <Header />
        <Grid container>
        <Paper align="center" className={classes.grow}>
          <img src={info.image} alt={"UNDEFINED"}/>

          <Typography variant="h4">
              {info.name}
          </Typography>
          <Typography variant="subtitle1">
            {info.description}
          </Typography>
        </Paper>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Details);
