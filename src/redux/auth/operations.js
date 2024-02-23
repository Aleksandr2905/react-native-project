import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password, login, avatar } = userData;
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (user) {
        await updateProfile(auth.currentUser, {
          displayName: login,
          photoURL: avatar,
        });
      }

      const data = {
        user: {
          name: user.displayName,
          email: user.email,
          id: user.uid,
          avatar: user.photoURL,
        },
      };
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password } = userData;
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const data = {
        user: {
          name: user.displayName,
          email: user.email,
          id: user.uid,
          avatar: user.photoURL,
        },
      };
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return;
    } catch (error) {
      return rejectWithValue(error._message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "auth/updateavatar",
  async (avatar, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      const newAvatar = await updateProfile(user, {
        photoURL: avatar,
      });

      const data = {
        user: {
          name: user.displayName,
          email: user.email,
          id: user.uid,
          avatar: user.photoURL,
        },
      };
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
