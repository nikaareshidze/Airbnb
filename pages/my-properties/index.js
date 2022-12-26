import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import { useSelector } from "react-redux";
import MyPropertyItems from "../../components/MyPropertyItems/MyPropertyItems";

export default function myProperties() {
  const { localId } = useSelector((state) => state.usersSlice);

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(
      `https://airbnb-clone-27fe7-default-rtdb.firebaseio.com/apartments.json`,
      {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          "Content-Type": `application/json`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data
          ? setProperties(
              Object.values(data).filter((x) => {
                return x.owner_id === localId;
              })
            )
          : setProperties([]);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="flex items-center w-full px-20 mt-4">
        <div className="flex flex-row justify-start items-center gap-x-4">
          {properties.map((item, i) => (
            <MyPropertyItems item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
