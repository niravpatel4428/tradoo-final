import React from 'react'
import Image from "next/image";
import { Briefcase, Building2, Coins } from 'lucide-react';

const Professional: React.FC = () => {

    const items = [
        {
            icon: Briefcase,
            title: "Independent asset managers",
            text: "Offer BTC, ETH and stablecoin strategies as mandates or model portfolios with clear risk profiles and non custodial client ownership.",
        },
        {
            icon: Building2,
            title: "Family offices & wealth desks", 
            text: "Allocate a defined slice of AUM into digital assets with transparent modules for core exposure, growth and downside protection.",
        },
        {
            icon: Coins,
            title: "Crypto-native funds & RIAs",
            text: "Systematize your edge into repeatable vaults, while Tradoo provides the infrastructure, execution rails and risk framework.",
        },
    ];

    return (
        <div className='max-xs:py-10 max-xs:pb-2 max-sm:pb-2 py-42'>
            <div className='container max-sm:p-0'>
                <div>
                    <div className='max-sm:text-left text-center max-sm:px-4'>
                        <div className=''>
                            <h2 className="max-xs:tracking-[-1px] max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xl:text-56 font-semibold text-gray800 tracking-[-1.68px] xl:leading-16">
                                Built for Professionals,
                                <span className="block text-gray">
                                    Not for Retail Speculation
                                </span>
                            </h2>
                        </div>
                        <div className="mt-4 w-full max-w-150 mx-auto">
                            <p className="text-lg font-normal leading-[144%] text-gray700">
                                Tradoo&apos;s strategy vaults are designed for teams who already manage capital and need a disciplined, non custodial way to run digital asset mandates without building their own on-chain infrastructure from scratch.
                            </p>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className="grid grid-cols-12 gap-2">
                            {items.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                                        <div className="bg-white rounded-3xl p-5 xxl:p-8 flex flex-col gap-y-12 xxl:gap-y-13 h-full hover:bg-gray300 transition-all duration-300">


                                            <div className="w-16 h-16 rounded-xl p-3 bg-gray100 flex justify-center items-center">
                                                <Icon className="w-7 h-7 text-foreground" />
                                            </div>

                                            <div className="flex flex-col gap-4">
                                                <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                                    {item.title}
                                                </span>

                                                <p className="font-normal text-lg leading-[144%] text-gray700">
                                                    {item.text}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professional
