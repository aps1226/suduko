import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Board from './Board';
import SelectionSquare from './SelectionSquare';
import Toggle from './Toggle'

import {IProps} from '../../types';

export default function SelectionBar() {

  const woodPalate:String[] = ["#a37e5c", "#b89372","#c8a484","#dcb999", "#d3af8f","#d9b696","#ceaa89","#d2ae8d","#b38e6d","aa8563"];
  const gradient:String[] = [];
  for(let i = 0; i < 100; i++){
    gradient.push(woodPalate[Math.round(Math.random()*10)])
  }
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