import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        textAlign: "center",
        backgroundColor: "#B2EBF2",
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    }
});

function Header(props) {
  const { name, inviteCode, classes } = props;

  return (
    <Paper elevation={1} className={classes.root}>
      <Typography variant="h5">Waiting For Others to Join...</Typography>
      <Typography>Invite Code: {inviteCode}</Typography>
    </Paper>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
