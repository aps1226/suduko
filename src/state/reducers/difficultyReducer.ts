import { SET_DIFFICULTY } from '../actions/types';
const difficultyReducer = (state = null, action: any) =>{
  switch(action.type){
    case SET_DIFFICULTY:
      return action.payload;
    default:
      return state;
  }
}

export default difficultyReducer;