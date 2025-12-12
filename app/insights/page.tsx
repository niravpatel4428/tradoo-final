"use client";
import React, { useState } from 'react'
import CommonBannerSection from '../components/CommonBannerSection'
import BuiltFor from '../sections/BuiltFor'
import down from "@/public/image/svg/flow-down.svg";
import up from "@/public/image/svg/flow-up.svg";
import Image from 'next/image';
import PortfolioAllocation from '../sections/PortfolioAllocation';
import RealityCheck from '../sections/RealityCheck';
import BeyondOnChain from '../sections/BeyondOnChain';
import PerformanceRanking from '../sections/PerformanceRanking';


const page = () => {
    return (
        <main>
            <CommonBannerSection
                badge={{
                    label: "Public Analytics",
                    icon: "/image/svg/zap.svg",
                }}
                title="Smart wallet performance data. On-chain"
                titleContainer='xxl:mx-auto max-w-280'
                descContainer='xxl:mx-auto max-w-230'
                description="Most on-chain traders lose money. A small group wins consistently. Tradoo Insights quantifies that gap. Tradoo AI uses this research — alongside macro, quant models and sentiment — inside a strict risk framework for BTC, ETH and USDC."
                buttons={[
                    {
                        label: "Explore Tradoo AI",
                        href: "#",
                        trailingIcon: true,
                    },
                    {
                        label: "Join the Private Beta",
                        href: "#",
                        variant: "secondarydefault",
                    },
                ]}
            />
            <BannerBottom />
            <BuiltFor />
            <PerformanceRanking />
            <RealityCheck />
            <BeyondOnChain />
            <PortfolioAllocation />
        </main>
    )
}


const BannerBottom = () => {
    // Active tab state
    const [activeTab, setActiveTab] = useState<"30 Days" | "60 Days" | "90 Days" | "180 Days">("30 Days");

    // Chart data per tab (example demo data)
    const chartData = {
        "30 Days": [20, 22, 45, 52, 60, 68, 48, 55, 75, 80, 82, 90, 80, 75, 70],
        "60 Days": [35, 40, 50, 65, 70, 85, 90, 95, 80, 70, 70, 85, 90, 95, 60],
        "90 Days": [25, 35, 45, 40, 60, 75, 85, 95, 100, 90, 35, 45, 95, 91],
        "180 Days": [10, 20, 35, 40, 50, 55, 65, 70, 75, 80, 40, 50, 55, 65, 90]
    };
    return (
        <div className='max-xs:pb-12 pb-24'>
            <div className="container max-sm:px-0">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 xxl:col-span-8">
                        <div className="bg-white rounded-3xl p-6 md:p-10 h-full flex flex-col justify-between gap-4">

                            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-4">
                                {/* Header */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className='rounded-full size-2 bg-[#0D9488]'>&nbsp;</span>
                                        <h2 className="text-gray800 text-2xl font-semibold leading-8 tracking-[-0.24px]">Live Performance</h2>
                                    </div>
                                    <p className="text-gray700 text-lg leading-6.5 capitalize">
                                        Verified On-Chain Data. Updated Every 24h. Risk Framework Validated.
                                    </p>
                                </div>

                                {/* Time Buttons */}
                                <div className="max-md:overflow-x-auto w-full">
                                    <div className="flex gap-3 bg-gray100 rounded-xl p-1 overflow-x-auto ">
                                        {["30 Days", "60 Days", "90 Days", "180 Days"].map((t: any) => (
                                            <button
                                                key={t}
                                                onClick={() => setActiveTab(t)}
                                                className={`px-3 py-2.5 cursor-pointer rounded-md whitespace-nowrap text-base leading-5 font-medium transition 
                                ${activeTab === t
                                                        ? "bg-white text-gray800 shadow-sm"
                                                        : "bg-gray100 text-gray700"
                                                    }`}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Chart Mockup */}
                            <div className="h-51 overflow-x-auto w-full">
                                <div className="flex items-end h-full gap-3 min-w-lg">
                                    {chartData[activeTab].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-[#C4DCDA] rounded-lg transition-all duration-300"
                                            style={{ height: `${h * 2}px` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xxl:col-span-4">
                        <div className="flex flex-col sm:flex-row xxl:flex-col gap-2">
                            <div className="w-full bg-white rounded-3xl p-6 md:p-10 space-y-12">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="text-3xl md:text-4xl font-semibold text-gray800">+126.3%</p>

                                    <div className="flex-none">
                                        <Image src={up} alt="icon" className="size-10" />
                                    </div>
                                </div>
                                <p className="text-gray700 text-lg leading-6.5 mt-2">Top 10 average ROI</p>

                            </div>
                            <div className="w-full bg-white rounded-3xl p-6 md:p-10 space-y-12">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="text-3xl md:text-4xl font-semibold text-gray800">-8.3%</p>
                                    <div className="flex-none">
                                        <Image src={down} alt="icon" className="size-10" />
                                    </div>
                                </div>
                                <p className="text-gray700 text-lg leading-6.5 mt-2">Median ROI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
