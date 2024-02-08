import { FlatList, SafeAreaView, View } from "react-native";
import { UserInfo } from "../components/UserInfo";

export const PostsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <UserInfo />
        <FlatList />
      </View>
    </SafeAreaView>
  );
};
