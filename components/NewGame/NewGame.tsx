import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Board from './Board';
import SelectionBar from './SelectionBar';
import Timer from './Timer';


export default function NewGame() {

  return (
    <View style={styles.container}>
      <Timer/>
      <Board/>
      <SelectionBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
});