import React,{useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../../src/state/index';

import Timer from './Timer';
import {IProps} from '../../types';
import {RootState} from '../../src/state/reducers/index';

export default function Watch() {

  // const {time} = useSelector((state:RootState) => state);
  // const dispatch = useDispatch();
  // const { setTime } = bindActionCreators(actionCreators,dispatch);

  return (
    <View style = {styles.container}>
      <View style = {styles.Watch}>
        <View style = {styles.Strap}></View>
        <View style = {styles.Crown}></View>
          <View style = {styles.Screen}>
            <Timer/>
            <View style = {styles.Button}></View>
          </View>
        <View style = {styles.Strap}></View>
      </View>
    </View>
  );
}

const lightHue:number = 260;
const lightSaturation:number = 1.00;
const lightPower:number =  0.80;
const dimmer:number = Math.min(Math.max(0.10, lightPower), 0.40);
const light:string =`${lightHue},${lightSaturation - 0.4}%,${lightPower + 0.35}%` ;
const lightDimmed:string = `${lightHue},${lightSaturation - 0.9}%,${dimmer}%` ;
const lightDark:string = `${lightHue},${lightSaturation}%,${lightPower / 10}%`;
const subReflection:string = `${lightHue},${lightSaturation/5}%, 60%`;
const screenColor:string = `hsl(${lightHue},${Math.min(Math.max(0.0, lightSaturation), 0.40)}%,2%)`;

const styles = StyleSheet.create({
  container: {
  },
  Watch:{
  },
  Strap:{
    position:'relative',
    shadowOffset:{width:2,height:2},
    shadowColor: `hsl(${lightHue},50%,0%)`,
    shadowRadius:2,
    backgroundColor: `linear-gradient(to bottom,hsla(0, 0%, 1%, 0.08),hsl(${lightHue/0.15},${(lightSaturation - 0.4)/0.15}%,${(lightPower + 0.35)/0.15}%),hsl(${lightDark})`,
    height: 30,
    width: '70%',
    margin: 'auto',
    zIndex: -2,
    borderRadius: 2,
    marginLeft:10
  },
  Screen:{  
    position: 'relative',
    backgroundColor: screenColor,
    display:'flex',
    alignItems: 'center',
    width: 90,
    height: 100,
    borderRadius: 10,
    color: `repeating-conic-gradient(hsl(${subReflection}),hsl(${lightHue/0.07},${(lightSaturation/5)/0.07}%, ${60/0.07}%) 10%,hsl(${lightHue/0.07},${(lightSaturation/5)/0.07}%, ${60/0.07}%) 14%,hsl(${subReflection}) 19%,hsl(${subReflection}) 27%,hsl(${lightHue/0.07},${(lightSaturation/5)/0.07}%, ${60/0.07}%) 10%,hsl(${lightHue/0.07},${(lightSaturation/5)/0.07}%, ${60/0.07}%) 25%)`
    /* External frame */
  },
  Crown:{
    position:'absolute',
    borderColor:'silver',
    top:20,
    left:Number(-10),
    height:120,
    width:110,
    borderWidth:10,
    borderRadius: 20,
  },
  Button:{
    width: 10,
    height: '35%',
    position:'absolute',
    top:5,
    left: 100,
    bottom:'20%',
    backgroundColor:`linear-gradient(to bottom,hsl(${lightDimmed}) 5%, hsl(${lightDark}) 10% 15%,hsl(${light}) / 60%) 20% 70%,hsl(${lightDark}) 85% 90%, hsl(${lightDimmed}))`
  }
});