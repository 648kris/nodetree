import { FETCH_ALL_NODES } from '../actions/types'

export default function(state = null, action){
  switch (action.type) {
    case FETCH_ALL_NODES:
    return action.payload || false;
    default:
      return state;
  }
}
