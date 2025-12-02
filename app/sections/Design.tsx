import React from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import design from "@/public/image/design.jpg";
import bolticon from "@/public/image/svg/bolticon.svg";

const Design: React.FC = () => {
  type Item = {
    title: string;
    description: string;
  };

  const items: Item[] = [
    {
      title: "Market Context",
      description: "Clear explanation of what changed in the environment.",
    },
    {
      title: "Risk Implications",
      description: "How the change impacts your risk boundaries.",
    },
    {
      title: "Portfolio Adjustment",
      description: "What weightings changed and why.",
    },
  ];

  return (
    <div className="max-xs:py-12 py-42 bg-gray900">
      <div className="container max-sm:p-0">
        <div>
          <div className="max-sm:px-4 sm:text-left grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <div>
                  <Badge label="Transparency by Design" variant="darkgreen" />
                </div>
                <div className="mt-6 sm:mt-10">
                  <h4 className="max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 xxl:text-56 font-semibold text-white tracking-[-1.20px] xxl:tracking-[-1.68px] xxl:leading-16">
                    <span className="md:text-romansilver">
                      Every adjustment has a reason.
                    </span>{" "}
                    And you see it.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="max-xs:mt-2 max-sm:mt-16 max-lg:h-auto max-lg:justify-start h-full flex flex-col justify-end">
                <div>
                  <p className="text-lg font-normal leading-[144%] text-gray400">
                    Tradoo highlights the rationale behind each portfolio
                    adjustment using calm, structured explanations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-xs:mt-10 max-sm:mt-22 mt-16 grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-col gap-2">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="max-sm:p-10 rounded-3xl bg-gray800 p-7 xxl:p-10 flex flex-col gap-3 items-start"
                  >
                    <h5 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-white">
                      {item.title}
                    </h5>
                    <p className="text-lg font-normal leading-[144%] text-gray400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="max-xs:h-100 max-sm:h-131.5 h-98 xxl:h-116.5 min-h-full">
                <Image
                  src={design}
                  alt="img"
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="max-xs:h-100 max-sm:h-116.5 h-full rounded-2xl bg-white max-sm:p-8 p-5 xxl:p-8 flex flex-col justify-between gap-4">
                <span className="min-w-16 w-16 h-16 flex justify-center items-center p-4 bg-[#E2F3F1] rounded-xl">
                  <Image
                    src={bolticon}
                    alt="icon"
                  />
                </span>
                <div className="flex flex-col gap-3">
                    <h5 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-darblue">Wallet activity is increasing — network usage remains robust.</h5>
                    <p className="text-lg font-normal leading-[144%] text-aurometalsaurus">Positive development taken into account. No action needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
