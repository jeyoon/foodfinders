import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

//from http://www.javascriptkit.com/script/cut10.shtml
function passWord() {
    var pass1 = document.getElementById("code").value;

        if (!pass1) {
            window.history.go(-1);
        }
        if (pass1 === sessionStorage.getItem("userCode")) {
            window.location.assign('/waiting');
            return;
        }
        alert('Access Denied - Password Incorrect, Please Try Again.');
        return " ";
}

function toggleOff() {
    localStorage.setItem("isCreator", "false");
}

function name() {
    sessionStorage.setItem("userName", document.getElementById("name").value)
}



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
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button variant="contained" className={classes.button} onClick={this.handleOpen}>Join Group</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                >

                    <div align="center" style={getModalStyle()} className={classes.paper}>
                        <input
                            id={"name"}
                            className={classes.textField}
                            type="text"
                            placeholder="Enter Your Name"/><br/>
                        <input
                            id={"code"}
                            className={classes.textField}
                            type="text"
                            placeholder="Enter Invite Code"/><br/>
                        <Button
                            onClick={() => {passWord(); name(); toggleOff()}}
                            variant="contained"
                        >Join</Button>
                        <Button
                            className={classes.button}
                            ariaLable="Delete"
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
