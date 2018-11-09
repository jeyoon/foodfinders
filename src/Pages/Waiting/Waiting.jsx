import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Components/Header";
import UsersList from "./Components/UsersList";
import { Grid, Button } from "@material-ui/core"
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
});
function toggleButton() {
    document.addEventListener("DOMContentLoaded", function toggle() {

        if (localStorage.getItem("isCreator").value !== "true") {
            document.getElementById("submit").style.visibility = "hidden";
            alert("this ran");
        }

    });
}

class Waiting extends Component {

  render() {
    const { classes, users, submitted, currentUser, inviteCode, groupOwner } = this.props
    let hasSubmitted = submitted[users.indexOf(currentUser)]

    // TODO combine users & 'submitted' as dictionary
    return (
      <div className={classes.root} >
        <Header
          currentUser={currentUser}
          inviteCode={inviteCode}
          hasSubmitted={hasSubmitted}
          isOwner={currentUser === groupOwner} /><hr/>

        <UsersList
          onSubmit={this.handleSubmit}
          users={users}
          status={submitted} /><hr/>
          {console.log(submitted)}
        <Grid container spacing={16} direction='column'>
            <Grid container item alignItems='center' xs={12}>
              <Grid item style={{textAlign: "center"}} xs={6}>
                  <Button variant="contained" component={Link} to="/" >Leave</Button>
                  </Grid>
              <Grid item style={{textAlign: "center"}} xs={6}>
                  <Button variant="contained" component={Link} to="/preferences" >{
                    !hasSubmitted ? "START" : "EDIT"
                  }</Button>
              </Grid>
            </Grid>
            {(currentUser === groupOwner) && (
              <Grid container item justify="center" xs={12}>
                <Grid item xs={6}>
                  <Button variant="contained" component={Link} to="/results" fullWidth >Submit</Button>
                </Grid>
              </Grid>
            )}
        </Grid>

      </div>
    );
  }
}

export default withStyles(styles)(Waiting);
