import React,{ useEffect } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from 'react-router-native';
import SubBox from "./SubBox";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../src/state/index'; 
import {RootState} from '../src/state/reducers/index';
import {generateBoard,initBoard} from '../src/state/boardController';

import {Colors,Timer,GameState} from '../types';
export default function DifficultySelection({history}:RouteComponentProps) {
  
  //Redux state.
  const {
    board,
    difficulty,
    timer,
    colors,
    gameState
  } = useSelector((state:RootState) => state);
  const {isCompleted,gameExists} = gameState;
  //Redux dispatcher.
  const dispatch = useDispatch();
  //Redux actions.
  const { 
    setBoard, 
    setDifficulty, 
    setTimer, 
    defaultColors, 
    defaultNotes, 
    setGameState
  } = bindActionCreators(actionCreators,dispatch);
  
  //Handle selection of difficulty.
    //Set difficulty level based on selection.
    //Route to new game.
  const handlePress = (val:number):void =>{
    //Set difficulty state.
    setDifficulty(val);
    //Initialize game board.
    generateBoard(board);
    const gameBoard:(number|null)[][] = initBoard(board.map((arr:(number|null)[]) => [...arr]),val);
    setBoard(gameBoard);
    //Revert other properties of state to default.
      //Default timer state prop.
    const newTimerState:Timer = {'time':0,'decrementor':1};
    setTimer(newTimerState);
      //Default colors state prop.
    defaultColors();
      //Default notes state prop.
    defaultNotes();
      //Set gameExists index of gameState prop to true to indicate that
      //a current game exists.
    setGameState({'isCompleted':false,'gameExists':true});
    //Route to board display
    history.push('/GameDisplay');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable
          style = {styles.mainMenuButton}
          onPress = {() => history.push('/')}
        >
          <Text style = {styles.text}>
            Main Menu
          </Text>
        </Pressable>
      </View>
      <Pressable
        style = {styles.button}
        onPress = {()=> handlePress(0)}
      >
        <Text style = {styles.text}>Easy</Text>
      </Pressable>
      <Pressable
        style = {styles.button}
        onPress = {()=> handlePress(1)}
      >
        <Text style = {styles.text}>Medium</Text>
      </Pressable>
      <Pressable
        style = {styles.button}
        onPress = {()=> handlePress(2)}
      >
        <Text style = {styles.text}>Hard</Text>
      </Pressable>
      <Pressable
        style = {styles.button}
        onPress = {()=> handlePress(3)}
      >
        <Text style = {styles.text}>Extreme</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  button: {
    alignItems: 'center',
    marginTop:30,
    justifyContent: 'center',
    paddingVertical: 12,
    width:150,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1E90FF',
    shadowColor:'rgba(0,0,0,0.35)',
    shadowOffset:{width:-2,height:-2},
    shadowOpacity:0.75,
    shadowRadius:2
  },
  mainMenuButton: {
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
  },
  topBar: {
    position:'absolute',
    top:50,
    left:0,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
});