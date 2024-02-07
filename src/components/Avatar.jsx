import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

export const Avatar = ({ avatar, setAvatar }) => {
  const addAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const deleteAvatar = () => {
    setAvatar(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {avatar && <Image source={{ uri: avatar }} style={styles.photo} />}
      </View>
      <TouchableOpacity
        onPress={!avatar ? addAvatar : deleteAvatar}
        style={styles.button}
      >
        {!avatar ? (
          <AntDesign name="pluscircleo" size={25} style={styles.icon} />
        ) : (
          <AntDesign name="closecircleo" size={25} style={styles.iconDelete} />
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
    objectFit: "cover",
    backgroundColor: "#F6F6F6",
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 16,
    objectFit: "cover",
  },
  button: {
    position: "absolute",
    borderRadius: 50,
    right: -12,
    bottom: 14,
    color: "#FF6C00",
    backgroundColor: "#ffffff",
  },
  icon: {
    borderRadius: 50,
    color: "#FF6C00",
    backgroundColor: "transparent",
  },
  iconDelete: {
    borderRadius: 50,
    color: "#E8E8E8",
    backgroundColor: "transparent",
  },
});
