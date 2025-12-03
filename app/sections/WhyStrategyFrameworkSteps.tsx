import React from 'react'
import Badge from "../components/Badge";
import Button from "../components/Button";
import Image from "next/image";
import infocircul from "@/public/image/svg/Info-circle.svg";

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
        title: "Apply risk profile",
        description:
            "The Engine always starts with your profile. It defines the guardrails for your portfolio: how much risk you can bear, how BTC, ETH and USDC may be distributed, which volatility and drawdown limits apply. Only strategies that match these parameters are considered.",
    },
    {
        id: 2,
        number: 2,
        title: "Check market phase",
        description:
            "The Engine evaluates whether a strategy fundamentally fits the current market phase. Some strategies only activate in quiet or neutral phases, others only in volatile markets. Strategies can be excluded at this stage.",
    },
    {
        id: 3,
        number: 3,
        title: "Filter strategy modules",
        description:
            "From 15 strategies, the Engine selects only those compatible with both your profile and market phase. Each strategy has a clearly defined role: Core, Growth, Hedging, or Meta Control.",
    },
    {
        id: 4,
        number: 4,
        title: "Weighting & execution",
        description:
            "The target distribution of BTC, ETH and USDC is clearly defined per risk profile. At this step, the Engine controls how this target allocation is operationally achieved and how actively individual strategy modules work within this framework. Position sizes, caps, rebalancing intervals and execution logic are set here. Trades are only triggered from this layer onwards.",
        badge: {
            text: "Trades are only triggered from this step onwards, within the guardrails and approvals from the Approach Framework.",
            icon: infocircul,
        },
    },
    {
        id: 5,
        number: 5,
        title: "Monitoring & auto-pause",
        description:
            "After activation, the Engine monitors each strategy individually. It continuously checks volatility, drawdowns, risk parameters, liquidity in respective markets and protocol risks of involved modules. When a strategy operates outside its guardrails, it is automatically paused or exposure is reduced, fully non-custodial and without manual intervention.",
    },
];

const WhyStrategyFrameworkSteps = () => {
    return (
        <>
            <div className="max-sm:pb-2 max-xs:py-10 py-42">
                <div className="container max-sm:p-0">
                    <div className="grid grid-cols-12 max-sm:gap-y-16 sm:gap-7">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="max-sm:px-4 sm:text-left sticky top-42">
                                <div>
                                    <Badge label="Our Strategy Process" />
                                </div>
                                <div className="mt-6">
                                    <h3 className="max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800">
                                        How the Engine selects the right strategies for your profile
                                    </h3>
                                </div>
                                <div className="mt-8">
                                    <p className="text-lg font-normal leading-[144%] color-gray700">
                                        The Engine follows a defined process that ensures each strategy is activated only when your risk profile, market phase and all safety boundaries align.
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
                                                    className="mt-2 w-full text-lg font-normal! bg-[#E8F3F2]! rounded-2xl! p-5!"
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
        </>
    )
}

export default WhyStrategyFrameworkSteps
