import { SET_BOARD } from '../actions/types';
import board from '../initializeBoard';
const boardReducer = (state = board, action: any) =>{
  switch(action.type){
    case SET_BOARD:
      return action.payload;
    default:
      return state;
  }
}

export default boardReducer;