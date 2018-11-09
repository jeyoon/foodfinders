import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Divider } from "@material-ui/core"
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid grey',
        minHeight: '60vh',
        flex: 1,
        overflow: 'scroll',
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
});

class UsersList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, users, status } = this.props

    return (
      <List className={classes.root} subheader={<li />}>
        {users.map((name, index) => (
          <Fragment key={index}>
            <ListItem>
              <ListItemText primary={ name } />
              {status[index] && (
                <SvgIcon>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </SvgIcon>
              )}
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    );
  }
}

UsersList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersList);
