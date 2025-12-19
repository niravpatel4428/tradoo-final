"use client";
import { Key, useEffect, useRef, useState } from "react";
import Badge from '../components/Badge'
import i1 from "@/public/image/strategy-roles-1.jpg";
import i2 from "@/public/image/strategy-roles-2.jpg";
import i3 from "@/public/image/strategy-roles-3.jpg";
import i4 from "@/public/image/strategy-roles-4.jpg";
import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";


const tabs = [
    "Core & Stability",
    "Growth & Building",
    "Risk Control & Hedging",
    "Meta Engine & Control Logic",
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
    { id: 0, img: i1, btnLabel: "Get Early Access", btnUrl: "/waitlist", mainTItle: "Core & Stability", label: "Core & Stability", desc: "These modules form the foundation of your portfolio. They provide liquidity, calm and discipline, even in turbulent market phases. The core aligns directly with your target allocation for BTC, ETH and USDC.", labels: ["USDC Core", "Lending (USDC)", "Rebalancing", "BTC/ETH Spot Base Component"], },
    { id: 1, img: i2, btnLabel: "Get Early Access", btnUrl: "/waitlist", mainTItle: "Growth & Building", label: "Growth & Building", desc: "These strategies use market phases to build BTC and ETH exposure systematically or to generate additional returns. The goal is controlled growth without unnecessary risks.", labels: ["DCA (BTC/ETH)", "Spot BTC/ETH (dynamic)", "Trend Control", "Range LP"], },
    { id: 2, img: i3, btnLabel: "Get Early Access", btnUrl: "/waitlist", mainTItle: "Risk Control & Hedging", label: "Risk Control & Hedging", desc: "These modules protect the portfolio from excess movements, unexpected shifts and technical risks. When markets turn or become volatile, these strategies activate first.", labels: ["Adaptive Risk Control", "Hedge/Protection", "Profit Taking", "Perpetual Overlay"], },
    { id: 3, img: i4, btnLabel: "Get Early Access", btnUrl: "/waitlist", mainTItle: "Meta Engine & Control Logic", label: "Meta Engine & Control Logic", desc: "These modules execute no trades. They control the overall process: identify regimes, analyze events, filter strategies and determine which modules are active or paused.", labels: ["Strategy Mix (AI Meta Engine)", "Regime Understanding", "Event & Sentiment Radar"], },
];

const Strategies = () => {
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
        <div className="" id="strategy-modules">
            <div className="container max-md:p-0">
                <div>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-6">
                            <div className="max-md:px-4">
                                <div>
                                    <Badge
                                        label="Our 15 Strategies"
                                    />
                                </div>
                                <div className="mt-8">
                                    <h3 className="max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.20px] xxl:tracking-[-1.68px] text-gray800">How the 15 strategies strategy modules shape your portfolio.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="max-md:px-4 h-full w-full md:max-w-171 ml-auto flex flex-col gap-5 justify-end">
                                <div>
                                    <p className="text-lg font-normal leading-[144%] text-gray700">Each module has a clearly defined purpose. The Engine combines them to balance core stability, growth and risk control, tailored to your risk profile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={sectionRef} className="mt-18 w-full flex flex-col gap-6">

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
                            {/* <div className="bg-white rounded-3xl p-8">
                                <h3 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                    {profiles[active].mainTItle}
                                </h3>
                                <p className="text-lg font-normal leading-[144%] text-gray700 mt-2 mb-8">
                                    {profiles[active].desc}
                                </p>

                                <div className="w-full">

                                    <div className="flex gap-2 mb-4">
                                        {profiles[active].assets.map((a, i) => (
                                            <div
                                                key={i}
                                                style={{ width: `${a.percent}%` }}
                                                className={`${a.color} h-30 rounded-lg relative flex items-start p-4`}
                                            >
                                                <span className="text-sm font-medium leading-4 text-darblue">{a.label}</span>

                                                <span className="absolute right-4 bottom-4 bg-gunmetal text-white text-sm font-medium leading-5 px-2 py-0.5 rounded-md">
                                                    {a.percent}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div> */}
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
                                                <h2 className="text-lg font-normal leading-[144%] text-gray800">Strategies in this role:</h2>
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
                                                    className="h-full w-full object-cover rounded-3xl"
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
                                                    <h2 className="text-lg font-normal leading-[144%] text-gray800">Strategies in this role:</h2>
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
                    <div className="mt-2 py-10 lg:py-16 px-4 md:p-8 xxl:py-10 xxl:px-14 bg-white rounded-3xl flex max-lg:flex-col lg:items-center gap-10 lg:gap-5">
                        <div className="flex-1">
                            <div className="mb-3">
                                <h2 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">All strategies at a glance</h2>
                            </div>
                            <div className="text-lg font-normal leading-[144%] color-gray700">
                                <p>The complete overview of all strategies can be found directly in your Vault environment.</p>
                            </div>
                        </div>

                        <div className="flex-none">
                            <Button label="Join Private Beta" href="/waitlist" variant="secondarydefault" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Strategies;
