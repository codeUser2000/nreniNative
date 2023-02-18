import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Provider} from 'react-redux';
import {Store} from '../redux/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import HomeNavigation from './HomeNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileNavigation from './ProfileNavigation';
import CartNavigation from './CartNavigation';
import SearchNavigation from './SearchNavigation';
import AuthNavigation from "./AuthNavigation";

function AppNav(props) {
    const Tab = createBottomTabNavigator();
    const {userToken} = useContext(AuthContext)
    return (
        <Provider store={Store}>
            {userToken ? <>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                        <Tab.Screen
                            name="HomeNavigation"
                            component={HomeNavigation}
                            options={{
                                tabBarLabel: ({focused, color}) => (
                                    <Text style={{color: focused ? '#c31e39' : color}}>Home</Text>),
                                tabBarIcon: (p) => <Icon size={p.size} color={p.focused ? '#c31e39' : p.color}
                                                         name="home"/>,
                            }}
                        />
                        <Tab.Screen
                            name="SearchNavigation"
                            component={SearchNavigation}
                            options={{
                                tabBarLabel: ({focused, color}) => (
                                    <Text style={{color: focused ? '#c31e39' : color}}>Search</Text>),
                                tabBarIcon: (p) => <Icon size={p.size} color={p.focused ? '#c31e39' : p.color}
                                                         name="search"/>,
                            }}
                        />
                        <Tab.Screen
                            name="CartNavigation"
                            component={CartNavigation}
                            options={{
                                tabBarLabel: ({focused, color}) => (
                                    <Text style={{color: focused ? '#c31e39' : color}}>Cart</Text>),
                                tabBarIcon: (p) => <Icon size={p.size} color={p.focused ? '#c31e39' : p.color}
                                                         name="shopping-cart"/>,
                            }}
                        />
                        <Tab.Screen
                            name="ProfileNavigation"
                            component={AuthNavigation}
                            options={{
                                tabBarLabel: ({focused, color}) => (
                                    <Text style={{color: focused ? '#c31e39' : color}}>Profile</Text>),
                                tabBarIcon: (p) => <Icon size={p.size} color={p.focused ? '#c31e39' : p.color}
                                                         name="account-circle"/>,
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </> : <NavigationContainer>
                <ProfileNavigation/>
            </NavigationContainer>}
        </Provider>
    );
}

export default AppNav;
