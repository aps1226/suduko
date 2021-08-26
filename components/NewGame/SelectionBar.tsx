import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Board from './Board';
import SelectionSquare from './SelectionSquare';
import Toggle from './Toggle'

import {IProps} from '../../types';

export default function SelectionBar() {

  const woodPalate:String[] = ["#ffb366", "#f19d4a","#cc853e","#ed9742", "#d1853a","#eb953e","#c47c34","#eb943d","#c77d34"];
  const gradient:String[] = Array(9).fill(woodPalate).reduce((acc,curVal) =>{
    return acc.concat(curVal)
  },[]);

  const onRender = ():JSX.Element[] =>{
    const elements:JSX.Element[] = [];
    for(let i = 1; i <= 9;i++){
      elements.push(
        <View
          key = {`SelectionSquare_${i}`}
        >
          <SelectionSquare
            number = {i}
            row = {0}
            col = {0}
          />
        </View>
      )
    }
    return elements;
  }

  return (
    <LinearGradient
      colors={gradient}
      start={[0, 0]}
      end = {[1,1]}
      style ={styles.container}
    > 
        <View style={styles.selectionContainer}>
          {onRender()}
        </View>
        <Toggle/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop:30,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal:18,
    borderRadius: 4,
    elevation: 3,
    shadowColor:'rgba(0,0,0,0.35)',
    shadowOffset:{width:-4,height:-4},
    shadowOpacity:0.75,
    shadowRadius:2
  },
  selectionContainer: {
    flexDirection:'row',
    marginBottom:10
  },
});