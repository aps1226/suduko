import {SET_GAME_STATE} from '../actions/types';

const gameStateReducer = (state = false, action: any) =>{
  switch(action.type){
    case SET_GAME_STATE:
      return action.payload;
    default:
      return state;
  }
}

export default gameStateReducer;