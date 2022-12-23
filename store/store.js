import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import myPropertySlice from "./myProperty";

const store = configureStore({
  reducer: {
    usersSlice: usersSlice.reducer,
    myPropertySlice: myPropertySlice.reducer,
  },
});

export default store;
