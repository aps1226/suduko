import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from '../../state/reducers/index';
import { render } from '@testing-library/react-native';

//Function to provide mockStore for components managed by redux.
export default function renderWithRedux(
  component:JSX.Element,
  //@ts-ignore
  {initialState,store = createStore(reducers,initialState,applyMiddleware(thunk))} = {}
){
  return {
    ...render(<Provider store = {store}>{component}</Provider>),
    store
  }
}