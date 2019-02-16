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
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <Button color="primary" onClick={this.handleClickOpen}>
          Create New Factory
        </Button>
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
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Number of Factories - up to 15"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Lowest Number in Range"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Highest Number in Range"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Cancel
            </Button>
            <Button onClick={this.props.createNewNode("name", 5, 1, 111, this.props.auth)} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {auth: state.auth}
}


export default connect(mapStateToProps, actions)(FormDialog);
