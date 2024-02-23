import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Post } from "../components/Post";
import { posts } from "../data/posts";
import { Background } from "../components/Background";
import { Avatar } from "../components/Avatar";
import { Title } from "../components/Title";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectAvatar, selectLogin } from "../redux/auth/selectors";
import { logOut } from "../redux/auth/operations";

export const ProfileScreen = () => {
  const avatar = useSelector(selectAvatar);
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Background>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerWrapper}>
              <Avatar avatar={avatar} />
              <TouchableOpacity onPress={logout} style={styles.logout}>
                <Feather name="log-out" size={24} style={styles.icon} />
              </TouchableOpacity>
              <Title title={login} />
            </View>
          }
          data={posts}
          renderItem={({ item }) => (
            <Post item={item} showThumbsUpIcon={true} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </Background>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    width: "100%",
    position: "relative",
    paddingTop: 92,
    paddingHorizontal: 16,
    marginTop: 147,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  logout: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  icon: {
    color: "#BDBDBD",
    right: 10,
  },
});
