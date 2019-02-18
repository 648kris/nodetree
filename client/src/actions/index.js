import axios from 'axios';
import path from '../path';
import { FETCH_USER } from './types';
import { FETCH_ALL_NODES } from './types';
import { FETCH_USER_NODES } from './types';
import { NEW_NODE} from './types';
import { CHANGE_NODE_NAME } from './types';
import { DELETE_NODE } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get(path() + '/api/currentuser',  {withCredentials: true})
      .then(res => dispatch({type: FETCH_USER, payload: res.data._id}))
  }
};

export const fetchAllNodes = () => {
  return function(dispatch) {
    axios
      .get(path() + '/api/allnodes',  {withCredentials: true})
      .then(res => dispatch({type: FETCH_ALL_NODES, payload: res.data}))
  }
};

export const fetchUserNodes = (currentuser) => {
  return function(dispatch) {
    axios
      .get(path() + '/api/usernodes',{ params:{user: currentuser}}, {withCredentials: true},)
      .then(res => dispatch({type: FETCH_USER_NODES, payload: res.data}))
  }
};

export const deleteNode = (nodeid) => {
  return function(dispatch) {
    axios
      .post(path() + '/api/delete',  {}, {params:{nodeid: nodeid}, withCredentials: true})
      .then(res => dispatch({type: DELETE_NODE, payload: res.data}))
  }
};

export const changeNodeName = (nodeid, name) => {
  return function(dispatch) {
    axios
      .post(path() + '/api/updatename',  {}, {params:{nodeid: nodeid, name: name}, withCredentials: true})
      .then(res => dispatch({type: CHANGE_NODE_NAME, payload: res.data}))
  }
};

export const createNewNode = (name, amount, rangeLow, rangeHigh, currentuser) => {
  if ( isNaN(parseInt(rangeLow)) ){rangeLow = 1}
  if ( isNaN(parseInt(rangeHigh)) ){rangeHigh = 100}
  if ( isNaN(parseInt(amount)) ){amount = 5}

  if (rangeLow < 1){rangeLow = 1}
  if ( rangeHigh > Math.pow(10,30) ){Math.pow(10,30)}
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
      .post(path() + '/api/new',  {}, {params:{user: currentuser, leaves: leaves, name: name}, withCredentials: true})
      .then(res => dispatch({type: NEW_NODE, payload: res.data}))
  }
};
