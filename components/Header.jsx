import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Logo from "./Logo";
import Link from "next/link";
import { usersActions } from "../store/usersSlice";
import { reservationActions } from "../store/reservation";

import Reservation from "./Reservation/Reservation";

export default function Header() {
  const router = useRouter();

  const dispatch = useDispatch();

  const [hidden, setHidden] = useState(true);

  function xy() {
    setHidden(!hidden);
  }

  const x = {
    display: "",
  };

  const { isLoggedIn } = useSelector((state) => state.usersSlice);
  const { shown } = useSelector((state) => state.reservationSlice);

  const setIsLoggedIn = () => {
    dispatch(usersActions.setIsLoggedIn());
  };

  function logout(event) {
    event.preventDefault();
    setIsLoggedIn();
    router.push("/login");
  }

  return (
    <div className="relative">
      {shown ? (
        <div className="h-44 px-20 border-[#ebebeb] border max-[800px]:px-10">
          <div className="h-20 flex justify-between items-center  max-[800px]:px-10">
            <Link href="/">
              <Logo />
            </Link>

            <div className="ml-28">
              <Reservation />
            </div>

            <div id="div_login_signup">
              <div className="flex items-center">
                <h1 className="text-sm font-medium px-3">Airbnb your home</h1>
                <div className="mx-3">
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: "block",
                      height: "16px",
                      width: "16px",
                      fill: "currentcolor",
                    }}
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  >
                    <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                  </svg>
                </div>
                <button
                  className="ml-3 w-19 h-10 flex items-center p-2 border-[#e8e8e8] border rounded-2xl"
                  onClick={xy}
                >
                  <div className="mr-2 flex items-center">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: "block",
                        fill: "none",
                        height: "16px",
                        width: "16px",
                        stroke: "currentcolor",
                        overflow: "visible",
                      }}
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <g fill="none" fill-rule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: "block",
                        height: "30px",
                        width: "30px",
                        fill: "#717171",
                      }}
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center text-sm border-[#eeeeee] border py-3 rounded-[56px] mb-2">
              <div className="border-r border-[#eeeeee] tracking-normal cursor-pointer pl-8 pr-24">
                <h1 className="font-semibold text-xs">Where</h1>
                <h1 className="text-[#222222] text-sm cursor-text">
                  Search destinations
                </h1>
              </div>
              <div className="border-r border-[#eeeeee] tracking-normal cursor-pointer px-8">
                <h1 className="font-semibold text-xs">Check In</h1>
                <h1 className="text-[#222222] text-sm cursor-text">
                  Add dates
                </h1>
              </div>
              <div className="border-r border-[#eeeeee] tracking-normal cursor-pointer px-8">
                <h1 className="font-semibold text-xs">Check Out</h1>
                <h1 className="text-[#222222] text-sm cursor-text">
                  Add dates
                </h1>
              </div>
              <div className="tracking-normal cursor-pointer px-8">
                <h1 className="font-semibold text-xs">Who</h1>
                <h1 className="text-[#222222] text-sm cursor-text">
                  Add guests
                </h1>
              </div>

              <div className="bg-[#ff385c] w-50 h-50 p-4 rounded-full flex items-center gap-x-2 justify-between cursor-pointer mr-4">
                <div className="flex items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "12px",
                      width: "12px",
                      overflow: "visible",
                      stroke: "white",
                      strokeWidth: "5.33333px",
                    }}
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  >
                    <g fill="none">
                      <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                    </g>
                  </svg>
                </div>
                <h1 className="text-white">Search</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-20 px-20 flex justify-between items-center border-[#ebebeb] border max-[800px]:px-10">
          <Link href="/">
            <Logo />
          </Link>

          <div className="ml-28">
            <Reservation />
          </div>

          <div id="div_login_signup">
            <div className="flex items-center">
              <h1 className="text-sm font-medium px-3">Airbnb your home</h1>
              <div className="mx-3">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    display: "block",
                    height: "16px",
                    width: "16px",
                    fill: "currentcolor",
                  }}
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                </svg>
              </div>
              <button
                className="ml-3 w-19 h-10 flex items-center p-2 border-[#e8e8e8] border rounded-2xl"
                onClick={xy}
              >
                <div className="mr-2 flex items-center">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "16px",
                      width: "16px",
                      stroke: "currentcolor",
                      overflow: "visible",
                    }}
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  >
                    <g fill="none" fill-rule="nonzero">
                      <path d="m2 16h28"></path>
                      <path d="m2 24h28"></path>
                      <path d="m2 8h28"></path>
                    </g>
                  </svg>
                </div>
                <div className="flex items-center">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: "block",
                      height: "30px",
                      width: "30px",
                      fill: "#717171",
                    }}
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  >
                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        {!hidden && (
          <div className="bg-white w-60 h-60 text-black border rounded-lg border-[#e8e8e8] absolute top-[72px] right-20 flex flex-col space-y-3">
            {!isLoggedIn && (
              <div className="mt-2 flex flex-col">
                <Link
                  href="/login"
                  className="pl-4 py-3 font-medium hover:bg-slate-100 text-sm"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="pl-4 py-3 hover:bg-slate-100 text-sm"
                >
                  Sign up
                </Link>

                <h1 className="text-black text-sm pl-4 py-3">
                  Airbnb your home
                </h1>
                <h1 className="text-black text-sm pl-4 py-3">
                  Host an experience
                </h1>
                <h1 className="text-black text-sm pl-4 py-3">Help</h1>
              </div>
            )}
            {isLoggedIn && (
              <>
                <Link
                  href="/become-a-host"
                  className="p-4 hover:bg-slate-100 text-sm"
                >
                  Airbnb Your Home
                </Link>
                <Link
                  href="/my-properties"
                  className="p-4 hover:bg-slate-100 text-sm"
                >
                  My Properties
                </Link>
                <Link
                  href="/account-setting"
                  className="p-4 hover:bg-slate-100 text-sm"
                >
                  Account
                </Link>
                <Link
                  href="/"
                  className="p-4 hover:bg-slate-100 text-sm"
                  onClick={logout}
                >
                  Log out
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
