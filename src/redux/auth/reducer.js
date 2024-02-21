import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./operations";

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
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoading = false;
      state.isAuth = true;
      state.error = null;
    }),
});

export const authReducer = authSlice.reducer;
