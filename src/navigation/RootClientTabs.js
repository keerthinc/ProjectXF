import React from "react";

import{colors} from "../global/styles";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import{Icon} from 'react-native-elements';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from "../screens/MyAccountScreen";

const ClientTabs= createBottomTabNavigator();

const RootClientTabs=()=>{
  return(
      <ClientTabs.Navigator
          tabOptions={{
              activeTintColor:colors.buttons
            
          }}
      >
          <ClientTabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={
                {
                    tabBarLabel:"Home",
                    tabBarIcon: ({color, size})=>(
                        <Icon
                          name="home"
                          type="material"
                          color={color}
                          size={size}
                        />
                    )
                }
            }
          />
          <ClientTabs.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={
                {
                    tabBarLabel:"Search",
                    tabBarIcon: ({color, size})=>(
                        <Icon
                          name="search"
                          type="material"
                          color={color}
                          size={size}
                        />
                    )
                }
            }
          />

        <ClientTabs.Screen
            name="My Orders Screen"
            component={MyOrdersScreen}
            options={
                {
                    tabBarLabel:"My Ordes",
                    tabBarIcon: ({color, size})=>(
                        <Icon
                          name="view-list"
                          type="material"
                          color={color}
                          size={size}
                        />
                    )
                }
            }
          />
          
          <ClientTabs.Screen
            name="MyAccountScreen"
            component={MyAccountScreen}
            options={
                {
                    tabBarLabel:"My Account",
                    tabBarIcon: ({color, size})=>(
                        <Icon
                          name="person"
                          type="material"
                          color={color}
                          size={size}
                        />
                    )
                }
            }
          />
      </ClientTabs.Navigator>
  )
}
export default RootClientTabs;