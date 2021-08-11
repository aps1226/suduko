import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Switch, Route  } from "react-router-native";

import Home from './components/Home'
import NewGame from './components/NewGame/NewGame'
import LoadGame from './components/LoadGame'
export default function App() {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/NewGame" component={NewGame}/>
          <Route exact path = "/LoadGame" component={LoadGame}/>
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center'
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