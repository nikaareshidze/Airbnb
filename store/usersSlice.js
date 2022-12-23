import { createSlice } from "@reduxjs/toolkit";

const usersSliceInitialState = {
  idToken: null,
  localId: null,
  isLoggedIn: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersSliceInitialState,
  reducers: {
    setIdToken(state, action) {
      state.idToken = action.payload;
    },
    setLocalId(state, action) {
      state.localId = action.payload;
    },
    setIsLoggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
