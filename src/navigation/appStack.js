import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import {RestaurantMapScreen} from '../screens/RestaurantMapScreen';
import {DrawerNavigator} from './DrawerNavigator';

const App = createStackNavigator();

const AppStack=()=>{

return(
<App.Navigator>
 <App.Screen 
 name ="App"
 component ={DrawerNavigator}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 

<App.Screen 
 name ="RestaurantMapScreen"
 component = {RestaurantMapScreen}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 

</App.Navigator>
)
}

export default AppStack;