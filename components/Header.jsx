import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Logo from "./Logo";
import Link from "next/link";
import { usersActions } from "../store/usersSlice";

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
      <div className="w-full h-20 px-20 flex justify-between items-center border-[#ebebeb] border-2 max-[800px]:px-10">
        <Link href="/">
          <Logo />
        </Link>
        <div id="div_login_signup">
          <div className="flex items-center">
            <h1 className="text-sm font-medium px-3">Switch to hosting</h1>
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
      <div>
        {!hidden && (
          <div className="bg-white w-64 text-black border-2 border-[#e8e8e8] absolute top-24 right-20 flex flex-col space-y-3">
            {!isLoggedIn && (
              <>
                <Link href="/signup" className="p-4 hover:bg-slate-100 text-sm">
                  Sign up
                </Link>
                <Link href="/login" className="p-4 hover:bg-slate-100 text-sm">
                  Log In
                </Link>
              </>
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
