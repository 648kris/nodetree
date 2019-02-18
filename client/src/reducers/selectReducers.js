import { SELECT } from '../actions/types'

export default function(state = null, action){
  //console.log("select reducer")
  //console.log(action.payload)
  switch (action.type) {
    case SELECT:
    return action.payload || false;
    default:
      return state;
  }
}
