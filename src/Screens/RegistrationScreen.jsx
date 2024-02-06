import { StyleSheet, View } from "react-native";
import { Background } from "../components/Background";
import { Title } from "../components/Title";
import { RegistrationForm } from "../components/RegistrationForm";
import { Avatar } from "../components/Avatar";

export const RegistrationScreen = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Avatar />
        <Title title="Реєстрація" />
        <RegistrationForm />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 90,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 30,
    backgroundColor: "#fff",
  },
});
