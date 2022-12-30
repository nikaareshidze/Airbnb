import React from "react";

export default function Footer() {
  return (
    <div className="px-20 h-12 border-[#ebebeb] border-t-2 text-sm flex justify-between items-center fixed bottom-0 left-0 right-0 bg-white">
      <div className="flex gap-3">
        <h1>2022 Airbnb, Inc.</h1>
        <h1>Terms</h1>
        <h1>Sitemap</h1>
        <h1>Privacy</h1>
        <h1 className="flex items-center gap-2">
          Your Privacy Choices
          <span class="i9chubn dir dir-ltr">
            <svg width="26" height="12" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                fill="#fff"
              ></rect>
              <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
              <path
                d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                stroke="#06F"
                stroke-linecap="round"
              ></path>
              <path
                d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                stroke="#fff"
                stroke-linecap="round"
              ></path>
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                stroke="#06F"
              ></rect>
            </svg>
          </span>
        </h1>
      </div>
      <div className="flex gap-3 font-medium">
        <h1>English (US)</h1>
        <h1>$ USD</h1>
        <h1>Support & resources</h1>
      </div>
    </div>
  );
}
