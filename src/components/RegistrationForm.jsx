import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Input } from "./Input";
import { ButtonForm } from "./ButtonForm";
import { useState } from "react";

export const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    const user = { login, email, password };
    console.log(user);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Input
            name="login"
            placeholder="Логін"
            value={login}
            onChangeText={setLogin}
          />
          <Input
            name="email"
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            name="password"
            placeholder="Пароль"
            value={password}
            onChangeText={setPassword}
          />
          <ButtonForm title="Зареєстуватися" onPress={onRegister} />
          <Text style={styles.text}>Вже є акаунт? Увійти</Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#1b4371",
    marginBottom: 45,
  },
});
