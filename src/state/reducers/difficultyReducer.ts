import { AnyAction } from 'redux';
import { SET_DIFFICULTY } from '../actions/types';

const difficultyReducer = (state = 0, action: AnyAction):number =>{
  switch(action.type){
    case SET_DIFFICULTY:
      return action.payload;
    default:
      return state;
  }
}

export default difficultyReducer;