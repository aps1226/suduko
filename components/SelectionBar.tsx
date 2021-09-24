import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Board from './Board';
import SelectionSquare from './SelectionSquare';
import Toggle from './Toggle'
import { useSelector, useDispatch } from "react-redux";
import { IProps } from '../types';
import { RootState } from '../src/state/reducers/index';

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
      <View style = {styles.container}>
        <LinearGradient
          colors={colors['gradient'] as string[]}
          start={[0, 0.5]}
          end = {[1,0.5]}
          style = {styles.linearGradient}
        > 
            <View style={styles.selectionContainer}>
              {onRender()}
            </View>
            <Toggle/>
        </LinearGradient>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    shadowColor:'rgba(0,0,0,0.35)',
    shadowOffset:{width:-4,height:-4},
    shadowOpacity:0.75,
    shadowRadius:4,
    ...Platform.select({
      ios:{
        elevation:5
      },
      android:{
        elevation:20
      }
    })
  },
  linearGradient: {
    alignItems: 'center',
    marginTop:30,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal:18,
    borderRadius:10
  },
  selectionContainer: {
    flexDirection:'row',
    marginBottom:10
  },
});