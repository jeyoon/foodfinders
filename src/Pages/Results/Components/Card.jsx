import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, ButtonBase } from "@material-ui/core";
import Location from '../../Selection/Assets/Location.png'
import { withRouter } from 'react-router-dom'

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

  constructor(props) {
    super(props)
  }

  sendDetails(name, address, description, category, image) {
    localStorage.setItem("detailsName", name);
    localStorage.setItem("detailsAddress", address);
    localStorage.setItem("detailsDescription", description);
    localStorage.setItem("detailsCategory", category);
    localStorage.setItem("detailsImage", image)
  }

  // onClick={this.props.history.push('/details')}
  render() {
    const { classes, cardInfo } = this.props;
    return (
      <Paper
        className={classes.root}
        onClick={
          function() {
            console.log(cardInfo)
            this.sendDetails(cardInfo.title, cardInfo.address, cardInfo.description, cardInfo.category, cardInfo.img)
            this.props.history.push('/details')
          }.bind(this)}>
        <Grid container spacing={16}>
          <Grid item xs={4} style={{ paddingTop: 35 }}>
            <ButtonBase component={Link} to="/details">
              <img className={classes.img} alt="complex" src={cardInfo.img}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={8} container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {cardInfo.title}
                </Typography>
                <Typography gutterBottom>{cardInfo.description}</Typography>
                <Typography color="textSecondary">{cardInfo.categories}</Typography>
              </Grid>
              <Grid container item>
                <Grid>
                  <img className={classes.img} alt="complex" src={Location}/>
                </Grid>
                <Grid>
                  <Typography gutterBottom>{cardInfo.address}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">{"$".repeat(cardInfo.cost)}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(Card));
