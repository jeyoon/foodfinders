import React, { Component } from "react";
import Preferences from "./Pages/Preferences/Preferences";
import Selection from "./Pages/Selection/Selection";
import Results from "./Pages/Results/Results";

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
        </div>
      </Router>
    );
  }
}

export default App;
