/* from https://codesandbox.io/s/z41p577zp */
import React from 'react';
import PropTypes from 'prop-types'
import { Input, Modal } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

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
        padding: theme.spacing.unit *2,
        width: '80%',
        height: '15%'
    },
    root: {
        ...theme.mixins.gutters(),
        textAlign: "right"
    },
    button: {
        margin: theme.spacing.unit
    },
    input: {
        margin: theme.spacing.unit,
    },
    textField: {
        width: '80%',
        borderRadius: '4px',
        height: '100%',
        boxSizing: 'borderBox',
        border: '1px solid #ccc',
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    form: {
        height: '35%'
    }
});


class SimpleModal extends React.Component {
    state = {
        open: false,
        value: ''
    };

    handleOpen = () => { this.setState({ open: true }) };
    handleClose = () => { this.setState({ open: false }) };

    handleCreate = () => {
      this.props.handleCreate(this.state.value)
      this.props.history.push('/waiting')
    }

    render() {
        const { classes } = this.props;

        return (
          <div>
              <div>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={this.handleOpen}>Create Group</Button>
              </div>
              <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.open}>
                  <div align="center" style={getModalStyle()} className={classes.paper}>
                      <form className={classes.form} onSubmit={this.handleCreate}>
                        <Input className={classes.textField}
                         type="text"
                         placeholder="Enter Your Name"
                         onChange={event => this.setState({value: event.target.value})}/>
                      </form>
                      <Button
                        className={classes.button}
                        variant="contained"
                        component={Link}
                        onClick={this.handleCreate}
                        to="/waiting">Create</Button>
                      <Button
                        className={classes.button}
                        aria-label="Delete"
                        variant="contained"
                        onClick={this.handleClose}>Back</Button>
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
