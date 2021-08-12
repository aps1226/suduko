import {ADD_FOOD,DELETE_FOOD} from '../actions/types';
import board from '../initializeBoard';
const boardReducer = (state = board, action: any) =>{
  switch(action.type){
    case ADD_FOOD:
      return;
    case DELETE_FOOD:
      return;
    default:
      return state;
  }
}

export default boardReducer;