import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Board from './Board';
import SelectionSquare from './SelectionSquare';

import {IProps} from '../../types';

export default function SelectionBar() {

  const onRender = ():JSX.Element[] =>{
    const elements:JSX.Element[] = [];
    for(let i = 1; i <= 9;i++){
      elements.push(
        <View
          key = {`SelectionSquare_${i}`}
        >
          <SelectionSquare
            number = {i}
            row = {0}
            col = {0}
          />
        </View>
      )
    }
    return elements;
  }

  return (
    <View style={styles.container}>
      {onRender()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginTop:25
  },
});