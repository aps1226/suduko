import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import colorReducer from './colorReducer';
import selectionReducer from './selectionReducer';

const reducers = combineReducers({
  board: boardReducer,
  colors: colorReducer,
  selection:selectionReducer
});

export default reducers;