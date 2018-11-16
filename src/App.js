import React, { Component } from "react";
import Preferences from "./Pages/Preferences/Preferences";
import Selection from "./Pages/Selection/Selection";
import Results from "./Pages/Results/Results";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Waiting from "./Pages/Waiting/Waiting";
import { restaurants } from "./Pages/Results/store";
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
var _ = require('lodash');

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: [],
      dislikes: [],
      allergies: [],
      categoryStates: {},
      users: ["John", "Sherry", "Gabe", "Phillip", "Steve"],
      submitted: [false, false, false, false, false],
      currentUser: undefined,
      groupOwner: undefined,
      inviteCode: "000000",
      fakeJoin: false, // TBD
      fakeSubmit: true
    }

    if (window.location.pathname !== "/" && this.state.currentUser === undefined) {
      this.state.currentUser = 'GUEST'
      this.state.groupOwner = 'GUEST'
      this.state.users = this.state.users.concat('GUEST')
      this.state.submitted = this.state.submitted.concat(false)
    }

    const groups = _.groupBy(restaurants, restaurant => restaurant.category)
    Object.keys(groups).map(category => {
      this.state.categoryStates[category] = 'img_neutral'
    })
  }

  handlePreferenceChange = (preference, newTags)  => {
    console.log(`Updating ${preference} to ${newTags}`)
    this.setState({ [preference]: newTags })
  }

  handleSelectionChange = (selection, newStates)  => {
    var copiedCategoryStates = Object.assign({}, this.state.categoryStates)
    copiedCategoryStates[selection] = newStates;

    console.log(`Updating ${selection} to ${newStates}`)
    this.setState({categoryStates: copiedCategoryStates})
  }

  // Sets index in state.submitted corresponding to $user as true
  handlePreferenceSubmit = () => {
    console.log('Submitting preferences')
    const { users, currentUser, submitted } = this.state
    let newSubmitState = [...submitted]

    newSubmitState[users.indexOf(currentUser)] = true
    this.setState({ submitted: newSubmitState })
  }

  // Appends user and randomly generated code to state
  createSession = (user) => {
    let code = Math.random().toString(36).slice(-6).toUpperCase()

    const { users, submitted } = this.state
    this.setState({
      users: users.concat(user),
      submitted: submitted.concat(false),
      currentUser: user,
      inviteCode: code,
      groupOwner: user
    })

    console.log(`Created group for ${user} with code ${code}`)
  }

  joinSession = (user, code) => {
    const { users, submitted } = this.state
    this.setState({
      users: users.concat(user),
      submitted: submitted.concat(false),
      currentUser: user,
      inviteCode: code
    })

    console.log(`Joined ${user} to group with code ${code}`)
  }

  disableAnimation = (key) => {
    if (key === 'fakeSubmit') {
      console.log('Disabled fake submission')
      this.setState({
        submitted: this.state.submitted.fill(true),
        fakeSubmit: false
      })
    } else if (key === 'fakeJoin') {
      console.log('Disabled fake joining')
      this.setState({
        users: this.state.users.concat('Alex'),
        submitted: this.state.submitted.concat(false),
        fakeJoin: false
      })
    }
  }

  resetState = () => {
    console.log("Resetting app state")
    this.setState({
      likes: [],
      dislikes: [],
      allergies: [],
      categoryStates: {},
      users: ["John", "Sherry", "Gabe", "Phillip", "Steve"],
      submitted: [false, false, false, false, false],
      currentUser: undefined,
      groupOwner: undefined,
      inviteCode: "000000",
      fakeJoin: false, // TBD
      fakeSubmit: true
    })
  }

  render() {
    const groups = _.groupBy(restaurants, restaurant => restaurant.category)

    return (
      <Router>
        <div>
          <Route
            path="/preferences"
            render={props =>
              <Preferences
                inviteCode={this.inviteCode}
                onPreferenceChange={this.handlePreferenceChange}
                onPreferenceSubmit={this.handlePreferenceSubmit}
                preferences={_.pick(this.state, ['likes', 'dislikes', 'allergies'])}
                inviteCode={this.state.inviteCode}
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
          <Route
            path="/results" render={props =>
              <Results
                categoryStates={this.state.categoryStates}
                resetState={this.resetState}
              />}
            />
          <Route path="/details" component={Details}/>
          <Route
            path="/waiting"
            render={props =>
              <Waiting
                users={this.state.users}
                submitted={this.state.submitted}
                currentUser={this.state.currentUser}
                inviteCode={this.state.inviteCode}
                groupOwner={this.state.groupOwner}
                fakeJoin={this.state.fakeJoin}
                fakeSubmit={this.state.fakeSubmit}
                disableAnimation={this.disableAnimation}
                resetState={this.resetState}
              />}
          />
          <Route exact path="/"
            render={props =>
              <Home
                handleCreate={this.createSession}
                handleJoin={this.joinSession}
              />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
