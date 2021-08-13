import React, {useEffect} from "react";
import { Alert,StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../../src/state/index';

import {isSolvable} from '../../src/state/initializeBoard'
import {IProps} from '../../types';
export default function GridSquare(props:IProps) {

  const {board,colors,selection} = useSelector((state) => state);
  const dispatch = useDispatch();
  const { changeColor, setSelection, setBoard } = bindActionCreators(actionCreators,dispatch);

  const {row,col} = props;

  const color:string = colors[board[row][col]];

  const handleOnPress = () =>{
    if(board[row][col]){
      changeColor(String(board[row][col]));
    } else if(selection){
      const newBoard:(number|null)[][] = board.map((arr:(number|null)[])=> [...arr]);
      newBoard[row][col] = Number(selection);
      if(isSolvable(newBoard)) setBoard(newBoard);
    }
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
          onPress = {handleOnPress}
      >
        <View style={styles.gridSquare}>
            <Text
              style = {{color:color}}
            >
              {board[row][col] === null? String(''):String(board[row][col])}
            </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  gridSquare:{
    borderStyle:'solid',
    width: 35,
    height: 35,
    borderWidth: 5,
    borderLeftColor: 'rgba(255, 255, 255, 0.20)',
    borderTopColor: 'rgba(255, 255, 255, 0.33)',
    borderRightColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    alignItems:'center'
  }
});