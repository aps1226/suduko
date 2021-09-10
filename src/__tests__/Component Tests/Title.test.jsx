import React from 'react';
import { Text,View } from "react-native";
import { fireEvent, render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {GameState} from '../../../types';
import {RootState} from '../../state/reducers/index';

import Title from '../../../components/Title';
//Title component test.
describe('Title', () =>{
  it('renders without crashing', () => {
    const titleComponent = render(<Title/>).toJSON();
    expect(titleComponent).toMatchSnapshot();
  });
});