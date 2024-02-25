import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { UserInfo } from "../components/UserInfo";
import { posts } from "../data/posts";
import { Post } from "../components/Post";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const PostsScreen = () => {
  const getDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(collection(db, "posts"));
      console.log("snapshot", snapshot);

      snapshot.forEach((doc) => console.log(`${doc.id} =>`, doc.data()));

      return snapshot.map((doc) => ({ id: doc.id, data: doc.data() }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  getDataFromFirestore();

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
