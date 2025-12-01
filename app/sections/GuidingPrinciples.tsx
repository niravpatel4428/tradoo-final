import React from 'react'
import Badge from '../components/Badge';
import Image from "next/image";

import guidingIcon1 from "@/public/image/svg/guiding-icon1.svg";
import guidingIcon2 from "@/public/image/svg/guiding-icon2.svg";
import guidingIcon3 from "@/public/image/svg/guiding-icon3.svg";
import guidingIcon4 from "@/public/image/svg/guiding-icon4.svg";
import guidingIcon5 from "@/public/image/svg/guiding-icon5.svg";
import guidingIcon6 from "@/public/image/svg/guiding-icon6.svg";

const GuidingPrinciples = () => {

    const benefitsData = [
        {
            icon: guidingIcon1,
            title: "Compliance-first",
            desc: "Aligned with FinSA/FinIA. Controlled processes. Clean, auditable records.",
        },
        {
            icon: guidingIcon2,
            title: "Evidence-based",
            desc: "Model-driven execution, disciplined risk layer, measurable outcomes.",
        },
        {
            icon: guidingIcon3,
            title: "Client aligned",
            desc: "Aligned incentives. Transparent reporting. Long-term trust over short-term performance.",
        },
        {
            icon: guidingIcon4,
            title: "Open & modular",
            desc: "Composable systems with controlled decentralization and clear upgrade paths.",
        },
        {
            icon: guidingIcon5,
            title: "Ownership",
            desc: "High standards. Clear responsibility. Direct communication.",
        },
        {
            icon: guidingIcon6,
            title: "Disciplined execution",
            desc: "Focused priorities, structured delivery, no unnecessary complexity.",
        },
    ];

    return (
        <>
            <div className="block max-xs:pt-14 pt-[168px] pb-1 md:py-20 xl:pb-[84px] xl:pt-[168px]">
                <div className="container max-sm:px-0">
                    <div className="flex flex-col max-xs:gap-10 gap-24 xl:gap-[72px]">
                        {/* Main Section Title */}
                        <div className="flex flex-wrap flex-col max-xs:gap-7 gap-10 max-sm:px-4">
                            <div className="block">
                                <Badge label="Values & Culture" variant="lightgreen" className="mb-6" />

                                <div className="block font-semibold text-gray800 text-40 leading-[46px] xl:text-56 xl:leading-16 max-xs:text-[32px] max-xs:leading-[40px] -tracking-[1.20px]">
                                    <h2><span className="text-gray500">Shared operating principles</span> guiding how we build, decide, and deliver.</h2>
                                </div>
                            </div>

                            <div className="block md:hidden max-xs:text-base text-lg leading-snug text-gray700">
                                <p>Tradoo interprets market regimes, volatility shifts and behavioural dynamics to form a clear view of the current environment — guiding disciplined portfolio weighting within your chosen risk profile.</p>
                            </div>
                        </div>
                        {/* Main Section Title */}

                        <div className="block">
                            {/* Guiding Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                {benefitsData.map((item, index) => (
                                    <div key={index} className="hover:bg-gray300 transition-all duration-300 flex flex-col gap-y-12 h-full px-4 py-10 md:p-5 xxl:p-10 max-xs:rounded-2xl rounded-3xl bg-white">
                                        <div className="rounded-xl w-16 h-16 flex justify-center items-center bg-gray100 p-3">
                                            <Image src={item.icon} alt={item.title} className="w-8 h-8" />
                                        </div>

                                        <div className="flex flex-col gap-y-5">
                                            <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">{item.title}</span>

                                            <div className="flex flex-wrap flex-col gap-4 text-lg text-gray700 font-normal leading-[144%]">
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Guiding Grid */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GuidingPrinciples;
