import React, { Component } from "react";

import { Typography } from "@material-ui/core";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

class PreferenceGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { tags: [] };
    this.props = props;
  }

  handleChange = tags => {
    this.setState({ tags });
  };

  render() {
    return (
      <div style={{ padding: 10 }}>
        <Typography variant="subtitle2">{this.props.label}</Typography>
        <TagsInput value={this.state.tags} onChange={this.handleChange} />
      </div>
    );
  }
}

export default PreferenceGroup;
