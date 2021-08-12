import React, {useEffect} from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../../src/state/index';

import {IProps} from '../../types';
export default function GridSquare(props:IProps) {

  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const {row,col} = props;

  return (
    <View style={styles.container}>
      <View style={styles.gridSquare}>
        <TouchableWithoutFeedback
        >
          <Text>
            {board[row][col] === null? String(''):String(board[row][col])}
          </Text>
        </TouchableWithoutFeedback>
      </View>
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