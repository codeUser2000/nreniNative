import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartProfile from '../screens/StartProfile';
import Register from '../screens/Register';
import ForgetPassword from '../screens/ForgetPassword';
import DropPassword from '../screens/DropPassword';
import Login from '../screens/Login';
import InsertCode from "../screens/InsertCode";

const Stack = createNativeStackNavigator();


function ProfileNavigation({navigation}) {
    return (
        <Stack.Navigator initialRouteName="StartProfile">
            <Stack.Screen name="StartProfile" component={StartProfile} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}}/>
            <Stack.Screen name="InsertCode" component={InsertCode} options={{headerShown: false}}/>
            <Stack.Screen name="DropPassword" component={DropPassword} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default ProfileNavigation;
