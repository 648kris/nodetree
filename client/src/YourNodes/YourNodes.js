import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NewNodeDialog from '../Dialogs/NewNodeDialog';
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


class YourNodes extends React.Component {

  componentWillReceiveProps(nextProps) {
     if (nextProps.auth !== this.props.auth) {
       let a = nextProps.auth;
        this.props.fetchUserNodes(a)
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
       if (nextProps.usernodes.length > 0){
         this.setState({
           noFactoryDisplay:"none"
          });
       }
       if (nextProps.usernodes.length === 0){
         this.setState({
           noFactoryDisplay:"block"
          });
       }
    }
    if (nextProps.allnodes !== this.props.allnodes) {
      this.setState({
        allNodes: nextProps.allnodes
        });
      }
   }

  state = {
    userNodes: [{name:'', _id:'000', leaves:[]}],
    selected: "",
    currentUser: "",
    deleteOpen: false,
    changeNameOpen: false,
    cursor: "contextMenu",
    name:"",
    noFactoryDisplay:"block"
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

 handleMouseOver = () => {
   this.setState({ cursor: "pointer" });
 };

 handleMouseOut = () => {
   this.setState({ cursor: "contextMenu" });
 };

 updateAfterNew = () => {
   let auth = this.props.auth
   this.props.fetchAllNodes();
   this.props.fetchUserNodes(auth);
   this.handleDeleteClose();
   this.handleChangeNameClose();
 }

 handleDelete = () => {
   let nodeid = this.state.selected
   this.props.deleteNode(nodeid)
   setTimeout(this.updateAfterNew, 500);
 };

 handleNameChangeSubmit = () => {
   let nodeid = this.state.selected;
   let name = this.state.name;
   this.props.changeNodeName(nodeid, name)
   setTimeout(this.updateAfterNew, 500);
 };

 handleChangeNameMouseOver = () => {
   this.setState({ changeNameBG: "#e0e0e0", cursor: "pointer"});
 };

 handleNameChange = (e) => {
   let n = e.target.value
   this.setState({
     name: n
   })
 }

  render() {

    return (
      <Drawer
       variant="permanent"
       anchor="right"
       >

     <br/><br/><br/><br/><Divider/>
    <h3 style={{textAlign:"center", fontFamily:"roboto"}}>
      Your Factories
    </h3>

    <p style={{width:"240px", color:"#90a4ae", fontFamily:"Roboto", textAlign:"center", display: this.state.noFactoryDisplay}}>
      This will be your factory editing menu.<br/><br/>
      You will be able to view your factories with their children in the "Root" dropdown.<br/><br/>
      You can already see everyone else's factories by clicking "Root".<br/>
    </p>
      <NewNodeDialog/>
        {this.state.userNodes.map( (station, index) => (
          <div className="station" key={station._id} style={{borderBottom:"solid 1px #e0e0e0"}}>
          <List>
            <ListItem>
            <ListItemIcon><img src={treeIcon} alt="icon"></img></ListItemIcon>
            <ListItemText primary={station.name} />
            </ListItem>

            <div style={{float:"left", paddingLeft:"50px", padding:"10px"}}>
            <button onClick={this.handleSelect} style={{border: "none", backgroundColor: "white", fontWeight:"bold", fontFamily:"Roboto",
              padding:"7px", cursor: this.state.cursor }}
              id={station._id} onClick={this.handleClickChangeNameOpen}
              onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
              CHANGE NAME
            </button>
            </div>
            <div style={{float:"left", paddingRight:"50px", padding:"10px"}}>
            <button onClick={this.handleSelect} style={{border: "none", backgroundColor: "white", fontWeight:"bold", fontFamily:"Roboto",
              color:"red", padding:"7px", cursor: this.state.cursor }}
              id={station._id} onClick={this.handleClickDeleteOpen}
              onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
              DELETE
            </button>
            </div>
          </List>
          </div>
          ))}

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
                <Button onClick={this.handleNameChangeSubmit} color="primary">
                  Change Name
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          
        
      </Drawer>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth, allnodes: state.allnodes, usernodes: state.usernodes}
}

export default connect(mapStateToProps, actions)(YourNodes);
