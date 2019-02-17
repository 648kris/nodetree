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
import { connect } from 'react-redux';
import * as actions from '../actions';

const drawerWidth = 240;

class PermanentDrawerRight extends React.Component {
  state = {
    userNodes: ["loading"],
    placeholderKey: 0,
    noNodeMessage: "none",
    currentUser: null
  }



   render() {

     let stations = [
       {name:'kristen', _id:'000', leaves:[1,2,3]},
       {name:'jacob', _id:'001', leaves:[1,2,3]}
     ];

     if(this.props.usernodes){
       stations = this.props.usernodes
     }

     return (
       <div>
         {stations.map( (station, index) => (
           <div className="station" key={station._id}>
                 <p style={{fontSize: "small", color: "#2a3eb1"}}>
                 {station.name} </p>
           </div>
         ))}
       </div>

     );
   }
 }

function mapStateToProps(state) {
    console.log("state from yournode")
  console.log(state)
  return {auth: state.auth, allnodes: state.allnodes, usernodes: state.usernodes}
}



export default connect(mapStateToProps, actions)(PermanentDrawerRight);
