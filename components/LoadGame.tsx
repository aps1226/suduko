<<<<<<< HEAD
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoadGame() {

  return (
    <View style={styles.container}>
      <Text>
        Load Game
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
=======
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoadGame() {

  return (
    <View style={styles.container}>
      <Text>
        Load Game
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
>>>>>>> dd8916c4d3a9d8e0d5116fed050df98163d32a45
});