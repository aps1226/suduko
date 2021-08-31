import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Board from './Board';
import SelectionSquare from './SelectionSquare';
import Toggle from './Toggle'
import { useSelector, useDispatch } from "react-redux";
import {IProps} from '../types';
import {RootState} from '../src/state/reducers/index';

export default function SelectionBar() {

  //Redux-state.
    //Get color gradient for selection bar container.
  const {colors} = useSelector((state:RootState) => state);
  const dispatch = useDispatch();

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
        colors={colors['gradient']}
        start={[0, 0.5]}
        end = {[1,0.5]}
        style = {styles.container}
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
    shadowOpacity:0.5,
    shadowRadius:4
  },
  selectionContainer: {
    flexDirection:'row',
    marginBottom:10
  },
});