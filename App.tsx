import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NativeRouter, Switch, Route  } from "react-router-native";

import Home from './components/Home';
import NewGame from './components/NewGame/NewGame';
import LoadGame from './components/LoadGame';
import DifficultySelection from "./components/NewGame/DifficultySelection";

import { Provider } from 'react-redux'
import { store } from './src/state/store';
export default function App() {

  return (
    <Provider store = {store}>
      <NativeRouter>
        <View style={styles.container}>
          <ImageBackground 
            source = {require('./assets/images/desk.png')}
            style={styles.backgroundImage}
          >
            <Switch>
              <Route exact path = "/" component={Home}/>
              <Route exact path = "/DifficultySelection" component={DifficultySelection}/>
              <Route exact path = "/NewGame" component={NewGame}/>
              <Route exact path = "/LoadGame" component={LoadGame}/>
            </Switch>
          </ImageBackground>
        </View>
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center'
  },
  backgroundImage:{
    flex: 1,
    width:'100%'
  }
});