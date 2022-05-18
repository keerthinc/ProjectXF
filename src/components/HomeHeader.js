import React from "react";

import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import { parameters, colors } from "../global/styles";

const HomeHeader=()=>{
    const BadgeIcon=withBadge(0)(Icon)
    return(
        <View style={styles.header}>
           <View style={{alignItems:"center", justifyContent:"center", marginLeft:15}}>
               <Icon
               type="material.community"
               name="menu"
               color={colors.Cardbackgroun}
               size={32}
               />
           </View>

           <View style={{alignContent:"center", justifyContent:"center"}}>
               <Text style={{color:colors.Cardbackgroun, fontSize:25, fontWeight:"bold"}}>XpressFood</Text>
           </View>

           <View style={{alignContent:"center",marginRight:15 ,justifyContent:"center"}}>
               <BadgeIcon
               type="material-community"
               name="cart"
               size={35}
               color={colors.Cardbackgroun}
               />
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent:"space-between"
    }
})

export default HomeHeader;