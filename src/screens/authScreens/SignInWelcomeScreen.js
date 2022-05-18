import React, {useState, useRef} from "react";

import {View, Text, StyleSheet, Dimensions, TextInput, Image} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import Header from '../../components/Header';
import { Icon, Button, SocialIcon} from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import Swiper from "react-native-swiper";
import { color } from "react-native-elements/dist/helpers";
import { NavigationContainer } from "@react-navigation/native";


const SignInWelcomeScreen=({navigation})=>{
     return(
         <View style={{flex:1}}>
             <View style={{flex:3, justifyContent:"flex-start", alignItems:"center", padding:20}}>
                <Text style={styles.H1}>DISCOVER RESTAURANTS</Text>
                <Text style={styles.H1}>IN YOUR AREA</Text>
             </View>
             <View style={{flex:4, justifyContent:"center"}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                      <Image
                      source={require("../../../assets/food1.jpg")}
                      style={{height:"100%", width:"100%"}}
                      />
                    </View>
                    <View style={styles.slide1}>
                      <Image
                      source={require("../../../assets/food2.jpg")}
                      style={{height:"100%", width:"100%"}}
                      />
                    </View>
                    <View style={styles.slide1}>
                      <Image
                      source={require("../../../assets/food3.jpg")}
                      style={{height:"100%", width:"100%"}}
                      />
                    </View>
                    <View style={styles.slide1}>
                      <Image
                      source={require("../../../assets/food4.jpg")}
                      style={{height:"100%", width:"100%"}}
                      />
                    </View>
                </Swiper>
             </View>
             <View style={{flex:4, justifyContent:"flex-end"}}>
                    <View style={{marginHorizontal:20, marginVertical:10}}>
                    <Button
                    title="SIGN IN"
                    buttonStyle={parameters.styleButton}
                    titleStyle={parameters.buttonTitle}
                    onPress={()=>{
                        navigation.navigate("SignInScreen")
                    }}
                    />
                    </View>
             </View>
             <View style={{ marginVertical:20 ,marginHorizontal:20}}>
                    <Button
                    title="create an account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                    />
             </View>
         </View>

         
     )
}

const styles=StyleSheet.create({
    H1:{fontSize:20, 
        color:colors.buttons, 
        fontWeight:"bold"
    },
    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#3CC6c8"
    },
    slide2:{
        flex:2,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:"#22cae5",
    },
    slide3:{
        flex:3,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#223c02",
    },
    createButton:{
        backgroundColor:"#ffffff",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:15,
        borderWidth:1,
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:15,
    },
    createButtonTitle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:1
    },

    })


    export default SignInWelcomeScreen;