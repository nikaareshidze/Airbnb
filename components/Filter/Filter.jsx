import React from "react";
import filterData from "./filterData";
import FilterDataItem from "./FilterDataItem";

export default function Filter() {
  return (
    <div className="flex justify-between items-center w-full px-20 mt-2 max-[800px]:px-10">
      <div className="flex flex-row justify-start items-center gap-x-8 w-10/12 h-20 overflow-x-auto max-[1235px]:w-9/12 max-[800px]:w-full">
        {filterData.map((item, i) => (
          <FilterDataItem item={item} key={i} />
        ))}
      </div>
      <div className="rounded-full border-2 border-black w-8 h-8 flex items-center justify-center max-[800px]:hidden">
        <span class="material-symbols-outlined">chevron_right</span>
      </div>
      <div className="border-2 border-black px-8 py-2 rounded-md max-[800px]:hidden">
        <h1 className="text-sm">Filter</h1>
      </div>
    </div>
  );
}
