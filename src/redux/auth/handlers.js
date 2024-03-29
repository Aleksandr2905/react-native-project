export const handlerPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handlerFulfilled = (state, { payload }) => {
  console.log("AUTH", state.user);
  state.user = payload.user;
  state.isLoading = false;
  state.isAuth = true;
  state.error = null;
};

export const handlerRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};

export const handlerLogOutFulfilled = (state) => {
  state.user = {};
  state.isAuth = false;
};

export const handlerLogOutRejected = (state, { payload }) => {
  state.isAuth = false;
  state.error = payload.message;
};

export const handlerUpdateAvatarFulfilled = (state, { payload }) => {
  console.log("HANDLERS", state);
  console.log("HANDLERSpayload", payload);
  state.user = payload.user;
};
