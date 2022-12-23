import React from "react";
import Header from "../../../components/Header";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { myPropertyActions } from "../../../store/myProperty";

export default function step4() {
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

  function uploadImage(e) {
    setPhotos(e.target.files[0].stream());
  }

  function saveToMyProperty() {
    const formData = new FormData();
    formData.append("image", photos);
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
          <Link href="/become-a-host/successHosting" className="font-bold mt-8">
            Next
          </Link>
        </button>
      </div>
    </div>
  );
}
