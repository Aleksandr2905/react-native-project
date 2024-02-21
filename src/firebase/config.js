import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAe4FExd6-CVTkxV_3bW12j5AXktU8AYls",
  authDomain: "myrnfirstproject-aefac.firebaseapp.com",
  projectId: "myrnfirstproject-aefac",
  storageBucket: "myrnfirstproject-aefac.appspot.com",
  messagingSenderId: "1007180270735",
  appId: "1:1007180270735:web:4c6147b7808cff8345b4fa",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
