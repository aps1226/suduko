import React from "react";
import { StyleSheet, Text, View } from "react-native";

import GridSquare from "./GridSquare";

import {IProps} from '../../types';
export default function SubBox(props:IProps) {

  const { row, col } = props;

  return (
    <View style={styles.container}>
      <View style = {styles.row}>
        <GridSquare
          row = {0 + row}
          col = {0 + col}
        />
        <GridSquare
          row = {0 + row}
          col = {1 + col}
        />
        <GridSquare
          row = {0 + row}
          col = {2 + col}
        />
      </View>
      <View style = {styles.row}>
        <GridSquare
          row = {1 + row}
          col = {0 + col}
        />
        <GridSquare
          row = {1 + row}
          col = {1 + col}
        />
        <GridSquare
          row = {1 + row}
          col = {2 + col}
        />
      </View>
      <View style = {styles.row}>
      <GridSquare
          row = {2 + row}
          col = {0 + col}
        />
        <GridSquare
          row = {2 + row}
          col = {1 + col}
        />
        <GridSquare
          row = {2 + row}
          col = {2 + col}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection:'row',
  }
});