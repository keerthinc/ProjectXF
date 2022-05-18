import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import {colors} from "./src/global/styles";
import RootNavigator from './src/navigation/rootNavigator';

const App=()=>{
  return(
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.StatusBar}
      />
      <RootNavigator/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{flex:1,}
})

export default App;