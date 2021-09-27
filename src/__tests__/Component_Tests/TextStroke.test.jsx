import React from 'react';
import { Text,View } from "react-native";
import { render } from '@testing-library/react-native';
import TextStroke from '../../components/TextStroke';

//TextStroke component test.
describe('TextStroke', () =>{
  //Component renders without crashing.
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