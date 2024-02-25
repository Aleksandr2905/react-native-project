export const selectIsAuth = (state) => state.isAuth;
export const selectIsLoading = (state) => state.isLoading;
export const selectUser = (state) => state.user;
export const selectAvatar = (state) => state.user.avatar;
export const selectLogin = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
