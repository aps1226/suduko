import { SET_TIMER } from '../actions/types';
import {Timer} from '../../../types'

const initTimer:Timer = {
  'time':0,
  'decrementor':1
}
const timeReducer = (state = initTimer, action: any) =>{
  switch(action.type){
    case SET_TIMER:
      return action.payload;
    default:
      return state;
  }
}

export default timeReducer;