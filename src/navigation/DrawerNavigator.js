import React from "react";

import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import {RootClientTabs} from "./RootClientTabs";
import {Icon} from "react-native-elements";
import {colors} from "../global/styles";

const Drawer = createDrawerNavigator()

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen
               name="ClientTabs"
               component={RootClientTabs}
               options={{
                   title:"Client",
                   drawerIcon:({focussed, size})=>(
                       <Icon
                         type="material-community"
                         name="home"
                         color={focussed?"#7cc":colors.grey2}
                         size={size}
                       />
                   )
               }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;