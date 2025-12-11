import React from 'react'
import {
    Building2,
    FileText,
    ChartColumn,
    ChartPie,
    Layers,
    Settings,
    Users,
    Lock,
    Shield,
    ArrowRight,
    Box,
    ArrowDown
} from "lucide-react";
import { CircleCheck } from "lucide-react";


const ToolBox: React.FC = () => {

    // LEFT: Existing Systems Cards
    const leftCards = [
        { icon: Building2, title: "Existing systems", subtitle: "ERP, Treasury, Portfolio" },
        { icon: FileText, title: "Existing systems", subtitle: "ERP, Treasury, Portfolio" },
        { icon: ChartColumn, title: "Existing systems", subtitle: "ERP, Treasury, Portfolio" },
    ];

    // CENTER: Toolbox Grid Items
    const toolboxItems = [
        {
            icon: ChartPie,
            title: "Asset Mix & Risk Envelope",
            description: "Define BTC / ETH / USDC ranges, volatility and drawdown bands, time horizon",
        },
        {
            icon: Layers,
            title: "Strategy Modules",
            description: "Select allowed core, growth and hedging modules for each mandate",
        },
        {
            icon: Settings,
            title: "Rules & Automation",
            description: "Configure DCA, trend filters, hedges, profit taking and venue limits",
        },
        {
            icon: Users,
            title: "Integrations & Client Mapping",
            description: "Connect via API, map vaults to mandates and clients, export data",
        },
    ];

    // RIGHT: Vault Icons
    const vaultIcons = [
        { icon: Lock },
        { icon: Shield },
        { icon: Layers },
    ];

    const topIcons = [
        { icon: Building2 },
        { icon: FileText },
    ];

    // ---------------- TOOLBOX FEATURES LIST ----------------
    const toolboxFeatures = [
        {
            icon: ChartPie,
            title: "Asset Mix & Risk Envelope",
            desc: "Define BTC / ETH / USDC ranges, volatility and drawdown bands, time horizon"
        },
        {
            icon: Layers,
            title: "Strategy Modules",
            desc: "Select allowed core, growth and hedging modules for each mandate"
        },
        {
            icon: Settings,
            title: "Rules & Automation",
            desc: "Configure DCA, trend filters, hedges, profit taking and venue limits"
        },
        {
            icon: Users,
            title: "Integrations & Client Mapping",
            desc: "Connect via API, map vaults to mandates and clients, export data"
        },
    ];

    // ---------------- BOTTOM ICON BLOCK ----------------
    const bottomIcons = [
        { icon: Lock },
        { icon: Shield },
    ];

    interface HighlightItem {
        title: string;
        description: string;
    }

    const highlights: HighlightItem[] = [
        {
            title: "Start from mandates, not from protocols.",
            description:
                "You define objectives and risk envelope – the toolbox translates them into modules, not the other way round.",
        },
        {
            title: "Full control without building your own infrastructure.",
            description:
                "Use our modules, vault engine and APIs instead of stitching together wallets, protocols and dashboards yourself.",
        },
        {
            title: "Non custodial by default.",
            description:
                "Client assets sit in dedicated smart vaults; Tradoo operates the rules within your agreed limits.",
        },
        {
            title: "Ready to connect to your stack.",
            description:
                "Use APIs to feed vault data into your existing reporting, treasury or portfolio systems.",
        },
    ];


    return (
        <div className='max-xs:py-10 max-xs:pb-12 max-sm:pb-12 py-42'>
            <div className='container'>
                <div>
                    <div className='max-sm:text-left text-center'>
                        <div className=''>
                            <h2 className="max-xs:tracking-[-1px] max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xl:text-56 font-semibold text-gray800 tracking-[-1.68px] xl:leading-16">
                                Inside the Tradoo strategy toolbox.
                            </h2>
                        </div>
                        <div className="mt-4 w-full max-w-180 mx-auto">
                            <p className="text-lg font-normal leading-[144%] text-gray700">
                                Asset mix, modules, rules and integrations – the toolbox sits between your existing systems and on-chain infrastructure and turns mandates into non custodial strategy vaults.
                            </p>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className="hidden lg:block">
                            <div className="relative max-w-6xl mx-auto">
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative grid grid-cols-[240px_1fr_240px] gap-12 items-center">

                                    {/* LEFT SIDE – Existing Systems */}
                                    <div className="relative">
                                        <div className="bg-white backdrop-blur-sm border border-gray200 rounded-2xl p-6 shadow-lg">

                                            {/* Icons */}
                                            <div className="flex justify-center gap-2 mb-4">
                                                {leftCards.map((item, idx) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="h-11 w-11 rounded-xl bg-gray200 flex items-center justify-center shadow-sm"
                                                        >
                                                            <Icon className="h-5 w-5 text-gray800" />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <p className="text-sm font-semibold text-center mb-1 text-gray800">Existing systems</p>
                                            <p className="text-sm text-gray700 text-center">
                                                ERP, Treasury, Portfolio
                                            </p>
                                        </div>

                                        {/* API Arrow */}
                                        <div className="absolute top-1/2 -right-12 -translate-y-1/2 flex items-center">
                                            <div className="w-8 h-[2px] bg-gradient-to-r from-border to-gray700"></div>
                                            <div className="px-2 py-1 bg-gray200 backdrop-blur-sm rounded text-[10px] font-semibold uppercase tracking-widest text-gray700 border border-gray200">
                                                API
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-gray700 ml-1" />
                                        </div>
                                    </div>

                                    {/* CENTER – Toolbox */}
                                    <div className="relative">
                                        <div className="relative bg-gradient-to-b from-[#FFF]/100 via-[#FFF]/50 to-[#E6E8EB] border border-gray400 rounded-3xl p-6 xl:p-10 shadow-2xl backdrop-blur-sm">

                                            {/* Decorative Corners */}
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray200 to-transparent rounded-tr-3xl"></div>
                                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray200 to-transparent rounded-bl-3xl"></div>

                                            {/* Header */}
                                            <div className="text-center mb-8">
                                                <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-[#001A4D]/20 via-[#001A4D]/10 to-transparent text-gray900 mb-5 shadow-lg border border-gray400">
                                                    <Box className="h-10 w-10" />
                                                </div>

                                                <h3 className="text-2xl font-semibold mb-3 text-gray800">Tradoo strategy toolbox</h3>

                                                <div className="flex items-center justify-center gap-3 text-sm text-gray700">
                                                    <span className="flex items-center gap-1.5">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-gray700"></span>
                                                        Non custodial
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-gray700"></span>
                                                        BTC / ETH / USDC
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-gray700"></span>
                                                        Module based
                                                    </span>
                                                </div>
                                            </div>

                                            {/* 4 Dynamic Cards */}
                                            <div className="relative z-50 grid grid-cols-2 gap-4">
                                                {toolboxItems.map((item, idx) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="group bg-gray100 hover:bg-white border border-gray300 rounded-xl p-5 transition-all"
                                                        >
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <div className="min-w-8 h-8 w-8 rounded-lg bg-gray200 flex items-center justify-center">
                                                                    <Icon className="h-4 w-4 text-gray800" />
                                                                </div>
                                                                <p className="text-xs font-semibold text-gray800 uppercase tracking-wider">
                                                                    {item.title}
                                                                </p>
                                                            </div>

                                                            <p className="text-sm text-gray700 leading-relaxed">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT SIDE – Vaults */}
                                    <div className="relative">
                                        <div className="absolute top-1/2 -left-12 -translate-y-1/2 flex items-center">
                                            <ArrowRight className="h-4 w-4 text-gray900 mr-1" />
                                            <div className="px-2 py-1 bg-gray300 backdrop-blur-sm rounded text-[10px] font-semibold uppercase tracking-widest text-gray900 border border-gray400">
                                                Vaults
                                            </div>
                                            <div className="w-8 h-[2px] bg-gradient-to-r from-gray900 to-gray300"></div>
                                        </div>

                                        <div className="bg-gradient-to-br from-gray100 to-gray700/20 border border-gray500 rounded-2xl p-6 shadow-lg">
                                            <div className="flex justify-center gap-2">
                                                {vaultIcons.map((item, idx) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="h-11 w-11 rounded-xl bg-gray400/50 flex items-center justify-center shadow-sm border border-gray500"
                                                        >
                                                            <Icon className="h-5 w-5 text-gray900" />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className='mt-5'>
                                                <p className="text-sm font-semibold text-center mb-1 text-gray800">
                                                    On-chain infrastructure</p>
                                                <p className="text-sm text-gray700 text-center">
                                                    Smart vaults & whitelisted venues
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <div className="max-w-md mx-auto space-y-8">

                                {/* ---------------- EXISTING SYSTEMS CARD ---------------- */}
                                <div className="bg-white backdrop-blur-sm border border-gray200 rounded-2xl p-6 shadow-lg">
                                    <div className="flex justify-center gap-2 mb-4">
                                        {topIcons.map(({ icon: Icon }, i) => (
                                            <div
                                                key={i}
                                                className="h-10 w-10 rounded-xl bg-gray200 flex items-center justify-center"
                                            >
                                                <Icon className="h-5 w-5 text-gray800" />
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-base font-semibold text-center text-gray800">Existing systems</p>
                                    <p className="text-sm text-gray700 text-center">ERP, Treasury, Portfolio</p>
                                </div>

                                {/* ---------------- API LABEL ---------------- */}
                                <div className="flex justify-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="px-3 py-1.5 bg-gray200 rounded-lg text-[10px] font-semibold uppercase tracking-widest border border-gray300 text-gray700">
                                            API
                                        </div>
                                        <ArrowDown className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                </div>

                                {/* ---------------- STRATEGY TOOLBOX ---------------- */}
                                <div className="relative bg-gradient-to-br from-[#FFF]/100 via-[#FFF]/50 to-[#E6E8EB] border border-gray400 rounded-3xl p-6 shadow-2xl backdrop-blur-sm">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray200 to-transparent rounded-tr-3xl" />

                                    <div className="text-center mb-6">
                                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-[#001A4D]/20 via-[#001A4D]/10 to-transparent text-gray900 mb-4 shadow-lg border border-gray400">
                                            <Box className="h-8 w-8" />
                                        </div>
                                        <h4 className="text-xl font-semibold mb-2 text-gray800">Tradoo Strategy Toolbox</h4>
                                        <p className="text-sm text-gray700">Non custodial · BTC / ETH / USDC · Module based</p>
                                    </div>

                                    {/* ----- Dynamic Feature List ----- */}
                                    <div className="grid grid-cols-1 gap-3">
                                        {toolboxFeatures.map((item, i) => (
                                            <div key={i} className="bg-gray100 hover:bg-white border border-gray300 rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="min-w-7 h-7 w-7 rounded-lg bg-gray200 flex items-center justify-center shrink-0">
                                                        <item.icon className="h-3.5 w-3.5 text-gray800" />
                                                    </div>
                                                    <p className="text-xs font-semibold text-gray800 uppercase tracking-wider">
                                                        {item.title}
                                                    </p>
                                                </div>
                                                <p className="text-xs text-gray700">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ---------------- VAULTS LABEL ---------------- */}
                                <div className="flex justify-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="px-3 py-1.5 bg-gray300 rounded-lg text-xs font-semibold uppercase tracking-widest text-gray700 border border-pgray400 backdrop-blur-sm">
                                            Vaults
                                        </div>
                                        <ArrowDown className="h-5 w-5 text-gray900" />
                                    </div>
                                </div>

                                {/* ---------------- BOTTOM ICON BLOCK ---------------- */}
                                <div className="bg-gradient-to-br from-gray100 to-gray700/20 border border-gray500 rounded-2xl p-6 shadow-lg">
                                    <div className="flex justify-center gap-2 mb-4">
                                        {bottomIcons.map(({ icon: Icon }, i) => (
                                            <div
                                                key={i}
                                                className="h-10 w-10 rounded-xl bg-gray400/50 flex items-center justify-center border border-gray500"
                                            >
                                                <Icon className="h-5 w-5 text-gray900" />
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-base font-semibold text-center text-gray800">On-chain infrastructure</p>
                                    <p className="text-sm text-gray700 text-center">Smart vaults & whitelisted venues</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white hover:shadow-xl border border-gray100 transition-all"
                                    data-testid={`highlight-${index + 1}`}
                                >
                                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-[#001A4D]/20 via-[#001A4D]/10 to-transparent flex items-center justify-center shadow-sm">
                                        <CircleCheck className="h-5 w-5 text-gray900" />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-lg text-gray900 mb-1.5">{item.title}</p>
                                        <p className="text-base text-gray700 leading-relaxed">
                                            {item.description}
                                        </p>
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

export default ToolBox
