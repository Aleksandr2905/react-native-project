import { StyleSheet, View } from "react-native";
import { Background } from "../components/Background";
import { Title } from "../components/Title";

export const RegistrationScreen = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Title title="Реєстрація" />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
});
