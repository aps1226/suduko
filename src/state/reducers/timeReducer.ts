import { SET_TIME } from '../actions/types';

const timeReducer = (state = 0, action: any) =>{
  switch(action.type){
    case SET_TIME:
      return action.payload;
    default:
      return state;
  }
}

export default timeReducer;