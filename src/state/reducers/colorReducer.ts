import {CHANGE_COLOR,DEFAULT_COLORS} from '../actions/types';

import {Colors} from '../../../types'

const initGradient = ():string[] =>{
  const woodPalate:string[] = ["#a37e5c", "#b89372","#c8a484","#dcb999", "#d3af8f","#d9b696","#ceaa89","#d2ae8d","#b38e6d","aa8563"];
  const gradient:string[] = [];
  for(let i = 0; i < 100; i++){
    gradient.push(woodPalate[Math.round(Math.random()*10)])
  }
  return gradient;
}

const initializedGradient:string[] = initGradient();

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
  'gradient': initializedGradient
}
const colorReducer = (state = initialState, action:any) =>{

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
    'gradient': initializedGradient
  }
  
  switch(action.type){
    case CHANGE_COLOR:
      if(!action.payload.includes('Selection')) initialState[action.payload] = ['#008000','#008000'];
      else initialState[action.payload] = '#3297FD';
      return initialState;
    case DEFAULT_COLORS:
      return initialState;
    default:
      return state;
  }
}

export default colorReducer;