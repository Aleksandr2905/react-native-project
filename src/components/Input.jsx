import { StyleSheet, TextInput } from "react-native";

export const Input = ({ name, value, placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      name={name}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: "#f6f6f6",
  },
});
