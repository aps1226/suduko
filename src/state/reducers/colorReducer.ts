import {CHANGE_COLOR} from '../actions/types';

const initialState = {
  1:'black',
  2:'black',
  3:'black',
  4:'black',
  5:'black',
  6:'black',
  7:'black',
  8:'black',
  9:'black'
}

const colorReducer = (state = initialState, action:any) =>{
  switch(action.type){
    case CHANGE_COLOR:
      const curState = {
        1:'black',
        2:'black',
        3:'black',
        4:'black',
        5:'black',
        6:'black',
        7:'black',
        8:'black',
        9:'black'
      };
      curState[action.payload] = '#32CD32';
      return curState;
    default:
      return state;
  }
}

export default colorReducer;