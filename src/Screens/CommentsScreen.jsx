import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import moment from "moment";
import { Comment } from "../components/Comment";
import { comments } from "../data/comments";
import "moment/locale/uk";
import photo from "../../assets/images/sea.jpg";
import ava from "../../assets/images/user.png";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export const CommentsScreen = () => {
  const [comment, setComment] = useState("");
  moment.locale("uk");
  const currentDate = moment().format("DD MMMM, YYYY | HH:mm");

  const addComment = () => {
    const newComment = {
      id: Math.random(),
      userId: "current",
      photo: ava,
      comment: comment,
      date: currentDate,
    };
    comments.push(newComment);
    setComment("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Image source={photo} style={styles.photo} />}
        data={comments}
        renderItem={({ item }) => <Comment item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        style={styles.wrapper}
      />
      <View style={styles.input}>
        <TextInput
          name="comment"
          placeholder="Коментувати..."
          placeholderTextColor="#bdbdbd"
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.button} onPress={addComment}>
          <AntDesign name="arrowup" size={14} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#fff",
  },

  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 100,
    padding: 16,
    marginTop: 32,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    fontSize: 16,
    backgroundColor: "#f6f6f6",
  },
  button: {
    position: "absolute",
    width: 34,
    height: 34,
    top: 7,
    right: 8,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
});
