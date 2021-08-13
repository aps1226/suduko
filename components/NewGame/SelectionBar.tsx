import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Board from './Board';
import SelectionSquare from './SelectionSquare';

import {IProps} from '../../types';

export default function SelectionBar(props:IProps) {

  const onRender = () =>{
    const elements:any = [];
    for(let i = 1; i <= 9;i++){
      elements.push(
        <View
          key = {String(i)}
        >
          <SelectionSquare
            number = {i}
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