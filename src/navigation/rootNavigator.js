import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { AuthStack } from './authStack';
import { AppStack } from './appStack';
import { SignInContext } from '../contexts/authContext';


const RootNavigator=()=>{

const {signedIn} = useContext(SignInContext)

    return(
    <NavigationContainer>
        {signedIn.userToken === null  ?  <AuthStack />: <AppStack />}
    </NavigationContainer>
    )
}

export default RootNavigator;