
import React from 'react'
import Badge from '../components/Badge'
import whiteshield from "@/public/image/svg/white-shield-check.svg";
import widget from "@/public/image/svg/widget.svg";
import whiteturning from "@/public/image/svg/white-tuning.svg";
import whiteuser from "@/public/image/svg/white-users.svg";
import shield from "@/public/image/svg/shield-check.svg";
import widgeticon from "@/public/image/svg/widget-icon.svg";
import user from "@/public/image/svg/users-rounded .svg";
import turning from "@/public/image/svg/turning.svg";
import Image, { StaticImageData } from "next/image";
import usdc from "@/public/image/svg/general-default.svg";
import btc from "@/public/image/svg/btc-general.svg";
import eth from "@/public/image/svg/ethereum.svg";


export const featureItems = [
    {
        id: 1,
        img: "/icons/asset-mix.png",
        title: "Asset mix & risk envelope",
        description: "Define BTC/ETH/USDC ranges, volatility and drawdown bands.",
    },
    {
        id: 2,
        img: "/icons/modules.png",
        title: "Modules",
        description: "Define BTC/ETH/USDC ranges, volatility and drawdown bands.",
    },
    {
        id: 3,
        img: "/icons/rules.png",
        title: "Rules & limits",
        description:
            "Configure DCA, hedges, profit taking, venue and concentration limits.",
    },
    {
        id: 4,
        img: "/icons/integrations.png",
        title: "Integrations & clients",
        description:
            "Map vaults to mandates and clients, connect via API to existing systems.",
    },
];




const ToolBox: React.FC = () => {

    const items = [
        {
            icon: turning,
            title: "Asset mix & risk envelope",
            text: "Define BTC/ETH/USDC ranges, volatility and drawdown bands.",
        },
        {
            icon: widgeticon,
            title: "Modules",
            text: "Define BTC/ETH/USDC ranges, volatility and drawdown bands.",
        },
        {
            icon: shield,
            title: "Rules & limits",
            text: "Configure DCA, hedges, profit taking, venue and concentration limits.",
        },
        {
            icon: user,
            title: "Integrations & clients",
            text: "Map vaults to mandates and clients, connect via API to existing systems.",
        },
    ];

    const toolboxcenter = [
        {
            icon: whiteturning,
            title: "Asset mix & risk envelope",
            detail:
                "Define BTC/ETH/USDC ranges, volatility and drawdown bands.",
        },
        {
            icon: widget,
            title: "Modules",
            detail:
                "Define BTC/ETH/USDC ranges, volatility and drawdown bands.",
        },
        {
            icon: whiteshield,
            title: "Rules & limits",
            detail:
                "Configure DCA, hedges, profit taking, venue and concentration limits.",
        },
        {
            icon: whiteuser,
            title: "Integrations & clients",
            detail:
                "Map vaults to mandates and clients, connect via API to existing systems.",
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
        <div className='pt-42 bg-gray900'>
            <div className='container max-sm:p-0'>
                <div className='space-y-24'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-y-8 lg:gap-8'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='space-y-6'>
                                <div>
                                    <Badge label="Strategy Toolbox" variant='darkgreen' />
                                </div>
                                <div>
                                    <h3 className='max-xs:tracking-normal max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-white'>Inside the Tradoo strategy toolbox.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col h-full justify-end gap-5 ml-auto'>
                                <p className='text-lg font-normal leading-[144%] text-gray400'>Asset mix, modules, rules and integrations – the toolbox sits between your existing systems and on-chain infrastructure and turns mandates into non-custodial strategy vaults.</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-0 grid grid-cols-12 gap-2">
                        {items.map((item, index) => (
                            <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <div className="bg-white rounded-3xl p-5 xxl:py-10 xxl:px-8 flex flex-col gap-y-12 h-full hover:bg-gray300 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-xl p-3 bg-gray100 flex justify-center items-center">
                                        <Image
                                            src={item.icon}
                                            alt="icon"
                                            className="max-h-full"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                            {item.title}
                                        </span>

                                        <p className="font-normal text-lg leading-[144%] text-gray700">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='hidden max-lg:scale-100 max-xl:scale-80 max-xxl:scale-90 relative grid grid-cols-12 items-center'>
                        <div className='col-span-12 lg:col-span-3'>
                            <div className="flex max-lg:flex-col items-center relative justify-center lg:justify-end lg:mr-[7px]">

                                {/* LEFT CARD */}
                                <div className="space-y-4 bg-gray800 rounded-3xl px-7 py-8 min-w-54 max-w-54 relative max-lg:top-1.5 lg:left-1.5">
                                    <p className="font-semibold leading-6 text-white text-lg">Existing systems</p>
                                    <p className="text-base leading-5.5 text-gray300 font-normal">ERP, Treasury Portfolio</p>
                                </div>

                                {/* CONNECTOR */}
                                <div className="relative max-lg:flex-col flex items-center">

                                    {/* HORIZONTAL LINE EXACT SAME */}
                                    <div className="absolute max-lg:top-12 left-0 right-0 h-0.5 bg-gray700 max-lg:rotate-90"></div>

                                    {/* LEFT SMALL GREY DOT */}
                                    <div className="min-w-3 w-3 h-3 max-lg:relative max-lg:-left-[0.5px] rounded-full bg-gray700 z-10"></div>

                                    {/* API TAG */}
                                    <div className="z-20 max-lg:my-6 mx-6 px-3 py-2 bg-white text-gray800 font-medium leading-4.5 text-base rounded-md shadow">
                                        API
                                    </div>

                                    {/* GREEN DOT */}
                                    <div className="min-w-3 w-3 h-3 max-lg:relative max-lg:-left-[0.5px] rounded-full bg-[#5FB98D] z-10"></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 max-sm:px-4'>
                            <div className='p-4 rounded-3xl md:rounded-4xl shadow-[var(--shadowcard)] border-2 border-[#0D9488] -my-[7px] lg:-mx-3.5'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                    {toolboxcenter.map((item, index) => (
                                        <div key={index} className="block">
                                            <div className="flex flex-col gap-12 max-xs:gap-6 bg-gray800 rounded-xl md:rounded-3xl py-8 px-4 max-xs:py-6 md:p-6 xxl:p-8 h-full">

                                                <div className="min-w-16 w-16 h-16 rounded-xl p-3 bg-[#323845] flex justify-center items-center">
                                                    <Image
                                                        src={item.icon}
                                                        alt="icon"
                                                        className="max-h-full"
                                                    />
                                                </div>


                                                <div className="block">

                                                    <div className="block text-white text-lg leading-6 font-semibold capitalize mb-4">
                                                        <span>{item.title}</span>
                                                    </div>


                                                    <div className="block font-normal text-gray300 text-lg leading-[144%]">
                                                        <p>{item.detail}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-3'>
                            <div className="flex max-lg:flex-col items-center max-lg:justify-center relative lg:ml-[7px]">

                                {/* LEFT CONNECTOR */}
                                <div className="relative max-lg:flex-col flex items-center">

                                    {/* GREEN DOT */}
                                    <div className="min-w-3 w-3 h-3 max-lg:relative max-lg:-left-[0px] rounded-full bg-[#5FB98D] z-10"></div>

                                    {/* WHITE PILL - Vaults */}
                                    <div className="z-20 max-lg:my-6 mx-6 px-3 py-2 bg-white text-gray800 font-medium leading-4.5 text-base rounded-md shadow">
                                        Vaults
                                    </div>

                                    {/* GREY DOT */}
                                    <div className="min-w-3 w-3 h-3 max-lg:relative max-lg:-left-[0px] rounded-full bg-gray700 z-10"></div>

                                    {/* HORIZONTAL LINE */}
                                    <div className="absolute max-lg:top-14 left-0 right-0 h-0.5 bg-gray700 max-lg:rotate-90"></div>
                                </div>

                                {/* RIGHT CARD */}
                                <div className="space-y-4 bg-gray800 rounded-3xl px-7 py-8 min-w-54 max-w-54 relative max-lg:-top-1.5 lg:right-1.5">
                                    <p className="font-semibold leading-6 text-white text-lg">
                                        On-chain<br />infrastructure
                                    </p>

                                    <p className="text-base leading-5.5 text-gray300 font-normal">
                                        Smart vaults & white-<br />listed venues
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-24 xl:py-36 bg-[linear-gradient(180deg,#141824_0%,#202533_100%)]'>
                <div className='container'>
                    <div className='max-lg:scale-100 max-xl:scale-78 max-xxl:scale-90 relative grid grid-cols-12 items-center'>
                        <div className='col-span-12 lg:col-span-4'>
                            <div className="flex max-lg:flex-col items-center relative justify-center lg:justify-end">

                                {/* LEFT CARD */}
                                <div className="space-y-4 max-lg:text-center bg-extralightgunmetal rounded-3xl max-xs:px-5 max-sm:px-8 px-10 py-8 w-full lg:min-w-85 lg:max-w-85 relative max-lg:top-1.5 lg:left-1.5">
                                    <p className="font-semibold leading-6 text-white text-lg">Existing systems</p>
                                    <p className="text-base leading-5.5 text-gray400 font-normal">ERP, Treasury Portfolio</p>
                                </div>

                                {/* CONNECTOR */}
                                <div className="relative max-lg:flex-col flex items-center">

                                    {/* HORIZONTAL LINE EXACT SAME */}
                                    <div className="absolute max-lg:top-12 left-0 right-0 h-0.5 bg-gray700 max-lg:rotate-90"></div>

                                    {/* LEFT SMALL GREY DOT */}
                                    <div className="min-w-3 w-3 h-3 max-lg:relative max-lg:-left-[0.5px] rounded-full bg-gray700 z-10"></div>

                                    {/* API TAG */}
                                    <div className="z-20 max-lg:my-6 mx-6 px-3 py-2 bg-white text-gray800 font-medium leading-4.5 text-base rounded-md shadow">
                                        API
                                    </div>

                                    {/* GREEN DOT */}
                                    <div className="min-w-3 w-3 h-3 max-lg:relative max-lg:-left-[0.5px] rounded-full bg-gray700 z-10"></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4 max-sm:px-4'>
                            <div className='max-xs:px-5 max-sm:px-8 px-10 max-lg:text-center py-8 rounded-3xl bg-extralightgunmetal space-y-10 max-lg:mx-0 max-lg:-my-1.5 -mx-1.5'>
                                <div className="flex max-lg:justify-center items-center">
                                    {cryptoList.map((item, i) => (
                                        <span
                                            key={item.id}
                                            className={`w-10 h-10 flex items-center relative justify-center rounded-full 
                                                                            ${i !== 0 ? "-ml-2" : "z-10"}`}
                                            style={{ backgroundColor: item.bg, zIndex: item.importance }}
                                        >
                                            <Image src={item.icon} alt={item.alt} className="w-10 h-10 rounded-full" />
                                        </span>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    <p className="font-semibold leading-8 tracking-[-0.24px] text-white text-2xl">
                                        Tradoo Strategy Toolbox
                                    </p>

                                    <p className="text-base leading-5.5 text-gray400 font-normal">
                                        Non-custodial and module-based
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                            <div className="flex max-lg:flex-col items-center max-lg:justify-center relative">

                                {/* LEFT CONNECTOR */}
                                <div className="relative max-lg:flex-col flex items-center">

                                    {/* GREEN DOT */}
                                    <div className="min-w-3 w-3 h-3 max-lg:relative max-lg:-left-[0px] rounded-full bg-gray700 z-10"></div>

                                    {/* WHITE PILL - Vaults */}
                                    <div className="z-20 max-lg:my-6 mx-6 px-3 py-2 bg-white text-gray800 font-medium leading-4.5 text-base rounded-md shadow">
                                        Vaults
                                    </div>

                                    {/* GREY DOT */}
                                    <div className="min-w-3 w-3 h-3 max-lg:relative max-lg:-left-[0px] rounded-full bg-gray700 z-10"></div>

                                    {/* HORIZONTAL LINE */}
                                    <div className="absolute max-lg:top-14 left-0 right-0 h-0.5 bg-gray700 max-lg:rotate-90"></div>
                                </div>

                                {/* RIGHT CARD */}
                                <div className="space-y-4 max-lg:text-center bg-extralightgunmetal rounded-3xl max-xs:px-5 max-sm:px-8 px-10 py-8 w-full lg:min-w-85 lg:max-w-85 relative max-lg:-top-1.5 lg:right-1.5">
                                    <p className="font-semibold leading-6 text-white text-lg">
                                        On-chain infrastructure
                                    </p>

                                    <p className="text-base leading-5.5 text-gray400 font-normal">
                                        Smart vaults & white-listed venues
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolBox
