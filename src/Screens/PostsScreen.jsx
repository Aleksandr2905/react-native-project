import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { UserInfo } from "../components/UserInfo";
import { posts } from "../data/posts";
import { Post } from "../components/Post";

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <UserInfo />
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Post item={item} showThumbsUpIcon={false} />
          )}
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
  },
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});
