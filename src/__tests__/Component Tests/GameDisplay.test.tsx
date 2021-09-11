import React from 'react';
import { Text,View } from 'react-native';
import renderWithRedux from './renderWithRedux';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';
import { act, cleanup, fireEvent, render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {Colors,GameState} from '../../../types';
import {RootState} from '../../state/reducers/index';

import GameDisplay from '../../../components/GameDisplay';

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

//Hard coded state properties.
const board: (number | null)[][] =[ 
  [ 3, 1, 6, 5, 7, 8, 4, 9, 2 ],
  [ 5, 2, 9, 1, 3, 4, 7, 6, 8 ],
  [ 4, 8, 7, 6, 2, 9, 5, 3, 1 ],
  [ 2, 6, 3, 4, 1, 5, 9, 8, 7 ],
  [ 9, 7, 4, 8, 6, null, 1, 2, 5 ],
  [ 8, 5, 1, 7, 9, 2, 6, 4, 3 ],
  [ 1, 3, 8, 9, 4, 7, 2, null, 6 ],
  [ 6, 9, 2, 3, 5, 1, 8, 7, 4 ],
  [ 7, 4, 5, 2, 8, 6, 3, 1, 9] 
];

const colors:Colors = {
  1:['transparent','black'],
  2:['transparent','black'],
  3:['transparent','black'],
  4:['transparent','black'],
  5:['transparent','black'],
  6:['transparent','black'],
  7:['transparent','black'],
  8:['transparent','black'],
  9:['transparent','black'],
  'Selection_1':'#3297FD',
  'Selection_2':'transparent',
  'Selection_3':'transparent',
  'Selection_4':'transparent',
  'Selection_5':'transparent',
  'Selection_6':'transparent',
  'Selection_7':'transparent',
  'Selection_8':'transparent',
  'Selection_9':'transparent',
  'gradient': [ 
    "#a37e5c", "#b89372","#c8a484","#dcb999", "#d3af8f","#d9b696","#ceaa89","#d2ae8d","#b38e6d","#aa8563",
    "#a37e5c", "#b89372","#c8a484","#dcb999", "#d3af8f","#d9b696","#ceaa89","#d2ae8d","#b38e6d","#aa8563",
    "#a37e5c", "#b89372","#c8a484","#dcb999", "#d3af8f","#d9b696","#ceaa89","#d2ae8d","#b38e6d","#aa8563",
    "#a37e5c", "#b89372","#c8a484","#dcb999", "#d3af8f","#d9b696","#ceaa89","#d2ae8d","#b38e6d","#aa8563",
    "#a37e5c", "#b89372","#c8a484","#dcb999", "#d3af8f","#d9b696","#ceaa89","#d2ae8d","#b38e6d","#aa8563"
  ]
}

//GameDisplay component test.
describe('GameDisplay',() =>{

  //Mock store object for state management.
    //Hard code properties that are initialized randomly for
    //snapshot comparison.
  const mockStore:RootState = {
    'board':board,
    'colors':colors
  };

  //Mock switch component.
  jest.mock('react-native/Libraries/Components/Switch/Switch', () => {
    const mockComponent = require('react-native/jest/mockComponent')
    return mockComponent('react-native/Libraries/Components/Switch/Switch')
  })

  //Render GameDisplay component with routing and redux.
  let gameDisplayComponent:any;
  beforeEach(async() =>{
    await waitFor(() =>{
      gameDisplayComponent = renderWithRedux(
        <GameDisplay
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
    expect(gameDisplayComponent.toJSON()).toMatchSnapshot();
  })

  //If board is not complete, winner animation should not be rendered.
  it(`should not render the Winner component if the board is not complete`, async ()=>{
    //Simulate a value being inputted on the board.
    const {getByTestId,store,queryByTestId} = gameDisplayComponent;
    const selectionSquare5 = getByTestId('selectionSquare_5');
    const gridSquare67 = getByTestId('gridSquare_67');
    const winnerAnimation = queryByTestId('winnerAnimation');
    //Select selection square for 5 value.
    fireEvent.press(selectionSquare5);
    //Input a 5 for the grid square at location row 6, column 7.
    fireEvent.press(gridSquare67);
    //Winner animation should not be found.
    expect(winnerAnimation).toEqual(null);
  })

  //If board is complete, winner animation should be rendered.
  it(`should render the Winner component if the board is complete`, async ()=>{
    const {getByTestId,store,queryByTestId} = gameDisplayComponent;
    const selectionSquare5 = getByTestId('selectionSquare_5');
    const selectionSquare3 = getByTestId('selectionSquare_3');
    const gridSquare67 = getByTestId('gridSquare_67');
    const gridSquare45 = getByTestId('gridSquare_45');
    //Select selection square for 5 value.
    fireEvent.press(selectionSquare5);
    //Input a 5 for the grid square at location row 6, column 7.
    fireEvent.press(gridSquare67);
    //Select selection square for 3 value.
    fireEvent.press(selectionSquare3);
    //Input a 3 for the grid square at location row 4, column 5.
    fireEvent.press(gridSquare45);
    //Winner animation should not be found.
    await waitFor(()=>{
      expect(queryByTestId('winnerAnimation')).toBeTruthy();
    })
  })

  //If board is completed, pressing the screen should route to the main menu.
  it(`should route to the main menu if the board is completed and the screen is, then, pressed`, async ()=>{
    const {getByTestId} = gameDisplayComponent;
    const selectionSquare5 = getByTestId('selectionSquare_5');
    const selectionSquare3 = getByTestId('selectionSquare_3');
    const gridSquare67 = getByTestId('gridSquare_67');
    const gridSquare45 = getByTestId('gridSquare_45');
    const curHistory = history.length;
    //Select selection square for 5 value.
    fireEvent.press(selectionSquare5);
    //Input a 5 for the grid square at location row 6, column 7.
    fireEvent.press(gridSquare67);
    //Select selection square for 3 value.
    fireEvent.press(selectionSquare3);
    //Input a 3 for the grid square at location row 4, column 5.
    fireEvent.press(gridSquare45);
    //Winner animation should not be found.
    await waitFor(()=>{
      const winnerAnimationPressable = getByTestId('winnerAnimationPressable');
      fireEvent.press(winnerAnimationPressable);
      //History length should increase by 1.
      expect(history.length).toBe(curHistory + 1);
      //Location pathname should be '/'.
      expect(history.location.pathname).toBe('/');
    })
  })

  //Test that color highlighting by value works.
  it(`should allow for color highlighting based on value`, async ()=>{
    const {getByTestId, getAllByTestId, store} = gameDisplayComponent;
    const gridSquare00 = getByTestId('gridSquare_00');
    const gridSquareView3Arr = getAllByTestId('gridSquareView_3');
    const gridSquareText3Arr = getAllByTestId('gridSquareText_3');
    //Simulate pressing square at location row 0, column 0.
      //Value is hard coded to be a 3.
    fireEvent.press(gridSquare00);
    await waitFor(()=>{
      //Test that grid squares with values of 3 have been correctly highlighted.
      expect(store.getState().colors['3'][0] === '#008000' && store.getState().colors['3'][1] === '#008000').toBeTruthy();
      gridSquareView3Arr.map((comp:JSX.Element) => expect(comp.props.style.backgroundColor).toBe('#008000'))
      gridSquareText3Arr.map((comp:JSX.Element) => expect(comp.props.style.color).toBe('#008000'))
    })
  })

  //Test that note entry works.
  it(`should allow for note entry for square thats do not have an inputted value`, async ()=>{
    const {getByTestId,store} = gameDisplayComponent;
    //Square with a null value.
    const entryModeToggle = getByTestId('entryModeToggle');
    const gridSquare67 = getByTestId('gridSquare_67');
    //Change entry mode to 'Notes' by pressing the toggle switch.
    fireEvent(entryModeToggle,'valueChange',false);
    [1,2,3,5,6,7,8,9].forEach((num,index) =>{
      let selection = getByTestId(`selectionSquare_${num}`);
      //Press selection value.
      fireEvent.press(selection);
      //Press square with null value to enter note.
      fireEvent.press(gridSquare67);
      //Assert that note state value was updated.
      expect(store.getState().notes['67'][index]).toBe(num);
    })
  })

  //Test main menu button.
  it(`should route to the main menu when the 'Main Menu' button is selected`,() =>{
    const {getByTestId} = gameDisplayComponent;
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