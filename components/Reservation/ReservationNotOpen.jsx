import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { reservationActions } from "../../store/reservation";

export default function ReservationNotOpen() {
  const dispatch = useDispatch();

  const setShown = () => {
    dispatch(reservationActions.setShown());
  };

  function openReservation() {
    setShown();
  }

  return (
    <div className="flex justify-center items-center text-sm border-[#eeeeee] border p-2 rounded-3xl">
      <div
        className="px-4 border-r border-[#eeeeee] font-medium tracking-normal cursor-pointer"
        onClick={openReservation}
      >
        <h1>Anywhere</h1>
      </div>
      <div className="px-4 border-r border-[#eeeeee] font-medium tracking-normal cursor-pointer">
        <h1>Any week</h1>
      </div>
      <div className="px-4 text-[#b0b0b0] font-normal tracking-normal cursor-pointer">
        <h1>Add guests</h1>
      </div>
      <div className="bg-[#ff385c] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
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
    </div>
  );
}
