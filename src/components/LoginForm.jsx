import { StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { ButtonForm } from "./ButtonForm";

export const LoginForm = () => {
  return (
    <View>
      <Input name="email" placeholder="Адреса електронної пошти" value="" />
      <Input name="password" placeholder="Пароль" value="" />
      <ButtonForm title="Увійти" />
      <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#1b4371",
    marginBottom: 111,
  },
});
