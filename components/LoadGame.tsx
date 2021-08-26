import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from 'react-router-native';

import Timer from './NewGame/Timer';
import Board from './NewGame/Board';
import SelectionBar from './NewGame/SelectionBar';

export default function LoadGame({history}:RouteComponentProps) {

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable
          style = {styles.button}
          onPress = {() => history.push('/')}
        >
          <Text style = {styles.text}>
            Main Menu
          </Text>
        </Pressable>
        <View style = {styles.timerContainer}>
          <Pressable style = {styles.button}>
            <Timer/>
          </Pressable>
        </View>
      </View>
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
  topBar: {
    position:'absolute',
    top:50,
    left:0,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  timerContainer:{
    flex:1,
    alignItems:'flex-end'
  },
  button: {
    alignItems: 'center',
    marginTop:30,
    justifyContent: 'center',
    paddingVertical: 12,
    width:125,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1E90FF',
    shadowColor:'rgba(0,0,0,0.35)',
    shadowOffset:{width:-2,height:-2},
    shadowOpacity:0.75,
    shadowRadius:2
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});