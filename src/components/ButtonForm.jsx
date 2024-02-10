import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonForm = ({ title, onPress, disabled, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonDisabled]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 100,
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#ff6c00",
  },
  buttonDisabled: {
    backgroundColor: "#f6f6f6",
    color: "#bdbdbd",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    color: "#fff",
  },
});
