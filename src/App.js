import React, { Component } from "react";
import Preferences from "./Pages/Preferences/Preferences";
import Selection from "./Pages/Selection/Selection";
import Results from "./Pages/Results/Results";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Waiting from "./Pages/Waiting/Waiting";

import { BrowserRouter as Router, Route } from 'react-router-dom';

var _ = require('lodash');

class App extends Component {
  state = {
    likes: [],
    dislikes: [],
    allergies: [],
    categoryStates: {'American': 'img_liked'}
  }

  handlePreferenceChange = (preference, newTags)  => {
    console.log(`Updating ${preference} to ${newTags}`)
    this.setState({ [preference]: newTags })
  }

  handleSelectionChange = (selection, newTags)  => {
    console.log(`Updating ${selection} to ${newTags}`)
    this.setState({ [selection]: newTags })
  }

  // https://stackoverflow.com/questions/7113865/how-to-copy-clone-a-hash-object-in-jquery

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
          <Route
            path="/selection"
            render={props =>
              <Selection
                categoryStates={this.state.categoryStates}
                onSelectionChange={this.handleSelectionChange}
              />}
            />
          <Route path="/results" component={Results}/>
          <Route path="/details" component={Details}/>
          <Route path="/waiting" component={Waiting}/>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
