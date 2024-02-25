import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  selectAvatar,
  selectEmail,
  selectLogin,
} from "../redux/auth/selectors";

export const UserInfo = ({ avatar }) => {
  // const avatar = useSelector(selectAvatar);
  const login = useSelector(selectLogin);
  const email = useSelector(selectEmail);

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.login}>{login}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 32,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "gray",
  },

  login: {
    fontSize: 13,
    fontWeight: "700",
  },

  email: {
    fontSize: 11,
  },
});
