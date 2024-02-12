import { FlatList, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Comment } from "../components/Comment";
import { comments } from "../data/comments";
import photo from "../../assets/images/sea.jpg";

export const CommentsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={photo} style={styles.photo} />
        <FlatList
          data={comments}
          renderItem={({ item }) => <Comment item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  wrapper: {
    width: "100%",
    height: "100%",
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
});
