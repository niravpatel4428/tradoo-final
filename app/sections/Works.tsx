"use client";
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
  type Strategy = {
    id: number;
    name: string;
    subtitle: string;
    percent: number;
    dark?: boolean;
  };

  const strategies: Strategy[] = [
    { id: 1, name: "Ultra Stable", subtitle: "Delta Neutral", percent: 7.3 },
    { id: 2, name: "Conservative", subtitle: "Trend & Value", percent: 10.0 },
    { id: 3, name: "Moderate", subtitle: "Balanced Momentum", percent: 30.4 },
    {
      id: 4,
      name: "Macro Adaptive",
      subtitle: "Macro & Sentiment",
      percent: 21.5,
    },
    {
      id: 5,
      name: "Opportunity Oriented",
      subtitle: "Dynamic Momentum",
      percent: 40.9,
    },
    {
      id: 6,
      name: "Risk Prone",
      subtitle: "High Beta & Leverage",
      percent: 67.0,
    },

    {
      id: 7,
      name: "Dynamic",
      subtitle: "Tradoo Adaptive",
      percent: 23.3,
      dark: true,
    },
  ];

  const MAX_HEIGHT = 249;
  const MIN_BAR_HEIGHT = 42;

  const maxPercent = Math.max(...strategies.map((s) => s.percent));

  return (
    <>
      <div className="relative max-xs:py-16 max-sm:pb-2 py-42">
        <div className="container max-sm:p-0">
          <div className="space-y-16">
            <div className="max-sm:px-4 w-full max-w-200">
              <h2 className="font-semibold text-gray800 text-40 leading-[46px] xl:text-56 xl:leading-16 max-xs:text-[32px] max-xs:leading-10 -tracking-[1.20px]">
                <span className="text-gray500 inline-block">
                  Your profile defines boundaries.
                </span>
                Tradoo works with them.
              </h2>
            </div>

            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 lg:col-span-6">
                <div className="relative rounded-3xl bg-white h-full w-full max-sm:h-118">
                  <div className="h-full w-full">
                    <Image
                      src={worksLeft}
                      alt="worksLeft"
                      className="h-full w-full rounded-3xl object-cover"
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
                <div className="rounded-3xl max-sm:px-0 max-sm:py-14 max-sm:pl-4 p-8 xl:p-12 xxl:p-14 bg-white">
                  <div className="overflow-auto">
                    <div className="flex items-end justify-between gap-3 xl:gap-6 min-w-228">
                      {strategies.map((item) => {
                        const rawHeight =
                          (item.percent / maxPercent) * MAX_HEIGHT;
                        const barHeight =
                          rawHeight < MIN_BAR_HEIGHT ? MIN_BAR_HEIGHT : rawHeight;

                        return (
                          <div
                            key={item.id}
                            className="flex flex-col items-start relative flex-1"
                          >
                            <div
                              className={`
    relative w-full rounded-lg p-2 transition-all duration-500
    ${item.dark ? "bg-gunmetal" : "bg-[#C4DCDA]"}
  `}
                              style={{ height: `${barHeight}px` }}
                            >
                              <span
                                className={`
      absolute bottom-2 right-2
      px-3 py-1 rounded-md text-sm font-medium leading-5 whitespace-nowrap
      ${item.dark ? "bg-white text-gunmetal" : "bg-gunmetal text-white"}
    `}
                              >
                                +{item.percent.toFixed(1)}%
                              </span>
                            </div>


                            {/* Titles */}
                            <div className="mt-6 min-h-26 xxl:min-h-20.5 flex flex-col items-start gap-2">
                              <div className="flex items-center gap-2">
                                {/* DOT ONLY FOR DARK ITEM */}
                                {item.dark && (
                                  <span className="w-2 h-2 rounded-full bg-[#0D9488]"></span>
                                )}

                                {/* NAME */}
                                <p className="text-sm xl:text-lg font-medium leading-[144%] text-gunmetal">
                                  {item.name}
                                </p>
                              </div>

                              {/* SUBTITLE */}
                              <p className="text-sm xl:text-base text-aurometalsaurus font-normal leading-[144%]">
                                {item.subtitle}
                              </p>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>
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
