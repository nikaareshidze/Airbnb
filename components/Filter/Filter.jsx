import React from "react";
import filterData from "./filterData";
import FilterDataItem from "./FilterDataItem";

export default function Filter() {
  return (
    <div className="flex justify-between items-center w-full px-20 mt-4 max-[800px]:px-10">
      <div className="flex flex-row justify-start items-center gap-x-4 w-10/12 overflow-x-auto max-[1235px]:w-9/12 max-[800px]:w-full">
        {filterData.map((item, i) => (
          <FilterDataItem item={item} key={i} />
        ))}
      </div>
      <div className="rounded-full border border-[#d9d9d9] w-7 h-7 flex items-center justify-center max-[800px]:hidden cursor-pointer">
        <span class="material-symbols-outlined">chevron_right</span>
      </div>
      <div className="w-24 h-12 flex items-center justify-around border rounded-2xl border-[#ededed] px-8 py-2 max-[800px]:hidden">
        <div className="mr-2">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "block",
              height: "14px",
              width: "14px",
              fill: "currentcolor",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </div>
        <h1 className="text-xs font-medium">Filters</h1>
      </div>
    </div>
  );
}
