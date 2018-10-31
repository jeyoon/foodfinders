import React, { Fragment, Component } from "react";

import Header from "./Components/Header";
import PreferenceGroup from "./Components/PreferenceGroup";
import SaveButton from "./Components/SaveButton";

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div>
          <Header name="John" inviteCode="AF53ZG" />
        </div>
        <div>
          <PreferenceGroup label="Likes" />
          <PreferenceGroup label="Dislikes" />
          <PreferenceGroup label="Allergies" />
        </div>
        <div>
          <SaveButton />
        </div>
      </div>
    );
  }
}

export default Preferences;
