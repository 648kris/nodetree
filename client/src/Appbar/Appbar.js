import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import path from '../path.js'
import { connect } from 'react-redux';
import * as actions from '../actions';

let logoutDisplay: "none";
let loginDisplay: "none";

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: "2vh",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function authCheck(a) {
    if(a){logoutDisplay = "block"; loginDisplay = "none"}
    else{ logoutDisplay= "none"; loginDisplay = "block"}
}

function test(){ return "none"}


class ButtonAppBar extends Component {
render(){
  authCheck(this.props.auth)
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" color="inherit" style={styles.grow}>
            Kristen's App for Passport
          </Typography>
          <Button color="inherit">
            <a href={path() + "/auth/google"} style={{color: "white", textDecoration: test(), display: loginDisplay }}> Login with Google </a>
          </Button>
          <Button color="inherit">
            <a href={path() + "/api/logout"} style={{color: "white", textDecoration: "none", display: logoutDisplay }}> Logout </a>
          </Button>
          <p style={{paddingRight:"300px"}}></p>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps, actions)(ButtonAppBar);
