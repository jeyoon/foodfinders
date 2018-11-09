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

class Waiting extends Component {

  constructor(props) {
    super(props)
    const { currentUser, users, fakeJoin, fakeSubmit, disableAnimation, submitted } = this.props
    this.state = { submitted: submitted }

    if (fakeSubmit) {
      let fakeUsers = submitted.filter((hasSubmitted, index) => users[index] !== currentUser)
      this.usersAdded = 0

      submitted.forEach((hasSubmitted, index) => {
        // new Promise(resolve => setTimeout(() => resolve(user), 3000))
        if (users[index] === currentUser) return
        new Promise(resolve =>
          setTimeout(
            function() {
              let newSubmitted = [...this.state.submitted]
              newSubmitted[index] = true
              this.setState({ submitted: newSubmitted })
              resolve()
            }.bind(this), (Math.random() * 1500) + 2000
          )
        ).then(() => {
          if (++this.usersAdded === fakeUsers.length) {
            disableAnimation('fakeSubmit')
          }
        })
      })
    }
  }

  render() {
    const { classes, users, currentUser, inviteCode, groupOwner } = this.props
    const { submitted } = this.state
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

        <Grid container spacing={16} direction='column'>
            <Grid container item alignItems='center' xs={12}>
              <Grid item style={{textAlign: "center"}} xs={6}>
                <Button style={{width:90}} variant="contained" component={Link} to="/" >Leave</Button>
              </Grid>
              <Grid item style={{textAlign: "center"}} xs={6}>
                <Button style={{width:90}} variant="contained" component={Link} to="/preferences" >{
                  !hasSubmitted ? "START" : "EDIT"
                }</Button>
              </Grid>
            </Grid>

            {(currentUser === groupOwner) && (
              <Grid container item justify="center" xs={12}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/selection"
                    fullWidth
                    disabled={!submitted.every(Boolean)} >Submit</Button>
                </Grid>
              </Grid>
            )}
        </Grid>

      </div>
    );
  }
}

export default withStyles(styles)(Waiting);
