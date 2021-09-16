import { combineReducers } from 'redux';
import { Expand } from '../../../types'
import boardReducer from './boardReducer';
import colorReducer from './colorReducer';
import difficultyReducer from './difficultyReducer';
import selectionReducer from './selectionReducer';
import timerReducer from './timerReducer';
import entryModeReducer from './entryModeReducer';
import notesReducer from './notesReducer';
import gameStateReducer from './gameStateReducer';

const reducers = combineReducers({
  board: boardReducer,
  colors: colorReducer,
  selection:selectionReducer,
  difficulty:difficultyReducer,
  timer:timerReducer,
  entryMode: entryModeReducer,
  notes:notesReducer,
  gameState: gameStateReducer
});

export type RootState = Expand<ReturnType<typeof reducers>>;

export default reducers;