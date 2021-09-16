import React,{ useEffect } from "react";
import { Button, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from 'react-router-native';
import { useSelector, useDispatch } from "react-redux"; 
import { IProps,Notes,Timer as TimerType } from '../types';
import { RootState } from '../src/state/reducers/index';
import Board from './Board';
import SelectionBar from './SelectionBar';
import Timer from './Timer';
import Winner from './Winner';

export default function GameDisplay({history}:RouteComponentProps) {
  
  //Redux-state.
  const {gameState} = useSelector((state:RootState) => state);
  const {isCompleted,gameExists} = gameState;
  const dispatch = useDispatch();
  
  //Function checks gameState state prop to determine if the board
  //has been completed.
    //If it has, render Winner component.
  const boardCompleted = ():JSX.Element|void =>{
    if(isCompleted){
      //Return winner animation.
      return (
        <View style = {styles.winnerContainer}>
          <Pressable
            onPress = {() => history.push('/')}
            testID = 'winnerAnimationPressable'
          >
            <Winner/>
          </Pressable>
        </View>
      );
    }else return;
  }

  //If game board is completed, return to home page after 7 seconds.
  useEffect(() =>{
    if(isCompleted){
      //Return to main menu after 7 seconds.
      setTimeout(() => history.push('/'),7000);
    }
  },[gameState]);
  
  return (
    <View 
      style={styles.container}
      testID = 'gameDisplay'
    >
      <View style={styles.topBar}>
        <Pressable
          style = {styles.button}
          onPress = {() => history.push('/')}
          testID = 'mainMenuButton'
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
      {boardCompleted()}
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
    ...Platform.select({
      ios:{
        elevation:3
      },
      android:{
        elevation:20
      }
    }),
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
  winnerContainer:{
    position:'absolute',
    ...Platform.select({
      ios:{
        bottom:0
      },
      android:{
        bottom:'2.5%'
      }
    }),
    width:'100%',
    height:'100%',
  }
});