import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import path from '../path.js'
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: "2vh",
  },
  grow: {
    flexGrow: 1,
  }
};

class ButtonAppBar extends Component {

  state={
    logoutDisplay: "none",
    loginDisplay: "none"
  }

  componentWillReceiveProps(nextProps) {
     if (nextProps.auth !== this.props.auth) {
       if(nextProps.auth){
       this.setState({
         logoutDisplay: "block",
         loginDisplay: "none"
        });
      }
      if(nextProps.auth === false){
      this.setState({
        logoutDisplay: "none",
        loginDisplay: "block"
       });
     }
    }
  }

render(){
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" color="inherit" style={styles.grow}>
            Kristen's App for Passport
          </Typography>
          <Button color="inherit">
            <a href={path() + "/auth/google"} style={{color: "white", textDecoration: "none", display: this.state.loginDisplay }}> Login with Google </a>
          </Button>
          <Button color="inherit">
            <a href={path() + "/api/logout"} style={{color: "white", textDecoration: "none", display: this.state.logoutDisplay }}> Logout </a>
          </Button>
          <p style={{paddingRight:"250px"}}></p>
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
