import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Background } from "./src/components/Background";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": import("./assets/fonts/Inter-Medium.ttf"),
    "Roboto-Bold": import("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": import("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": import("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
