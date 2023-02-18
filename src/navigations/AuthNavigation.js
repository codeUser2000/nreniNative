import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import Orders from "../screens/Orders";
const Stack = createNativeStackNavigator();

function AuthNavigation(props) {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="Order" component={Orders} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default AuthNavigation;
