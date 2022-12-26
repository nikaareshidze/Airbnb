import React from "react";

export default function MyPropertyItems({ item }) {
  return (
    <div>
      <img src={item.photos} className="w-64" />
      <div>
        <p>{`${item.location.city}, ${item.location.country}`}</p>
      </div>
    </div>
  );
}
