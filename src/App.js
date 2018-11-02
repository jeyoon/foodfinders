import React, { Component } from "react";
import Preferences from "./Pages/Preferences/Preferences";
import Selection from "./Pages/Selection/Selection";
import Results from "./Pages/Results/Results";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";

import { BrowserRouter as Router, Route } from 'react-router-dom';

var _ = require('lodash');

class App extends Component {
  state = {
    likes: [],
    dislikes: [],
    allergies: [],
  }

  handlePreferenceChange = (preference, newTags)  => {
    console.log(`Updating ${preference} to ${newTags}`)
    this.setState({ [preference]: newTags })
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/preferences"
            render={props =>
              <Preferences
                preferences={_.pick(this.state, ['likes', 'dislikes', 'allergies'])}
                onPreferenceChange={this.handlePreferenceChange}
              />}
          />
          <Route path="/selection" component={Selection}/>
          <Route path="/results" component={Results}/>
          <Route path="/details" component={Details}/>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
