import { createSlice } from "@reduxjs/toolkit";

const myPropertyInitialState = {
  type: "",
  country: "",
  city: "",
  guestsNumber: 4,
  bedroomsNumber: 2,
  bedsNumber: 1,
  bathroomsNumber: 1,
  photos: "",
  description: "null",
};

const myPropertySlice = createSlice({
  name: "property",
  initialState: myPropertyInitialState,
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    addGuestsNumber(state) {
      state.guestsNumber++;
    },
    addBedroomsNumber(state) {
      state.bedroomsNumber++;
    },
    addBedsNumber(state) {
      state.bedsNumber++;
    },
    addBathroomsNumber(state) {
      state.bathroomsNumber++;
    },
    removeGuestsNumber(state) {
      state.guestsNumber--;
    },
    removeBedroomsNumber(state) {
      state.bedroomsNumber--;
    },
    removeBedsNumber(state) {
      state.bedsNumber--;
    },
    removeBathroomsNumber(state) {
      state.bathroomsNumber--;
    },
    setPhotos(state, action) {
      state.photos = action.payload;
    },
  },
});

export const myPropertyActions = myPropertySlice.actions;

export default myPropertySlice;
