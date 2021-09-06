import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
// import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json';
import Home from '../../components/Home';
import App from '../../App';

function renderWithRedux(
  ui:JSX.Element,
  //@ts-ignore
  {initialState,store = createStore(reducer,initialState)} = {}
){
  return {
    ...render(<Provider store = {store}>{ui}</Provider>),
    store
  }
}

describe('App component', () =>{
  it('renders without crashing', () => {
    const {container} = renderWithRedux(<App/>);
  });
});
