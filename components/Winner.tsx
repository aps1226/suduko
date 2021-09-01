import React, {useEffect, useState} from "react";
import { Alert, ImageBackground, Pressable, StyleSheet, TouchableHighlight, Text, View } from "react-native";
import ConfettiCannon from 'react-native-confetti-cannon';
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../src/state/index';
import {IProps,Notes} from '../types';
import {RootState} from '../src/state/reducers/index';

import TextStroke from './TextStroke';
export default function Winner() {
  //Redux-state.
  const {board,colors,selection, entryMode,notes} = useSelector((state:RootState) => state);
  const dispatch = useDispatch();
  //Redux action creators.
  const { changeColor, setSelection, setBoard,setNotes } = bindActionCreators(actionCreators,dispatch);

  return (
    <View style = {styles.container}>
      <View style = {styles.textContainer}>
        <TextStroke stroke = {2} color = {'white'}>
          <Text
            style = {styles.winnerText}
          >
            Winner!
          </Text>
        </TextStroke>
      </View>
      <ConfettiCannon 
        count={500} 
        origin={{x:0, y:0}} 
        fadeOut = {true}
        explosionSpeed = {0}
        fallSpeed = {5000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%'
  },
  textContainer:{
    marginTop:'75%',
    alignItems:'center',
    elevation:3,
    zIndex:1
  },
  winnerText:{
    fontSize:80,
    color:'#1E90FF',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
});