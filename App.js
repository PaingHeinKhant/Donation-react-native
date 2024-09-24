import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
