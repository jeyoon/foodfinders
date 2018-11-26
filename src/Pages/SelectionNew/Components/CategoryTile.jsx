import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbDownOutlined from '@material-ui/icons/ThumbDownOutlined';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined';

const styles = theme => ({
  tile: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
  },
  thumbUp: {
    color: 'green',
    fontSize: 30
  },
  thumbDown: {
    color: '#C70039',
    fontSize: 30
  }
});

class CategoryTile extends Component {

  constructor(props){
    super(props);

    this.state = { categoryState: props.categoryState }
    this.toggleImage = this.toggleImage.bind(this);
   }

   selectionChangeHandler = (newState) => {
     this.props.selectionChangeHandler(this.props.category.title, newState)
   };

   toggleImage = (img, event) => {
    const { categoryState } = this.state;

    if (categoryState === 'img_neutral') {
      this.setState({categoryState: img});
      this.selectionChangeHandler(img);
    } else {
      if (categoryState === 'img_liked') {
        let newState = (img === 'img_liked') ? 'img_neutral' : img
        this.setState({categoryState: newState});
        this.selectionChangeHandler(newState);
      } else if (categoryState === 'img_disliked') {
        let newState = (img === 'img_disliked') ? 'img_neutral' : img
        this.setState({categoryState: newState});
        this.selectionChangeHandler(newState);
      }
    }
  }

  render(){
    const { classes, category } = this.props
    const { categoryState } = this.state

    return (
      <Paper className={classes.tile} >
        <Grid container item direction='row' alignItems='center'>
          <Grid item xs={3}>
            <img src={category[categoryState]} alt={category.title} />
          </Grid>
          <Grid item xs={5}>
            <Typography variant='h4'>{category.title}</Typography>
          </Grid>
          <Grid container item justify='flex-end' spacing={8} xs={4}>
            <Grid item>
              {categoryState === 'img_disliked' ? (
                <ThumbDown
                  className={classes.thumbDown}
                  onClick={(e) => this.toggleImage('img_neutral', e)} />
              ) : (
                <ThumbDownOutlined
                  className={classes.thumbDown}
                  onClick={(e) => this.toggleImage('img_disliked', e)} />
              )}
            </Grid>
            <Grid item>
              {categoryState === 'img_liked' ? (
                <ThumbUp
                  className={classes.thumbUp}
                  onClick={(e) => this.toggleImage('img_neutral', e)} />
              ) : (
                <ThumbUpOutlined
                  className={classes.thumbUp}
                  onClick={(e) => this.toggleImage('img_liked', e)} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(CategoryTile);
