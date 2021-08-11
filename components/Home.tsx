import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function Home({history}:any) {

  const handlePress = (route:string) =>{

    history.push(route);
    Alert.alert(route);

  }
  
  return (
    <View style={styles.container}>
      <Text>
        Home Page
      </Text>
      <Button
        title = "Play New Game"
        onPress = {() => handlePress('NewGame')}
      />
      <Button
        title = "Load Game"
        onPress = {() => handlePress('LoadGame')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});