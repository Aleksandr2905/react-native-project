import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonForm = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
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
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    color: "#fff",
  },
});
