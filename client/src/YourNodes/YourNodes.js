import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import treeIcon from '../icons/treeSmall.png';
import Button from '@material-ui/core/Button';

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
  let factories = [
    {name:'kristen', _id:'000', leaves:[1,2,3]},
    {name:'jacob', _id:'001', leaves:[1,2,3]}
  ];

  if(props.usernodes){
    factories = props.usernodes
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />


      </main>
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
        <List>
          <div style={{fontFamily:"roboto", textAlign:"center"}}>
            <h3>
              You Factories
            </h3>
            <Button color="primary" className={classes.button}>
              Create New Factory
            </Button>
            </div>
          {factories.map((factory, index) => (
            <div>
            <ListItem button key={factory._id}>
              <ListItemIcon><img src={treeIcon} /></ListItemIcon>
              <ListItemText primary={factory.name} />
            </ListItem>
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
