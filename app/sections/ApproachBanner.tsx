import React from "react";
import Badge from "../components/Badge";
import Image from "next/image";

const ApproachBanner: React.FC = () => {
  return (
    <div className="pt-46 pb-24">
      <div className="container">
        <div>
          <div className="text-center">
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
          <div className="mt-8 text-80">
            <h1>A structured, Risk-Based Approach for Modern Wealth</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachBanner;
