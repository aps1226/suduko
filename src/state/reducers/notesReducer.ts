import {SET_NOTES,DEFAULT_NOTES} from '../actions/types';

const notesReducer = (state = {}, action: any) =>{
  switch(action.type){
    case SET_NOTES:
      return action.payload;
    case DEFAULT_NOTES:
      return {};
    default:
      return state;
  }
}

export default notesReducer;