import React, {useEffect} from "react";
import { Alert, ImageBackground, StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../src/state/index';
import {isValidSudoku,isCompleted} from '../src/state/boardController'
import {IProps,Notes} from '../types';
import {RootState} from '../src/state/reducers/index';

export default function GridSquare(props:IProps) {
  //Redux-state.
  const {board,colors,selection, entryMode,notes} = useSelector((state:RootState) => state);
  const dispatch = useDispatch();
  //Redux action creators.
  const { changeColor, setSelection, setBoard, setNotes, setGameState } = bindActionCreators(actionCreators,dispatch);
  //Passed row and column props for respective square.
  const {row,col} = props;
  //Color for respective square based on current value.
  const colorIndex:string = String(board[row][col]);
  const color:string[] = colors[colorIndex] ? colors[colorIndex]: ['transparent','black'];
  
  const handleOnPress = ():void =>{
    //If value of board selection is not null
      //Change the color of the respective value to green for 
      //all displayed values on the board.
      //Set selection prop equal to value.
    if(board[row][col]){
      changeColor(String(board[row][col]));
      setSelection(board[row][col]);
    }
    //Else, determine if current selection placed at the respective
    //location creates a valid board.
    else if(selection && entryMode){
      const newBoard:(number|null)[][] = board.map((arr:(number|null)[])=> [...arr]);
      newBoard[row][col] = Number(selection);
      //If board would be valid, modify board state.
      if(isValidSudoku(newBoard.map((arr:(number|null)[])=> [...arr]))){
        setBoard(newBoard);
        //Check if board is completed.
          //If complete, modify gameState property to where 'isComplete' index is true.
        if(isCompleted(newBoard.map((arr:(number|null)[])=> [...arr]))){
          setGameState({'isCompleted':true,'gameExists':false});
        }
      }
    //Else if a number is selected and entryMode is set to 'notes'.
    } else if(selection && !entryMode){
      //Clone notes state. 
      const newNotes:Notes = Object.assign({},notes);
      //Create variable for note index based on current row and column position.
      const newNotesIndex:string = `${row}${col}`;
      //If current square has existing notes within the note object:
      if(newNotes[newNotesIndex]){
        //If note object at current square index does not include the current selection,
        //add the selection to the array at the index.
        if(!newNotes[newNotesIndex].includes(selection)) newNotes[newNotesIndex].push(selection)
      //Else, create the index within the note object initialized to current selection.
      } else newNotes[newNotesIndex] = [selection];
      //Set new notes state.
      setNotes(newNotes);
    }
  }

  //Function renders note for squares with null values on the board.
  const renderNotes = ():JSX.Element =>{
    //Return empty text element if notes or note[index] do not exist.
    if(!notes || !notes[`${row}${col}`]) return (<Text></Text>);
    //Initialize array of notes to be rendered from the notes object
    //with respect to the current square position.
    const notesToRender = notes[`${row}${col}`];
    //Initialize array to hold all rows of notes.
    const notesJSX:JSX.Element[] = [];
    //Initialize variable to be populated with each row of notes.
    let noteRows:JSX.Element;
    //Initialize array to hold the current row of notes.
    let curRow:JSX.Element[] = [];
    //Initialize pointer to allow iteration through notesToRender array.
    let pointer:number = 1;
    //Iterate through notesToRender:
    while(pointer <= 9){
      //Push each number to JSX to display value.
      curRow.push(
        <View
          key = {String(`Square[${row}${col}]_Note_${pointer - 1}`)}
        >
          <Text
            style = {styles.noteText}
          >
            {notesToRender[pointer - 1]}
          </Text>
        </View>
      )
      //Create 3x3 grid of notes within square.
      if(pointer % 3 === 0 && pointer > 0){
        noteRows = (
          <View
            key = {String(`NoteRow_${pointer}`)} 
            style = {styles.noteRow}
          >
            {curRow}
          </View>
        )
        curRow = [];
        notesJSX.push(noteRows);
      }
      pointer ++;
    }

    //Return JSX.
    return(
      <View
        style = {styles.noteContainer}
      >
        {notesJSX}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress = {handleOnPress}
        testID = {`gridSquare_${row}${col}`}
      >
        <View 
          style={{
            borderStyle:'solid',
            backgroundColor:color[0],
            width: 38,
            height: 38,
            borderWidth: 5,
            borderLeftColor: 'rgba(255, 255, 255, 0.20)',
            borderTopColor: 'rgba(255, 255, 255, 0.33)',
            borderRightColor: 'rgba(0, 0, 0, 0.15)',
            borderBottomColor: 'rgba(0, 0, 0, 0.5)',
            alignItems:'center'
          }}
          testID = {`gridSquareView_${board[row][col]}`}
        >
          <ImageBackground
            source = {require('../assets/images/square.jpg')}
            style = {styles.backgroundImage}
          >
            {/* Render values based on ternary conditional respective of 
                if value is null or not. */}
            {board[row][col] === null? 
              renderNotes()
            :
              <Text
                style = {{
                  color:color[1],
                  textAlign:'center',
                  marginTop:'20%',
                }}
                testID = {`gridSquareText_${board[row][col]}`}
              >
                {String(board[row][col])}
              </Text>
            }
          </ImageBackground>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  noteContainer:{
    flex:1,
    flexDirection:'column',
    alignItems:'center'
  },
  noteRow:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start'
  },
  noteText:{
    fontSize:9,
    fontFamily:'JustAnotherHand',
  },
  backgroundImage:{
    width:'100%',
    height:'100%'
  }
});