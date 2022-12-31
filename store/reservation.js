import { createSlice } from "@reduxjs/toolkit";

const reservationInitialState = {
  shown: false,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState: reservationInitialState,
  reducers: {
    setShown(state) {
      state.shown = !state.shown;
    },
  },
});

export const reservationActions = reservationSlice.actions;

export default reservationSlice;
