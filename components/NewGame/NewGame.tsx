import React from "react";
import { Button,StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from 'react-router-native';

import Board from './Board';
import SelectionBar from './SelectionBar';
import Timer from './Timer';
import Watch from './Watch';


export default function NewGame({history}:RouteComponentProps) {

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Button
          title = 'Main Menu'
          onPress = {() => history.push('/')}
        />
        <Timer/>
      </View>
      <Board/>
      <SelectionBar/>
      <Watch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  topBar: {
    position:'absolute',
    top:50,
    left:0,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
});