import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';


const styles = theme => ({
  tile: {
    ...theme.mixins.gutters(),
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

class CategoryTile extends Component {

  constructor(props){
    super(props);
    const { category, categoryState, selectionHandler } = this.props;

    // this.state = this.state.selections;
    this.state = { categoryState: categoryState }

    this.toggleImage = this.toggleImage.bind(this);
   }

   selectionChangeHandler = (newState) => {
     this.props.selectionChangeHandler(this.props.category.title, newState)
   };

   toggleImage = () => {
    const { category } = this.props;
    const { categoryState } = this.state;
    var newState;

    if (categoryState === 'img_neutral'){
      this.setState({categoryState: 'img_liked'});
      newState = 'img_liked'
    } else if (categoryState === 'img_liked'){
      this.setState({categoryState: 'img_disliked'});
      newState = 'img_disliked'
    } else if (categoryState === 'img_disliked'){
      this.setState({categoryState: 'img_neutral'});
      newState = 'img_neutral'
    }

    this.selectionChangeHandler(newState);
  }

  render(){
    const { classes, category } = this.props
    const { categoryState } = this.state

    return (
      <Paper className={classes.tile} onClick={this.toggleImage} >
        <img src={category[categoryState]} alt={category.title} />
        <Typography>{category.title}</Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(CategoryTile);
