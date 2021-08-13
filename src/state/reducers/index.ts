import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import colorReducer from './colorReducer';
import difficultyReducer from './difficultyReducer';
import selectionReducer from './selectionReducer';
import timeReducer from './timeReducer';

const reducers = combineReducers({
  board: boardReducer,
  colors: colorReducer,
  selection:selectionReducer,
  difficulty:difficultyReducer,
  time:timeReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;