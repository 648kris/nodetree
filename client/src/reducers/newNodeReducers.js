import { NEW_NODE } from '../actions/types'

export default function(state = null, action){
  switch (action.type) {
    case NEW_NODE:
    return action.payload || false;
    default:
      return state;
  }
}
