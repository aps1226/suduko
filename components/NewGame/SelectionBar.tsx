import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Board from './Board';
import SelectionSquare from './SelectionSquare';
import Toggle from './Toggle'

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
    <View style ={styles.container}>
      <View style={styles.selectionContainer}>
        {onRender()}
      </View>
      <Toggle/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    alignItems:'center',
    marginTop:25
  },
  selectionContainer: {
    flexDirection:'row',
    marginBottom:10
  },
});