import {combineReducers} from 'redux';
import authReducer from './authReducers';
import nodesReducer from './nodesReducers';
import userNodesReducer from './userNodesReducers';

export default combineReducers({
  auth: authReducer,
  allnodes: nodesReducer,
  usernodes: userNodesReducer,
})
