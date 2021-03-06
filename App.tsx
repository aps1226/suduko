import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NativeRouter, Switch, Route  } from "react-router-native";
import { Provider } from 'react-redux'
import { store } from './src/state/store';
import Home from './src/components/Home';
import GameDisplay from './src/components/GameDisplay';
import DifficultySelection from "./src/components/DifficultySelection";

export default function App() {

  return (
    <Provider store = {store}>
      <NativeRouter>
        <View style={styles.container}>
          <ImageBackground 
            source = {require('./assets/images/desk.webp')}
            style={styles.backgroundImage}
          >
            <Switch>
              <Route exact path = "/" component={Home}/>
              <Route exact path = "/DifficultySelection" component={DifficultySelection}/>
              <Route exact path = "/GameDisplay" component={GameDisplay}/>
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