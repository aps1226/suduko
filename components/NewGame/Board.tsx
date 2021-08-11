import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NewGame() {

  return (
    <View style={styles.container}>
      <Text>
        Board
      </Text>
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