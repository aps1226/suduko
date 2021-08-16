import {SET_NOTES} from '../actions/types';

const notesReducer = (state = {}, action: any) =>{
  switch(action.type){
    case SET_NOTES:
      return action.payload;
    default:
      return state;
  }
}

export default notesReducer;