import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { PostsScreen } from "../screens/PostsScreen";
import { CreatePostsScreen } from "../screens/CreatePostsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { PostsNavigator } from "./PostsNavigator";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === "Comments") {
    return { display: "none" };
  }
  return {
    justifyContent: "center",
    height: 83,
    paddingHorizontal: 82,
  };
};

export const BottomNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: getHeaderTitle(route),
        headerStyle: {
          backgroundColor: "#FFF",
          borderBottomColor: "#e8e8e8",
          borderBottomWidth: 1,
          height: 88,
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsNavigator}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <Feather
              name="grid"
              size={24}
              style={[styles.icon, focused && { color: "#FF6C00" }]}
            />
          ),

          headerShown: false,
          headerBackVisible: false,
        })}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={() => ({
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.button}>
              <Feather name="plus" size={size} style={styles.plusIcon} />
            </View>
          ),
          tabBarStyle: {
            display: "none",
          },
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <AntDesign name="arrowleft" size={24} style={styles.iconArrow} />
            </TouchableOpacity>
          ),
          unmountOnBlur: true,
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              style={[styles.icon, focused && { color: "#FF6C00" }]}
            />
          ),
        })}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  iconArrow: {
    color: "#21212180",
    left: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  icon: {
    color: "#21212180",
  },

  plusIcon: {
    color: "#fff",
  },
});
