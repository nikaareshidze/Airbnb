import React, { useState } from "react";
import Header from "../../../components/Header";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { myPropertyActions } from "../../../store/myProperty";

export default function step2() {
  const dispatch = useDispatch();

  const setCountry = (payload) => {
    dispatch(myPropertyActions.setCountry(payload));
  };
  const setCity = (payload) => {
    dispatch(myPropertyActions.setCity(payload));
  };
  const setDescription = (payload) => {
    dispatch(myPropertyActions.setDescription(payload));
  };

  const [finalResult, setFinalResult] = useState(false);
  const [stateX, setStateX] = useState({
    country: "",
    city: "",
    description: "",
  });

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    setFinalResult((prev) => !prev);
    setStateX((prev) => {
      return {
        ...prev,
        city: data.city,
        country: data.country,
        description: data.description,
      };
    });
    setCountry(data.country);
    setCity(data.city);
    setDescription(data.description);
  }

  function showLocation() {
    setFinalResult((prev) => !prev);
  }

  return (
    <div>
      <Header />
      {finalResult ? (
        <div className="w-full min-h-screen flex items-center justify-center flex-col">
          <h1>Country: {stateX.country}</h1>
          <h1>City: {stateX.city}</h1>
          <h1>Description: {stateX.description}</h1>
          <div className="flex gap-x-2 mt-2">
            <button
              onClick={showLocation}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Back
            </button>
            <Link
              href="/become-a-host/step-3-collect-info"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-96 flex flex-col mt-4 gap-y-3"
          >
            <input
              {...register("country")}
              placeholder="Select Country"
              className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              {...register("city")}
              placeholder="Select City"
              className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              {...register("description")}
              placeholder="Description"
              className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
