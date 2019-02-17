import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'
import Landing from './Landing/Landing';
import YourNodes from './YourNodes/YourNodes';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchAllNodes();
    this.props.fetchUserNodes();
    this.props.select();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact={true} component={Landing}/>
        </BrowserRouter>
        <BrowserRouter>
          <Route path="/test" exact={true} component={YourNodes}/>
        </BrowserRouter>
      </div>
    );
  }
}

/*function mapStateToProps(state) {
  return {auth: state.auth}
}*/


export default connect(null, actions)(App);
