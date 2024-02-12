import { Image, StyleSheet, Text, View } from "react-native";

export const Comment = ({ item }) => {
  const { photo, comment, date } = item;
  return (
    <View style={styles.container}>
      <Image source={photo} />
      <Text>{comment}</Text>
      <Text>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    paddingBottom: 24,
    // paddingHorizontal: 16,
    gap: 16,
  },
});
