import React from "react";

export default function MyPropertyItems({ item }) {
  return (
    <div>
      <img src={item.photos} className="w-80 h-72 rounded-xl" />
      <div className="mt-2 text-sm">
        <p className="font-bold">{`${item.location.city}, ${item.location.country}`}</p>
        <p>{`${Math.round(Math.random() * 100)}`} kilometrs away</p>
        <p>Jan 1-{`${Math.round(Math.random() * 31)}`}</p>
        <p className="font-medium">
          ${`${Math.round(Math.random() * 300)}`} night
        </p>
      </div>
    </div>
  );
}
