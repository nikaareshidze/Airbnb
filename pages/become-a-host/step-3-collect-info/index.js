import React, { useState } from "react";
import Header from "../../../components/Header";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { myPropertyActions } from "../../../store/myProperty";

export default function step3() {
  const {
    city,
    country,
    type,
    guestsNumber,
    bedroomsNumber,
    bedsNumber,
    bathroomsNumber,
  } = useSelector((state) => state.myPropertySlice);

  const dispatch = useDispatch();

  const [guest, setGuest] = useState(guestsNumber);
  const [bedroom, setBedroom] = useState(bedroomsNumber);
  const [bed, setBed] = useState(bedsNumber);
  const [bathroom, setBathroom] = useState(bathroomsNumber);

  const addGuestsNumber = () => {
    dispatch(myPropertyActions.addGuestsNumber());
    setGuest((prev) => prev + 1);
  };
  const removeGuestsNumber = () => {
    dispatch(myPropertyActions.removeGuestsNumber());
    setGuest((prev) => prev - 1);
  };
  const addBedroomsNumber = () => {
    dispatch(myPropertyActions.addBedroomsNumber());
    setBedroom((prev) => prev + 1);
  };
  const removeBedroomsNumber = () => {
    dispatch(myPropertyActions.removeBedroomsNumber());
    setBedroom((prev) => prev - 1);
  };
  const addBedsNumber = () => {
    dispatch(myPropertyActions.addBedsNumber());
    setBed((prev) => prev + 1);
  };
  const removeBedsNumber = () => {
    dispatch(myPropertyActions.removeBedsNumber());
    setBed((prev) => prev - 1);
  };
  const addBathroomsNumber = () => {
    dispatch(myPropertyActions.addBathroomsNumber());
    setBathroom((prev) => prev + 1);
  };
  const removeBathroomsNumber = () => {
    dispatch(myPropertyActions.removeBathroomsNumber());
    setBathroom((prev) => prev - 1);
  };

  function removeGuest() {
    removeGuestsNumber();
  }
  function addGuest() {
    addGuestsNumber();
  }

  function removeBedrooms() {
    removeBedroomsNumber();
  }
  function addBedrooms() {
    addBedroomsNumber();
  }

  function removeBeds() {
    removeBedsNumber();
  }
  function addBeds() {
    addBedsNumber();
  }

  function removeBathrooms() {
    removeBathroomsNumber();
  }
  function addBathrooms() {
    addBathroomsNumber();
  }

  return (
    <div>
      <Header />
      <div className="w-10/12 m-auto items-center flex flex-col justify-center">
        <h1 className="font-bold text-3xl pt-4 pb-4">
          Share some basics about your place
        </h1>
        <h1 className="text-xl pb-4">
          You'll add more details later, like bed types.
        </h1>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-4">
            <h1>Guests</h1>
            <div className="flex gap-4">
              <button onClick={removeGuest}>
                <span class="material-symbols-outlined">remove</span>
              </button>
              <h1>{guest}</h1>
              <button onClick={addGuest}>
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <h1>Bedrooms</h1>
            <div className="flex gap-4">
              <button onClick={removeBedrooms}>
                <span class="material-symbols-outlined">remove</span>
              </button>
              <h1>{bedroom}</h1>
              <button onClick={addBedrooms}>
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <h1>Beds</h1>
            <div className="flex gap-4">
              <button onClick={removeBeds}>
                <span class="material-symbols-outlined">remove</span>
              </button>
              <h1>{bed}</h1>
              <button onClick={addBeds}>
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <h1>Bathrooms</h1>
            <div className="flex gap-4">
              <button onClick={removeBathrooms}>
                <span class="material-symbols-outlined">remove</span>
              </button>
              <h1>{bathroom}</h1>
              <button onClick={addBathrooms}>
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </div>
        <Link
          href="/become-a-host/step-4-collect-info"
          className="font-bold mt-8"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
