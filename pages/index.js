import Header from "../components/Header";
import Filter from "../components/Filter/Filter";
import React from "react";
import { useState, useEffect } from "react";
import MyPropertyItems from "../components/MyPropertyItems/MyPropertyItems";

export default function Home() {
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
        data ? setProperties(Object.values(data)) : setProperties([]);
      });
  }, []);

  return (
    <div>
      <Header />
      <Filter />
      <div className="px-20 mt-8 mb-8 grid grid-cols-4 gap-x-4 gap-y-8">
        {properties.map((item, i) => (
          <MyPropertyItems item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
