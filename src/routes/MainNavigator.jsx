import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "../screens/RegistrationScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { BottomNavigator } from "./BottomNavigator";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/auth/selectors";

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  ) : (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};
