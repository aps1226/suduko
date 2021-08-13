import React,{ useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from 'react-router-native';
import SubBox from "./SubBox";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../../src/state/index'; 
import {RootState} from '../../src/state/reducers/index';
import {generateBoard,initBoard} from '../../src/state/boardController'
export default function DifficultySelection({history}:RouteComponentProps) {
  //Redux difficulty state.
  const {board,difficulty} = useSelector((state:RootState) => state);
  //Redux dispatcher.
  const dispatch = useDispatch();
  //Redux action to set difficulty level.
  const { setBoard,setDifficulty } = bindActionCreators(actionCreators,dispatch);
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
    //Route to board display
    history.push('/NewGame');
  }
  return (
    <View style={styles.container}>
      <Button
        title = 'Easy'
        onPress = {()=> handlePress(0)}
      >
      </Button>
      <Button
        title = 'Medium'
        onPress = {()=> handlePress(1)}
      >
      </Button>
      <Button
        title = 'Hard'
        onPress = {()=> handlePress(2)}
      >
      </Button>
      <Button
        title = 'Extreme'
        onPress = {()=> handlePress(3)}
      >
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  }
});