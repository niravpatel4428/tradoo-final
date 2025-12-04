"use client";
import React from 'react'
import Badge from '../components/Badge'
import Image, { StaticImageData } from "next/image";
import usdc from "@/public/image/svg/general-default.svg";
import btc from "@/public/image/svg/btc-general.svg";
import eth from "@/public/image/svg/ethereum.svg";

const RiskStructure: React.FC = () => {

    type RiskItem = {
        title: string;
        subtitle: string;
        gradientDesktop: string; // horizontal bar
        gradientMobile: string; // left vertical strip
    };

    const riskData: RiskItem[] = [
        {
            title: "Capital Preservation",
            subtitle: "Minimal volatility",
            gradientDesktop: "linear-gradient(90.00deg, #7B8391 0%, #365C8D 100%)",
            gradientMobile: "linear-gradient(180deg, #7B8391 0%, #365C8D 100%)",
        },
        {
            title: "Balanced Growth",
            subtitle: "Diversified stability",
            gradientDesktop: "linear-gradient(90.00deg, #418B77 0%, #78B76A 100%)",
            gradientMobile: "linear-gradient(180deg, #418B77 0%, #78B76A 100%)",
        },
        {
            title: "Performance Focused",
            subtitle: "Higher exposure with controlled inputs",
            gradientDesktop: "linear-gradient(90.00deg, #D9904F 0%, #C74343 100%)",
            gradientMobile: "linear-gradient(180deg, #D9904F 0%, #C74343 100%)",
        },
    ];


    type CryptoItem = {
        id: number;
        icon: StaticImageData; // imported image
        bg: string;            // background color
        alt: string;
        importance: number;
    };

    const cryptoList: CryptoItem[] = [
        {
            id: 1,
            icon: usdc,
            bg: "#2775CA",
            alt: "USDC",
            importance: 9,
        },
        {
            id: 2,
            icon: btc,
            bg: "#F7931A",
            importance: 8,
            alt: "BTC",
        },
        {
            id: 3,
            icon: eth,
            bg: "#627EEA",
            importance: 6,
            alt: "ETH",
        },
    ];

    return (
        <div className='bg-gray900 max-xs:pt-14 max-md:pb-2 py-42'>
            <div className='container max-md:p-0'>
                <div className=''>
                    <div className='grid grid-cols-12 gap-y-16 md:gap-6'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='max-md:px-4'>
                                <div>
                                    <Badge label="Risk Tolerance Sets Structure" variant="darkgreen" />
                                </div>
                                <div className='mt-6'>
                                    <h2 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-12 tracking-[-1.20px] xl:text-56 font-semibold text-white xl:tracking-[-1.68px] xl:leading-16'><span className='text-romansilver'>You choose the risk —</span> Tradoo handles the structure.</h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='max-md:px-4 h-full flex flex-col items-start gap-8 justify-end'>
                                <div className="flex items-center">
                                    {cryptoList.map((item, i) => (
                                        <span
                                            key={item.id}
                                            className={`w-12 h-12 flex items-center relative justify-center rounded-full 
                                            ${i !== 0 ? "-ml-2" : "z-10"}`}
                                            style={{ backgroundColor: item.bg, zIndex: item.importance }}
                                        >
                                            <Image src={item.icon} alt={item.alt} className="w-12 h-12 rounded-full" />
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <p className='text-lg font-normal leading-[144%] text-gray400'>Each framework sets a different balance between growth and capital stability. Within those risk bands, Tradoo allocates across BTC, ETH and USDC and adjusts as markets shift, keeping your portfolio disciplined.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-18 max-md:py-4 max-md:px-0 w-full rounded-3xl bg-gray800 p-10 flex flex-col gap-6">
                        <div className="flex flex-col gap-2 md:grid md:grid-cols-3">
                            {riskData.map((item, index) => (
                                <div
                                    key={index}
                                    className="max-md:min-h-32.5 max-md:items-center relative flex flex-row md:flex-col gap-3 items-start"
                                >
                                    {/* MOBILE LEFT COLOR STRIP */}
                                    <div
                                        className="md:hidden w-2 h-32.5 rounded-full"
                                        style={{ background: item.gradientMobile }}
                                    ></div>

                                    <div className="w-full h-full justify-between flex flex-col gap-2 pl-6 md:pl-0">
                                        <h3 className="text-white text-2xl font-semibold leading-8 tracking-[-0.24px]">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray400 text-lg font-normal leading-[144%]">{item.subtitle}</p>

                                        {/* DESKTOP HORIZONTAL BAR */}
                                        <div
                                            className="hidden md:block h-3 w-full mt-8 rounded-full"
                                            style={{ background: item.gradientDesktop }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskStructure
