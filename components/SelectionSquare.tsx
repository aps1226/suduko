import React, {useEffect} from "react";
import { ImageBackground, StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../src/state/index';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { IProps } from '../types';
import { RootState } from '../src/state/reducers/index';
        
export default function SelectionSquare(props:IProps) {
  //Passed props for respective selection square value.
  const {number} = props;
  //Redux-state.
  const {selection,colors,entryMode} = useSelector((state:RootState) => state);
  const color:string = String(colors[`Selection_${number}`]);
  const dispatch = useDispatch();
  //Redux actions.
  const { setSelection, changeColor } = bindActionCreators(actionCreators,dispatch);
  //Function highlights current square and changes selection value to current
  //square value.
  const handleOnPress = ():void =>{
    setSelection(number);
    changeColor(`Selection_${number}`);
  }
  //Load fonts.
  const [isLoaded] = useFonts({
    "JustAnotherHand":require("../assets/fonts/JustAnotherHand-Regular.ttf"),
    "SpaceMono":require("../assets/fonts/SpaceMono-Regular.ttf")
  })
  //Wait for fonts to load.
  if(!isLoaded){
    return(<AppLoading/>);
  } else {
    let fontFamily:string = entryMode ? "SpaceMono":"JustAnotherHand";
    let marginTop:number = entryMode ? 0:5;
    return (
      <View
        style = {{backgroundColor:color}}
      >
        {color === 'transparent' || !color ?
          <ImageBackground
            source = {require('../assets/images/square.jpg')}
            style = {{
              width:'100%',
            }}
          >
            <TouchableHighlight
              onPress = {handleOnPress}
              testID = {`selectionSquare_${number}`}
            >
              <View style={styles.gridSquare}>
                  <Text
                    style = {{
                      marginTop:marginTop,
                      fontFamily:fontFamily
                    }}
                  >
                    {number}
                  </Text>
              </View>
            </TouchableHighlight>
          </ImageBackground>
          :
            <TouchableHighlight
              onPress = {handleOnPress}
              testID = {`selectionSquare_${number}`}
            >
              <View style={styles.gridSquare}>
                  <Text
                    style = {{
                      marginTop:marginTop,
                      fontFamily:fontFamily
                    }}
                  >
                    {number}
                  </Text>
              </View>
            </TouchableHighlight>
        }
      </View>
    );
  }
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