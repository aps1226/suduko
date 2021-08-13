import React, {useEffect} from "react";
import { Alert,StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../../src/state/index';
import {isValidSudoku,isCompleted} from '../../src/state/boardController'
import {IProps} from '../../types';
import {RootState} from '../../src/state/reducers/index';
export default function GridSquare(props:IProps) {
  //Redux-state.
  const {board,colors,selection} = useSelector((state:RootState) => state);
  const dispatch = useDispatch();
  //Redux action creators.
  const { changeColor, setSelection, setBoard } = bindActionCreators(actionCreators,dispatch);
  //Passed row and column props for respective square.
  const {row,col} = props;
  //Color for respective square based on current value.
  const colorIndex:string = String(board[row][col]);
  const color:string = colors[colorIndex];
  const handleOnPress = () =>{
    //If value of board selection is not null
    //change the color of the respective value to green for 
    //all displayed values on the board.
    if(board[row][col])changeColor(String(board[row][col]));
    //Else, determine if current selection placed at the respective
    //location creates a valid board.
    else if(selection){
      const newBoard:(number|null)[][] = board.map((arr:(number|null)[])=> [...arr]);
      newBoard[row][col] = Number(selection);
      //If board would be valid, modify board state.
      if(isValidSudoku(newBoard.map((arr:(number|null)[])=> [...arr]))) setBoard(newBoard);
    }
  }

  useEffect(() =>{
    if(isCompleted(board)){
      console.log('completed');
    }
  },[board])
  return (
    <View style={styles.container}>
      <TouchableHighlight
          onPress = {handleOnPress}
      >
        <View 
          style={{
            borderStyle:'solid',
            width: 35,
            height: 35,
            borderWidth: 5,
            borderLeftColor: 'rgba(255, 255, 255, 0.20)',
            borderTopColor: 'rgba(255, 255, 255, 0.33)',
            borderRightColor: 'rgba(0, 0, 0, 0.15)',
            borderBottomColor: 'rgba(0, 0, 0, 0.5)',
            alignItems:'center'
          }}
        >
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
  }
});