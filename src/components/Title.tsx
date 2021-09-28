import React,{ useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import TextStroke from './TextStroke';

export default function Title() {

  return (
    <View style = {styles.container}>
      <TextStroke stroke = {2} color = {'white'}>
        <Text style = {styles.winnerText}>
          Suduko
        </Text>
      </TextStroke>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    position:'absolute',
    top:'30%'
  },
  winnerText:{
    fontSize:80,
    color:'#1E90FF',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    elevation:3,
  }
});