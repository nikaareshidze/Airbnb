import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

export default function becomeHost() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center min-h-screen w-10/12 m-auto">
        <div className="w-96 pb-16">
          <h1 className="text-base pb-4">Step 1</h1>
          <h1 className="text-3xl font-bold pb-4">Tell us about your place</h1>
          <p className="text-base">
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>
        <div className="font-bold">
          <Link href="/become-a-host/step-1-collect-info">Next</Link>
        </div>
      </div>
    </div>
  );
}
