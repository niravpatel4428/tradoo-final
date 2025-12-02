import React from "react";
import ApproachBanner from "../sections/ApproachBanner";
import Structure from "../sections/Sructure";
import Steps from "../sections/Steps";
import Design from "../sections/Design";
import Works from "../sections/Works";
import ProblemSolved from "../sections/ProblemSolved";
import DigitalWealth from "../sections/DigitalWealth";
import FullOwnership from "../sections/FullOwnership";

const page = () => {
  return (
    <main>
      <ApproachBanner />
      <Structure />
      <Steps />
      <Design />
      <Works />
      <ProblemSolved />
      <FullOwnership />
      <DigitalWealth />
    </main>
  );
};

export default page;
