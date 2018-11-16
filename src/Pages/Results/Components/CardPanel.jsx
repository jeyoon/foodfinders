import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from "./Card"
import { restaurants } from "../store";

var _ = require('lodash/collection');

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  panel: {
    marginTop: 5,
    marginBottom: 5,
  }
});

class CardPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shouldExpand: this.props.shouldExpand
    }
  }

  render() {
    const { classes, category, cards, shouldDisable } = this.props
    const { shouldExpand } = this.state
    const preferred = this.props.shouldExpand

    return (
      <div className={classes.root}>
        {(shouldDisable != true) && (
          <ExpansionPanel
            className={classes.panel}
            expanded={shouldExpand}
            onChange={() => this.setState({ shouldExpand: !this.state.shouldExpand })}
            style={{ backgroundColor: preferred ? '#B9E3AB' : '#F7F7F7' }}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{category}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ paddingLeft: 12, paddingRight: 12 }}>
              <Grid container direction="column" spacing={8}>
                {cards.map(cardInfo =>
                  <Grid key={cardInfo.title} item xs>
                    <Card cardInfo={cardInfo} />
                  </Grid>
                )}
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
      </div>
    );
  }
}

CardPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardPanel);
