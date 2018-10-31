import React, { Component } from "react";

import { Typography } from "@material-ui/core";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

var string = require('lodash/string');

class PreferenceGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { tags: this.props.data }
  }

  handleChange = tags => {
    this.setState({ tags });
    this.props.handleChange(this.props.label, tags)
  };

  render() {
    const { tags } = this.state
    const { label } = this.props

    return (
      <div style={{ padding: 10 }}>
        <Typography variant="subtitle2">{string.capitalize(label)}</Typography>
        <TagsInput value={tags} onChange={this.handleChange} />
      </div>
    );
  }
}

export default PreferenceGroup;
