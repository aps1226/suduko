import {SET_SELECTION} from '../actions/types';

const selectionReducer = (state = null, action: any) =>{
  switch(action.type){
    case SET_SELECTION:
      return action.payload;
    default:
      return state;
  }
}

export default selectionReducer;