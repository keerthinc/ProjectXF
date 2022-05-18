import React, {useState, useRef} from "react";

import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import Header from '../../components/Header';
import { Icon, Button, SocialIcon} from "react-native-elements";
import * as Animatable from 'react-native-animatable';





const SignInScreen=({navigation})=>{
   const[textInput2Focused, settextInput2Focused]=useState(false)
   const textInput1=useRef(1)
   const textInput2=useRef(2)



    return(
        <View style={styles.container}>
             <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation}/>
             
             <View style={{marginLeft:20, marginTop:10}}>
             <Text style={title}> Sign In</Text>
             </View>
            
             <View style={{alignItems:"center", marginTop:10}}>
                 <Text style={styles.text1}>Please enter the email and password</Text>
                 <Text style={styles.text1}>Register with your account</Text>
             </View>

             <View>
                 <View style={{marginTop:20}}>
                     <TextInput
                     style={styles.textInput1}
                     placeholder="Email"
                     ref={textInput2}
                     />
                 </View>

                 <View style={styles.textInput2}>
                            <Animatable.View animation={textInput2Focused?"":"fadeInLeft"} duration={100}>
                               <Icon name="lock" 
                               iconStyle={{color:colors.grey}} 
                               type="material" 
                               />
                            </Animatable.View>
                            <TextInput
                                style={{width:"80%"}}
                                placeholder="Password"
                                ref={textInput2}
                                onFocused={()=>{
                                    settextInput2Focused(false)
                                }}
                                onBlur={()=>{
                                    settextInput2Focused(true)
                                }}
                                />
                            <Animatable.View animation={textInput2Focused?"":"fadeInLeft"} duration={100}>
                                    <Icon name="visibility-off" 
                                    iconStyle={{color:colors.grey}} 
                                    type="material" 
                                    style={{marginRight:10}}
                                    />
                                    
                            </Animatable.View>
                 </View>
                
             </View>

        <View style={{marginHorizontal:20, marginVertical:20}}>
            <Button
            title="SIGN IN"
            buttonStyle={parameters.styleButton}
            titleStyle={parameters.buttonTitle}
            onPress={()=>(navigation.navigate("HomeScreen"))}
            />
        </View>

        <View style={{alignItems:"center", marginTop:15}}>
            <Text style={{...styles.text1, textDecorationLine:"underline"}}>Forgot password</Text>
        </View>

         <View style={{alignItems:"center", marginTop:20, marginHorizontal:20}}>
             <Text style={{fontSize:20, fontWeight:"bold"}}>OR</Text>
         </View>

         <View style={{marginHorizontal:10, marginTop:10}}>
             <SocialIcon
               title="Sign in with Facebook"
               button
               type="facebook"
               style={styles.socialIcon}
               onPress={()=>{}}
             />
         </View>

         <View style={{marginHorizontal:10, marginTop:10}}>
             <SocialIcon
               title="Sign in with Google"
               button
               type="google"
               style={styles.socialIcon}
               onPress={()=>{}}
             />
         </View>

         <View style={{marginTop:25, marginLeft:20}}>
             <Text style={{...styles.text, }}>New on XpressFood ?</Text>
         </View>

         <View style={{alignItems:"flex-end", marginVertical:20 ,marginHorizontal:20}}>
             <Button
             title="create an account"
             buttonStyle={styles.createButton}
             titleStyle={styles.createButtonTitle}
             />
         </View>
    </View>
       
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        color:colors.grey1,
        fontSize:16,
        fontWeight:"500",
    },

    text1:{
        color:colors.grey3,
        fontSize:16,
        fontWeight:"500",
    },
    textInput1:{
        borderWidth:1,
        borderColor:"#bdc6cf",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15
    },
    textInput2:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:"#bdc6cf",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:15
    },
    socialIcon:{
        borderRadius:12,
        height:50
    },
    createButton:{
        backgroundColor:"#ffffff",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:15,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:15
    },
    createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:1
    },
})


export default SignInScreen;