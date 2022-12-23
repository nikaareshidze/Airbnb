import React from "react";
import { useDispatch } from "react-redux";

import { myPropertyActions } from "../../../../store/myProperty";

export default function Step1ChoiceComponent({ item }) {
  const dispatch = useDispatch();

  const setType = (payload) => {
    dispatch(myPropertyActions.setType(payload));
  };

  function savePropertyType(event) {
    event.preventDefault();
    setType(item.title);
  }

  return (
    <div>
      <button
        onClick={savePropertyType}
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        {item.title}
      </button>
    </div>
  );
}
