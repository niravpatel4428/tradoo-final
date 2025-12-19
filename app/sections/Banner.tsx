"use client";

import React from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import Button from "../components/Button";

const Banner: React.FC = () => {
  return (
    <div className="max-xs:pt-30 pt-46 max-md:pb-20 ">
      <div>
        <div className="container">
          <div className="text-left md:text-center">
            <Badge
              label="Adaptive Investment Framework"
              icon={
                <Image
                  src="/image/svg/badge-dark-green.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
              }
            />
            <div className="w-full max-w-250 mx-auto mt-8">
              <h1 className="max-xs:tracking-[-1px] max-xs:text-3xl text-5xl xxl:text-80 font-semibold xxl:leading-22 tracking-[-2.40px] text-left md:text-center text-gray800">
                Next Generation of Intelligent Wealth Management.
              </h1>
            </div>
            <div className="mt-8 w-full max-w-230 mx-auto">
              <p className="text-lg leading-[144%] font-normal">
                Tradoo provides a structured view of the market, applies a
                disciplined risk framework and adjusts portfolio weightings with
                precision while you retain full control of your capital.
              </p>
            </div>
            <div className="max-sm:flex-col max-sm:items-start flex gap-4 justify-center mt-12">
              <Button label="Join Waitlist" href="/waitlist" trailingIcon />
              <Button label="Learn More" href="/approach" variant="secondarydefault" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
