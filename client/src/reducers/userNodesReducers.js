import { FETCH_USER_NODES } from '../actions/types'

export default function(state = null, action){
  switch (action.type) {
    case FETCH_USER_NODES:
    return action.payload || false;
    default:
      return state;
  }
}
