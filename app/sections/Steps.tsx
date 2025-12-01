import React from "react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Image from "next/image";

const Steps: React.FC = () => {
  type Step = {
    id: number;
    number: number;
    title: string;
    description: string;
    list?: string[];
    badge?: {
      text: string;
      icon: string; // client-controlled icon
    };
  };

  const steps: Step[] = [
    {
      id: 1,
      number: 1,
      title: "Data Intake",
      description:
        "Tradoo gathers market and environmental data continuously to build a complete view. This covers price movements, volatility, liquidity, sentiment and significant events across the landscape.",
    },
    {
      id: 2,
      number: 2,
      title: "Regime Detection",
      description:
        "Tradoo reads market regimes and their underlying phases. It recognises whether conditions are calm, overheated, shifting or under pressure.",
    },
    {
      id: 3,
      number: 3,
      title: "Principle & Playbook Validation",
      description:
        "Tradoo checks which proven approaches have worked reliably in similar conditions. No speculation, just robust principles that have stood the test.",
    },
    {
      id: 4,
      number: 4,
      title: "Risk Based Weighting & Execution",
      description:
        "Tradoo adjusts your portfolio weighting within clearly defined risk boundaries. Everything happens in a controlled way, step by step, entirely within your own smart-contract vault.",
      list: [
        "Volatility ceiling",
        "Maximum drawdown",
        "Position sizing",
        "Allowed exposure",
        "Defensive adjustments",
        "Cash allocation",
      ],
      badge: {
        text: "Trades only happen here. Never earlier in the process.",
        icon: "/image/svg/info-circle.svg",
      },
    },
    {
      id: 5,
      number: 5,
      title: "Continuous Oversight & Risk Control",
      description:
        "Tradoo monitors market conditions continuously, making sure every position stays within the risk and exposure boundaries of your profile. When regimes shift, the portfolio moves automatically to a more defensive stance.",
    },
  ];

  return (
    <div className="max-sm:pb-2 max-xs:py-10 py-42">
      <div className="container max-sm:p-0">
        <div className="grid grid-cols-12 max-sm:gap-y-16 sm:gap-7">
          <div className="col-span-12 lg:col-span-6">
            <div className="max-sm:px-4 sm:text-center lg:text-left sticky top-42">
              <div>
                <Badge label="Our Investment Framework" />
              </div>
              <div className="mt-6">
                <h3 className="max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800">
                  A five-layer framework for smarter wealth decisions.
                </h3>
              </div>
              <div className="mt-8">
                <p className="text-lg font-normal leading-[144%] color-gray700">
                  Tradoo processes information through 5 structured steps.
                </p>
              </div>
              <div className="mt-8">
                <Button label="Explore in Private Beta" href="#" trailingIcon />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full lg:max-w-171 ml-auto flex flex-col gap-2">
              {steps.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white max-sm:py-10 max-sm:px-4 sm:p-7 xxl:p-10 flex flex-col items-start gap-y-14"
                >
                  {/* Number */}
                  <div>
                    <span className="text-5xl font-semibold leading-none tracking-[-1.44px] text-romansilver">
                      {item.number}
                    </span>
                  </div>

                  {/* Title + Description */}
                  <div className="flex flex-col items-start gap-y-4">
                    <h4 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                      {item.title}
                    </h4>

                    <p className="text-lg font-normal leading-[144%] text-gray700">
                      {item.description}
                    </p>

                    {/* Feature List */}
                    {item.list && (
                      <ul className="w-full p-6 mt-2 rounded-2xl bg-gray100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.list.map((li, index) => (
                          <li
                            key={index}
                            className="relative pl-5 text-lg font-medium leading-6 text-gray800 
                      after:content-[''] after:absolute after:inline-block 
                      after:h-2 after:w-2 after:rounded-full after:bg-[#0D9488]
                      after:left-0 after:align-middle after:top-2"
                          >
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Badge */}
                    {item.badge && (
                      <Badge
                        className="mt-2 w-full text-lg !font-normal !bg-[#E8F3F2] !rounded-2xl !p-5"
                        label={item.badge.text}
                        icon={
                          <Image
                            src={item.badge.icon}
                            alt="badge-icon"
                            width={24}
                            height={24}
                            className="min-w-6"
                          />
                        }
                      />
                    )}
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

export default Steps;
