import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Post } from "../components/Post";
import { posts } from "../data/posts";
import { Background } from "../components/Background";
import { Avatar } from "../components/Avatar";
import { Title } from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const avatar = "avatar";
  const login = "Natali Romanova";
  return (
    <SafeAreaView style={styles.container}>
      <Background>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerWrapper}>
              <Avatar avatar={avatar} />
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.logout}
              >
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
