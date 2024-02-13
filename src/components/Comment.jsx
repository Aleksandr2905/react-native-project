import { Image, StyleSheet, Text, View } from "react-native";

export const Comment = ({ item }) => {
  const { photo, comment, date, userId } = item;
  return (
    <View style={[styles.container, userId === "current" && styles.current]}>
      <Image source={photo} style={styles.photo} />
      <View
        style={[
          styles.wrapperComment,
          userId === "current"
            ? { borderTopRightRadius: 0 }
            : { borderTopLeftRadius: 0 },
        ]}
      >
        <Text style={styles.comment}>{comment}</Text>
        <Text
          style={[
            styles.date,
            userId !== "current" && { alignSelf: "flex-end" },
          ]}
        >
          {date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 24,
    gap: 16,
  },
  current: {
    flexDirection: "row-reverse",
  },
  photo: {
    borderRadius: 50,
    width: 28,
    height: 28,
  },
  wrapperComment: {
    flex: 1,
    width: "100%",
    padding: 16,
    borderRadius: 6,
    gap: 8,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  comment: {
    width: "100%",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  date: {
    fontSize: 10,
    color: "#bdbdbd",
  },
});
