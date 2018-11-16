import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Input, Modal, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Link, withRouter } from 'react-router-dom';

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
    },
    root: {
      ...theme.mixins.gutters(),
      textAlign: "right"
    },
    mainButton: {
      margin: theme.spacing.unit,
      width: 150
    },
    modalButton: {
      margin: theme.spacing.unit,
    },
    textField: {
      width: '80%',
      borderRadius: '4px',
      height: '20%',
      boxSizing: 'borderBox',
      border: '1px solid #ccc',
      margin: theme.spacing.unit,
      paddingLeft: '10px',
      paddingRight: '10px'
    }
});


class SimpleModal extends React.Component {
    state = {
        open: false,
        errorMessage: false,
        username: '',
        inviteCode: ''
    };

    handleOpen = () => { this.setState({ open: true }); };
    handleClose = () => { this.setState({ open: false }); };

    handleJoin = (event) => {
      const { username, inviteCode } = this.state

      let message = ''
      if (!username.trim() || !inviteCode.trim()) {
        message = 'Inputs cannot be an empty string.'
      } else if (inviteCode.trim().length != 6) {
        message = 'Invite code must be at least 6 characters.'
      }

      if (message) {
        this.setState({ errorMessage: message })
        event.preventDefault()
      } else {
        this.props.handleJoin(username, inviteCode)
        this.props.history.push('/waiting')
      }
    }

    render() {
        const { classes } = this.props;

        return (
          <div>
            <Button
              variant="contained"
              className={classes.mainButton}
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
                 value={this.state.username}
                onChange={event => this.setState({username: event.target.value})}/>
              <Input
                className={classes.textField}
                type="text"
                placeholder="Enter Invite Code"
                value={this.state.inviteCode}
                onChange={event => this.setState({inviteCode: event.target.value})}/><br/>
              { this.state.errorMessage && (
                <Typography variant="subtitle1" style={{ marginTop: 15, color: '#f50000' }}>
                  { this.state.errorMessage }
                </Typography>
              )}
              <Button
                className={classes.modalButton}
                variant="contained"
                component={Link}
                onClick={this.handleJoin}
                to="/waiting">Join</Button>
              <Button
                className={classes.modalButton}
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
const SimpleModalWrapped = withStyles(styles)(withRouter(SimpleModal));

export default SimpleModalWrapped;
