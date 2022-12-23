import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { usersActions } from "../../store/usersSlice";

export default function LoginForm() {
  const router = useRouter();

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.usersSlice);

  const setIdToken = (payload) => {
    dispatch(usersActions.setIdToken(payload));
  };
  const setLocalId = (payload) => {
    dispatch(usersActions.setLocalId(payload));
  };
  const setIsLoggedIn = () => {
    dispatch(usersActions.setIsLoggedIn());
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyABqeesjGoNg9npJ3ETBXi8mjqSx0cDL6A",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIdToken(data.idToken);
        setLocalId(data.localId);
        setIsLoggedIn();
        router.push("/");
      });
  };

  return (
    <div className="w-full px-20 mt-4">
      <h1>Log In</h1>
      <form className="flex flex-col mt-2">
        <input
          placeholder="Email"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
          ref={emailRef}
        />
        <input
          placeholder="Password"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
          ref={passwordRef}
        />
        <button
          type="button"
          className="w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
