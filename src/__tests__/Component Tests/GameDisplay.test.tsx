import React from 'react';
import { Text,View } from 'react-native';
import renderWithRedux from './renderWithRedux';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';
import { act, fireEvent, render, waitFor} from '@testing-library/react-native';
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
const board: (number | null)[][] = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9],
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

  //Component renders without crashing.
  it('renders without crashing',async()=>{
    expect(gameDisplayComponent.toJSON()).toMatchSnapshot();
  })

  //If board is not complete, winner animation should not be rendered.
  it(`should not render the Winner component if the board is not complete`, ()=>{
    //Simulate a value being inputted on the board.
    // const newBoard:(number | null)[][] = board.map((arr:(number|null)[])=> [...arr])
    // newBoard[0][2] = 1;
    // const {store} = gameDisplayComponent;
    // console.log(store.getState())
  })

})
