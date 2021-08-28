import {CHANGE_COLOR,DEFAULT_COLORS} from '../actions/types';

import {Colors} from '../../../types'

const initialState:Colors = {
  1:['transparent','black'],
  2:['transparent','black'],
  3:['transparent','black'],
  4:['transparent','black'],
  5:['transparent','black'],
  6:['transparent','black'],
  7:['transparent','black'],
  8:['transparent','black'],
  9:['transparent','black'],
  'Selection_1':'transparent',
  'Selection_2':'transparent',
  'Selection_3':'transparent',
  'Selection_4':'transparent',
  'Selection_5':'transparent',
  'Selection_6':'transparent',
  'Selection_7':'transparent',
  'Selection_8':'transparent',
  'Selection_9':'transparent',
}

const colorReducer = (state = initialState, action:any) =>{
  switch(action.type){
    case CHANGE_COLOR:
      const curState:Colors = {
        1:['transparent','black'],
        2:['transparent','black'],
        3:['transparent','black'],
        4:['transparent','black'],
        5:['transparent','black'],
        6:['transparent','black'],
        7:['transparent','black'],
        8:['transparent','black'],
        9:['transparent','black'],
        'Selection_1':'transparent',
        'Selection_2':'transparent',
        'Selection_3':'transparent',
        'Selection_4':'transparent',
        'Selection_5':'transparent',
        'Selection_6':'transparent',
        'Selection_7':'transparent',
        'Selection_8':'transparent',
        'Selection_9':'transparent',
      }
      if(!action.payload.includes('Selection')) curState[action.payload] = ['#008000','#008000'];
      else curState[action.payload] = '#3297FD';
      return curState;
    case DEFAULT_COLORS:
      return action.payload;
    default:
      return state;
  }
}

export default colorReducer;