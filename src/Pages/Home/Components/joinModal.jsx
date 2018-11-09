import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Input, Modal } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
      position: 'absolute',
      align: theme.center,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 2,
      width: '80%',
      height: '25%'
    },
    root: {
      ...theme.mixins.gutters(),
      textAlign: "right"
    },
    button: {
      margin: theme.spacing.unit
    },
    textField: {
      width: '80%',
      borderRadius: '4px',
      height: '20%',
      boxSizing: 'borderBox',
      border: '1px solid #ccc',
      margin: theme.spacing.unit
    }
});


class SimpleModal extends React.Component {
    state = {
        open: false,
        username: '',
        inviteCode: ''
    };

    handleOpen = () => { this.setState({ open: true }); };
    handleClose = () => { this.setState({ open: false }); };

    handleJoin = () => {
      const { username, inviteCode } = this.state
      this.props.handleJoin(username, inviteCode)
    }

    render() {
        const { classes } = this.props;

        return (
          <div>
            <Button
              variant="contained"
              className={classes.button}
              onClick={this.handleOpen}>Join Group</Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open} >
            <div align="center" style={getModalStyle()} className={classes.paper}>
              <Input
                className={classes.textField}
                type="text"
                placeholder="Enter Your Name"
                onChange={event => this.setState({username: event.target.value})}/>
              <Input
                className={classes.textField}
                type="text"
                placeholder="Enter Invite Code"
                onChange={event => this.setState({inviteCode: event.target.value})}/><br/>
              <Button
                className={classes.button}
                variant="contained"
                component={Link}
                onClick={this.handleJoin}
                to="/waiting">Join</Button>
              <Button
                className={classes.button}
                aria-label="Delete"
                variant="contained"
                onClick={this.handleClose}
              >Back</Button>
            </div>
            </Modal>
          </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
