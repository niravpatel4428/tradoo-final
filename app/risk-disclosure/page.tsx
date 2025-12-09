import React from 'react'
import { AlertTriangle, BarChart3, CheckCircle2, ChevronsLeftRight, CircleCheckBig, Coins, FileText, Gauge, KeyRound, MapPin, UserRound, Wifi } from "lucide-react";
import Link from 'next/link';
import {
    Waves,
    Droplets,
    TrendingDown,
    Code2,
    Database,
    Network,
    Key,
    Scale,
    ShieldOff,
    UserCheck,
    Target,
    BarChart2,
    LineChart,
    BadgePercent,
    Gavel,
} from "lucide-react";

const privateRiskData = {
    badge: "Important Legal Document",
    title: "Risk Disclosure Statement",
    version: "Version 1.0",
    datetitle: "Effective Date:",
    date: " November 15, 2025",
};

const tableOfContents = {
    title: "Table of Contents",
    subtitle: "Navigate to specific risk categories",

    items: [
        { label: "1. Market and Price Risk", icon: TrendingDown },
        { label: "2. Liquidity Risk", icon: Droplets },
        { label: "3. Leverage and Liquidation Risk", icon: Gauge },

        { label: "4. Smart Contract and Protocol Risk", icon: ChevronsLeftRight },
        { label: "5. Oracle and Market Data Risk", icon: Database },
        { label: "6. Network and Infrastructure Risk", icon: Wifi },

        { label: "7. No Custody – No Recovery – Private Keys", icon: KeyRound },
        { label: "8. Regulatory and Legal Risk", icon: Scale },
        { label: "9. No Deposit Insurance / No Guarantees", icon: ShieldOff },

        { label: "10. Sole Responsibility and Independent Evaluation", icon: UserRound },
        { label: "11. User Acknowledgment", icon: CircleCheckBig },
        { label: "12. Strategy Selection and User Responsibility", icon: Target },

        { label: "13. Model Limitations and No Predictive Capability", icon: LineChart },
        { label: "14. No Expected Performance or Economic Advantage", icon: Coins },
        { label: "15. Governing Law and Jurisdiction", icon: MapPin },
    ],
};

const page = () => {
    return (
        <main className='bg-white'>
            <div className='py-25'>
                <div className='bg-gradient-to-b from-red-950 to-slate-900 py-25'>
                    <div className='container'>
                        <div>
                            <div className="">
                                <div className="text-center max-w-3xl mx-auto">

                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                                            <AlertTriangle className="w-7 h-7 text-red-400" />
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <p className="text-red-300 uppercase text-sm mb-3 tracking-wider">
                                        {privateRiskData.badge}
                                    </p>

                                    {/* Title */}
                                    <h1 className="text-white text-5xl font-semibold mb-6">
                                        {privateRiskData.title}
                                    </h1>

                                    {/* Framework, version, date */}
                                    <p className="text-gray400 text-lg">
                                        {privateRiskData.version} · {privateRiskData.datetitle}
                                        {privateRiskData.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-10 px-4 bg-red-950 border-t border-red-800">
                    <div className="max-w-224 mx-auto">
                        <div className='flex gap-3'>
                            <span><AlertTriangle className="w-7 h-7 text-red-400" /></span>
                            <div className='space-y-3'>
                                <h4 className='font-semibold text-red-300'>MANDATORY READING</h4>
                                <p className='text-base text-red-100'>Users are required to read this document carefully before using the Platform. The use of digital asset strategies, smart contract-based execution systems, and algorithmic parametric optimization involves significant financial risks. Users act entirely at their own discretion, responsibility, and risk.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray100 py-10 px-4 border-b border-b-solid border-b-gray300">
                    <div className="max-w-224 mx-auto">
                        <div className='space-y-3 text-gray700 leading-relaxed'>
                            <p>This Risk Disclosure Statement applies to the use of the Tradoo Platform in Phase 1 (Private Beta) and forms an integral part of (i) the Tradoo Terms of Use and (ii) the Phase 1 Private Beta Terms (Execution-Only Framework).</p>
                            <p>In the event of any inconsistency between this Risk Disclosure Statement and the Terms of Use or the Phase 1 Private Beta Terms, the Private Beta Terms shall prevail in relation to the scope of services, architecture, execution mechanics and user responsibility; the Terms of Use shall apply in all remaining respects.</p>
                            <p><strong>Tradoo does not provide investment advice, asset management, portfolio allocation services, or fiduciary duties.</strong> The user remains fully and exclusively responsible for all strategic and economic decisions.</p>
                            <div className="flex flex-wrap gap-3 mt-4"><Link href="/terms-of-use" className="inline-flex items-center text-sm text-gray800 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E2330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link2 h-4 w-4 mr-1"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>Terms of Use</Link><Link href="/privatebetaterms" className="inline-flex items-center text-sm text-gray800 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E2330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link2 h-4 w-4 mr-1"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>Private Beta Terms</Link></div>
                        </div>
                    </div>
                </div>
                <div className='space-y-20 pt-20'>
                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            {/* Header */}
                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 min-w-10 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                    <FileText className="w-6 h-6 text-gray900" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray900">
                                        {tableOfContents.title}
                                    </h2>
                                    <p className="text-gray700 text-base">
                                        {tableOfContents.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {tableOfContents.items.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 py-2"
                                        >
                                            <div className="min-w-9 w-9 h-9 flex justify-center items-center bg-red-100 rounded-md">
                                                <Icon className="w-5 h-5 text-red-600" />
                                            </div>

                                            <span className="text-gray800 text-sm">
                                                {item.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto space-y-10">

                            {/* --------- SECTION 1 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        1
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Market and Price Risk
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Digital assets (including cryptocurrencies and derivative instruments) may exhibit extreme and rapid price volatility.
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Prices may move independently of market expectations and without warning</li>
                                                <li>A complete loss of value (total loss) is possible</li>
                                            </ul>
                                            <p>The user bears all risks associated with market movements, including:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Sudden price declines or increases</li>
                                                <li>Flash crashes</li>
                                                <li>Illiquid market phases</li>
                                                <li>Volatility spikes</li>
                                            </ul>
                                            <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray700 text-base leading-relaxed">
                                                <div className='flex gap-3'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-amber-600 mt-0.5 shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                                                    <div className='space-y-3 text-gray900'>
                                                        <span>No performance guarantee</span>
                                                        <p>Past performance is not an indicator of future results.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 2 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        2
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Liquidity Risk
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Markets for digital assets and on-chain protocols may be partially or completely illiquid. This may result in:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Delayed execution</li>
                                                <li>Execution at prices worse than expected (slippage)</li>
                                                <li>Inability to close, modify, or exit positions</li>
                                            </ul>
                                            <p>The user acknowledges that liquidity conditions may deteriorate rapidly and without notice.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 3 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        3
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Leverage and Liquidation Risk
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>To the extent strategies employ leverage (within the user&apos;s selected risk profile), the user acknowledges:
                                            </p>
                                            <div className='bg-gray100 border border-gray300 rounded-xl p-6 md:p-8'>
                                                <div className='space-y-3 text-gray700 leading-relaxed'>
                                                    <ul className="space-y-3"><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:text-red-400 text-xs shrink-0 mt-1">!</span><span>Leverage amplifies both gains and losses</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:text-red-400 text-xs shrink-0 mt-1">!</span><span>Even small price movements may trigger forced liquidations</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:text-red-400 text-xs shrink-0 mt-1">!</span><span>Liquidations may occur automatically and without warning</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:text-red-400 text-xs shrink-0 mt-1">!</span><span>Liquidation may result in total loss of deposited capital</span></li></ul>
                                                </div>
                                            </div>
                                            <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray700 text-base leading-relaxed">
                                                <div className='flex gap-3'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-amber-600 mt-0.5 shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                                                    <div className='space-y-3 text-gray900'>
                                                        <span>User responsibility</span>
                                                        <p>The user is solely responsible for selecting and monitoring leverage parameters.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 4 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        4
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Smart Contract and Protocol Risk
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>The Platform relies on smart contracts, decentralized protocols, and blockchain networks. Such systems may contain:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Programming errors or logic errors</li>
                                                <li>Undiscovered security vulnerabilities</li>
                                                <li>Unforeseen interactions between contract components</li>
                                                <li>Governance upgrades that alter behavior</li>
                                            </ul>
                                            <p>Smart contract errors may lead to:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Loss of assets</li>
                                                <li>Permanent locking of positions</li>
                                                <li>Unintended execution behavior</li>
                                            </ul>
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-gray700 text-base leading-relaxed">
                                                <div className='space-y-3 text-gray900'>
                                                    <p><strong>Tradoo has no ability to prevent, reverse, resolve, or compensate for such events.</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
