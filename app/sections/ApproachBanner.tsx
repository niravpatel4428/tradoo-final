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

font-family: 'Inter Display', sans-serif;
font-style: normal;
font-size: 80px;
font-weight: 600;
line-height: 88px;
letter-spacing: -2.40px;
text-align: center;
color: #1E2330;

export default ApproachBanner;
