import React from "react";
import Header from "../../../components/Header";
import Link from "next/link";

import step1Choices from "../../../components/AddingProperty/collectPropertyData/step1/step-1";
import Step1ChoiceComponent from "../../../components/AddingProperty/collectPropertyData/step1/Step1ChoiceComponent";

export default function step1() {
  const step1ChoiceComponents = step1Choices.map((item) => (
    <Step1ChoiceComponent item={item} />
  ));
  return (
    <div>
      <Header />
      <div className="w-10/12 m-auto flex flex-col justify-center items-center mt-8">
        <h1 className="font-bold pb-4">
          Which of these best describes your place?
        </h1>
        <div className="flex">{step1ChoiceComponents}</div>
        <div className="font-bold">
          <Link href="/become-a-host/step-2-collect-info">Next</Link>
        </div>
      </div>
    </div>
  );
}
