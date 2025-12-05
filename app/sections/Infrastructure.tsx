import React from 'react'
import Badge from '../components/Badge'
import Image from "next/image";
import Button from '../components/Button';
import infrastructure from "@/public/image/infrastructure.jpg";
import info from "@/public/image/svg/gray-info-circle.svg";
import edit from "@/public/image/svg/edit.svg";
import purplelogo from "@/public/image/svg/logo-purple.svg";
import compound from "@/public/image/svg/compound.svg";
import morpho from "@/public/image/svg/morpho.svg";
import { ArrowUpRight } from "lucide-react";
import key from "@/public/image/svg//key.svg";
import eye from "@/public/image/svg/eye.svg";
import turning from "@/public/image/svg/turning.svg";

const Infrastructure: React.FC = () => {

    const items = [
        {
            icon: key,
            title: "One vault, multiple venues",
            desc: "Deposit once into your treasury vault and get diversified exposure across selected on-chain credit markets, without managing individual positions."
        },
        {
            icon: eye,
            title: "No protocol ops team required",
            desc: "We handle venue selection, risk checks, allocation rules and monitoring. Your team focuses on treasury decisions, not protocol plumbing."
        },
        {
            icon: turning,
            title: "Aligned with your policies",
            desc: "Vaults are configured around your internal risk, liquidity and compliance requirements, from allowed venues to concentration and duration limits."
        },
    ];

    return (
        <div className='max-xs:py-15 py-42'>
            <div className='container max-sm:p-0'>
                <div className='max-xs:space-y-15 space-y-24'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-y-18 md:gap-16'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='space-y-6'>
                                <div>
                                    <Badge
                                        label="Non Custodial Treasury Infrastructure"
                                    />
                                </div>
                                <div className='max-sm:mt-8'>
                                    <h4 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'>On-Chain Treasury Management Made Non Custodial and Simple to Use</h4>
                                </div>
                                <div className='mt-8'>
                                    <p className='text-lg leading-[144%] font-normal text-gray700'>Most treasuries either leave stablecoins idle or park them on centralized exchanges. Directly accessing on-chain credit markets requires protocol selection, risk controls, monitoring and specialized ops teams. <br /> <br />
                                        Tradoo abstracts this complexity. You deposit USDC into a dedicated smart vault, we route it across whitelisted, overcollateralized lending venues under predefined risk limits, and you keep full on-chain ownership and transparency.</p>
                                </div>
                                <div className='mt-8'>
                                    <Button label="Explore in Private Beta" href="#" trailingIcon />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='relative'>
                                <div className='w-full max-sm:max-w-85/100 max-md:h-85 md:max-w-141.5 h-151'>
                                    <Image
                                        src={infrastructure}
                                        alt="img"
                                        className='w-full h-full object-cover rounded-xl md:rounded-3xl'
                                    />
                                </div>

                                <div className="absolute top-11 md:top-20 right-0 w-full max-xs:max-w-95/100  max-sm:max-w-90/100 max-w-85/100 xxl:max-w-141.5 ml-auto space-y-2">
                                    {/* --- TREASURY VAULT CARD --- */}
                                    <div className="bg-white rounded-xl md:rounded-20 shadow-[var(--shadowbox)] p-4 md:p-7">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h2 className="max-sm:text-xs text-xl font-semibold leading-none tracking-[-0.20px] text-darblue">Your Treasury Vault</h2>
                                                <p className="max-sm:text-xs text-sm leading-4 text-aurometalsaurus mt-2">Non-custodial smart contract</p>
                                            </div>

                                            <span className="max-sm:text-xs text-sm font-semibold text-gray800 leading-4.5 flex items-center gap-1">
                                                <span className="h-2 w-2 rounded-full bg-[#0D9488]"></span>
                                                All systems operational
                                            </span>
                                        </div>

                                        {/* Stats grid */}
                                        <div className="grid grid-cols-2 pt-3 md:pt-6 border-t border-solid border-t-[#E6E8EB] mt-3 md:mt-6">
                                            <div>
                                                <p className="max-sm:text-xs text-sm leading-4.5 font-normal text-aurometalsaurus">Total AUM</p>
                                                <p className="max-sm:text-xs text-2xl font-semibold tracking-[-0.48] text-darblue mt-2">$2.4M</p>
                                            </div>

                                            <div className="border-l border-l-[#E6E8EB] pl-2 md:pl-6">
                                                <p className="max-sm:text-xs text-sm leading-4.5 font-normal text-aurometalsaurus">Net return (Annualized)</p>

                                                <p className="max-sm:text-xs text-2xl font-semibold tracking-[-0.48] text-darblue mt-2 flex items-center gap-1">
                                                    <ArrowUpRight className="w-7 h-7 text-[#0D9488]" />
                                                    <span className="">4.2%</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Risk level box */}
                                        <div className="bg-[#F3F4F6] rounded-xl p-2.5 md:p-4 mt-3 md:mt-6">
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center gap-1'>
                                                    <p className="text-xs leading-4.5 font-normal text-aurometalsaurus">Risk Level</p>
                                                    <Image
                                                        src={info}
                                                        alt="info"
                                                    />
                                                </div>
                                                <Image
                                                    src={edit}
                                                    alt="edit"
                                                />
                                            </div>

                                            <div className="mt-2 gap-1 flex items-center">
                                                <p className="max-sm:text-xs text-sm font-medium text-darblue">Conservative</p>
                                                <p className="max-sm:text-xs text-sm font-normal text-aurometalsaurus">Market Neutral</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- VENUE ALLOCATION CARD --- */}
                                    <div className="bg-white rounded-xl md:rounded-20 shadow-[var(--shadowbox)] p-4 md:p-7">
                                        <h3 className="text-base font-semibold leading-5 tracking-[-0.16px] text-darblue">Venue Allocation</h3>
                                        <p className="text-xs font-normal leading-4 text-aurometalsaurus mt-2">Non-custodial smart contract</p>

                                        <div className="pt-3 mt-3 md:mt-6 md:pt-6 border-t border-solid border-t-[#E6E8EB] space-y-6">

                                            {/* AAVE */}
                                            <div>
                                                <div className="flex justify-between text-gray-700">
                                                    <span className="font-medium flex items-center gap-2">
                                                        <Image
                                                            src={purplelogo}
                                                            alt="purplelogo"
                                                        />
                                                    </span>
                                                    <span className="max-sm:text-xs text-sm font-semibold leading-4 text-gray800">42%</span>
                                                </div>

                                                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                                                    <div
                                                        className="h-full bg-[#9391F7] rounded-full"
                                                        style={{ width: "42%" }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* COMPOUND */}
                                            <div>
                                                <div className="flex justify-between text-gray-700">
                                                    <span className="font-medium flex items-center gap-2">
                                                        <Image
                                                            src={compound}
                                                            alt="compound"
                                                        />
                                                    </span>
                                                    <span className="max-sm:text-xs text-sm font-semibold leading-4 text-gray800">33%</span>
                                                </div>

                                                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                                                    <div
                                                        className="h-full bg-[#00D395] rounded-full"
                                                        style={{ width: "33%" }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* MORPHO */}
                                            <div>
                                                <div className="flex justify-between text-gray-700">
                                                    <span className="font-medium flex items-center gap-2">
                                                        <Image
                                                            src={morpho}
                                                            alt="morpho"
                                                        />
                                                    </span>
                                                    <span className="max-sm:text-xs text-sm font-semibold leading-4 text-gray800">25%</span>
                                                </div>

                                                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                                                    <div
                                                        className="h-full bg-[#2470FF] rounded-full"
                                                        style={{ width: "25%" }}
                                                    ></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-70 md:mt-48 grid grid-cols-12 gap-2">

                        {items.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="h-full gap-y-12 flex flex-col rounded-3xl max-xs:p-5 max-sm:px-4 p-8 bg-white">
                                    <span className="min-w-16 w-16 h-16 flex justify-center items-center bg-gray100 rounded-xl">
                                        <Image src={item.icon} alt="icon" className="max-h-full" />
                                    </span>

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


                    </div>
                    <div className='max-sm:px-4'>
                        <p className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'><span className='text-romansilver'>We focus on one thing:</span> conservative, non custodial access to stablecoin credit markets, not a black-box mix of funds, products and leverage.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infrastructure
