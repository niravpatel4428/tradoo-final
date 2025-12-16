import React from 'react'
import Image from "next/image";
import turning from "@/public/image/svg/turning.svg";
import chart from "@/public/image/svg/chart-icon.png";
import shield from "@/public/image/svg/shield-check.svg";
import eye from "@/public/image/svg/eye.svg";
import Badge from '../components/Badge';



const RiskFirst: React.FC = () => {

    const items = [
        {
            icon: chart,
            title: "Narrow, liquid universe",
            desc: "We focus on BTC, ETH, and USDC instead of hundreds of speculative tokens. That keeps mandates understandable and liquid."
        },
        {
            icon: shield,
            title: "Non-custodial smart vaults",
            desc: "Each vault is a dedicated smart contract. Tradoo cannot move assets outside predefined rules or commingle them across clients."
        },
        {
            icon: turning,
            title: "Guardrails on strategies",
            desc: "Modules operate within strict limits on leverage, venue selection, and exposure. You can see which levers are used and why."
        },
        {
            icon: eye,
            title: "Transparent by design",
            desc: "From allocations to module activity and risk metrics, everything is observable on-chain and visible in the console."
        }
    ];

    return (
        <div className='max-xs:py-10 max-xs:pb-12 max-sm:pb-12 py-42'> 
            <div className='container max-sm:p-0'>
                <div className='space-y-16'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-6'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='space-y-8'>
                                <div>
                                    <Badge
                                        label="Our 15 Strategies"
                                    />
                                </div>
                                <div>
                                    <h3 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-gray800'>Risk-First, Non Custodial and Deliberately Narrow.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col w-full max-w-170 ml-auto h-full justify-end gap-5'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>Many on-chain asset management platforms give access to hundreds of tokens and every protocol they can integrate. We take the opposite approach. </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">

                        {items.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3">
                                <div className="h-full gap-y-16 flex flex-col rounded-3xl max-xs:p-5 max-sm:px-4 p-10 bg-white">
                                    <div className="w-16 h-16 rounded-xl p-3 bg-gray100 flex justify-center items-center">
                                        <Image
                                            src={item.icon}
                                            alt="icon"
                                            className="max-h-full"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-5">
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
                    </div>
                    <div className='max-sm:px-4 max-xs:mt-16 mt-24 md:mt-24'>
                        <p className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'><span className='text-romansilver'>Tradoo focuses on a narrow, liquid universe of BTC, ETH and USDC and a defined set of strategy modules.</span> This keeps portfolios explainable, risk controls enforceable and operational complexity low while remaining fully non-custodial.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskFirst
