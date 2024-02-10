import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { ButtonForm } from "../components/ButtonForm";
import { useState } from "react";

export const CreatePostsScreen = () => {
  const img = "photo";
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const disable = !(title || place);

  return (
    <View style={styles.container}>
      <View style={styles.photoWrapper}>
        <ImageBackground source={{ uri: img }} style={styles.photo}>
          <TouchableOpacity>
            <FontAwesome name="camera" size={24} style={styles.iconCamera} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <Text style={styles.text}>Завантажте фото</Text>
      <TextInput
        style={styles.input}
        name="name"
        placeholder="Назва..."
        placeholderTextColor={"#bdbdbd"}
        value={title}
        onChangeText=""
      />
      <View>
        <TextInput
          style={styles.inputLocation}
          name="location"
          placeholder="Місцевість..."
          placeholderTextColor={"#bdbdbd"}
          value={place}
          onChangeText=""
        />
        <Feather
          name="map-pin"
          size={24}
          color={"#BDBDBD"}
          style={styles.mapPin}
        />
      </View>
      <ButtonForm title="Опубліковати" onPress="" disabled={disable} />
      <TouchableOpacity style={styles.btnDelete}>
        <Feather name="trash-2" size={24} style={styles.iconDelete} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  photoWrapper: {
    height: 240,
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
  },
  photo: {
    // backgroundColor: "red",
  },
  iconCamera: {
    // justifyContent: "center",
    alignSelf: "center",
    color: "#BDBDBD",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    padding: 18,
    width: 60,
    height: 60,
  },
  text: {
    paddingTop: 8,
    fontSize: 16,
    color: "#bdbdbd",
  },
  input: {
    height: 50,
    marginTop: 32,
    borderBottomWidth: 1,
    fontSize: 16,
    borderBottomColor: "#e8e8e8",
  },
  inputLocation: {
    height: 50,
    marginTop: 16,
    marginBottom: 32,
    borderBottomWidth: 1,
    paddingLeft: 28,
    fontSize: 16,
    borderBottomColor: "#e8e8e8",
  },
  mapPin: {
    position: "absolute",
    top: 30,
  },
  btnDelete: {
    width: 70,
    height: 40,
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: 34,
    borderRadius: 20,
    paddingHorizontal: 23,
    paddingVertical: 8,
    backgroundColor: "#f6f6f6",
  },
  iconDelete: {
    color: "#BDBDBD",
  },
});
