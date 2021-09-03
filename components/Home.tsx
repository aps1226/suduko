import React,{useState} from "react";
import { Alert, Button, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from 'react-router-native';
import { useSelector, useDispatch } from "react-redux"; 
import { bindActionCreators } from "redux";
import * as actionCreators from '../src/state/index';
import Modal from "react-native-modal";
import {RootState} from '../src/state/reducers/index';

import Title from './Title';

export default function Home({history}:RouteComponentProps) {
  
  //React state for load game pop-up menu (use case is for when a game does not exist).
  const [loadGamePopUp, setLoadGamePopUp] = useState(false);
  //React state for new game pop-up menu (use case is for when a game does not exist).
  const [newGamePopUp, setNewGamePopUp] = useState(false);

  //Redux-state.
  const {gameState} = useSelector((state:RootState) => state);
  const {isCompleted,gameExists} = gameState;
  const dispatch = useDispatch();

  //Function to route to a different component.
  const handlePress = (route:string):void =>{
    history.push(route);
  }

  return (
    <View style={styles.container}>
      <Title/>
      <Pressable
        style = {styles.button}
        onPress = {() =>{
          if(!gameExists) handlePress('DifficultySelection')
          return setNewGamePopUp(true);
        }
      }
      >
        <Text style = {styles.text}>Play New Game</Text>
      </Pressable>
      <Pressable
        style = {styles.button}
        onPress = {() =>{
            if(gameExists) return handlePress('GameDisplay');
            return setLoadGamePopUp(true);
          }
        }
      >
        <Text style = {styles.text}>Load Game</Text>
      </Pressable>
      <View>
        <Modal isVisible={loadGamePopUp}>
          <Pressable 
            style = {{
              flex:1,
              alignItems:'center'
            }} 
            onPress={() => setLoadGamePopUp(false)}
          >
            <View style = {styles.loadGamePopUpPrompt}>
              <Text style = {styles.loadGamePopUpPromptText}>
                No current games to load.
              </Text>
            </View>
          </Pressable>
        </Modal>
      </View>
      <View>
        <Modal isVisible={newGamePopUp}>
            <View style = {styles.newGamePopUpPrompt}>
              <Text style = {styles.newGamePopUpPromptText}>
                Are you sure you would like to abandon your current game?
              </Text>
            </View>
            <View
              style = {styles.popUpYesNoButtonsContainer}
            >
              <Pressable 
                style = {styles.popUpYesNoButton}
                onPress = {()=>handlePress('DifficultySelection')}
              >
                <Text style = {styles.newGamePopUpPromptText}>
                  Yes
                </Text>
              </Pressable>
              <Pressable 
                style = {styles.popUpYesNoButton}
                onPress = {()=>setNewGamePopUp(false)}
              >
                <Text style = {styles.newGamePopUpPromptText}>
                  No
                </Text>
              </Pressable>
            </View>
        </Modal>
      </View>
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
    ...Platform.select({
      ios:{
        elevation: 3
      },
      android:{
        elevation: 20
      }
    }),
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
  },
  loadGamePopUpPromptText:{
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  loadGamePopUpPrompt:{
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios:{
        top:'30%'
      },
      android:{
        top:'25%'
      }
    }),
    paddingVertical: 26,
    width:300,
    borderRadius: 4,
    ...Platform.select({
      ios:{
        elevation: 3
      },
      android:{
        elevation: 20
      }
    }),
    backgroundColor: '#1E90FF',
    shadowColor:'rgba(0,0,0,0.35)',
    shadowOffset:{width:-2,height:-2},
    shadowOpacity:0.75,
    shadowRadius:2
  },
  newGamePopUpPromptText:{
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    ...Platform.select({
      ios:{
      },
      android:{
        textAlign:'center'
      }
    })
  },
  newGamePopUpPrompt:{
    position:'absolute',
    ...Platform.select({
      ios:{
        top:'30%'
      },
      android:{
        top:'25%',
      }
    }),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'5%',
    ...Platform.select({
      ios:{
        paddingVertical: 18
      },
      android:{
        paddingVertical: 13
      }
    }),
    width:300,
    borderRadius: 4,
    ...Platform.select({
      ios:{
        elevation: 3
      },
      android:{
        elevation: 20
      }
    }),
    backgroundColor: '#1E90FF',
    shadowColor:'rgba(0,0,0,0.35)',
    shadowOffset:{width:-2,height:-2},
    shadowOpacity:0.75,
    shadowRadius:2
  },
  popUpYesNoButtonsContainer:{
    alignItems:'center',
    ...Platform.select({
      ios:{
      },
      android:{
        top:'-5%',
      }
    }),
  },
  popUpYesNoButton:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25,
    ...Platform.select({
      ios:{
        paddingVertical: 14
      },
      android:{
        paddingVertical: 16
      }
    }),
    width:150,
    borderRadius: 4,
    ...Platform.select({
      ios:{
        elevation: 3
      },
      android:{
        elevation: 20
      }
    }),
    backgroundColor: '#1E90FF',
    shadowColor:'rgba(0,0,0,0.35)',
    shadowOffset:{width:-2,height:-2},
    shadowOpacity:0.75,
    shadowRadius:2
  }
});