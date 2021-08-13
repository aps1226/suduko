import React, {useEffect} from "react";
import { Alert,StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../../src/state/index';

import {IProps} from '../../types';
import {RootState} from '../../src/state/reducers/index';
        
export default function SelectionSquare(props:IProps) {
  
  const {number} = props;

  const {selection,colors} = useSelector((state:RootState) => state);
  const color:string = colors[`Selection_${number}`];
  const dispatch = useDispatch();
  const { setSelection, changeColor } = bindActionCreators(actionCreators,dispatch);

  const handleOnPress = () =>{
    setSelection(number);
    changeColor(`Selection_${number}`);
  }
  return (
    <View style={{
      backgroundColor: color
    }}
    >
      <TouchableHighlight
        onPress = {handleOnPress}
      >
        <View style={styles.gridSquare}>
            <Text>
              {number}
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