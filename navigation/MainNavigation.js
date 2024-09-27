import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import { Routes } from "./Routes";
import SingleDonationItem from "../screens/SingleDonationItem/SingleDonationItem";

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
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export default mainNavigation;
