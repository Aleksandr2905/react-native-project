import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

export const Avatar = () => {
  const [avatar, setAvatar] = useState(null);

  //   const getPermissionAsync = async () => {
  //     if (Constants.platform.ios) {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert(
  //           "Извините, нам нужны разрешения на доступ к камере и галерее, чтобы это работало!"
  //         );
  //       }
  //     }
  //   };

  const pickImage = async () => {
    // await getPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {avatar && <Image source={{ uri: avatar }} />}
      </View>
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        {!avatar ? (
          <AntDesign name="pluscircleo" size={25} style={styles.icon} />
        ) : (
          <AntDesign name="closecircleo" size={25} style={styles.icon} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    overflow: "hidden",
    objectFit: "cover",
    backgroundColor: "#F6F6F6",
  },
  button: {
    position: "absolute",
    borderRadius: 50,
    right: -12,
    bottom: 14,
    zIndex: 9999,
    color: "#FF6C00",
    backgroundColor: "#ffffff",
  },
  icon: {
    borderRadius: 50,
    color: "#FF6C00",
    backgroundColor: "transparent",
  },
});
