import React,{ useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import SubBox from "./SubBox";

export default function Board() {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SubBox
          row = {0}
          col = {0}
        />
        <View>
          <View style = {styles.verticalLine}/>
        </View>
        <SubBox
          row = {0}
          col = {3}
        />
        <View>
          <View style = {styles.verticalLine}/>
        </View>
        <SubBox
          row = {0}
          col = {6}
        />
      </View>
      <View>
        <View style={styles.horizontalLine} />
      </View>
      <View style={styles.row}>
        <SubBox
          row = {3}
          col = {0}
        />
        <View>
          <View style = {styles.verticalLine}/>
        </View>
        <SubBox
          row = {3}
          col = {3}
        />
        <View>
          <View style = {styles.verticalLine}/>
        </View>
        <SubBox
          row = {3}
          col = {6}
        />
      </View>
      <View>
        <View style={styles.horizontalLine} />
      </View>
      <View style={styles.row}>
        <SubBox
          row = {6}
          col = {0}
        />
        <View>
          <View style = {styles.verticalLine}/>
        </View>
        <SubBox
          row = {6}
          col = {3}
        />
        <View>
          <View style = {styles.verticalLine}/>
        </View>
        <SubBox
          row = {6}
          col = {6}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  row: {
    flexDirection:'row',
  },
  horizontalLine: {
    height: 10, 
    backgroundColor:'black'
  },
  verticalLine:{
    flex:1,
    width: 10, 
    backgroundColor:'black'
  }
});