"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import FrameworkIcon from "@/public/image/svg/tradoo-symbol.svg"; 
import UserIcon from "@/public/image/svg/user-rounded.svg"; 
import RiskIcon from "@/public/image/svg/layers.svg"; 
import WeightingIcon from "@/public/image/svg/turning-icon.svg"; 
import ExecutionIcon from "@/public/image/svg/bolt.svg"; 

type Step = {
  id: number;
  label: string;
  icon: StaticImageData;
  size: string;
};

const steps: Step[] = [
  { id: 1, label: "User", icon: UserIcon, size: "w-18 h-18" },         
  { id: 2, label: "Risk Profile", icon: RiskIcon, size: "w-20 h-20" },  
  { id: 3, label: "Framework", icon: FrameworkIcon, size: "w-24 h-24" },
  { id: 4, label: "Weighting", icon: WeightingIcon, size: "w-20 h-20" },
  { id: 5, label: "Execution", icon: ExecutionIcon, size: "w-18 h-18" }, 
];

interface Props {
  activeStep: number;
}

const StepIndicator: React.FC<Props> = ({ activeStep }) => {
  return (
    <div className="w-full flex justify-center max-md:scale-90 max-xs:scale-46 max-sm:scale-54">
      <div className="flex items-center gap-15 relative">
        {/* Background line */}
        <div className="absolute top-[36%] left-1/2 w-full -translate-x-1/2 h-[1px] bg-[#DADCE0] -z-10" />

        {steps.map((step) => {
          const active = step.id === activeStep;

          return (
            <div key={step.id} className="flex flex-col items-center">
              {/* Dynamic Circle Size */}
              <div
                className={`${step.size} rounded-full flex items-center justify-center transition-all duration-300
                  ${
                    active
                      ? "bg-gunmetal shadow-[var(--shadowactive)]"
                      : "bg-white"
                  }`}
              >
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={32}
                  height={32}
                  className={`${active ? "" : ""}`}
                />
              </div>

              <p
                className={`mt-6 text-base font-medium leading-5 text-center text-gray700 ${
                  active ? "" : ""
                }`}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
