import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        textAlign: "center",
        backgroundColor: "#D9A18C",
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    }
});

function Header(props) {
  const { inviteCode, classes } = props;

  return (
    <Paper elevation={1} className={classes.root}>
      <Typography variant="h5">Please enter your preferences</Typography>
      <Typography variant="subtitle1" gutterBottom>Which foods do you like or dislike?</Typography>
      <Typography>Invite Code: {inviteCode}</Typography>
    </Paper>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
