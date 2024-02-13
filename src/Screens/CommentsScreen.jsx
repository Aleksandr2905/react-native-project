import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Comment } from "../components/Comment";
import { comments } from "../data/comments";
import photo from "../../assets/images/sea.jpg";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export const CommentsScreen = () => {
  const [comment, setComment] = useState("");

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Image source={photo} style={styles.photo} />}
        data={comments}
        renderItem={({ item }) => <Comment item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View>
        <TextInput
          name="comment"
          placeholder="Коментувати..."
          placeholderTextColor="#bdbdbd"
          value={comment}
          onChangeText={setComment}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <AntDesign name="arrowup" size={14} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginVertical: 32,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    fontSize: 16,
    backgroundColor: "#f6f6f6",
  },
  button: {
    position: "absolute",
    width: 34,
    height: 34,
    top: 8,
    right: 8,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
});
