import React from "react";
import { Alert, Pressable , StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from 'react-router-native';
export default function Home({history}:RouteComponentProps) {

  const handlePress = (route:string) =>{
    history.push(route);
  }
  
  return (
    <View style={styles.container}>
      <Pressable
        style = {styles.button}
        onPress = {() => handlePress('DifficultySelection')}
      >
        <Text style = {styles.text}>Play New Game</Text>
      </Pressable>
      <Pressable
        style = {styles.button}
        onPress = {() => handlePress('LoadGame')}
      >
        <Text style = {styles.text}>Load Game</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
  },
  button: {
    alignItems: 'center',
    marginTop:30,
    justifyContent: 'center',
    paddingVertical: 12,
    width:150,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1E90FF',
    shadowColor:'rgba(0,0,0,0.35)',
    shadowOffset:{width:-2,height:-2},
    shadowOpacity:0.75,
    shadowRadius:2
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});