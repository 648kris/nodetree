import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ChildNodes from '../Nodes/ChildNodes';
import NewNodeDialog from '../Dialogs/NewNodeDialog';
import ChangeNameDialog from '../Dialogs/ChangeNameDialog';
import DeleteDialog from '../Dialogs/DeleteDialog';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import treeIcon from '../icons/treeSmall.png';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class YourNodes extends React.Component {
  state = {
   };



  render() {

    let stations = [
      {name:'kristen', _id:'000', leaves:[1,2,3]},
      {name:'jacob', _id:'001', leaves:[1,2,3]}
    ];

    if(this.props.allnodes){
      stations = this.props.allnodes
    }

    return (
      <Drawer
       variant="permanent"
       anchor="right"
     >
     <br/><br/><br/><br/><Divider/>
    <h3 style={{textAlign:"center", fontFamily:"roboto"}}>
      Your Factories
    </h3>
      <NewNodeDialog/>
        {stations.map( (station, index) => (
          <div className="station" key={station._id} style={{borderBottom:"solid 1px #e0e0e0"}}>
          <List>
            <ListItem>
            <ListItemIcon><img src={treeIcon}></img></ListItemIcon>
            <ListItemText primary={station.name} />
            </ListItem>

            <div style={{float:"left", paddingLeft:"50px"}}>
              <ChangeNameDialog id={station._id}/>
            </div>
            <div style={{float:"left", paddingRight:"50px"}}>
              <DeleteDialog id={station._id}/>
            </div>
          </List>
          </div>
        ))}
      </Drawer>


    );
  }
}


function mapStateToProps(state) {
  return {auth: state.auth, allnodes: state.allnodes}
}



export default connect(mapStateToProps, actions)(YourNodes);
