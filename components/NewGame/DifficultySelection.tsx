import React,{ useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from 'react-router-native';
import SubBox from "./SubBox";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../../src/state/index'; 
import {RootState} from '../../src/state/reducers/index';
export default function DifficultySelection({history}:RouteComponentProps) {
  //Redux difficulty state.
  const {difficulty} = useSelector((state:RootState) => state);
  //Redux dispatcher.
  const dispatch = useDispatch();
  //Redux action to set difficulty level..
  const { setDifficulty } = bindActionCreators(actionCreators,dispatch);
  //Handle selection of difficulty.
    //Set difficulty level based on selection.
    //Route to new game.
  const handlePress = (val:number):void =>{
    setDifficulty(val);
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