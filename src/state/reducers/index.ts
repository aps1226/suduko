import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import colorReducer from './colorReducer';
import difficultyReducer from './difficultyReducer';
import selectionReducer from './selectionReducer';

const reducers = combineReducers({
  board: boardReducer,
  colors: colorReducer,
  selection:selectionReducer,
  difficulty:difficultyReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;