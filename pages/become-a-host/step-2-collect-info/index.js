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
        <div>
          <h1>{stateX.country}</h1>
          <h1>{stateX.city}</h1>
          <h1>{stateX.description}</h1>
          <div className="flex">
            <button onClick={showLocation}>Back</button>
            <Link href="/become-a-host/step-3-collect-info">Next</Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-2">
          <input
            {...register("country")}
            placeholder="Select Country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            {...register("city")}
            placeholder="Select City"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            {...register("description")}
            placeholder="Description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Continue
          </button>
        </form>
      )}
    </div>
  );
}
