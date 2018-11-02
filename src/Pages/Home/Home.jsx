
import React, { Component } from "react";

import Header from "./Components/Title";
import CreateModal from "./Components/createModal";
import JoinModal from "./Components/joinModal.jsx";
import {Paper, Grid} from '@material-ui/core';


class Selection extends Component {

    render() {

        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>
                    <Grid item xs={12}>
                        <CreateModal/>
                    </Grid>
                    <Grid item xs={12}>
                        <JoinModal/>
                    </Grid>

                </Grid>

            </div>
        );
    }
}

export default Selection;
