import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Post = ({ item, showThumbsUpIcon }) => {
  const { photo, title, comments, likes, country } = item;
  const navigation = useNavigation("");

  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.generalWrapper}>
        <View style={styles.wrapperFeedback}>
          <TouchableOpacity
            style={styles.wrapperComments}
            onPress={() => navigation.navigate("Comments")}
          >
            <Feather
              name="message-circle"
              size={24}
              style={[styles.icon, !comments && { color: "#BDBDBD" }]}
            />
            <Text style={[styles.text, !comments && { color: "#BDBDBD" }]}>
              {comments}
            </Text>
          </TouchableOpacity>
          {showThumbsUpIcon && (
            <View style={styles.wrapperLikes}>
              <Feather
                name="thumbs-up"
                size={24}
                style={[styles.icon, !likes && { color: "#BDBDBD" }]}
              />
              <Text style={styles.text}>{likes}</Text>
            </View>
          )}
        </View>
        <View style={styles.wrapperLocation}>
          <Feather name="map-pin" size={24} color={"#BDBDBD"} />
          <Text style={[styles.text, styles.country]}>{country}</Text>
        </View>
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
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
  generalWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  wrapperFeedback: {
    flexDirection: "row",
    gap: 24,
  },
  wrapperComments: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  wrapperLikes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  icon: {
    color: "#FF6C00",
  },
  wrapperLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  country: {
    textDecorationLine: "underline",
  },
});
