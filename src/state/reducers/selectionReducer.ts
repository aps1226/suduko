import {SET_SELECTION} from '../actions/types';

const selectionReducer = (state = 1, action: any) =>{
  switch(action.type){
    case SET_SELECTION:
      return action.payload;
    default:
      return state;
  }
}

export default selectionReducer;