import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    textAlign: "right"
  },
  button: {
    margin: theme.spacing.unit
  }
});

class SaveButton extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={this.props.handleSave}
          component={Link}
          to="/selection">
          Save
        </Button>
      </div>
    );
  }
}

SaveButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SaveButton);
