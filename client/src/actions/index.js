import axios from 'axios';
import path from '../path';
//import currentUserFuntion from './currentUserFunction';
import { FETCH_USER } from './types';
import { FETCH_ALL_NODES } from './types';
import { FETCH_USER_NODES } from './types';
import { NEW_NODE} from './types';
import { CHANGE_NODE_NAME } from './types';
import { DELETE_NODE } from './types';
import { SELECT } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get(path() + '/api/currentuser',  {withCredentials: true})
      .then(res => dispatch({type: FETCH_USER, payload: res.data._id}))
  }
};

export const fetchAllNodes = () => {
  //console.log("fetchsALLnodes action")
  return function(dispatch) {
    axios
      .get(path() + '/api/allnodes',  {withCredentials: true})
      .then(res => dispatch({type: FETCH_ALL_NODES, payload: res.data}))
  }
};

export const fetchUserNodes = (currentuser) => {
  //console.log("fetchsuernodes action")
  return function(dispatch) {
    axios
      .get(path() + '/api/usernodes',{ params:{user: currentuser}}, {withCredentials: true},)
      .then(res => dispatch({type: FETCH_USER_NODES, payload: res.data}))
  }
};

export const deleteNode = (currentuser, nodeid) => {
  return function(dispatch) {
    axios
      .delete(path() + '/api/delete',  {withCredentials: true}, {user: currentuser, nodeid: nodeid})
      .then(res => dispatch({type: DELETE_NODE, payload: res.data}))
  }
};

export const select = (id) => {
  //console.log("actions select "+id)
  return function(dispatch) {
    dispatch({type: SELECT, payload: id})
  }
};




export const changeNodeName = (currentuser, nodeid, name) => {
  return function(dispatch) {
    axios
      .post(path() + '/api/updatename',  {withCredentials: true}, {user: currentuser, nodeid: nodeid, name: name})
      .then(res => dispatch({type: CHANGE_NODE_NAME, payload: res.data}))
  }
};

//export const createNewNode = (name, amount, rangeLow, rangeHigh, currentuser)
export const createNewNode = (name, amount, rangeLow, rangeHigh, currentuser) => {

  if (rangeLow < 1){rangeLow = 1}
  if (rangeHigh > 9000000000000000000000000000000000000000){rangeHigh = 9000000000000000000000000000000000000000}
  if (amount < 1){amount = 1}
  if (amount > 15){amount = 15}
  if(rangeLow > rangeHigh){rangeHigh = rangeLow+1}
  let leaves = [];
  for(let i=0;i<amount;i++){
    let x = Math.random() * (rangeHigh - rangeLow) + rangeLow;
    let y = Math.round(x)
    leaves.push(y)
  }
  return function(dispatch) {
    axios
      .post(path() + '/api/new',  {withCredentials: true}, {params:{user: currentuser, leaves: leaves, name: name}})
      .then(res => dispatch({type: NEW_NODE, payload: res.data}))
  }
};
