import React, { Component } from "react";

import Header from "./Components/Header";
import PreferenceGroup from "./Components/PreferenceGroup";
import SaveButton from "./Components/SaveButton";

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.preferences
  }

  onPreferenceChange = (preference, newTags) => {
    this.setState({ [preference]: newTags })
  };

  onSave = () => {
    console.log('Saving all preferences');
    Object.entries(this.state).forEach(([key, tags]) => {
      this.props.onPreferenceChange(key, tags)
    })

    this.props.onPreferenceSubmit()
  };

  render() {
    const { likes, dislikes, allergies } = this.props.preferences;
    const { inviteCode } = this.props

    return (
      <div>
        <Header inviteCode={inviteCode} />
        <PreferenceGroup label="likes" data={likes} handleChange={this.onPreferenceChange} />
        <PreferenceGroup label="dislikes" data={dislikes} handleChange={this.onPreferenceChange} />
        <PreferenceGroup label="allergies" data={allergies} handleChange={this.onPreferenceChange} />
        <SaveButton handleSave={this.onSave}/>
      </div>
    );
  }
}

export default Preferences;
