import { createSlice } from "@reduxjs/toolkit";
import { logOut, signIn, signUp } from "./operations";
import {
  handlerFulfilled,
  handlerLogOutFulfilled,
  handlerLogOutRejected,
  handlerPending,
  handlerRejected,
} from "./handlers";

const initialState = {
  user: {
    id: null,
    avatar: null,
    login: null,
    email: null,
  },
  isLoading: false,
  isAuth: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, handlerPending)
      .addCase(signUp.fulfilled, handlerFulfilled)
      .addCase(signUp.rejected, handlerRejected)
      .addCase(signIn.pending, handlerPending)
      .addCase(signIn.fulfilled, handlerFulfilled)
      .addCase(signIn.rejected, handlerRejected)
      .addCase(logOut.pending, handlerPending)
      .addCase(logOut.fulfilled, handlerLogOutFulfilled)
      .addCase(logOut.rejected, handlerLogOutRejected),
});

export const authReducer = authSlice.reducer;
