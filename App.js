import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import {colors} from "./src/global/styles";
import {RootNavigator} from './src/navigation/rootNavigator';
import { SignInContext } from "./src/contexts/authContext";

const App=()=>{
  return(
    <SignInContext>
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />
   
        <RootNavigator />
     
    </View>
    </SignInContext> 
  
  )
}



export default App;

const styles=StyleSheet.create({
  container:{flex:1,}
})