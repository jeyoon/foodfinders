import React, { Fragment } from 'react';
import { ListItem, ListItemText, Divider, Typography } from '@material-ui/core';

function Review(props) {
  const { classes } = props;
  const { name, desc } = props;

  return (
    <Fragment>
      <Divider />
      <ListItem>
        <ListItemText primary={name} secondary={desc} />
      </ListItem>
      <Divider />
    </Fragment>
  );
}

export default Review;
