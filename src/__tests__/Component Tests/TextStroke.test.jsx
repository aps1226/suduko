import React from 'react';
import { Text,View } from "react-native";
import { fireEvent, render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {GameState} from '../../../types';
import {RootState} from '../../state/reducers/index';

import TextStroke from '../../../components/TextStroke';

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