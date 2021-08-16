import {SET_ENTRY_MODE} from '../actions/types';

const entryModeReducer = (state = true, action: any) =>{
  switch(action.type){
    case SET_ENTRY_MODE:
      return action.payload;
    default:
      return state;
  }
}

export default entryModeReducer;