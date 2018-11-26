import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, List } from '@material-ui/core';

import ReactStars from 'react-stars';
import Header from './Components/Header';
import Review from './Components/Review';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '95vh'
  },
  grow: {
    flex: 1,
    marginTop: 10
  }
});

class Details extends Component {

  render() {
    const { classes } = this.props;
    let info = JSON.parse(localStorage.getItem("cardInfo"));

    return (
      <div className={classes.root}>
        <Header />
        <Paper className={classes.grow}>
          <Grid container direction='column'>
            <Grid container item justify='center'>
              <Paper align="center" style={{ width: '100%', margin: 10, height: 100 }}>
                <Grid item>
                  <img src={info.img} alt={info.title} />
                </Grid>
              </Paper>
            </Grid>

            <Grid container item style={{ padding: 5 }}>
              <Grid container item>
                <Grid item xs={8}>
                  <Typography variant="h4">{info.title}</Typography>
                  <Typography variant="subtitle1">{info.description}</Typography>
                </Grid>
                <Grid container item direction='column' alignItems='flex-end' xs={4}>
                  <Grid item><Typography variant="subtitle1">{"$".repeat(info.cost)}</Typography></Grid>
                  <Grid item><ReactStars count={5} size={20} value={info.rating} color2={'#ffd700'} edit={false} /></Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid>
              <Typography variant="h5" style={{ padding: 5, marginTop: 20 }}>Menu</Typography>
              <List>
                { Object.entries(info.items).map(([name, desc]) => (
                  <Review key={name} name={name} desc={desc} />
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Details);
