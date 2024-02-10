import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { UserInfo } from "../components/UserInfo";

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <UserInfo />
        <FlatList />
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
