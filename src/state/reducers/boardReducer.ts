import { SET_BOARD } from '../actions/types';
import { shuffle } from '../boardController';
import { store } from '../store'
import {RootState} from './index';

const initBoard:(number | null)[][] = [shuffle([1,2,3,4,5,6,7,8,9]),[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]];
const boardReducer = (state = initBoard, action: any) =>{
  switch(action.type){
    case SET_BOARD:
      return action.payload;
    default:
      return state;
  }
}

export default boardReducer;