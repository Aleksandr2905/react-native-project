import { Alert, StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { ButtonForm } from "./ButtonForm";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation("");

  const onRegister = () => {
    if (!login || !email || !password) {
      Alert.alert("Заповніть будь-ласка усі поля");
    }
    const user = { login, email, password };
    console.log(user);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <View>
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
      <View style={styles.wrapperText}>
        <Text style={styles.text}>Вже є акаунт?</Text>
        <Text
          style={styles.textLogin}
          onPress={() => navigation.navigate("Login")}
        >
          Увійти
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperText: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 45,
  },
  text: {
    color: "#1b4371",
    paddingRight: 4,
  },
  textLogin: {
    color: "#1b4371",
    textDecorationLine: "underline",
  },
});
