import React from 'react';
import renderWithRedux from '../renderWithRedux';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router'; 
import { act, cleanup, fireEvent, render, waitFor} from '@testing-library/react-native';
import {RenderReduxAPI} from '../../../types';
import {RootState} from '../../state/reducers/index';
import Home from '../../../components/Home';

//Mock props for routing.
const history = createMemoryHistory();
const path = `/route/:id`;
const match: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: "1" }
};
const location = createLocation(match.url);

//Home component testing.
describe('Home', () =>{
  //Mock store object for state management.
  const mockStore:RootState = {};
  //Render Home component with routing and redux.
  let homeComponent:RenderReduxAPI;
  beforeEach(() =>{
    homeComponent = renderWithRedux(
      <Home
        history = {history}
        match = {match}
        location = {location}
      />,
      {
        initialState: mockStore
      }
    );
  })

  afterEach(cleanup);

  //Component renders without crashing.
  it('renders without crashing', () => {
    expect(homeComponent.toJSON()).toMatchSnapshot();
  });

  //Home component should route to the difficulty selection menu when the 'Play New Game' button is selected
  //if a game does not currently exist.
  it(`routes to difficulty selection menu when pressing 'Play New Game' if a game does not currently exist.`, () => {
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    const curHistory = history.length;
    //Press 'Play New Game' button.
    fireEvent.press(newGameButton);
    //History length should increase by 1.
    expect(history.length).toBe(curHistory + 1);
    //Location pathname should be 'DifficultySelection'.
    expect(history.location.pathname).toBe('/DifficultySelection')
  });

  //Home component should not route to GameDisplay component when pressing 'Load Game' if a game does not exist.
  it(`does not route to GameDisplay when pressing 'Load Game' if a game does not exist.`, () => {
    const {getByTestId} = homeComponent;
    const loadGameButton = getByTestId('loadGameButton');
    const curHistory = history.length;
    //Press 'Load Game Button'.
    fireEvent.press(loadGameButton);
    //History length should not change.
    expect(history.length).toBe(curHistory);
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
    //Popup should be visible.
    expect(loadGamePopUp.props.visible).toBeTruthy();
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

  //Home component should route to GameDisplay component when pressing the 'Load Game' button if a current game exists.
  it(`routes to GameDisplay when pressing 'Load Game' if a game does exist.`, () => {
    const {getByTestId} = homeComponent;
    const loadGameButton = getByTestId('loadGameButton');
    const curHistory = history.length;
    expect(history.length).toBe(curHistory);
    //Location pathname should initially be 'DifficultySelection'.
    expect(history.location.pathname).toBe('/DifficultySelection')
    //Press 'Load Game' button.
    fireEvent.press(loadGameButton);
    //History length should increase by 1.
    expect(history.length).toBe(curHistory + 1);
    //Location pathname should be 'GameDisplay'.
    expect(history.location.pathname).toBe('/GameDisplay')
  });
  
  //Home component should not immediately route to DifficultySelection component if a game exists.
  it(`does not route to difficulty selection menu when pressing 'Play New Game' if a game currently exists.`, () => {
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    const curHistory = history.length;
    expect(history.length).toBe(curHistory);
    //Location pathname should initially be 'GameDisplay'.
    expect(history.location.pathname).toBe('/GameDisplay')
    //Press 'Play New Game'.
    fireEvent.press(newGameButton);
    //History length should remain the same.
    expect(history.length).toBe(curHistory);
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
  });

  //Home component should route to difficulty selection menu when the 'yes' button is selected within the prompt.
  it(`should route to the difficulty selection menu when the 'yes' button is selected on the 'Play New Game' popup.`, () =>{
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    const newGamePopUp = getByTestId('newGamePopUp');
    const yesButton = getByTestId('newGamePopUpYes');
    const curHistory = history.length;
    expect(history.length).toBe(curHistory);
    //Location pathname should initially be 'GameDisplay'.
    expect(history.location.pathname).toBe('/GameDisplay');
    //Press 'Play New Game' button.
    fireEvent.press(newGameButton);
    //Press 'Yes' button.
    fireEvent.press(yesButton);
    //History length should increase by 1.
    expect(history.length).toBe(curHistory + 1);
    //Location pathname should be 'DifficultySelection'.
    expect(history.location.pathname).toBe('/DifficultySelection');
  })

  //When the 'No' button is selected on the prompt it should disappear and not route to another component.
  it(`prompt should disappear and not route to any other component when the 'No' button is selected on the prompt.`, async ()=>{
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    const newGamePopUp = getByTestId('newGamePopUp');
    const noButton = getByTestId('newGamePopUpNo');
    const curHistory = history.length;
    //Press 'Play New Game' button.
    fireEvent.press(newGameButton);
    //Press 'No' button on the 'Play New Game'.
    fireEvent.press(noButton);
    //Wait for component to update after press event.
    await waitFor(() =>{
      //'Play New Game' prompt should not be visible.
      expect(getByTestId('newGamePopUp').props.visible).toBeFalsy();
      //History length should remain the same.
      expect(history.length).toBe(curHistory);
      //Location pathname should initially be 'DifficultySelection'.
      expect(history.location.pathname).toBe('/DifficultySelection');
    })
  })
  
});
