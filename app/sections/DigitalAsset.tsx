import React from 'react'
import Badge from '../components/Badge'
import Image, { type StaticImageData } from "next/image";
import piechart from "@/public/image/svg/white-pie-chart.svg";
import setting from "@/public/image/svg/settings.svg";
import graphnewup from "@/public/image/svg/graph-new-up.svg";
import users from "@/public/image/svg/users.svg";
import programming from "@/public/image/svg/programming.svg";
import filesend from "@/public/image/svg/file-send.svg";

type FeatureItem = {
    id: number;
    colSpan: string;
    bg: string;
    iconBg: string;
    icon: StaticImageData;
    title: string;
    description: string;
    titleColor: string;
    descColor: string;
    roadmap?: boolean;
};

const featureData: FeatureItem[] = [
    {
        id: 1,
        colSpan: "col-span-12 md:col-span-6 xl:col-span-6",
        bg: "bg-lightgray900",
        iconBg: "bg-lightgunmetal",
        icon: piechart,
        title: "Vault overview",
        description:
            "See all your strategy vaults in one place with target profiles, current allocations, and key risk indicators. Get a real-time view of how each mandate is performing.",
        titleColor: "text-white",
        descColor: "text-gray400",
    },
    {
        id: 2,
        colSpan: "col-span-12 md:col-span-6 xl:col-span-3",
        bg: "bg-lightgray900",
        iconBg: "bg-lightgunmetal",
        icon: setting,
        title: "Mandate configuration",
        description:
            "Define vault policies, choose modules and set parameters in a structured way..",
        titleColor: "text-white",
        descColor: "text-gray400",
    },
    {
        id: 3,
        colSpan: "col-span-12 md:col-span-6 xl:col-span-3",
        bg: "bg-lightgray900",
        iconBg: "bg-lightgunmetal",
        icon: graphnewup,
        title: "Analytics & simulations",
        description:
            "Inspect how configurations behave under various market regimes.",
        titleColor: "text-white",
        descColor: "text-gray400",
    },
    {
        id: 4,
        colSpan: "col-span-12 md:col-span-6 xl:col-span-3",
        bg: "bg-white",
        iconBg: "bg-gray100",
        icon: users,
        title: "Multi-client view",
        description: "Manage multiple mandates from a single dashboard.",
        titleColor: "text-lightgray900",
        descColor: "text-gray700",
        roadmap: true,
    },
    {
        id: 5,
        colSpan: "col-span-12 md:col-span-6 xl:col-span-3",
        bg: "bg-white",
        iconBg: "bg-gray100",
        icon: programming,
        title: "API access",
        description:
            "Connect to your existing systems via REST API.",
        titleColor: "text-lightgray900",
        descColor: "text-gray700",
        roadmap: true,
    },
    {
        id: 6,
        colSpan: "col-span-12 md:col-span-6 xl:col-span-6",
        bg: "bg-white",
        iconBg: "bg-gray100",
        icon: filesend,
        title: "Exports & reporting",
        description:
            "Our roadmap includes exportable data for internal reporting, client communication and post-licensing regulatory needs.",
        titleColor: "text-lightgray900",
        descColor: "text-gray700",
        roadmap: true,
    },
];

const DigitalAsset: React.FC = () => {
    return (
        <div className='max-xs:py-10 max-xs:pb-2 max-sm:pb-2 pt-42'>
            <div className='container max-sm:p-0'>
                <div className='space-y-16'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-6'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='space-y-8'>
                                <div>
                                    <Badge
                                        label="Our Investment Framework"
                                    />
                                </div>
                                <div>
                                    <h3 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-gray800'>Your Institutional Console for Digital Asset Mandates</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col w-full max-w-170 ml-auto h-full justify-end gap-5'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>The console is where you see, configure and review your vaults. In the pilot, you get access to the MVP version to explore workflows and help shape the roadmap.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                        {featureData.map((item) => (
                            <div key={item.id} className={item.colSpan}>
                                <div
                                    className={`h-full rounded-3xl max-sm:py-10 max-sm:px-4 p-10 flex flex-col gap-y-14 ${item.bg}`}
                                >
                                    <div className="flex gap-5 justify-between items-start">
                                        <span
                                            className={`min-w-16 w-16 h-16 flex justify-center items-center rounded-xl p-4 ${item.iconBg}`}
                                        >
                                            <Image src={item.icon} alt="icon" className="max-h-full" />
                                        </span>

                                        {item.roadmap && (
                                            <span className="py-2 px-3 rounded-md bg-lightgray900 text-base leading-4.5 text-white">
                                                Roadmap
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-y-4">
                                        <h3
                                            className={`text-2xl font-semibold leading-8 tracking-[-0.24px] ${item.titleColor}`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={`text-lg font-normal leading-[144%] ${item.descColor}`}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalAsset
