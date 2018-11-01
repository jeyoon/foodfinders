import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, ButtonBase } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function Card(props) {
  const { classes, cardInfo } = props;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={5}>
          <ButtonBase component={Link} to="/details" className={classes.image}>
            <img className={classes.img} alt="complex" src={cardInfo.img}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={7} container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {cardInfo.title}
              </Typography>
              <Typography gutterBottom>{cardInfo.description}</Typography>
              <Typography color="textSecondary">{cardInfo.categories}</Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom>{cardInfo.address}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">{"$".repeat(cardInfo.cost)}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Card);
