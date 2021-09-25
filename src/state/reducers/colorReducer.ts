import { AnyAction } from 'redux';
import { CHANGE_COLOR,DEFAULT_COLORS } from '../actions/types';
import { Colors } from '../../../types'

const initGradient = ():string[] =>{
  const woodPalate:string[] = ["#a37e5c", "#b89372","#c8a484","#dcb999", "#d3af8f","#d9b696","#ceaa89","#d2ae8d","#b38e6d","#aa8563"];
  const gradient:string[] = [];
  for(let i = 0; i < 50; i++){
    gradient.push(woodPalate[Math.round(Math.random()*9)])
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
  'Selection_1':'#3297FD',
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
const colorReducer = (state = initialState, action:AnyAction):Colors =>{

  const defaultState:Colors = {
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
      if(!action.payload.includes('Selection')){
        defaultState[action.payload] = ['#008000','#008000'];
        defaultState[`Selection_${action.payload}`] = '#3297FD';
      }else defaultState[action.payload] = '#3297FD';
      return defaultState;
    case DEFAULT_COLORS:
      defaultState['Selection_1'] = '#3297FD';
      return defaultState;
    default:
      return state;
  }
}

export default colorReducer;