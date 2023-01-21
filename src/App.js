import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './navigations/HomeNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileNavigation from './navigations/ProfileNavigation';
import CartNavigation from './navigations/CartNavigation';
import SearchNavigation from './navigations/SearchNavigation';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {Store} from './redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

function App(props) {
    useEffect(() => {
        (async () => {
            SplashScreen.hide();
        })();
    }, []);
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                    <Tab.Screen
                        name="HomeNavigation"
                        component={HomeNavigation}
                        options={{
                            tabBarLabel: ({focused, color}) => (
                                <Text style={{color: focused ? '#c31e39' : color}}>Home</Text>),
                            tabBarIcon: (p) => <Icon size={p.size} color={p.focused ? '#c31e39' : p.color} name="home"/>,
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
                        component={ProfileNavigation}
                        options={{
                            tabBarLabel: ({focused, color}) => (
                                <Text style={{color: focused ? '#c31e39' : color}}>Profile</Text>),
                            tabBarIcon: (p) => <Icon size={p.size} color={p.focused ? '#c31e39' : p.color}
                                                     name="account-circle"/>,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
