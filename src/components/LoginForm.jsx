import { Alert, StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { ButtonForm } from "./ButtonForm";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { InputPassword } from "./InputPassword";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/auth/operations";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation("");
  const dispatch = useDispatch();

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert("Заповніть будь-ласка усі поля");
    }
    const user = { email, password };
    dispatch(signIn(user));

    setEmail("");
    setPassword("");
  };

  return (
    <View>
      <Input
        name="email"
        placeholder="Адреса електронної пошти"
        value={email}
        onChangeText={setEmail}
      />
      <InputPassword value={password} onChangeText={setPassword} />
      <ButtonForm title="Увійти" onPress={onLogin} />
      <View style={styles.wrapperText}>
        <Text style={styles.text}>Немає акаунту? </Text>
        <Text
          style={styles.textRegister}
          onPress={() => navigation.navigate("Registration")}
        >
          Зареєструватися
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperText: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 111,
  },
  text: {
    color: "#1b4371",
  },
  textRegister: {
    color: "#1b4371",
    textDecorationLine: "underline",
  },
});
