import React from 'react'
import Image from "next/image";
import dashboard from "@/public/image/why-strategy-framework-dashboard.png";
import mobiledashboard from "@/public/image/why-strategy-framework-dashboard-mobile.png";
import icon1 from "@/public/image/svg/WhyStrategyFramework-1.svg";
import icon2 from "@/public/image/svg/WhyStrategyFramework-2.svg";
import icon3 from "@/public/image/svg/WhyStrategyFramework-3.svg";
import Badge from '../components/Badge';

const WhyStrategyFramework = () => {
    const features = [
        {
            icon: icon1,
            alt: "icon1",
            title: "Structured Framework",
            desc: "The Tradoo Engine follows a structured framework that combines your risk profile, market phase and fixed safety boundaries. This creates a portfolio built on clear logic, not spontaneous market movements or emotions.",
        },
        {
            icon: icon2,
            alt: "icon2",
            title: "Selective Strategy Use",
            desc: "Your chosen risk profile determines which strategies are deployed. The Engine does not use all 15 modules simultaneously. It activates only those strategies that match your profile and market conditions, while deliberately keeping others inactive.",
        },
        {
            icon: icon3,
            alt: "icon3",
            title: "Disciplined Allocation",
            desc: "Clear rules instead of guesswork. The Engine ensures your capital is managed through a disciplined process focused on risk, stability and controlled growth.",
        },
    ];
    return (
        <>
            <div className="pt-27 pb-2 md:pb-42 bg-white">
                <div>
                    <div className="container">
                        <div className='space-y-6 xl:space-y-8'>
                            <Badge
                                label="Why a Strategy Framework"
                            />
                            <div>
                                <h2 className="max-xs:tracking-[-1px] max-xs:text-3xl text-5xl xxl:text-56 font-semibold tracking-[-1.68px] xxl:leading-16 text-gunmetal">
                                    Strategy framework forms the foundation for how the 15 strategies are applied.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-md:mt-14 flex justify-center relative dashboard-image">
                    <Image src={dashboard} alt="dashboard" className="hidden md:block" />
                    <Image src={mobiledashboard} alt="dashboard" className="block md:hidden" />
                </div>
                <div className="mt-8">
                    <div className="container p-0">
                        <div>
                            <div className="grid grid-cols-12 gap-2">
                                {features.map((item, index) => (
                                    <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                                        <div className="h-full rounded-3xl bg-gray100 max-sm:px-4 max-sm:py-10 sm:p-10 flex flex-col gap-8 xl:gap-12">
                                            <div className="rounded-xl w-16 h-16 min-w-16 flex justify-center items-center bg-white p-3">
                                                <Image src={item.icon} alt={item.alt} />
                                            </div>
                                            <div className="flex flex-col gap-2 xl:gap-5">
                                                <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                                    {item.title}
                                                </span>
                                                <span className="text-lg font-normal leading-6.5 text-gray700">
                                                    {item.desc}
                                                </span>
                                            </div>
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

export default WhyStrategyFramework
