import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Post = ({ item }) => {
  const { photo, title, comments, likes, country } = item;

  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <Text style={styles.text}>{title}</Text>
      <View>
        <Feather name="message-circle" size={24} />
        <Text>{comments}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 32,
    paddingHorizontal: 16,
    gap: 8,
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});
