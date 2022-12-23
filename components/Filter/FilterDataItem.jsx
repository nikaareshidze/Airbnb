import React from "react";

export default function FilterDataItem({ item }) {
  return (
    <div className="flex flex-col items-center justify-start">
      <img src={`${item.image}`} className="w-6 h-6 mb-2" />
      <h1 className="text-xs text-center whitespace-nowrap">{item.title}</h1>
    </div>
  );
}
