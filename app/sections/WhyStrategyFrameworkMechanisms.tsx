import React from 'react'
import Image, { StaticImageData } from "next/image";
import Badge from '../components/Badge'
import icon1 from "@/public/image/svg/mechanisms-1.svg";
import icon2 from "@/public/image/svg/mechanisms-2.svg";
import icon3 from "@/public/image/svg/mechanisms-3.svg";
import icon4 from "@/public/image/svg/mechanisms-4.svg";
import icon5 from "@/public/image/svg/mechanisms-5.svg";
import icon6 from "@/public/image/svg/mechanisms-6.svg";

export type MechanismItem = {
    id: number;
    icon: StaticImageData;
    title: string;
    desc: string;
};

export const MECHANISMS: MechanismItem[] = [
    {
        id: 1,
        icon: icon1,
        title: "Non-custodial Smart Contract Vaults",
        desc: "Aligned with FinSA/FinIA. Controlled processes. Clean, auditable records.",
    },
    {
        id: 2,
        icon: icon2,
        title: "Vetted Protocols & Infrastructure",
        desc: "Model-driven execution, disciplined risk layer, measurable outcomes.",
    },
    {
        id: 3,
        icon: icon3,
        title: "Hard Caps & Exposure Limits",
        desc: "Aligned incentives. Transparent reporting. Long-term trust over short-term performance.",
    },
    {
        id: 4,
        icon: icon4,
        title: "Price & Execution Controls",
        desc: "Composable systems with controlled decentralization and clear upgrade paths.",
    },
    {
        id: 5,
        icon: icon5,
        title: "Continuous Monitoring & Auto Pause",
        desc: "High standards. Clear responsibility. Direct communication.",
    },
    {
        id: 6,
        icon: icon6,
        title: "Clear Rules Instead of Performance Promises",
        desc: "Focused priorities, structured delivery, no unnecessary complexity.",
    },
];

const WhyStrategyFrameworkMechanisms: React.FC = () => {
    return (
        <>
            <div className="space-y-17.5">
                <div className="container">
                    <div className="flex max-lg:flex-col gap-6 xl:gap-5">
                        <div className="flex-none lg:flex-1">
                            <div className="space-y-6">
                                <div>
                                    <Badge label="Built-in safety mechanisms" />
                                </div>
                                <div className="mt-6">
                                    <h3 className="max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800">
                                        Built-in safety mechanisms.
                                    </h3>
                                </div>
                                <div className="mt-8">
                                    <p className="text-lg font-normal leading-[144%] color-gray700">
                                        The Tradoo Engine is built so that protection against additional risk always takes priority over returns, non-custodial, clearly limited and continuously monitored. The safety framework is a core component of the Engine. Every strategy, every trade and every adjustment happens within these guardrails.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-none lg:flex-1">
                            <div className="h-full flex items-end">
                                {/* <div className="text-lg font-normal leading-[144%] color-gray700">
                                        <p>Each module has a clearly defined purpose. The Engine combines them to balance core stability, growth and risk control, tailored to your risk profile.</p>
                                    </div> */}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container max-sm:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {MECHANISMS.map((item: MechanismItem) => (
                            <div
                                key={item.id}
                                className="hover:bg-gray300 transition-all duration-300 flex flex-col gap-y-12 h-full px-4 py-10 md:p-5 xxl:p-10 max-xs:rounded-2xl rounded-3xl bg-white"
                            >
                                {/* Icon */}
                                <div className="rounded-xl w-16 h-16 flex justify-center items-center bg-gray100 p-3">
                                    <Image src={item.icon} alt={item.title} />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col gap-y-5">
                                    <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                        {item.title}
                                    </span>

                                    <p className="text-lg text-gray700 font-normal leading-[144%]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyStrategyFrameworkMechanisms
