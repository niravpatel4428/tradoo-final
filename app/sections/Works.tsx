import React from "react";
import worksLeft from "@/public/image/works-left.jpg";
import Image from "next/image";
import Button from "../components/Button";

const tagItems = [
  "Target volatility",
  "Max drawdown",
  "Position size",
  "Allowed exposure",
  "Leverage constraints",
  "Hedge behavior",
  "Adjustment speed",
  "Cash reserve",
  "Rebalancing cadence",
];

const Works = () => {
  return (
    <>
      <div className="relative max-xs:py-16 py-42">
        <div className="container">
          <div className="space-y-16">
            <div className="w-full max-w-200">
              <h2 className="font-semibold text-gray800 text-40 leading-[46px] xl:text-56 xl:leading-16 max-xs:text-[32px] max-xs:leading-10 -tracking-[1.20px]">
                <span className="text-gray500 inline-block">
                  Your profile defines boundaries.
                </span>
                Tradoo works with them.
              </h2>
            </div>

            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 lg:col-span-6">
                <div className="relative rounded-3xl bg-white h-full w-full max-sm:min-h-186">
                  <div className="h-full w-full">
                    <Image
                      src={worksLeft}
                      alt="worksLeft"
                      className="h-full w-full rounded-3xl"
                    />
                  </div>
                  <div className="absolute left-4 bottom-4 md:left-10 md:bottom-10 xl:left-14 xl:bottom-14 z-2">
                    <Button
                      label="Join Waitlist"
                      href="#"
                      trailingIcon={true}
                      variant="contrastdefault"
                      size="L"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-3xl py-14 px-4 md:p-10 xl:p-12 xxl:p-14 bg-white">
                  <div className="space-y-10 md:space-y-16 xl:space-y-24 xxl:space-y-32">
                    <div className="flex flex-col gap-y-6">
                      <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                        Each Profile is Strictly Defined
                      </span>
                      <p className="text-lg text-gray700 font-normal leading-[144%]">
                        Each profile enforces strict risk parameters, ensuring
                        that decisions stay aligned with your tolerance.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tagItems.map((text, index) => (
                        <p
                          key={index}
                          className="bg-gray200 rounded-md py-2 px-3 text-gray800 text-base font-medium whitespace-nowrap"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <div className="rounded-3xl p-10 xl:p-12 xxl:p-14 bg-white">
                  <div className=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
