import { AnyAction } from 'redux';
import { SET_GAME_STATE } from '../actions/types';
import { GameState } from '../../../types';

const initGameState:GameState = {
  'isCompleted':false,
  'gameExists':false
}
const gameStateReducer = (state = initGameState, action: AnyAction):GameState =>{
  switch(action.type){
    case SET_GAME_STATE:
      return action.payload;
    default:
      return state;
  }
}

export default gameStateReducer;