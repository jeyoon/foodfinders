import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, SvgIcon } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from "./Card"

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

  state = {
    shouldExpand: this.props.shouldExpand
  }

  render() {
    const { classes, category, cards } = this.props
    const { shouldExpand } = this.state
    const preferred = this.props.shouldExpand

    return (
      <div className={classes.root}>
        { <ExpansionPanel
            className={classes.panel}
            expanded={shouldExpand}
            onChange={() => {
              var newState = !this.state.shouldExpand
              this.setState({ shouldExpand: newState })
            }}
            style={{ backgroundColor: preferred ? '#B9E3AB' : '#FFFFFF' }}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{category}</Typography>
              {preferred && (
                <SvgIcon>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </SvgIcon>
              )}
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
        }
      </div>
    );
  }
}

CardPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardPanel);
