import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Components/Header";
import List from "./Components/List";
import {Grid, Button} from "@material-ui/core"
import {Link} from "react-router-dom";

const styles = theme => ({
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
    constructor(props) {
        super(props);
        this.state = this.props.preferences
    }

    render() {
        toggleButton();

        return (
            <div>
                <Header
                    name={sessionStorage.getItem("userName")}
                    inviteCode={sessionStorage.getItem("userCode")} /><hr/>
                <List/>
                <hr/>
                <Grid container direction='column'>
                    <Grid container item>
                      <Grid align="flexStart" item xs={6}>
                          <Button
                              style={{ marginLeft: 50 }}
                              variant="contained"
                              component={Link} to="/">Leave</Button>
                      </Grid>
                      <Grid align="end" item xs={6}>
                          <Button
                              style={{ marginRight: 50 }}
                              variant="contained"
                              component={Link}
                              to="/preferences" >Start</Button>
                      </Grid>
                    </Grid>
                    <Grid container item alignItems="center" justify="center">
                      <Button id="submit"
                              variant="contained"
                              component={Link}
                              to="/selection">Submit</Button>
                    </Grid>
                </Grid>
            </div>

        );

    }
}

export default withStyles(styles)(Waiting);
