import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();


function SearchNavigation() {
  return (
    <Stack.Navigator initialRouteName="Search" >
      <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default SearchNavigation;
