import { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useLikePost = (postId, userId) => {
  const [likes, setLikes] = useState([]);

  const getLikes = async () => {
    const postRef = doc(db, "posts", postId);
    const postSnapshot = await postRef.get();
    const postData = postSnapshot.data();
    const postLikes = postData.likes || [];
    setLikes(postLikes);
  };

  // Добавление лайка к посту
  const likePost = async () => {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: [...likes, userId], // Добавляем идентификатор пользователя к массиву лайков
    });
    await getLikes(); // Получаем обновленное количество лайков
  };

  useEffect(() => {
    getLikes(); // Получаем количество лайков при загрузке компонента
  }, []);

  return { likes, likePost };
};
