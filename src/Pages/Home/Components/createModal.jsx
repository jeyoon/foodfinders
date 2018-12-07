/* from https://codesandbox.io/s/z41p577zp */
import React from 'react';
import PropTypes from 'prop-types'
import { Input, Modal, Button, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
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
        padding: theme.spacing.unit *2,
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
        error: false,
        value: ''
    };

    handleOpen = () => { this.setState({ open: true }) };
    handleClose = () => { this.setState({ open: false }) };

    handleCreate = (event) => {
      const { value } = this.state
      if (value.trim()) {
        this.props.handleCreate(this.state.value);
        this.props.history.push('/waiting')
      } else {
        event.preventDefault()
        this.setState({ error: true })
      }
    };

    render() {
        const { classes } = this.props;

        return (
          <div>
              <div>
                <Button
                  variant="contained"
                  className={classes.mainButton}
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
                         value={this.state.value}
                         onChange={event => this.setState({value: event.target.value})}/>
                      </form>
                      { this.state.error && (
                        <Typography variant="subtitle1" style={{ marginTop: 15, color: '#f50000' }}>
                          Your name cannot be an empty string.
                        </Typography>
                      )}
                      <Button
                        className={classes.modalButton}
                        aria-label="Delete"
                        variant="contained"
                        onClick={this.handleClose}>Back</Button>
                      <Button
                        className={classes.modalButton}
                        variant="contained"
                        component={Link}
                        onClick={this.handleCreate}
                        to="/waiting">Create</Button>
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
