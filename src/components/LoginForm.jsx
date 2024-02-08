import { Alert, StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { ButtonForm } from "./ButtonForm";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation("");

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert("Заповніть будь-ласка усі поля");
    }
    const user = { email, password };
    navigation.navigate("Posts");
    console.log(user);
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
      <Input
        name="password"
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
      />
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
