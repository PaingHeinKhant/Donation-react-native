import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import { Routes } from "./Routes";

const Stack = createStackNavigator();

const mainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {},
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default mainNavigation;
