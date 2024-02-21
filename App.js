import "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./src/routes/MainNavigator";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
