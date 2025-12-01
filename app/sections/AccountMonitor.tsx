import React from 'react'
import Image from "next/image";
import dashboard from "@/public/image/dashboard.png";
import mobiledashboard from "@/public/image/mobile-dashboard.png";

const AccountMonitor = () => {
    const data = [
        {
        percentage: "100%",
        title: "User-controlled investment accounts",
        tag: "Non-Custodial",
        },
        {
        percentage: "250M+",
        title: "Market and risk factors monitored",
        tag: "Structured Analytics",
        },
        {
        percentage: "6+1",
        title: "Defined risk profiles",
        tag: "Clear Frameworks",
        },
        {
        percentage: "24/7",
        title: "Adaptive monitoring and weighting",
        tag: "Continuous Oversight",
        },
    ];

    return (
        <>
            <div className="block">
                <div className="flex justify-center relative banner-dashboard-image">
                    <Image src={dashboard} alt="dashboard" className="hidden md:block" />
                    <Image src={mobiledashboard} alt="dashboard" className="block md:hidden" />
                </div>
                <div className="mt-10">
                    <div className="container">
                    <div className="max-xs:pb-10 pb-24 border-b-2 border-solid border-b-grayprimary">
                        <div className="grid grid-cols-12 gap-y-14 sm:gap-6">
                        {data.map((item, index) => (
                            <div
                            className="col-span-12 sm:col-span-6 lg:col-span-3"
                            key={index}
                            >
                            <div className="flex flex-col gap-4 items-start">
                                <h2 className="text-40 xxl:text-5xl font-semibold leading-16 tracking-[-1.68px] text-gray800">
                                {item.percentage}
                                </h2>

                                <p className="text-lg leading-[144%] font-normal">
                                {item.title}
                                </p>

                                <span className="inline-flex py-2 px-3 rounded-6 bg-gray200 text-base font-medium leading-4.5">
                                {item.tag}
                                </span>
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

export default AccountMonitor
