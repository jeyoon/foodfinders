import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, ButtonBase } from "@material-ui/core";
import Location from '../../Selection/Assets/Location.png'
import { withRouter } from 'react-router-dom'
import ReactStars from 'react-stars';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class Card extends Component {

  saveDetails(name, address, description, category, image) {
    const { cardInfo } = this.props;
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo))
  }

  render() {
    const { classes, cardInfo } = this.props;
    return (
      <Paper
        className={classes.root}
        onClick={
          function() {
            this.saveDetails()
            this.props.history.push('/details')
          }.bind(this)}>
        <Grid container spacing={16}>
          <Grid item xs={3}>
            <ButtonBase component={Link} to="/details">
              <img className={classes.img} alt="complex" src={cardInfo.img}/>
            </ButtonBase>
          </Grid>

          <Grid container item xs={6} style={{ padding: 0 }}>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {cardInfo.title}
                </Typography>
                <Typography gutterBottom>{cardInfo.description}</Typography>
                <Typography color="textSecondary">{cardInfo.categories}</Typography>
              </Grid>

              <Grid container item>
                <Grid item>
                  <img className={classes.img} alt="complex" src={Location}/>
                </Grid>
                <Grid item>
                  <Typography gutterBottom>{cardInfo.address}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item direction='column' alignItems='flex-end' xs={3}>
            <Grid item><Typography variant="subtitle2">{"$".repeat(cardInfo.cost)}</Typography></Grid>
            <Grid item><ReactStars count={5} size={15} value={cardInfo.rating} color2={'#ffd700'} edit={false} /></Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(Card));
