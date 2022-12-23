import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Logo from "./Logo";
import Link from "next/link";
import { usersActions } from "../store/usersSlice";

export default function Header() {
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
  }

  return (
    <div className="relative">
      <div className="w-full h-20 px-20 flex justify-between items-center border-[#ebebeb] border-2 max-[800px]:px-10">
        <Link href="/">
          <Logo />
        </Link>
        <div id="div_login_signup">
          <div>
            <button
              className="flex items-center p-2 border-[#e8e8e8] border-2 rounded-2xl"
              onClick={xy}
            >
              <div className="mr-2 flex items-center">
                <span class="material-symbols-outlined">menu</span>
              </div>
              <div className="flex items-center">
                <span class="material-symbols-outlined">account_circle</span>
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
