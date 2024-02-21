import { Alert, StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { ButtonForm } from "./ButtonForm";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { InputPassword } from "./InputPassword";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/auth/operations";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../firebase/config";

export const RegistrationForm = ({ avatar }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation("");
  const dispatch = useDispatch();

  const onRegister = () => {
    if (!login || !email || !password) {
      Alert.alert("Заповніть будь-ласка усі поля");
    }
    const user = { login, email, password, avatar };
    // try {
    //   createUserWithEmailAndPassword(auth, email, password);
    // } catch (error) {
    //   throw error;
    // }
    dispatch(signUp(user));

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
      <InputPassword value={password} onChangeText={setPassword} />
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
