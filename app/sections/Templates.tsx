"use client";
import { Key, useEffect, useRef, useState } from "react";
import React from 'react'
import Badge from '../components/Badge';
import Image, { StaticImageData } from "next/image";
import i1 from "@/public/image/tabbing-image.jpg";
import i2 from "@/public/image/tabbing-image2.jpg";
import i3 from "@/public/image/tabbing-image3.jpg";
import i4 from "@/public/image/tabbing-image4.jpg";
import i5 from "@/public/image/tabbing-image5.jpg";
import i6 from "@/public/image/tabbing-image6.jpg";
import Button from "../components/Button";

const tabs = [
    "Core Allocation",
    "Conservative",
    "BTC Focus",
    "ETH Focus",
    "Stablecoin",
    "Multi-asset",
];

type StrategyTab = {
    id: number;
    img: StaticImageData;
    btnUrl: string;
    btnLabel: string;
    mainTItle: string;
    label: string;
    desc: string;
    labels: string[];
};

const profiles: StrategyTab[] = [
    { id: 0, img: i1, btnLabel: "Get Early Access", btnUrl: "/waitlist", mainTItle: "Digital Asset Core Allocation Vault", label: "Digital Asset Core Allocation Vault", desc: "For asset managers and family offices who want a strategic BTC, ETH, and USDC sleeve as part of a diversified portfolio. Balanced core exposure with a stable USDC foundation and rules-based rebalancing", labels: ["Core", "Balanced", "BTC / ETH / USDC"], },
    { id: 1, img: i2, btnLabel: "Join Waitlist", btnUrl: "/waitlist", mainTItle: "Capital Preservation Plus Vault", label: "Capital Preservation Plus Vault", desc: "For conservative mandates where capital preservation comes first. Most of the portfolio sits in USDC core and lending, with a controlled, rules-based build-up of BTC and ETH over time", labels: ["Capital preservation", "USDC heavy", "Gradual BTC/ETH"], },
    { id: 2, img: i3, btnLabel: "Join Waitlist", btnUrl: "/waitlist", mainTItle: "BTC Accumulation Vault", label: "BTC Accumulation Vault", desc: "For clients who want to build a long-term BTC position without manually timing every entry. Systematic BTC DCA, dynamic spot allocation, and clear rules for profit-taking and drawdown control.", labels: ["BTC Focus", "DCA", "Growth with Risk Control"], },
    { id: 3, img: i4, btnLabel: "Get Early Access", btnUrl: "/waitlist", mainTItle: "ETH Growth & Volatility Managed Vault", label: "ETH Growth & Volatility Managed Vault", desc: "For mandates that see ETH as a strategic asset but want more structure than buy-and-hold. Combines ETH spot, DCA, trend modules and profit-taking with hedging to keep volatility within defined ranges.", labels: ["ETH Focus", "Growth", "Volatility managed"], }, 
    { id: 4, img: i5, btnLabel: "Get Early Access", btnUrl: "/waitlist", mainTItle: "Stablecoin Returns Vault", label: "Stablecoin Returns Vault", desc: "For mandates that want on-chain returns on USD exposure without taking directional BTC or ETH risk. Concentrates on USDC core and overcollateralized lending, with risk controls and venue limits on top.", labels: ["Returns", "USDC only", "Lending"], }, 
    { id: 5, img: i6, btnLabel: "Get Early Access", btnUrl: "/waitlist", mainTItle: "Volatility Managed Multi-Asset Vault", label: "Volatility Managed Multi-Asset Vault", desc: "For multi-asset managers who want a defined volatility bucket in digital assets. BTC, ETH and USDC allocations shift dynamically based on market regimes and risk signals, keeping portfolio behavior within agreed bands.", labels: ["Multi-asset", "Dynamic allocation", "Volatility target"], },
];


const Templates: React.FC = () => {

    const [active, setActive] = useState(0);
    const [ready, setReady] = useState(false);
    const [boot, setBoot] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const timer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setTimeout(() => setBoot(true), 30);
    }, []);

    const startTimer = () => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setActive((prev) => (prev + 1) % tabs.length);
        }, 6000);
    };

    useEffect(() => {
        const target = sectionRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setReady(true);
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (ready) startTimer();
    }, [ready, active]);

    const handleClick = (i: number) => {
        setActive(i);
    };

    return (
        <div className='max-xs:py-10 max-xs:pb-2 max-sm:pb-2 py-42'>
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
                                    <h3 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-gray800'>Vault Templates Professionals Can Start From</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col w-full max-w-170 ml-auto h-full justify-end gap-5'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>These examples show how asset managers, family offices and funds can translate real mandates into strategy vaults. Each template can be adjusted, extended or combined in Pro mode.</p>
                            </div>
                        </div>
                    </div>
                    <div ref={sectionRef} className="w-full flex flex-col gap-6">

                        {/* --------------------------------------------- */}
                        {/* DESKTOP TABS — unchanged (hidden on mobile)    */}
                        {/* --------------------------------------------- */}
                        <div className="hidden lg:flex bg-gray200 rounded-3xl p-1 overflow-x-auto gap-1 no-scrollbar">
                            {tabs.map((t, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleClick(i)}
                                    className={`cursor-pointer relative overflow-hidden flex-[1_0_0] p-5 rounded-20 md:text-sm lg:text-lg font-semibold
              transition-all duration-300 xxl:whitespace-nowrap text-gray800 leading-6 text-center border-transparent border-0 
              ${active === i
                                            ? `bg-white shadow-[var(--shadowtab)] border-transparent border-0 after:content-['']
                                            after:absolute after:inset-0 after:rounded-20
                                            after:pointer-events-none
                                            after:shadow-[var(--shadowtab)]`
                                            : "text-gray800 md:text-sm lg:text-lg font-semibold leading-6 text-center border-transparent border-0"
                                        }`}

                                >
                                    {t}

                                    {active === i && boot && ready && (
                                        <div
                                            key={active}
                                            className="absolute inset-0 rounded-20 pointer-events-none"
                                            style={{
                                                background:
                                                    "linear-gradient(to right, rgba(0,0,0,0.03), rgba(0,0,0,0.03))",
                                                width: "0%",
                                                animation: "fillTab 6s linear forwards",
                                            }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* -------------------------------------------------- */}
                        {/* DESKTOP CONTENT — only current tab (unchanged)     */}
                        {/* -------------------------------------------------- */}
                        <div className="hidden md:flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex max-lg:flex-col items-stretch gap-2">

                                    {/* LEFT – IMAGE + BUTTON */}
                                    <div className="flex-1">
                                        <div className="relative overflow-hidden h-full w-full min-h-67 lg:min-h-100 xxl:min-h-119">
                                            <Image
                                                src={profiles[active].img}
                                                alt={profiles[active].mainTItle}
                                                className="h-full w-full object-cover rounded-3xl"
                                            />

                                            {/* BUTTON  */}
                                            <div className="absolute left-4 bottom-4 lg:left-8 xxl:left-14 lg:bottom-8 xxl:bottom-14 z-2">
                                                <Button label={profiles[active].btnLabel} href={profiles[active].btnUrl} trailingIcon={true} variant='contrastdefault' size='L' />
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT – WHITE BOX WITH CONTENT */}
                                    <div className="flex-1">
                                        <div className="py-16 px-4 md:p-10 xxl:p-14 h-full bg-white rounded-3xl flex flex-col justify-between gap-10">
                                            <div className="space-y-6">
                                                {/* TITLE */}
                                                <div>
                                                    <h2 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800 mb-4">
                                                        {profiles[active].mainTItle}
                                                    </h2>
                                                </div>

                                                {/* DESCRIPTION */}
                                                <div className="text-lg font-normal leading-[144%] color-gray700">
                                                    <p>
                                                        {profiles[active].desc}
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="flex flex-col gap-6">
                                                <h2 className="text-lg font-semibold leading-[144%] text-gray800">Strategies in this template:</h2>
                                                {/* LABEL TAGS */}
                                                <div className="flex flex-wrap gap-3">
                                                    {profiles[active].labels.map((label: string, i: Key | null | undefined) => (
                                                        <Badge className="text-gray800" key={i} label={label} variant="gray" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* -------------------------------------------------- */}
                        {/* MOBILE VERSION — card list (NO TABS)              */}
                        {/* -------------------------------------------------- */}
                        <div className="max-lg:flex flex-col gap-2 hidden">
                            {profiles.map((tab, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex max-lg:flex-col items-stretch gap-2">

                                        {/* LEFT – IMAGE + BUTTON */}
                                        <div className="flex-1">
                                            <div className="relative overflow-hidden h-full w-full min-h-67 lg:min-h-100 xxl:min-h-119">
                                                <Image
                                                    src={tab.img}
                                                    alt={tab.mainTItle}
                                                    className="max-sm:min-h-67 h-full w-full object-cover rounded-3xl"
                                                />

                                                {/* BUTTON  */}
                                                <div className="absolute left-4 bottom-4 lg:left-8 xxl:left-14 lg:bottom-8 xxl:bottom-14 z-2">
                                                    <Button label={tab.btnLabel} href={tab.btnUrl} trailingIcon={true} variant='contrastdefault' size='L' />
                                                </div>
                                            </div>
                                        </div>

                                        {/* RIGHT – WHITE BOX WITH CONTENT */}
                                        <div className="flex-1">
                                            <div className="py-16 px-4 md:p-10 xxl:p-14 h-full bg-white rounded-3xl shadow-sm flex flex-col justify-between gap-10">
                                                <div className="space-y-6">
                                                    {/* TITLE */}
                                                    <div>
                                                        <h2 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800 mb-4">
                                                            {tab.mainTItle}
                                                        </h2>
                                                    </div>

                                                    {/* DESCRIPTION */}
                                                    <div className="text-lg font-normal leading-[144%] color-gray700">
                                                        <p>
                                                            {tab.desc}
                                                        </p>
                                                    </div>
                                                </div>


                                                <div className="flex flex-col gap-6">
                                                    <h2 className="text-lg font-semibold leading-[144%] text-gray800">Strategies in this template:</h2>
                                                    {/* LABEL TAGS */}
                                                    <div className="flex flex-wrap gap-3">
                                                        {tab.labels.map((label: string, i: Key | null | undefined) => (
                                                            <Badge key={i} label={label} variant="gray" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                </div>
                            ))}
                        </div>

                        <style jsx>{`
        @keyframes fillTab {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Templates
