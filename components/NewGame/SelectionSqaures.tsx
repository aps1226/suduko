import React, {useEffect} from "react";
import { Alert,StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../../src/state/index';

import {IProps} from '../../types';
export default function GridSquare(props:IProps) {
  
  const {number} = props;

  const selection = useSelector((state) => state.selection);
  const dispatch = useDispatch();
  const { setSelection } = bindActionCreators(actionCreators,dispatch);

  const handleOnPress = () =>{
    setSelection(number);
  }
  return (
    <View style={styles.container}>
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