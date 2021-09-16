import { AnyAction } from 'redux';
import { SET_TIMER } from '../actions/types';
import { Timer } from '../../../types'

const initTimer:Timer = {
  'time':1,
  'incrementor':1
}
const timeReducer = (state = initTimer, action: AnyAction):Timer =>{
  switch(action.type){
    case SET_TIMER:
      return action.payload;
    default:
      return state;
  }
}

export default timeReducer;