import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import { Routes } from "./Routes";
import SingleDonationItem from "../screens/SingleDonationItem/SingleDonationItem";
import Login from "../screens/Login/Login";
import Registration from "../screens/Registration/Registration";
const Stack = createStackNavigator();

const mainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {},
        headerShown: false,
        initialRouteName: Routes.Login,
      }}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export default mainNavigation;
