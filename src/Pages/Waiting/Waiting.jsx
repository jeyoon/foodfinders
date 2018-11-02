import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Components/Header";
import List from "./Components/List";
import {Grid, Button} from "@material-ui/core"
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
       margin:5
    }
});


class Waiting extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.preferences
    }



    render() {
        return (
            <div>
                <Header name="John" inviteCode="AF53ZG" /><hr/>
                <List/>
                <hr/>
                <Grid container xs={12}>
                    <Grid  align="flexStart" item xs={6}>
                        <Button variant="contained" component={Link} to="/" >Leave</Button>
                    </Grid>
                    <Grid align="end" item xs={6}>
                        <Button variant="contained" component={Link} to="/preferences" >Start</Button>
                    </Grid>

                </Grid>

            </div>
        );
    }
}

export default withStyles(styles)(Waiting);
