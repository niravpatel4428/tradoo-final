import React from 'react'
import Badge from '../components/Badge'
import Image from "next/image";
import WhyMatters from "@/public/image/whyitmatters.jpg";
import info from "@/public/image/svg/gray-info-circle.svg";
import built from "@/public/image/built-for.jpg";

const statsData = [
    {
        value: "184,203",
        text: "On-chain wallets analyzed over the selected period",
    },
    {
        value: "13.6%",
        text: "Wallets with net profit after all trades in the selected period",
    },
];

const BuiltFor = () => {
    return (
        <>
            <div className='max-xs:pt-15 max-md:pt-27 max-md:pb-2 md:pb-42 md:pt-27 bg-white'>
                <div className='container max-sm:p-0'>
                    <div>
                        <div className='grid grid-cols-12 gap-y-8 md:gap-5'>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='max-sm:px-4 space-y-8'>
                                    <div>
                                        <Badge
                                            label="Data That Matters"
                                        />
                                    </div>
                                    <div>
                                        <h2 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'>Built for the real market, not the ideal one</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='max-sm:px-4 flex h-full flex-col justify-end gap-y-6'>
                                    <p className='text-lg font-normal leading-[144%] text-gray700'>We show both tails: the few wallets that truly compound — and the broad base quietly losing money. That&apos;s the reality our risk-first strategy framework is built around.</p>
                                </div>
                            </div>
                        </div>
                        <div className='max-xs:mt-14 mt-18 lg:mt-20'>
                            <div className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <div className='w-full max-sm:h-60 sm:h-100 lg:h-83 xl:h-107 min-h-full'>
                                        <Image
                                            src={built}
                                            alt="img"
                                            className='w-full h-full object-cover rounded-3xl'
                                        />
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <div className='h-full'>
                                        <div className="space-y-2 h-full">
                                            {statsData.map((item, index) => (
                                                <div key={index} className="">
                                                    <div className="h-full max-md:py-10 max-md:px-4 max-md:gap-y-10 flex flex-col md:p-6 md:gap-10 xl:gap-14 xl:p-10 bg-gray100 rounded-3xl">
                                                        <h3 className="max-xs:text-3xl max-md:text-5xl md:text-4xl xl:text-5xl font-semibold leading-none tracking-[-1.44px] text-gray800">
                                                            {item.value}
                                                        </h3>
                                                        <p className="text-lg font-normal leading-[144%] text-gray700">
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BuiltFor
