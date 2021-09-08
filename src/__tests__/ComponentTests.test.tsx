import React from 'react';
import { Text,View } from "react-native";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../state/reducers/index';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router'; 
import { RouteComponentProps, Router } from 'react-router-native';
import { fireEvent, render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {GameState} from '../../types';
import {RootState} from '../state/reducers/index';
import Home from '../../components/Home';
import TextStroke from '../../components/TextStroke';
import Title from '../../components/Title';


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
describe('Home', () =>{
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

  //Home component should match current screenshot.
  it('renders without crashing', () => {
    expect(homeComponent.toJSON()).toMatchSnapshot();
  });

  //Home component should route to the difficulty selection menu when the 'Play New Game' button is selected.
  it(`routes to difficulty selection menu when pressing 'Play New Game'.`, () => {
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    //History length should initially be 1.
    expect(history.length).toBe(1);
    //Press 'Play New Game' button.
    fireEvent.press(newGameButton);
    //History length should be 2.
    expect(history.length).toBe(2);
    //Location pathname should be 'DifficultySelection'.
    expect(history.location.pathname).toBe('/DifficultySelection')
  });

  //Home component should not route to GameDisplay component when pressing 'Load Game' if a game does not exist.
  it(`does not route to GameDisplay when pressing 'Load Game' if a game does not exist.`, () => {
    const {getByTestId} = homeComponent;
    const loadGameButton = getByTestId('loadGameButton');
    //History length should initially be 2.
    expect(history.length).toBe(2);
    //Location pathname should initially be '/DifficultySelection'.
    expect(history.location.pathname).toBe('/DifficultySelection')
    //Press 'Load Game Button'.
    fireEvent.press(loadGameButton);
    //History length should remain as 2.
    expect(history.length).toBe(2);
    //Location pathname should remain as '/DifficultySelection'.
    expect(history.location.pathname).toBe('/DifficultySelection')
  });

  //A pop-up prompt should appear when the 'Load Game' button is pressed when no current game exists.
  it(`prompt appears when attempting to load a game when none exists.`, () => {
    const {getByTestId} = homeComponent;
    const loadGameButton = getByTestId('loadGameButton');
    const loadGamePopUp = getByTestId('loadGamePopUp');
    //Popup should initially not be visible.
    expect(loadGamePopUp.props.visible).toBeFalsy();
    //Press 'Load Game' button.
    fireEvent.press(loadGameButton);
    //Popup should no longer be visible.
    expect(loadGamePopUp.props.visible).toBeTruthy();
    
    //Secondary test to ensure that the 'Play New Game' popup does not appear given current state.
    const newGameButton = getByTestId('newGameButton');
    const newGamePopUp = getByTestId('newGamePopUp');
    //Popup should initially not be visible.
    expect(newGamePopUp.props.visible).toBeFalsy();
    //Press 'Play New Game' button.
    fireEvent.press(newGameButton);
    //Popup should remain not visible.
    expect(newGamePopUp.props.visible).toBeFalsy();
  });
  
  //Load game prompt should disappear after the screen is pressed.
  it(`prompt disappears when pressing the screen.`, async ()=>{
    const {getByTestId} = homeComponent;
    const loadGameButton = getByTestId('loadGameButton');
    const loadGamePopUp = getByTestId('loadGamePopUp');
    const loadGamePopUpHide = getByTestId('loadGamePopUpHide');
    //Prompt should initially be invisible.
    expect(loadGamePopUp.props.visible).toBeFalsy();
    //Press 'Load Game' button.
    fireEvent.press(loadGameButton);
    //Prompt should be visible.
    expect(loadGamePopUp.props.visible).toBeTruthy();
    //Press screen after prompt appears.
    fireEvent.press(loadGamePopUpHide);
    //Wait for component to update after press event.
    await waitFor(() => {
      //Prompt should not be visible.
      expect(getByTestId('loadGamePopUp').props.visible).toBeFalsy();
    })
    //Update state for the next series of tests.
    mockStore['gameState'] = {
      'isCompleted':false,
      'gameExists':true
    }
  })
  
  //Home component should route to GameDisplay component if a current game exists.
  it(`routes to GameDisplay when pressing 'Load Game' if a game does exist.`, () => {
    const {getByTestId} = homeComponent;
    const loadGameButton = getByTestId('loadGameButton');
    //History length should initially be 3.
    expect(history.length).toBe(3);
    //Location pathname should initially be 'DifficultySelection'.
    expect(history.location.pathname).toBe('/DifficultySelection')
    //Press 'Load Game' button.
    fireEvent.press(loadGameButton);
    //History length should be 4.
    expect(history.length).toBe(4);
    //Location pathname should be 'GameDisplay'.
    expect(history.location.pathname).toBe('/GameDisplay')
  });
  
  //Home component should not immediately route to DifficultySelection component if a game exists.
  it(`does not route to difficulty selection menu when pressing 'Play New Game' if a game currently exists.`, () => {
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    //History length should initially be 4.
    expect(history.length).toBe(4);
    //Location pathname should initially be 'GameDisplay'.
    expect(history.location.pathname).toBe('/GameDisplay')
    //Press 'Play New Game'.
    fireEvent.press(newGameButton);
    //History length remain as 4.
    expect(history.length).toBe(4);
    //Location pathname should remain as 'GameDisplay'.
    expect(history.location.pathname).toBe('/GameDisplay')
  });
  
  //Prompt should appear when attempting to play a new game when one currently exists.
  it(`prompt appears when attempting to play a new game when one exists.`, () => {
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    const newGamePopUp = getByTestId('newGamePopUp');
    //Prompt should initially not be visible.
    expect(newGamePopUp.props.visible).toBeFalsy();
    //Press 'Play New Game' button.
    fireEvent.press(newGameButton);
    //Prompt should be visible.
    expect(newGamePopUp.props.visible).toBeTruthy();
    
    //Secondary test to ensure that the 'Play New Game' popup does not appear given current state.
    const loadGameButton = getByTestId('loadGameButton');
    const loadGamePopUp = getByTestId('loadGamePopUp');
    //Prompt should initially not be visible.
    expect(loadGamePopUp.props.visible).toBeFalsy();
    //Press 'Load Game' button.
    fireEvent.press(loadGameButton);
    //Prompt should remain not visible.
    expect(loadGamePopUp.props.visible).toBeFalsy();
  });

  //Home component should route to difficulty selection menu when the 'yes' button is selected within the prompt.
  it(`should route to the difficulty selection menu when the 'yes' button is selected on the 'Play New Game' popup.`, () =>{
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    const newGamePopUp = getByTestId('newGamePopUp');
    const yesButton = getByTestId('newGamePopUpYes');
    //History length should initially be 5.
    expect(history.length).toBe(5);
    //Location pathname should initially be 'GameDisplay'.
    expect(history.location.pathname).toBe('/GameDisplay');
    //Press 'Play New Game' button.
    fireEvent.press(newGameButton);
    //Press 'Yes' button.
    fireEvent.press(yesButton);
    //History length should initially be 6.
    expect(history.length).toBe(6);
    //Location pathname should be 'DifficultySelection'.
    expect(history.location.pathname).toBe('/DifficultySelection');
  })

  //When the 'No' button is selected on the prompt it should disappear
  //and not route to another component.
  it(`prompt should disappear and not route to any other component when the 'No' button is selected on the prompt.`, async ()=>{
    const {getByTestId, findByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    const newGamePopUp = getByTestId('newGamePopUp');
    const noButton = getByTestId('newGamePopUpNo');
    //History length should initially be 6.
    expect(history.length).toBe(6);
    //Location pathname should initially be 'DifficultySelection'.
    expect(history.location.pathname).toBe('/DifficultySelection');
    //Press 'Play New Game' button.
    fireEvent.press(newGameButton);
    //Wait for component to update after press event.
    await waitFor(() =>{
      //'Play New Game' prompt should be visible.
      expect(getByTestId('newGamePopUp').props.visible).toBeTruthy();
    })
    //Press 'No' button.
    fireEvent.press(noButton);
    //Wait for component to update after press event.
    await waitFor(() =>{
      //'Play New Game' prompt should not be visible.
      expect(getByTestId('newGamePopUp').props.visible).toBeFalsy();
      //History length should initially be 6.
      expect(history.length).toBe(6);
      //Location pathname should initially be 'DifficultySelection'.
      expect(history.location.pathname).toBe('/DifficultySelection');
    })
  })
});

//TextStroke component test.
describe('TextStroke', () =>{
  it('renders without crashing', () =>{
    const titleComponent = render(
      <TextStroke
        color = {'white'}
        stroke = {2}
      >
        <Text>
          Suduko
        </Text>
      </TextStroke>
    ).toJSON();
    expect(titleComponent).toMatchSnapshot();
  })
})

//Title component test.
describe('Title', () =>{
  it('renders without crashing', () => {
    const titleComponent = render(<Title/>).toJSON();
    expect(titleComponent).toMatchSnapshot();
  });
});
