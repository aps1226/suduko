import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import colorReducer from './colorReducer';
import difficultyReducer from './difficultyReducer';
import selectionReducer from './selectionReducer';
import timeReducer from './timeReducer';
import entryModeReducer from './entryModeReducer';
import notesReducer from './notesReducer';
import gameStateReducer from './gameStateReducer';

const reducers = combineReducers({
  board: boardReducer,
  colors: colorReducer,
  selection:selectionReducer,
  difficulty:difficultyReducer,
  timer:timeReducer,
  entryMode: entryModeReducer,
  notes:notesReducer,
  gameState: gameStateReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;