import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Button from '@material-ui/core/Button';
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
    return (
      <div>
        <Button color="secondary" onClick={this.handleClickOpen}>
          Delete
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Delete Factory</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete the selected factory?
            </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="secondary">
              Delete
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
