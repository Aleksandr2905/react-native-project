import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Background } from "./src/components/Background";

export default function App() {
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
