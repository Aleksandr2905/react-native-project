import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const InputPassword = ({ value, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        name="password"
        placeholder="Пароль"
        placeholderTextColor="#bdbdbd"
        value={value}
        secureTextEntry={!showPassword}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
        cursorColor={"#212121"}
      />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={styles.showBtn}
      >
        <Text style={styles.textShowBtn}>
          {showPassword ? "Приховати" : "Показати"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  inputFocused: {
    borderColor: "#ff6c00",
    backgroundColor: "#fff",
  },
  showBtn: {
    position: "absolute",
    top: 13,
    right: 16,
  },
  textShowBtn: {
    color: "#1B4371",
  },
});
