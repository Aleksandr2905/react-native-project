import { StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { ButtonForm } from "./ButtonForm";

export const RegistrationForm = () => {
  return (
    <View>
      <Input name="login" placeholder="Логін" value="" />
      <Input name="email" placeholder="Адреса електронної пошти" value="" />
      <Input name="password" placeholder="Пароль" value="" />
      <ButtonForm title="Зареєстуватися" />
      <Text style={styles.text}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#1b4371",
    marginBottom: 45,
  },
});
