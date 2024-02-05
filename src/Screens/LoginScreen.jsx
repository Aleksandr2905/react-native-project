import { StyleSheet, View } from "react-native";
import { Background } from "../components/Background";
import { Title } from "../components/Title";
import { LoginForm } from "../components/LoginForm";

export const LoginScreen = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Title title="Увійти" />
        <LoginForm />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
});
