import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../store/usersSlice";

export default function SignUpForm() {
  const router = useRouter();

  const [buttonX, setButtonX] = useState(true);

  const { register, handleSubmit } = useForm();

  const { localId } = useSelector((state) => state.usersSlice);

  const dispatch = useDispatch();

  const setIdToken = (payload) => {
    dispatch(usersActions.setIdToken(payload));
  };
  const setLocalId = (payload) => {
    dispatch(usersActions.setLocalId(payload));
  };

  const [firstnameX, setFirstnameX] = useState("");
  const [lastnameX, setLastnameX] = useState("");

  const onSubmit = (data) => {
    const firstname = data.firstname;
    const lastname = data.lastname;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyABqeesjGoNg9npJ3ETBXi8mjqSx0cDL6A",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
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
      .then((x) => {
        setIdToken(x.idToken);
        setLocalId(x.localId);
        setButtonX(!buttonX);
        setFirstnameX((firstnameX) => firstname);
        setLastnameX((lastnameX) => lastname);
      });
  };

  const submitX = (event) => {
    event.preventDefault();

    fetch(
      `https://airbnb-clone-27fe7-default-rtdb.firebaseio.com/users/${localId}/info.json`,
      {
        method: "POST",
        body: JSON.stringify({
          firstname: firstnameX,
          lastname: lastnameX,
        }),
        headers: {
          "Content-Type": `application/json`,
        },
      }
    ).then(() => {
      router.push("/login");
    });
  };

  return (
    <div className="w-full px-20 mt-4">
      <h1 className="mb-4">Sign Up</h1>
      {buttonX ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-2">
          <input
            {...register("firstname")}
            placeholder="First Name"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
          />
          <input
            {...register("lastname")}
            placeholder="Last Name"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
          />
          <input
            {...register("password")}
            placeholder="Password"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
          />
          <p className="text-sm mb-4">
            By selecting Agree and continue, I agree to Airbnb’s Terms of
            Service, Payments Terms of Service, and Nondiscrimination Policy and
            acknowledge the Privacy Policy.
          </p>

          <button
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Agree and continue
          </button>
        </form>
      ) : (
        <div>
          <h1>Welcome to Airbnb</h1>
          <h1>
            Discover places to stay, local restaurants, and unique experiences
            around the world.
          </h1>
          <button
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={submitX}
          >
            Continue for Signing in
          </button>
        </div>
      )}
    </div>
  );
}
