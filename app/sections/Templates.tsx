import React from 'react'

export interface VaultItem {
    id: number;
    numberColor: string;
    gradient: string;
    labelColor: string;
    label: string;
    title: string;
    description: string;
    tags: string[];
    tagBg: string;
    tagText: string;
    tagBorder: string;
}

export const vaultItems: VaultItem[] = [
    {
        id: 1,
        numberColor: "text-gray300",
        gradient: "from-gray900 via-gray500 to-gray200",
        labelColor: "text-gray900",
        label: "Core Allocation",
        title: "Digital Asset Core Allocation Vault",
        description:
            "For asset managers and family offices who want a strategic BTC, ETH and USDC sleeve as part of a diversified portfolio. Balanced core exposure with a stable USDC foundation and rules-based rebalancing.",
        tags: ["Core", "Balanced", "BTC / ETH / USDC"],
        tagBg: "bg-gray900/5",
        tagText: "text-gray900/80",
        tagBorder: "border-gray900/20",

    },
    {
        id: 2,
        numberColor: "text-blue-500/20",
        gradient: "from-blue-500 via-blue-500/50 to-blue-500/20",
        labelColor: "text-blue-500",
        label: "Conservative",
        title: "Capital Preservation Plus Vault",
        description:
            "For conservative mandates where capital preservation comes first. Most of the portfolio sits in USDC core and lending, with a controlled, rules-based build-up of BTC and ETH over time.",
        tags: ["Capital preservation", "USDC heavy", "Gradual BTC / ETH"],
        tagBg: "bg-blue-500/5",
        tagText: "text-blue-500/80",
        tagBorder: "border-blue-500/20",
    },
    {
        id: 3,
        numberColor: "text-orange-500/20",
        gradient: "from-orange-500 via-orange-500/50 to-orange-500/20",
        labelColor: "text-orange-500",
        label: "BTC Focus",
        title: "BTC Accumulation Vault",
        description:
            "For clients who want to build a long-term BTC position without timing every entry by hand. Systematic BTC DCA, dynamic spot allocation and clear rules for profit-taking and drawdown control.",
        tags: ["BTC focus", "DCA", "Growth with risk control"],
        tagBg: "bg-orange-500/5",
        tagText: "text-orange-500/80",
        tagBorder: "border-orange-500/20",
    },
    {
        id: 4,
        numberColor: "text-purple-500/20",
        gradient: "from-purple-500 via-purple-500/50 to-purple-500/20",
        labelColor: "text-purple-500",
        label: "ETH Focus",
        title: "ETH Growth & Volatility Managed Vault",
        description:
            "For mandates that see ETH as a strategic asset but want more structure than buy-and-hold. Combines ETH spot, DCA, trend modules and profit-taking with hedging to keep volatility within defined ranges.",
        tags: ["ETH focus", "Growth", "Volatility managed"],
        tagBg: "bg-purple-500/5",
        tagText: "text-purple-500/80",
        tagBorder: "border-purple-500/20",
    },
    {
        id: 5,
        numberColor: "text-green-500/20",
        gradient: "from-green-500 via-green-500/60 to-green-500/20",
        labelColor: "text-green-500",
        label: "Stablecoin",
        title: "Stablecoin Returns Vault",
        description:
            "For mandates that want on-chain returns on USD exposure without taking directional BTC or ETH risk. Concentrates on USDC core and overcollateralized lending, with risk controls and venue limits on top.",
        tags: ["Returns", "USDC only", "Lending"],
        tagBg: "bg-green-500/5",
        tagText: "text-green-500/80",
        tagBorder: "border-green-500/20",
    },
    {
        id: 6,
        numberColor: "text-slate-500/20",
        gradient: "from-slate-500 via-slate-500/50 to-slate-500/20",
        labelColor: "text-slate-500",
        label: "Multi-Asset",
        title: "Volatility Managed Multi-Asset Vault",
        description:
            "For multi-asset managers who want a defined volatility bucket in digital assets. BTC, ETH and USDC allocations shift dynamically based on market regimes and risk signals, keeping portfolio behavior within agreed bands.",
        tags: ["Multi-asset", "Dynamic allocation", "Volatility target"],
        tagBg: "bg-slate-500/5",
        tagText: "text-slate-500/80",
        tagBorder: "border-slate-500/20",
    },
];


const Templates: React.FC = () => {
    return (
        <div className='max-xs:py-10 max-xs:pb-12 max-sm:pb-16 py-42 bg-white'>
            <div className='container'>
                <div className='space-y-16'>
                    <div className='max-sm:text-left text-center'>
                        <div className=''>
                            <h2 className="max-xs:tracking-[-1px] max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xl:text-56 font-semibold text-gray800 tracking-[-1.68px] xl:leading-16">
                                Vault Templates Professionals Can Start From
                            </h2>
                        </div>
                        <div className="mt-4 w-full max-w-200 mx-auto">
                            <p className="text-lg font-normal leading-[144%] text-gray700">
                                These examples show how asset managers, family offices and funds can translate real mandates into strategy vaults. Each template can be adjusted, extended or combined in Pro mode.
                            </p>
                        </div>
                    </div>
                    <div className='mx-auto max-w-7xl'>
                        <div className="grid md:grid-cols-2 gap-6">
                            {vaultItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative bg-gray100/5 rounded-xl border border-gray200 overflow-hidden hover:bg-white hover:shadow-xl transition-all"
                                >
                                    {/* Left Vertical Gradient Bar */}
                                    <div
                                        className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.gradient}`}
                                    />

                                    <div className="max-sm:p-6 p-8 pl-10">
                                        {/* Header Row */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className={`text-4xl font-light leading-none ${item.numberColor}`}>
                                                {String(item.id).padStart(2, "0")}
                                            </span>

                                            <div className="flex-1">
                                                <p
                                                    className={`text-[10px] font-medium uppercase tracking-[0.2em] mb-1 ${item.labelColor}`}
                                                >
                                                    {item.label}
                                                </p>
                                                <h4 className="text-lg text-gray900 font-semibold leading-tight">{item.title}</h4>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-base text-gray700 leading-relaxed mb-5">
                                            {item.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className={`
                                                        px-2.5 py-1 tracking-wide border text-xs font-medium rounded-full
                                                        ${item.tagBg}
                                                        ${item.tagText}
                                                        ${item.tagBorder}
                                                    `}
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

export default Templates
