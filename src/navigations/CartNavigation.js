import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();


function CartNavigation() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Card" component={Cart} />
    </Stack.Navigator>
  );
}

export default CartNavigation;
