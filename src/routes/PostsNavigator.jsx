import { createStackNavigator } from "@react-navigation/stack";
import { PostsScreen } from "../screens/PostsScreen";
import { CommentsScreen } from "../screens/CommentsScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostsStack = createStackNavigator();

export const PostsNavigator = () => {
  const navigation = useNavigation();

  return (
    <PostsStack.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        headerBackVisible: false,
        tabBarShowLabel: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("PostsScreen")}>
            <AntDesign name="arrowleft" size={24} style={styles.iconArrow} />
          </TouchableOpacity>
        ),
      }}
    >
      <PostsStack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={() => ({
          headerBackVisible: false,
          title: "Публікації",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Feather name="log-out" size={24} style={styles.icon} />
            </TouchableOpacity>
          ),
          headerLeft: null,
          tabBarLabel: null,
        })}
      />
      <PostsStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerBackVisible: false,
          title: "Коментарі",
          headerTitleAlign: "center",
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </PostsStack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconArrow: {
    color: "#212121",
  },
  icon: {
    color: "#BDBDBD",
    right: 10,
  },
});
