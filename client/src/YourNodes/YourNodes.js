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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class YourNodes extends React.Component {

  componentWillReceiveProps(nextProps) {
     if (nextProps.auth !== this.props.auth) {
       let a = nextProps.auth;
        this.props.fetchUserNodes(a)
        this.props.selected(a);
       this.setState({
         yourNodeDis: "block",
         currentUser: nextProps.auth
        });
        this.props.fetchUserNodes(nextProps.auth);
      }
    if (nextProps.usernodes !== this.props.usernodes) {
      this.setState({
        userNodes: nextProps.usernodes
       });
      }
      if (nextProps.selected !== this.props.selected) {
        this.setState({
          selected: nextProps.selected
         });
        }
    if (nextProps.allnodes !== this.props.allnodes) {
      this.setState({
        allNodes: nextProps.allnodes
        });
      }
   }

  state = {
    userNodes: [{name:'placeholder', _id:'000', leaves:[1,2,3]},],
    selected: "",
    currentUser: "",
    deleteOpen: false,
    changeNameOpen: false,
    deleteBG: "white",
    changeNameBG: "white",
    changeNameCursor: "contextMenu",
    deleteCursor: "contextMenu",
    name:""
   };

   handleSelect = (e) => {
     this.setState({selected: e.target.id})
   }

   handleClickChangeNameOpen = (e) => {
     this.setState({ changeNameOpen: true, selected: e.target.id });
   };

   handleChangeNameClose = () => {
     this.setState({ changeNameOpen: false });
   };


 handleClickDeleteOpen = (e) => {
   this.setState({ deleteOpen: true, selected: e.target.id });
 };

 handleDeleteClose = () => {
   this.setState({ deleteOpen: false });
 };

 handleDeleteMouseOver = () => {
   this.setState({ deleteBG: "#e0e0e0" });
 };

 handleDeleteMouseOut = () => {
   this.setState({ deleteBG: "white" });
 };

 updateAfterNew = () => {
   let auth = this.props.auth
   this.props.fetchAllNodes()
   this.props.fetchUserNodes(auth);
   this.handleDeleteClose()
 }

 handleDelete = () => {
   console.log("delete")
   let nodeid = this.state.selected
   console.log(nodeid)
   this.props.deleteNode(nodeid)
   setTimeout(this.updateAfterNew, 500);
 };

 handleChangeNameMouseOver = () => {
   this.setState({ changeNameBG: "#e0e0e0", changeNameCursor: "pointer"});
 };

 handleChangeNameMouseOut = () => {
   this.setState({ changeNameBG: "white",  deleteCursor: "pointer"});
 };

 handleNameChange = (e) => {
   let n = e.target.value
   this.setState({
     name: "n"
   })
 }

  render() {

    let stations = [
      {name:'kristen', _id:'000', leaves:[1,2,3]},
      {name:'jacob', _id:'001', leaves:[1,2,3]}
    ];


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
        {this.state.userNodes.map( (station, index) => (
          <div className="station" key={station._id} style={{borderBottom:"solid 1px #e0e0e0"}}>
          <List>
            <ListItem>
            <ListItemIcon><img src={treeIcon}></img></ListItemIcon>
            <ListItemText primary={station.name} />
            </ListItem>

            <div style={{float:"left", paddingLeft:"50px", padding:"10px"}}>
            <button onClick={this.handleSelect} style={{border: "none", backgroundColor: this.state.changeNameBG, fontWeight:"bold", fontFamily:"Roboto",
              padding:"7px", cursor: this.state.changeNameCursor }}
              id={station._id} onClick={this.handleClickChangeNameOpen}
              onMouseOver={this.handleChangeNameMouseOver} onMouseOut={this.handleChangeNameMouseOut}>
              CHANGE NAME
            </button>
            </div>
            <div style={{float:"left", paddingRight:"50px", padding:"10px"}}>
            <button onClick={this.handleSelect} style={{border: "none", backgroundColor: this.state.deleteBG, fontWeight:"bold", fontFamily:"Roboto",
              color:"red", padding:"7px", cursor: this.state.deleteCursor }}
              id={station._id} onClick={this.handleClickDeleteOpen}
              onMouseOver={this.handleDeleteMouseOver} onMouseOut={this.handleDeleteMouseOut}>
              DELETE
            </button>
            </div>
          </List>


          <div>
            <Dialog
              open={this.state.deleteOpen}
              onClose={this.handleDeleteClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Delete Factory</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Delete the selected factory?
                </DialogContentText>

              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleDeleteClose}>
                  Cancel
                </Button>
                <Button onClick={this.handleDelete} color="secondary">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </div>


          <div>

            <Dialog
              open={this.state.changeNameOpen}
              onClose={this.handleChangeNameClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Change Factory Name</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Change the name of selected factory. The factory's child nodes will remain unchanged.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="New Name"
                  fullWidth
                  onChange={this.handleNameChange}
                />

              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleChangeNameClose}>
                  Cancel
                </Button>
                <Button onClick={this.handleChangeNameClose} color="primary">
                  Change Name
                </Button>
              </DialogActions>
            </Dialog>
          </div>



          </div>
        ))}
      </Drawer>


    );
  }
}


function mapStateToProps(state) {
  return {auth: state.auth, allnodes: state.allnodes, usernodes: state.usernodes}
}



export default connect(mapStateToProps, actions)(YourNodes);
