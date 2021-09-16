import React from 'react';
import renderWithRedux from '../renderWithRedux';
import { createMemoryHistory, createLocation, MemoryHistory, Location} from 'history';
import { match } from 'react-router';
import { act, cleanup, fireEvent, render, waitFor} from '@testing-library/react-native';
import { RenderReduxAPI, MockStore } from '../../../types';
import {RootState} from '../../state/reducers/index';
import DifficultySelection from '../../../components/DifficultySelection';

//Mock props for routing.
const history = createMemoryHistory();
const path:string = `/route/:id`;
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
  const mockStore:MockStore = {};
  //Render DifficultySelection component with routing and redux.
  let difficultySelection:RenderReduxAPI;
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

  afterEach(cleanup);

  //Component renders without crashing.
  it('renders without crashing',()=>{
    expect(difficultySelection.toJSON()).toMatchSnapshot();
  })

  //Test easy selection.
  it(`correctly initializes board when the easy button is selected`, async ()=>{
    const {getByTestId, store} = difficultySelection;
    const easyButton = getByTestId('easyButton');
    const curHistory:number = history.length;
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
      //Board should be initialized with (37,46) non-null values.
      expect(valueCount >= 37 && valueCount <= 46).toBeTruthy();
    })
  })

  //Test medium selection.
  it(`correctly initializes board when the medium button is selected`, async ()=>{
    const {getByTestId, store} = difficultySelection;
    const mediumButton = getByTestId('mediumButton');
    const curHistory:number = history.length;
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
      //Board should be initialized with (19,26) non-null values.
      expect(valueCount >= 19 && valueCount <= 26).toBeTruthy();
    })
  })

  //Test extreme selection.
  it(`correctly initializes board when the extreme button is selected`, async ()=>{
    const {getByTestId, store} = difficultySelection;
    const extremeButton = getByTestId('extremeButton');
    const curHistory:number = history.length;
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