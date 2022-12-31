import React from "react";
import ReservationNotOpen from "./ReservationNotOpen";
import ReservationOpen from "./ReservationOpen";

import { useSelector } from "react-redux";

export default function Reservation() {
  const { shown } = useSelector((state) => state.reservationSlice);

  return <>{shown ? <ReservationOpen /> : <ReservationNotOpen />}</>;
}
