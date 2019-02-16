import { CHANGE_NODE_NAME } from '../actions/types'

export default function(state = null, action){
  switch (action.type) {
    case CHANGE_NODE_NAME:
    return action.payload || false;
    default:
      return state;
  }
}
