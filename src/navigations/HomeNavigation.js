import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Single from "../screens/Single";

const Stack = createNativeStackNavigator();


function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Single" component={Single} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
