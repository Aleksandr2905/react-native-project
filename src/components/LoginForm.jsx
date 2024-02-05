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

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    const user = { email, password };
    console.log(user);
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
          <ButtonForm title="Увійти" onPress={onLogin} />
          <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#1b4371",
    marginBottom: 111,
  },
});
