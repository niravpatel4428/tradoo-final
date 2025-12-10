import Image from "next/image";
import React from "react";
import icon1 from "@/public/image/svg/problem-solved-1.svg";
import icon2 from "@/public/image/svg/problem-solved-2.svg";
import icon3 from "@/public/image/svg/problem-solved-3.svg";
import icon4 from "@/public/image/svg/problem-solved-4.svg";
import Button from "../components/Button";

const gridItems = [
  {
    icon: icon1,
    title: "Emotional Bias",
    text: "Eliminated through predefined rules and profiles.",
  },
  {
    icon: icon2,
    title: "Overreaction to Noise",
    text: "Reduced with regime-based interpretation.",
  },
  {
    icon: icon3,
    title: "Inconsistent Strategy Choices",
    text: "Avoided through stable, multi-factor weighting.",
  },
  {
    icon: icon4,
    title: "Custody Risk",
    text: "Removed through individual smart-contract vaults.",
  },
];

const ProblemSolved = () => {
  return (
    <>
      <div className="relative max-xs:pt-10 max-xs:py-16 max-sm:pt-42 pb-42">
        <div className="container max-sm:p-0">
          <div className="space-y-16">
            <div className="max-sm:px-4 block px-4 sm:px-0 max-xs:mb-14 mb-[72px] xl:mb-24 w-full max-w-203">
              <span className="inline-flex items-center gap-2 rounded-6 px-3 py-2 text-base font-medium leading-tight bg-lightgreen text-green mb-7.5">
                The Problem We Solve
              </span>
              <div className="block font-semibold text-gray800 text-40 leading-[46px] xl:text-56 xl:leading-16 max-xs:text-[32px] max-xs:leading-10 -tracking-[1.20px] max-xs:mb-6 mb-10 ">
                <h2>
                  A structured system built to avoid common investing mistakes.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
              {gridItems.map((item, index) => (
                <div
                  key={index}
                  className="hover:bg-gray300 transition-all duration-300 flex flex-col gap-y-12 xxl:gap-y-20 h-full px-4 py-10 md:p-5 xxl:p-10 max-xs:rounded-2xl rounded-3xl bg-white"
                >
                  <div className="rounded-xl w-16 h-16 flex justify-center items-center bg-gray100 p-3">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className="w-full max-w-8"
                    />
                  </div>

                  <div className="flex flex-col gap-y-5">
                    <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                      {item.title}
                    </span>
                    <p className="text-lg text-gray700 font-normal leading-[144%]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-sm:px-4">
              <Button label="Join Waitlist" href="#" trailingIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemSolved;
