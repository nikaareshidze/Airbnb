import React from "react";

export default function FilterDataItem({ item }) {
  return (
    <>
      {item.id === 1 ? (
        <div className="flex flex-col items-center border-b-2 border-black pb-4 pt-1 cursor-pointer mt-3 mr-5">
          <img src={`${item.image}`} className="w-6 h-6 mb-2" />
          <h1 className="text-xs text-center whitespace-nowrap">
            {item.title}
          </h1>
        </div>
      ) : (
        <div className="flex flex-col items-center pb-4 cursor-pointer mt-3 pt-1 mr-5 hover:border-b-2 border-[#717171]">
          <img src={`${item.image}`} className="w-6 h-6 mb-2" />
          <h1 className="text-xs text-center whitespace-nowrap text-[#717171]">
            {item.title}
          </h1>
        </div>
      )}
    </>
  );
}
