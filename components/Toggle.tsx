import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch } from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import {RootState} from '../src/state/reducers/index';
import * as actionCreators from '../src/state/index'; 
export default function Toggle(){
  //Redux state.
  const {entryMode} = useSelector((state:RootState) => state);
  //Redux dispatcher.
  const dispatch = useDispatch();
  //Redux action to set entryMode.
  const { setEntryMode} = bindActionCreators(actionCreators,dispatch);
  //React hook to set toggle state. 
  //(*needed for react-native-paper component).
  const [isSwitchOn, setIsSwitchOn] = React.useState(entryMode);
  //Set entry mode to toggle state.
  const onToggleSwitch = () =>{
    setIsSwitchOn(!isSwitchOn);
    setEntryMode(!entryMode);
  }

  return (
    <Switch 
      color='#3297FD'
      value={!isSwitchOn} 
      onValueChange={onToggleSwitch} 
    />
  );
};

  