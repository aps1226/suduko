import { AnyAction } from 'redux';
import { SET_SELECTION } from '../actions/types';

const selectionReducer = (state = 1, action: AnyAction):number =>{
  switch(action.type){
    case SET_SELECTION:
      return action.payload;
    default:
      return state;
  }
}

export default selectionReducer;