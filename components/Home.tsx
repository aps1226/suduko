import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function Home({history}:any) {

  const handlePress = (route:string) =>{
    history.push(route);
  }
  
  return (
    <View style={styles.container}>
      <Text>
        Home Page
      </Text>
      <Button
        title = "Play New Game"
        onPress = {() => handlePress('DifficultySelection')}
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
  }
});