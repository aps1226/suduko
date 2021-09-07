import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../state/reducers/index';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router'; 
import { RouteComponentProps, Router } from 'react-router-native';
import { fireEvent, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json';
import {GameState} from '../../types'
import {RootState} from '../state/reducers/index'
import Title from '../../components/Title';
import Home from '../../components/Home';
import App from '../../App';

//Mock props for components with routing.
const history = createMemoryHistory();
const path = `/route/:id`;
const match: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: "1" }
};
const location = createLocation(match.url);

//Function to provide mockStore for components managed by redux.
function renderWithRedux(
  component:JSX.Element,
  //@ts-ignore
  {initialState,store = createStore(reducers,initialState)} = {}
){
  return {
    ...render(<Provider store = {store}>{component}</Provider>),
    store
  }
}

//Home component testing.
describe('Home component', () =>{
  //Mock store object for state management.
  const mockStore:RootState = {};

  let homeComponent:any;
  beforeEach(() =>{
    homeComponent = renderWithRedux(
      <Home
        history={history}
        location={location}
        match={match}
      />,
      {
        initialState:mockStore
      }
    );
  })

  it('renders without crashing', () => {
    expect(homeComponent.toJSON()).toMatchSnapshot();
  });

  it(`routes to difficulty selection menu when pressing 'Play New Game'.`, () => {
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    expect(history.length).toBe(1);
    fireEvent.press(newGameButton);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/DifficultySelection')
  });

  it(`does not route to GameDisplay when pressing 'Load Game' if a game does not exist.`, () => {
    const {getByTestId} = homeComponent;
    const loadGameButton = getByTestId('loadGameButton');
    expect(history.length).toBe(2);
    fireEvent.press(loadGameButton);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/DifficultySelection')
  });

  it(`prompt appears when attempting to load a game when none exists.`, () => {
    const {getByTestId} = homeComponent;
    const loadGameButton = getByTestId('loadGameButton');
    const loadGamePopUp = getByTestId('loadGamePopUp');
    expect(loadGamePopUp.props.visible).toBeFalsy();
    fireEvent.press(loadGameButton);
    expect(loadGamePopUp.props.visible).toBeTruthy();
    
    const newGameButton = getByTestId('newGameButton');
    const newGamePopUp = getByTestId('newGamePopUp');
    expect(newGamePopUp.props.visible).toBeFalsy();
    fireEvent.press(newGameButton);
    expect(newGamePopUp.props.visible).toBeFalsy();

    //Update state for the next series of tests.
    mockStore['gameState'] = {
      'isCompleted':false,
      'gameExists':true
    }
  });

  it(`routes to GameDisplay when pressing 'Load Game' if a game does exist.`, () => {
    const {getByTestId} = homeComponent;
    const loadGameButton = getByTestId('loadGameButton');
    expect(history.length).toBe(3);
    fireEvent.press(loadGameButton);
    expect(history.length).toBe(4);
    expect(history.location.pathname).toBe('/GameDisplay')
  });
  
  it(`does not route to difficulty selection menu when pressing 'Play New Game' if a game currently exists.`, () => {
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    expect(history.length).toBe(4);
    fireEvent.press(newGameButton);
    expect(history.length).toBe(4);
    expect(history.location.pathname).toBe('/GameDisplay')
  });

  it(`prompt appears when attempting to play a new game when one exists.`, () => {
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    const newGamePopUp = getByTestId('newGamePopUp');
    expect(newGamePopUp.props.visible).toBeFalsy();
    fireEvent.press(newGameButton);
    expect(newGamePopUp.props.visible).toBeTruthy();

    const loadGameButton = getByTestId('loadGameButton');
    const loadGamePopUp = getByTestId('loadGamePopUp');
    expect(loadGamePopUp.props.visible).toBeFalsy();
    fireEvent.press(loadGameButton);
    expect(loadGamePopUp.props.visible).toBeFalsy();
  });

});

//Title component tests.
describe('Title component', () =>{
  it('renders without crashing', () => {
    const titleComponent = render(<Title/>).toJSON();
    expect(titleComponent).toMatchSnapshot();
  });
});
