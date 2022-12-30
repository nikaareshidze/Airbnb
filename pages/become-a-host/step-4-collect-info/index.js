import React from "react";
import Header from "../../../components/Header";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { myPropertyActions } from "../../../store/myProperty";
import { useRouter } from "next/router";

export default function step4() {
  const router = useRouter();

  const dispatch = useDispatch();

  const {
    city,
    country,
    type,
    guestsNumber,
    bedroomsNumber,
    bedsNumber,
    bathroomsNumber,
    photos,
  } = useSelector((state) => state.myPropertySlice);

  // const [image, setImage] = useState();

  const setPhotos = (payload) => {
    dispatch(myPropertyActions.setPhotos(payload));
  };
  const setId = (payload) => {
    dispatch(myPropertyActions.setId(payload));
  };

  function uploadImage(e) {
    setPhotos(e.target.files[0].stream());
  }

  function saveToMyProperty() {
    let ID = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%^&*()";
    for (var i = 0; i < 30; i++) {
      ID += characters.charAt(Math.floor(Math.random() * 36));
    }

    setPhotos("https://source.unsplash.com/random/700x700/?city,night");
    setId(ID);
    router.push("/become-a-host/successHosting");
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center w-10/12 m-auto">
        <h1 className="text-3xl font-bold pt-4 pb-4">
          Add some photos of your house
        </h1>
        <h1 className="text-xl pb-4">
          You'll need 5 photos to get started. You can add more or make changes
          later.
        </h1>
        <input type="file" onChange={uploadImage} />
        <button onClick={saveToMyProperty} className="font-bold mt-8">
          Next
        </button>
      </div>
    </div>
  );
}
