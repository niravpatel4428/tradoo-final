import React from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import StepIndicator from "../components/StepIndicator";

const ApproachBanner: React.FC = () => {
  return (
    <div className="max-xs:pt-30 max-xs:pb-12 pt-46 pb-24">
      <div className="container">
        <div className="sm:text-center">
          <div className="">
            <Badge
              label="About"
              icon={
                <Image
                  src="/image/svg/zap.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
              }
            />
          </div>
          <div className="mt-8">
            <h1 className="max-xs:text-3xl max-xs:leading-9 text-5xl leading-13 xxl:text-80 font-semibold xxl:leading-22 tracking-[-1.44px] xxl:tracking-[-2.40px] text-gray800">A structured, Risk-Based Approach for Modern Wealth</h1>
          </div>
          <div className="mt-8">
            <p className="text-lg xxl:text-xl font-normal leading-7 text-gray700">Disciplined framework combining market regimes, risk factors and behavioural patterns.</p>
          </div>
          <div className="mt-4 xxl:mt-18">
            <StepIndicator activeStep={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachBanner;
