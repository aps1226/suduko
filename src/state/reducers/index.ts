import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import gridSquareReducer from './gridSqureReducer';

const reducers = combineReducers({
  board: boardReducer,
  position: gridSquareReducer
});

export default reducers;