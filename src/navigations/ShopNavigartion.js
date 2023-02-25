import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shop from "../screens/Shop";

const Stack = createNativeStackNavigator();


function ShopNavigation() {
    return (
        <Stack.Navigator initialRouteName="Shop">
            <Stack.Screen name="Card" component={Shop} />
        </Stack.Navigator>
    );
}

export default ShopNavigation;
