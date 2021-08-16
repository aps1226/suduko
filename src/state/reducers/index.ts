import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import colorReducer from './colorReducer';
import difficultyReducer from './difficultyReducer';
import selectionReducer from './selectionReducer';
import timeReducer from './timeReducer';
import entryModeReducer from './entryModeReducer';
import notesReducer from './notesReducer';

const reducers = combineReducers({
  board: boardReducer,
  colors: colorReducer,
  selection:selectionReducer,
  difficulty:difficultyReducer,
  time:timeReducer,
  entryMode: entryModeReducer,
  notes:notesReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;