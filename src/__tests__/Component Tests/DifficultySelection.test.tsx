import React from 'react';
import { Text,View } from 'react-native';
import renderWithRedux from './renderWithRedux';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';
import { act, cleanup, fireEvent, render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {GameState} from '../../../types';
import {RootState} from '../../state/reducers/index';

import DifficultySelection from '../../../components/DifficultySelection';

//Mock props for routing.
const history = createMemoryHistory();
const path = `/route/:id`;
const match: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: '1' }
};
const location = createLocation(match.url);

//DifficultySelection component test.
describe('DifficultySelection',() =>{

  //Mock store object for state management.
  const mockStore:RootState = {};

  //Render DifficultySelection component with routing and redux.
  let difficultySelection:any;
  beforeEach(async() =>{
    await waitFor(() =>{
      difficultySelection = renderWithRedux(
        <DifficultySelection
          history={history}
          location={location}
          match={match}
        />,
        {
          initialState:mockStore
        }
      );
    })
  })

  //Cleanup after each test.
  afterEach(cleanup);

  //Component renders without crashing.
  it('renders without crashing',async()=>{
    expect(difficultySelection.toJSON()).toMatchSnapshot();
  })

  //Test easy selection.
  it(`correctly initializes board when the easy button is selected`, async ()=>{
    const {getByTestId, store} = difficultySelection;
    const easyButton = getByTestId('easyButton');
    const curHistory = history.length;
    //Press easy button
    fireEvent.press(easyButton);
    await waitFor(()=>{
      //History length should increase by 1.
      expect(history.length).toBe(curHistory + 1);
      //Location pathname should be 'GameDisplay'.
      expect(history.location.pathname).toBe('/GameDisplay');
      //Determine the amount of non-null values on the initialized board.
      const boardState:(number | null)[][] = store.getState().board;
      let valueCount:number = 0;
      boardState.forEach((arr) =>{
        arr.forEach((num)=>{
          if(num !== null) valueCount += 1;
        })
      })
      console.log('easy:',valueCount)
      //Board should be initialized with (37,46) non-null values.
      expect(valueCount >= 37 && valueCount <= 46).toBeTruthy();
    })
  })

  //Test medium selection.
  it(`correctly initializes board when the medium button is selected`, async ()=>{
    const {getByTestId, store} = difficultySelection;
    const mediumButton = getByTestId('mediumButton');
    const curHistory = history.length;
    //Press medium button.
    fireEvent.press(mediumButton);
    await waitFor(()=>{
      //History length should increase by 1.
      expect(history.length).toBe(curHistory + 1);
      //Location pathname should be 'GameDisplay'.
      expect(history.location.pathname).toBe('/GameDisplay');
      //Determine the amount of non-null values on the initialized board.
      const boardState:(number | null)[][] = store.getState().board;
      let valueCount:number = 0;
      boardState.forEach((arr) =>{
        arr.forEach((num)=>{
          if(num !== null) valueCount += 1;
        })
      })
      console.log('medium:',valueCount)
      //Board should be initialized with (27,36) non-null values.
      expect(valueCount >= 27 && valueCount <= 36).toBeTruthy();
    })
  })

  //Test hard selection.
  it(`correctly initializes board when the hard button is selected`, async ()=>{
    const {getByTestId, store} = difficultySelection;
    const hardButton = getByTestId('hardButton');
    const curHistory = history.length;
    //Press hard button
    fireEvent.press(hardButton);
    await waitFor(()=>{
      //History length should increase by 1.
      expect(history.length).toBe(curHistory + 1);
      //Location pathname should be 'GameDisplay'.
      expect(history.location.pathname).toBe('/GameDisplay');
      //Determine the amount of non-null values on the initialized board.
      const boardState:(number | null)[][] = store.getState().board;
      let valueCount:number = 0;
      boardState.forEach((arr) =>{
        arr.forEach((num)=>{
          if(num !== null) valueCount += 1;
        })
      })
      console.log('hard:',valueCount)
      //Board should be initialized with (19,26) non-null values.
      expect(valueCount >= 19 && valueCount <= 26).toBeTruthy();
    })
  })

  //Test extreme selection.
  it(`correctly initializes board when the extreme button is selected`, async ()=>{
    const {getByTestId, store} = difficultySelection;
    const extremeButton = getByTestId('extremeButton');
    const curHistory = history.length;
    //Press hard button
    fireEvent.press(extremeButton);
    await waitFor(()=>{
      //History length should increase by 1.
      expect(history.length).toBe(curHistory + 1);
      //Location pathname should be 'GameDisplay'.
      expect(history.location.pathname).toBe('/GameDisplay');
      //Determine the amount of non-null values on the initialized board.
      const boardState:(number | null)[][] = store.getState().board;
      let valueCount:number = 0;
      boardState.forEach((arr) =>{
        arr.forEach((num)=>{
          if(num !== null) valueCount += 1;
        })
      })
      console.log('extremeButton:',valueCount)
      //Board should be initialized with 18 non-null values.
      expect(valueCount).toBe(18);
    })
  })

  //Test main menu button.
  it(`should route to the home screen when the 'Main Menu' button is selected`, ()=>{
    const {getByTestId} = difficultySelection;
    const mainMenuButton = getByTestId('mainMenuButton');
    const curHistory = history.length;
    //Press 'Main Menu' button.
    fireEvent.press(mainMenuButton);
    //History length should increase by 1.
    expect(history.length).toBe(curHistory + 1);
    //Location pathname should be '/'.
    expect(history.location.pathname).toBe('/');
  })

})