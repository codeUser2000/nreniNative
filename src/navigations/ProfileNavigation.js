import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import StartProfile from '../screens/StartProfile';
import ProfileRegister from '../screens/ProfileRegister';
import {useContext, useEffect} from 'react';
import ProfileLogin from '../screens/ProfileLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


function ProfileNavigation({navigation}) {
    useEffect(() => {
        (async () => {
            // const t = await AsyncStorage.getItem('token');
            await AsyncStorage.removeItem('token');
            // if (t) {
            //     console.log(allowed);
            //     navigation.navigate('Profile');
            // }
        })();
        return () => {
        };
    }, []);
    return (
        <Stack.Navigator initialRoutName="Profile">
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="StartProfile" component={StartProfile} options={{headerShown: false}}/>
            <Stack.Screen name="ProfileLogin" component={ProfileLogin} options={{headerShown: false}}/>
            <Stack.Screen name="ProfileRegister" component={ProfileRegister} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default ProfileNavigation;
