import { DELETE_NODE } from '../actions/types'

export default function(state = null, action){
  switch (action.type) {
    case DELETE_NODE:
    return action.payload || false;
    default:
      return state;
  }
}
