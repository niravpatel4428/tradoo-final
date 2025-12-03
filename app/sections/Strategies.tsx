"use client";
import { Key, useEffect, useRef, useState } from "react";
import Badge from '../components/Badge'
import i1 from "@/public/image/strategy-roles-1.jpg";
import i2 from "@/public/image/strategy-roles-2.jpg";
import i3 from "@/public/image/strategy-roles-3.jpg";
import i4 from "@/public/image/strategy-roles-4.jpg";
import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";

const TABS: StrategyTab[] = [
    { id: 0, img: i1, btnLabel: "Get Early Access", btnUrl: "/", mainTItle: "Core & Stability", label: "Core & Stability", desc: "These modules form the foundation of your portfolio. They provide liquidity, calm and discipline, even in turbulent market phases. The core aligns directly with your target allocation for BTC, ETH and USDC.", labels: ["USDC Core", "Lending (USDC)", "Rebalancing", "BTC/ETH Spot Base Component"], },
    { id: 1, img: i2, btnLabel: "Get Early Access", btnUrl: "/", mainTItle: "Growth & Building", label: "Growth & Building", desc: "These strategies use market phases to build BTC and ETH exposure systematically or to generate additional returns. The goal is controlled growth without unnecessary risks.", labels: ["DCA (BTC/ETH)", "Spot BTC/ETH (dynamic)", "Trend Control", "Range LP"], },
    { id: 2, img: i3, btnLabel: "Get Early Access", btnUrl: "/", mainTItle: "Risk Control & Hedging", label: "Risk Control & Hedging", desc: "These modules protect the portfolio from excess movements, unexpected shifts and technical risks. When markets turn or become volatile, these strategies activate first.", labels: ["Adaptive Risk Control", "Hedge/Protection", "Profit Taking", "Perpetual Overlay"], },
    { id: 3, img: i4, btnLabel: "Get Early Access", btnUrl: "/", mainTItle: "Meta Engine & Control Logic", label: "Meta Engine & Control Logic", desc: "These modules execute no trades. They control the overall process: identify regimes, analyze events, filter strategies and determine which modules are active or paused.", labels: ["Strategy Mix (AI Meta Engine)", "Regime Understanding", "Event & Sentiment Radar"], },
];

const AUTO_SWITCH_INTERVAL = 10000; // 10 seconds

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

// hook
const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return isDesktop;
};

const Strategies: React.FC = () => {


    const isDesktop: boolean = useIsDesktop();

    const [activeTab, setActiveTab] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const hoverRef = useRef<boolean>(false);

    // Switch tab with loading indicator
    const switchTab = (nextIndex: number): void => {
        setLoading(true);

        setTimeout(() => {
            setActiveTab(nextIndex);
            setLoading(false);
        }, 500);
    };

    // Auto-switch ON DESKTOP ONLY
    useEffect(() => {
        if (!isDesktop) return;

        const startAutoSwitch = () => {
            intervalRef.current = setInterval(() => {
                if (!hoverRef.current) {
                    const next = (activeTab + 1) % TABS.length;
                    switchTab(next);
                }
            }, AUTO_SWITCH_INTERVAL);
        };

        startAutoSwitch();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [activeTab, isDesktop]);
    return (
        <>
            <div className="space-y-12 lg:space-y-16">
                <div className="container">
                    <div className="flex max-lg:flex-col gap-6 xl:gap-5">
                        <div className="flex-none lg:flex-1">
                            <div className="space-y-8">
                                <div>
                                    <Badge label="Our 15 Strategies" />
                                </div>
                                <div>
                                    <h2 className='max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800'>How the 15 strategies strategy modules shape your portfolio.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-none lg:flex-1">
                            <div className="h-full flex items-end">
                                <div className="text-lg font-normal leading-[144%] color-gray700">
                                    <p>Each module has a clearly defined purpose. The Engine combines them to balance core stability, growth and risk control, tailored to your risk profile.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* tabbing */}
                <div className="container max-lg:px-0 space-y-14">
                    <div className="flex flex-col gap-2">
                        {/* TAB HEADER */}
                        {isDesktop && (
                            <div
                                className="tab-group bg-gray200 rounded-3xl p-1 mb-14"
                                onMouseEnter={() => (hoverRef.current = true)}
                                onMouseLeave={() => (hoverRef.current = false)}
                                style={{
                                    display: "flex",
                                }}
                            >
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => switchTab(tab.id)}
                                        className={`tab-button relative cursor-pointer flex-1 block ${activeTab === tab.id ? "bg-white" : ""} py-4 xl:py-5 px-4 xl:px-6 rounded-20 text-lg lg:text-base xl:text-lg leading-4.5 font-semibold text-gray800`}
                                    >
                                        {tab.label}

                                        {/* Loading Indicator (only on active tab during load) */}
                                        {loading && activeTab === tab.id && (
                                            <span
                                                className="loader"
                                                style={{
                                                    marginLeft: "8px",
                                                    width: "20px",
                                                    height: "20px",
                                                    border: "2px solid #999",
                                                    borderTop: "2px solid transparent",
                                                    borderRadius: "50%",
                                                    display: "inline-block",
                                                    animation: "spin 0.6s linear infinite",
                                                }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* CONTENT AREA */}
                        {isDesktop ? (
                            // DESKTOP → show active tab only
                            <DesktopView tab={TABS[activeTab]} />
                        ) : (
                            // MOBILE/TABLET → show ALL items stacked
                            <div className="flex flex-col gap-2">
                                {TABS.map((tab, i) => (
                                    <DesktopView key={i} tab={tab} />
                                ))}
                            </div>
                        )}

                        <div className="py-10 lg:py-16 px-4 md:p-8 xxl:py-10 xxl:px-14 bg-white rounded-3xl flex max-lg:flex-col lg:items-center gap-10 lg:gap-5">
                            <div className="flex-1">
                                <div className="mb-3">
                                    <h2 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">All strategies at a glance</h2>
                                </div>
                                <div className="text-lg font-normal leading-[144%] color-gray700">
                                    <p>The complete overview of all strategies can be found directly in your Vault environment.</p>
                                </div>
                            </div>

                            <div className="flex-none">
                                <Button label="Join Private Beta" href="#" variant="secondarydefault" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* SPINNER KEYFRAMES */}
            <style>
                {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
            </style>

        </>
    )
}


const DesktopView = ({ tab }: { tab: StrategyTab }) => (
    <div className="flex flex-col gap-2">
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
);

export default Strategies
