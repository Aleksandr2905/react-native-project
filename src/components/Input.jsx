import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = ({ name, value, placeholder, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      name={name}
      placeholder={placeholder}
      placeholderTextColor="#bdbdbd"
      value={value}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={onChangeText}
    />
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
});
