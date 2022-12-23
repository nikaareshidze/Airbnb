import React from "react";
import { useSelector } from "react-redux";

export default function Properties() {
  const { localId } = useSelector((state) => state.usersSlice);

  return <div></div>;
}
