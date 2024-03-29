import { createStackNavigator } from "@react-navigation/stack";
import { PostsScreen } from "../screens/PostsScreen";
import { CommentsScreen } from "../screens/CommentsScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MapScreen } from "../screens/MapScreen";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";

const PostsStack = createStackNavigator();

export const PostsNavigator = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <PostsStack.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        headerBackVisible: false,
        tabBarShowLabel: false,
        headerStyle: {
          borderBottomColor: "#e8e8e8",
          borderBottomWidth: 1,
        },
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
            <TouchableOpacity onPress={logout}>
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
        options={() => ({
          headerBackVisible: false,
          title: "Коментарі",
          headerTitleAlign: "center",
          tabBarStyle: {
            display: "none",
          },
        })}
      />
      <PostsStack.Screen
        name="Map"
        component={MapScreen}
        options={() => ({ title: "Карта", headerTitleAlign: "center" })}
      />
    </PostsStack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconArrow: {
    color: "#21212180",
    left: 16,
  },
  icon: {
    color: "#BDBDBD",
    right: 10,
  },
});
