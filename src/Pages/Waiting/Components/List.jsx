import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'scroll',
        maxHeight: 250,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
});

function PinnedSubheaderList(props) {
    const { classes } = props;

    return (
        <List className={classes.root} subheader={<li />}>
            {["John", "Sherry", "Gabe", "Isaac", "Jun", "Krikor", "Kandarp", "Phil"].map(name => (
                <ListItem key={`item-${name}`}>
                    <ListItemText primary={`${name}`} />
                </ListItem>
            ))}
        </List>
    );
}

PinnedSubheaderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PinnedSubheaderList);
