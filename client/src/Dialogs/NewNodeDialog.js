import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
  state = {
    open: false,

  };

  handleClickOpen = () => {
    this.setState({
      open: true,
      name: null,
      amount: null,
      low: null,
      high: null,
      currentuser:null });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleNameChange = (e) => {
    let n = e.target.value
    this.setState({
      name: n
    })
  }

  handleAmountChange = (e) => {
    let n = e.target.value
    this.setState({
      amount: n
    })
  }

  handleLowChange = (e) => {
    let n = e.target.value
    this.setState({
      low: n
    })
  }

  handleHighChange = (e) => {
    let n = e.target.value
    this.setState({
      high: n
    })
  }

  updateAfterNew = () => {
    let auth = this.props.auth
    this.props.fetchAllNodes()
    this.props.fetchUserNodes(auth);
  }

  handleSubmit = (e) => {
    this.setState({ open: false });
    this.props.createNewNode(this.state.name, this.state.amount, this.state.low, this.state.high, this.props.auth)
    setTimeout(this.updateAfterNew, 500); 
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <div style={{textAlign:"center"}}>
          <Button color="primary" onClick={this.handleClickOpen}>
            Create New Factory
          </Button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a New Factory</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Create a New Factory. Factories will generate random numbers within a range that you provide. You may generate up to 15 random number.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name of New Node"
              fullWidth
              onChange={this.handleNameChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Number of Factories - up to 15"
              fullWidth
              onChange={this.handleAmountChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Lowest Number in Range"
              fullWidth
              onChange={this.handleLowChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Highest Number in Range"
              fullWidth
              onChange={this.handleHighChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Cancel
            </Button>
            <Button color="primary"
            onClick={this.handleSubmit}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}


export default connect(mapStateToProps, actions)(FormDialog);
