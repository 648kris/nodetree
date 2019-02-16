import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import NewNodeDialog from '../Dialogs/NewNodeDialog';
import ChangeNameDialog from '../Dialogs/ChangeNameDialog';
import DeleteDialog from '../Dialogs/DeleteDialog';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

function PermanentDrawerRight(props) {
  const { classes } = props;
  let placeholderKey= 0;
  let userNodes = props.usernodes;
  let noNodeMessage = "none";

  if(userNodes.length < 1){
    noNodeMessage = "block"
  }

  return (
    <div>
      <CssBaseline />
        <Toolbar>
        </Toolbar>
        <div className={classes.toolbar} />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <h3 style={{fontFamily:"Roboto", textAlign:"center"}}>
          Your Factories
        </h3>
        <div style={{textAlign:"center"}}>
          <NewNodeDialog/>
        </div>
        <div style={{textAlign:"center"}}>
          <ChangeNameDialog/>
        </div>
        <div style={{textAlign:"center"}}>
          <DeleteDialog/>
        </div>

        <p style={{display: noNodeMessage, fontFamily:"Roboto", textAlign:"center", color:"gray"}}>
          Your factories will be shown here.
        </p>
        <p style={{display: noNodeMessage, fontFamily:"Roboto", textAlign:"center", color:"gray"}}>
          Click "Root" to see everyone else's facories. Yours will show there too.
        </p>
        <List>
          {userNodes.map((node, index) => (
            <div>
            <ListItem key={node._id}>
              <ListItemText primary={node.name} />
            </ListItem>
            <Button className={classes.button}>
              Change Name
            </Button>
            <Button color="secondary" className={classes.button}>
              Delete
            </Button>
            <Divider />
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

PermanentDrawerRight.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerRight);
