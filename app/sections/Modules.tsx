import React, { ReactElement } from 'react'

// modulesData.ts
import { Box, TrendingUp, Shield, Brain } from "lucide-react";

export interface ModuleItem {
    id: number;
    gradient: string;
    shadow: string;
    iconWrapper: string;
    titleColor: string;
    tagBg: string;
    tagText: string;
    tagBorder: string;
    titleTop: string;
    title: string;
    description: string;
    tags: string[];
    icon: ReactElement;
    cardBorder: string;
    iconborder: string;
}

export const modulesData: ModuleItem[] = [
    {
        id: 1,
        gradient: "from-blue-500/10",
        shadow: "bg-blue-500/20",
        iconWrapper:
            "bg-gradient-to-br from-blue-500/20 to-blue-500/5 text-blue-500 border-blue-500/20",
        titleColor: "text-blue-500",
        tagBg: "bg-blue-500/12",
        tagText: "text-blue-600",
        tagBorder: "border-blue-500/20",
        titleTop: "Foundation",
        title: "Core & stability",
        description:
            "These modules form the foundation of a portfolio. They provide liquidity, calm and discipline even in turbulent markets. The core aligns directly with your target allocation for BTC, ETH and USDC.",
        tags: ["USDC Core", "Lending (USDC)", "Rebalancing", "BTC / ETH Spot Base"],
        icon: <Box className="h-8 w-8" />,
        cardBorder: "border-blue-500/20",
        iconborder: "border-blue-500",
    },
    {
        id: 2,
        gradient: "from-green-500/10",
        shadow: "bg-green-500/20",
        iconWrapper:
            "bg-gradient-to-br from-green-500/20 to-green-500/5 text-green-500 border-green-500/20",
        titleColor: "text-green-500",
        tagBg: "bg-green-500/12",
        tagText: "text-green-600",
        tagBorder: "border-green-500/20",
        titleTop: "Accumulation",
        title: "Growth & building",
        description:
            "These strategies use market phases to systematically build BTC and ETH exposure or generate additional returns. The goal is controlled growth without unnecessary risk.",
        tags: [
            "DCA (BTC / ETH)",
            "Spot BTC / ETH (dynamic)",
            "Trend Control",
            "Range LP",
        ],
        icon: <TrendingUp className="h-8 w-8" />,
        cardBorder: "border-green-500/20",
        iconborder: "border-green-500",
    },
    {
        id: 3,
        gradient: "from-orange-500/10",
        shadow: "bg-orange-500/20",
        iconWrapper:
            "bg-gradient-to-br from-orange-500/20 to-orange-500/5 text-orange-500 border-orange-500/20",
        titleColor: "text-orange-500",
        tagBg: "bg-orange-500/12",
        tagText: "text-orange-600",
        tagBorder: "border-orange-500/20",
        titleTop: "Protection",
        title: "Risk control & hedging",
        description:
            "These modules protect the portfolio from excess moves, unexpected shifts and technical risks. When markets turn or volatility spikes, they are the first to react.",
        tags: [
            "Adaptive Risk Control",
            "Hedge / Protection",
            "Profit Taking",
            "Perpetual Overlay",
        ],
        icon: <Shield className="h-8 w-8" />,
        cardBorder: "border-orange-500/20",
        iconborder: "border-orange-500",
    },
    {
        id: 4,
        gradient: "from-purple-500/10",
        shadow: "bg-purple-500/20",
        iconWrapper:
            "bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-500 border-purple-500/20",
        titleColor: "text-purple-500",
        tagBg: "bg-purple-500/12",
        tagText: "text-purple-600",
        tagBorder: "border-purple-500/20",
        titleTop: "Intelligence",
        title: "Meta engine & control logic",
        description:
            "These modules do not execute trades. They control the process: identify regimes, analyze events, filter strategies and decide which modules are active or paused.",
        tags: [
            "Strategy Mix (AI Meta Engine)",
            "Regime Understanding",
            "Event & Sentiment Radar",
        ],
        icon: <Brain className="h-8 w-8" />,
        cardBorder: "border-purple-500/20",
        iconborder: "border-purple-500",
    },
];


const Modules: React.FC = () => {
    return (
        <div className='max-xs:py-10 max-xs:pb-12 max-sm:pb-12 pb-30 bg-white'>
            <div className='container'>
                <div className='space-y-16'>
                    <div className='max-sm:text-left text-center'>
                        <div className=''>
                            <h2 className="max-xs:tracking-[-1px] max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xl:text-56 font-semibold text-gray800 tracking-[-1.68px] xl:leading-16">
                                The Modules Behind Each Vault
                            </h2>
                        </div>
                        <div className="mt-4 w-full max-w-200 mx-auto">
                            <p className="text-lg font-normal leading-[144%] text-gray700">
                                Each module has a clearly defined purpose. The engine combines them to balance core stability, growth and risk control, tailored to your risk profile or configured directly by you in Pro mode.
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto max-w-7xl'>
                        <div className="relative grid md:grid-cols-2 gap-6">
                            {modulesData.map((item) => (
                                <div key={item.id} className="group relative h-full">
                                    {/* Hover Gradient Overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    ></div>

                                    {/* Card */}
                                    <div className={`relative h-full bg-background backdrop-blur-sm border shadow-sm max-sm:rounded-xl rounded-3xl max-sm:p-6 p-8 transition-all duration-300 ${item.cardBorder}`}>
                                        <div className="flex items-start gap-5 mb-5">
                                            <div className="relative">
                                                <div className={`absolute inset-0 ${item.shadow} rounded-2xl blur-xl`}></div>

                                                <div
                                                    className={`relative flex h-16 w-16 border items-center justify-center rounded-2xl ${item.iconborder} ${item.iconWrapper}`}
                                                >
                                                    {item.icon}
                                                </div>
                                            </div>

                                            <div>
                                                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${item.titleColor}`}>
                                                    {item.titleTop}
                                                </p>
                                                <h3 className="text-xl font-semibold text-gray900">{item.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-base text-gray700 leading-relaxed mb-5">
                                            {item.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-3 py-1.5 text-xs tracking-wider font-medium rounded-lg ${item.tagBg} ${item.tagText} border ${item.tagBorder}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
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

export default Modules
