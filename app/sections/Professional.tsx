
import React from 'react'
import Badge from '../components/Badge'
import Image from "next/image";
import Professionals from "@/public/image/proffesionals.jpg";
import key from "@/public/image/svg/key.svg";
import eye from "@/public/image/svg/eye.svg";
import turning from "@/public/image/svg/turning.svg";

const Professional: React.FC = () => {

    const items = [
        {
            icon: key,
            title: "Independent asset managers",
            desc: "Offer BTC, ETH and stablecoin strategies as mandates or model portfolios with clear risk profiles and non-custodial client ownership."
        },
        {
            icon: eye,
            title: "Family offices & wealth desks",
            desc: "Allocate a defined slice of AUM into digital assets with transparent modules for core exposure, growth and downside protection."
        },
        {
            icon: turning,
            title: "Crypto-native funds & RIAs",
            desc: "Systematize your edge into repeatable vaults, while Tradoo provides the infrastructure, execution rails and risk framework."
        }
    ];

    return (
        <div className='max-xs:py-15 max-xs:pb-2 max-sm:pb-2 py-42 bg-white'>
            <div className='container max-sm:p-0'>
                <div className='max-sm:space-y-16 space-y-20'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-6'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='space-y-10'>
                                <div>
                                    <Badge
                                        label="Why It Matters"
                                    />
                                </div>
                                <div>
                                    <h3 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-gray800'>Built for Professionals,
                                        <span className='block text-romansilver'>Not for Retail Speculation</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col h-full justify-end gap-5'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>Tradoo’s strategy vaults are designed for teams who already manage capital and need a disciplined, non-custodial way to run digital asset mandates without building their own on-chain infrastructure from scratch..</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">

                        {items.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3">
                                <div className="h-full gap-y-12 flex flex-col rounded-3xl max-xs:p-5 max-sm:px-8 p-8 bg-gray100">
                                    <div className="w-16 h-16 rounded-xl p-3 bg-white flex justify-center items-center">
                                        <Image
                                            src={item.icon}
                                            alt="icon"
                                            className="max-h-full"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h5 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                            {item.title}
                                        </h5>
                                        <p className="text-lg font-normal leading-[144%] text-gray700">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='col-span-12 md:col-span-6 xl:col-span-3'>
                            <div className='w-full h-88 min-h-full'>
                                <Image
                                    src={Professionals}
                                    alt="img"
                                    className='w-full h-full object-cover rounded-3xl'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professional
