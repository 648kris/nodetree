import {combineReducers} from 'redux';
import authReducer from './authReducers';
import nodesReducer from './nodesReducers';
import userNodesReducer from './userNodesReducers';
import selectedReducer from './selectedReducers';

export default combineReducers({
  auth: authReducer,
  allnodes: nodesReducer,
  usernodes: userNodesReducer,
  selected: selectedReducer
})
