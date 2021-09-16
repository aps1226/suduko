import { AnyAction } from 'redux';
import { SET_NOTES,DEFAULT_NOTES } from '../actions/types';
import { Notes } from '../../../types';

const notesReducer = (state = {}, action: AnyAction):Notes =>{
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