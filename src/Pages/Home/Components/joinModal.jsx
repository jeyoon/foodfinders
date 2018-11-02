/* from https://codesandbox.io/s/z41p577zp */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';




const styles = theme => ({
    paper: {
        align: theme.center,
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },

      root: {
            ...theme.mixins.gutters(),
            textAlign: "right"
        },
        button: {
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
                    <div  className={classes.paper}>

                        <input type="text" placeholder="Enter Your Name"/><br/>
                        <input type="text" placeholder="Enter Invite COde"/><br/>
                        <Button>Join</Button>
                        <IconButton onClick={this.handleClose} className={classes.button} aria-label="Delete">
                            <Icon>highlight_off</Icon>
                        </IconButton>
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