import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Nodes from '../Nodes/Nodes';
import Appbar from '../Appbar/Appbar';
import { connect } from 'react-redux';
import * as actions from '../actions';
import YourNodes from '../YourNodes/YourNodes';


class NestedList extends React.Component {

    state = {
      open: false,
      yourNodesDisplay: "none",
      currentUser: null,
      userNodes: ["Your factories will be shown here"],
      allNodes: ["loading..."]
  };

componentWillReceiveProps(nextProps) {
   if (nextProps.auth !== this.props.auth) {
     if(nextProps.auth){
     let a = nextProps.auth;
      this.props.fetchUserNodes(a)
     this.setState({
       yourNodesDisplay: "block",
       currentUser: nextProps.auth
      });
      this.props.fetchUserNodes(nextProps.auth);
    }
  }
  if (nextProps.usernodes !== this.props.usernodes) {
    this.setState({
      userNodes: nextProps.usernodes
     });
    }
  if (nextProps.allnodes !== this.props.allnodes) {
    this.setState({
      allNodes: nextProps.allnodes
      });
    }
 }

  handleClick = (e) => {
    this.setState(state => ({ open: !state.open }));
  };

  handleRightClick = (e) => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {

    return (
      <div>
      <Appbar/>
      <div style={{width:"50%"}}>
      <List
        component="nav"
        subheader={<ListSubheader component="div">user generated factories</ListSubheader>}
      >
        <ListItem button onClick={this.handleClick} onContextMenu={this.handleRightClick}>
          <ListItemText inset>
            <p style={{color:"#1769aa"}}> Root </p>
           </ListItemText>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <Nodes/>
        </Collapse>
      </List>
      <div style={{display:this.state.yourNodesDisplay}}> <YourNodes user={this.state.currentUser} usernodes={this.state.userNodes}/> </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth,
    usernodes: state.usernodes,
    allnodes: state.allnodes}
}

export default connect(mapStateToProps, actions)(NestedList);
