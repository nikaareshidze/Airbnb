import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import myPropertySlice from "./myProperty";
import reservationSlice from "./reservation";

const store = configureStore({
  reducer: {
    usersSlice: usersSlice.reducer,
    myPropertySlice: myPropertySlice.reducer,
    reservationSlice: reservationSlice.reducer,
  },
});

export default store;
