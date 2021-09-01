import React,{useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../src/state/index';

import {IProps,Timer as TimerType} from '../types';
import {RootState} from '../src/state/reducers/index';

export default function Timer() {

  //Redux state.
  const {gameState, timer} = useSelector((state:RootState) => state);
  const {time, decrementor} = timer;
  const {isCompleted, gameExists} = gameState;
  const dispatch = useDispatch();
  const { setTimer } = bindActionCreators(actionCreators,dispatch);

  //Method to configure current time display.
  const onRender = ():string =>{
    let remainder:number = time;
    const tensHours:number = Math.floor(time / 36000);
    remainder %= 36000;
    const onesHours:number = Math.floor(remainder / 3600);
    remainder %= 3600;
    const tensMinutes:number = Math.floor(remainder / 600);
    remainder %= 600;
    const onesMinutes:number = Math.floor(remainder / 60);
    remainder %= 60;
    const tensSeconds:number = Math.floor(remainder / 10);
    remainder %= 10;
    const onesSeconds:number = Math.floor(remainder);
    let curTime:string = `${tensHours}${onesHours}:${tensMinutes}${onesMinutes}:${tensSeconds}${onesSeconds}`;
    return curTime;
  }

  //Update time state property every second.
  useEffect(() => {
    //Pause timer if game is over.
    if(!isCompleted){
      const countDown = setTimeout(() => {
        const newTime:number = time + decrementor;
        const newTimer:TimerType = {
          'time':newTime,
          'decrementor':1
        }
        setTimer(newTimer);
      }, 1000);
      return () => clearTimeout(countDown);
    }
  },[timer]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {onRender()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});