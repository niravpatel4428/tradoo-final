import React from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import structure from "@/public/image/structure.jpg";
import siren from "@/public/image/svg/siren.svg";
import graphdown from "@/public/image/svg/graph-down.svg";
import shieldcheck from "@/public/image/svg/shield-checked.svg"; 

const Structure: React.FC = () => {
  type Feature = {
    icon: string;
    title: string;
    description: string;
  };

  const features: Feature[] = [
    {
      icon: siren,
      title: "No predictions",
      description:
        "Market cycles are complex and inconsistent. Forecasts introduce noise and error. Tradoo focuses on structure, not speculation.",
    },
    {
      icon: graphdown,
      title: "No Strategy-Hopping",
      description:
        "Most losses come from emotional switching. Tradoo prevents impulsive decisions by keeping you within your defined boundaries.",
    },
    {
      icon: shieldcheck,
      title: "Clear Risk Constraints",
      description:
        "Your risk profile enforces limits on volatility, drawdown and exposure, ensuring discipline across market phases.",
    },
  ];

  return (
    <div className="max-xs:pt-10 pt-27 pb-2 sm:pb-42 bg-white">
      <div className="container max-sm:p-0">
        <div>
          <div className="max-sm:px-4 max-sm:text-left max-lg:gap-6 max-lg:text-center max-lg:items-center max-lg:flex-col flex justify-between items-end gap-7">
            <div className="w-full md:max-w-161">
              <div>
                <Badge label="Why Structure Matters" />
              </div>
              <div className="mt-6">
                <h2 className="max-xs:text-3xl max-xs:leading-10 text-40 leading-12 lg:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800">
                  Markets Are Noisy. Structure Is Not.
                </h2>
              </div>
            </div>
            <div className="w-full md:max-w-171 ml-auto">
              <div>
                <p className="text-base md:text-lg font-normal leading-[144%] text-gray700">
                  Tradoo replaces prediction-driven investing with a rule-based
                  system designed for clarity and long-term consistency.
                </p>
              </div>
            </div>
          </div>
          <div className="max-xs:mt-12 max-lg:items-center max-lg:flex-col mt-24 md:mt-16 flex sm:gap-2 md:gap-7 justify-between">
            <div className="w-full max-sm:max-w-98 max-xs:h-120 max-sm:h-143 max-w-82 lg:h-140 xl:h-127">
              <Image
                src={structure}
                alt="img"
                className="rounded-3xl w-full h-full object-cover"
              />
            </div>
            <div className="max-sm:mt-2 max-lg:max-w-full w-full h-full max-w-171 ml-auto flex flex-col gap-2">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray100 max-sm:py-8 max-sm:px-4  p-8 items-center rounded-3xl max-sm:items-start max-sm:flex-col flex gap-8"
                >
                  <span className="min-w-16 w-16 h-16 flex justify-center items-center bg-white rounded-xl">
                    <Image src={item.icon} alt="icon" className="max-h-full" />
                  </span>

                  <div className="flex flex-col items-start gap-4">
                    <h4 className="text-2xl font-semibold leading-8 tracling-[-0.24px] text-gray800">
                      {item.title}
                    </h4>

                    <p className="max-sm:text-base text-lg font-normal leading-[144%] text-gray700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
