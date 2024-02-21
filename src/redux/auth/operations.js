import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      const { email, password, login, avatar } = userData;
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: avatar,
      });

      const data = {
        user: {
          name: response.user.displayName,
          email: response.user.email,
          id: response.user.uid,
          avatar: response.user.photoURL,
        },
      };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
