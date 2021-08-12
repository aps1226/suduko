import {INCREMENT} from '../actions/types';
const gridSquareReducer = (state = [0,0], action: any) =>{
  switch(action.type){
    case INCREMENT:
      const curPosition:number[] = state;
      console.log('increment called',curPosition)
      if(curPosition[1] < 8) curPosition[1] += 1;
      else {
        curPosition[0] += 1;
        curPosition[1] = 0;
      }
      return curPosition;
    default:
      return state;
  }
}

export default gridSquareReducer;