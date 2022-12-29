import React from "react";
import Header from "../../../components/Header";
import { useSelector } from "react-redux";

export default function successHosting() {
  const {
    city,
    country,
    type,
    guestsNumber,
    bedroomsNumber,
    bedsNumber,
    bathroomsNumber,
    photos,
    id,
  } = useSelector((state) => state.myPropertySlice);

  const { localId } = useSelector((state) => state.usersSlice);

  function saveProperty() {
    fetch(
      `https://airbnb-clone-27fe7-default-rtdb.firebaseio.com/apartments.json`,
      {
        method: "POST",
        body: JSON.stringify({
          id: id,
          owner_id: localId,
          location: { city: city, country: country },
          apartment: {
            type: type,
            rooms: {
              guestsNumber: guestsNumber,
              bedroomsNumber: bedroomsNumber,
              bathroomsNumber: bathroomsNumber,
              bedsNumber: bedsNumber,
            },
          },
          photos: photos,
        }),
        headers: {
          "Content-Type": `application/json`,
        },
      }
    );
  }

  return (
    <div>
      <Header />
      <button onClick={saveProperty}>Save</button>
    </div>
  );
}
