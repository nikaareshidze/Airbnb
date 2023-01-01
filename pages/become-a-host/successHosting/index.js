import React from "react";
import Header from "../../../components/Header";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function successHosting() {
  const router = useRouter();

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
    ).then(() => {
      router.push("/");
    });
  }

  return (
    <div>
      <Header />
      <div className="w-full min-h-screen flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={saveProperty}
        >
          Save
        </button>
      </div>
    </div>
  );
}
