"use client";
import React from 'react'
import { AlertTriangle, ChevronsLeftRight, CircleCheckBig, Coins, FileText, Gauge, KeyRound, MapPin, UserRound, Wifi } from "lucide-react"; 
import Link from 'next/link';
import {
    Droplets,
    TrendingDown,
    Database,
    Scale,
    ShieldOff,
    Target,
    LineChart,
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
        { id: "market-price-risk", label: "1. Market and Price Risk", icon: TrendingDown },
        { id: "liquidity-risk", label: "2. Liquidity Risk", icon: Droplets },
        { id: "leverage-liquidation-risk", label: "3. Leverage and Liquidation Risk", icon: Gauge },

        { id: "smart-contract-protocol-risk", label: "4. Smart Contract and Protocol Risk", icon: ChevronsLeftRight },
        { id: "oracle-market-data-risk", label: "5. Oracle and Market Data Risk", icon: Database },
        { id: "network-infrastructure-risk", label: "6. Network and Infrastructure Risk", icon: Wifi },

        { id: "no-custody-private-keys", label: "7. No Custody – No Recovery – Private Keys", icon: KeyRound },
        { id: "regulatory-legal-risk", label: "8. Regulatory and Legal Risk", icon: Scale },
        { id: "no-deposit-insurance", label: "9. No Deposit Insurance / No Guarantees", icon: ShieldOff },

        { id: "sole-responsibility", label: "10. Sole Responsibility and Independent Evaluation", icon: UserRound },
        { id: "user-acknowledgment", label: "11. User Acknowledgment", icon: CircleCheckBig },
        { id: "strategy-selection", label: "12. Strategy Selection and User Responsibility", icon: Target },

        { id: "model-limitations", label: "13. Model Limitations and No Predictive Capability", icon: LineChart },
        { id: "no-expected-performance", label: "14. No Expected Performance or Economic Advantage", icon: Coins },
        { id: "governing-law", label: "15. Governing Law and Jurisdiction", icon: MapPin },
    ],
};

const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
                                            onClick={() => handleScroll(item.id)}
                                            className="flex items-center gap-3 py-2 px-3 hover:bg-white cursor-pointer rounded-lg hover:shadow-sm transition-all duration-300"
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
                            <div id="market-price-risk" className="scroll-mt-28">

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
                            <div id="liquidity-risk" className="scroll-mt-28">

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
                            <div id="leverage-liquidation-risk" className="scroll-mt-28">

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
                            <div id="smart-contract-protocol-risk" className="scroll-mt-28">

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

                            {/* --------- SECTION 5 --------- */}
                            <div id="oracle-market-data-risk" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        5
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Oracle and Market Data Risk
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>The Platform may rely on internal and/or external price oracles. Oracles may provide:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Stale data</li>
                                                <li>Delayed data</li>
                                                <li>Manipulated data</li>
                                                <li>Inconsistent or incorrect data</li>
                                            </ul>
                                            <p>Faulty oracle data may result in:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Inappropriate execution behavior</li>
                                                <li>Adverse rebalancings</li>
                                                <li>Erroneous liquidations</li>
                                            </ul>
                                            <p><strong>The user bears the full consequences of such deviations.</strong></p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 6 --------- */}
                            <div id="network-infrastructure-risk" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        6
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Network and Infrastructure Risk
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Blockchains and on-chain protocols may be affected by:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Network congestion</li>
                                                <li>Node desynchronization</li>
                                                <li>Chain forks</li>
                                                <li>Validator instability</li>
                                                <li>Denial-of-service attacks</li>
                                            </ul>
                                            <p>Network instability may delay or prevent execution.
                                            </p>
                                            <div className="bg-gray100 border border-gray300 rounded-xl p-4">
                                                <p>Any resulting losses are borne solely by the user.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 7 --------- */}
                            <div id="no-custody-private-keys" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        7
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        No Custody – No Recovery – Private Keys
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-gray700 text-base leading-relaxed">
                                                <div className='space-y-3 text-gray900'>
                                                    <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key-round h-6 w-6"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></div><div><h3 className="font-semibold text-gray900 mb-2">Non Custodial Architecture</h3><p className="text-sm">Tradoo is non custodial. Tradoo has no access to users&apos; private keys, seed phrases, hardware wallets, or recovery procedures.</p></div></div>
                                                </div>
                                            </div>
                                            <p>If private keys are:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Lost</li>
                                                <li>Stolen</li>
                                                <li>Destroyed</li>
                                                <li>Disclosed</li>
                                                <li>Compromised</li>
                                            </ul>
                                            <p><strong>Access to assets is permanently and irreversibly lost. Recovery or compensation is not possible.</strong>
                                            </p>
                                            <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray900 text-base leading-relaxed">
                                                <p>The user is solely responsible for the secure management of their private keys.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 8 --------- */}
                            <div id="regulatory-legal-risk" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        8
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Regulatory and Legal Risk
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Digital assets are subject to evolving regulatory frameworks in various jurisdictions.
                                            </p><p>Future regulatory changes may:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Restrict access to protocols or assets</li>
                                                <li>Impose reporting or disclosure obligations</li>
                                                <li>Have tax implications</li>
                                                <li>Prohibit or restrict us</li>
                                            </ul>
                                            <div className="bg-gray100 border border-gray300 rounded-xl p-4 text-gray900">
                                                <p><strong>The user is responsible for compliance with all applicable laws..</strong></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 9 --------- */}
                            <div id="no-deposit-insurance" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        9
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        No Deposit Insurance / No Guarantees
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Digital assets held or deployed using the Platform are not protected by:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>Banking deposit insurance schemes</li>
                                                <li>Government guarantee funds</li>
                                                <li>Investor compensation systems</li>
                                            </ul>
                                            <div className='bg-gray100 border border-gray300 rounded-xl p-6 md:p-8'>
                                                <div className='space-y-3 text-gray900 leading-relaxed'>
                                                    <p>Tradoo provides no guarantees regarding:</p>
                                                    <ul className="space-y-3"><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:text-red-400 text-xs shrink-0 mt-1">✗</span><span>Capital preservation</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:text-red-400 text-xs shrink-0 mt-1">✗</span><span>Profitability</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:text-red-400 text-xs shrink-0 mt-1">✗</span><span>Minimum or target returns</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:text-red-400 text-xs shrink-0 mt-1">✗</span><span>System availability</span></li></ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 10 --------- */}
                            <div id="sole-responsibility" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        10
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Sole Responsibility and Independent Evaluation
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>The user confirms and accepts that:
                                            </p>
                                            <ul className='list-disc pl-7'>
                                                <li>All strategic and risk-related decisions are made independently</li>
                                                <li>The Platform does not assess suitability, appropriateness, or financial capacity</li>
                                                <li>The user must conduct their own research (due diligence)</li>
                                                <li>The user should seek independent legal, financial, tax, or investment advice where necessary</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 11 --------- */}
                            <div id="user-acknowledgment" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        11
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        User Acknowledgment
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <div className='space-y-3 bg-gray100 border border-gray300 text-gray900 rounded-xl p-6 md:p-8'>
                                                <p>By accessing or using the Platform, the user expressly confirms:</p>
                                                <ul className="space-y-3"><li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 text-primary shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-sm">Understanding the described risks</span></li><li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 text-primary shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-sm">Accepting the possibility of total loss</span></li><li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 text-primary shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-sm">Using the Platform voluntarily</span></li><li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 text-primary shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-sm">Bearing full responsibility for all outcomes</span></li></ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 12 --------- */}
                            <div id="strategy-selection" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        12
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Strategy Selection and User Responsibility
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>The user is solely responsible for selecting the strategy family, risk level, leverage parameters, and asset exposure.</p>
                                            <p>Any automated or algorithmic execution occurs exclusively within the parameters defined and activated by the user.</p>
                                            <div className='space-y-3 bg-gray100 border border-gray300 text-gray900 rounded-xl p-4'>
                                                <p><strong>Tradoo does not override, modify, or correct strategic decisions.</strong> The user remains fully responsible for the economic outcome of all trades and allocations.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 13 --------- */}
                            <div id="model-limitations" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        13
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Model Limitations and No Predictive Capability
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>The Platform&apos;s scoring, optimization, and execution algorithms are not predictive systems.</p>
                                            <ul className='list-disc pl-7'>
                                                <li>They do not predict market movements and do not guarantee favorable execution outcomes</li>
                                                <li>Algorithmic processing may produce results that deviate from user expectations or historical patterns</li>
                                            </ul>
                                            <div className='space-y-3 bg-gray100 border border-gray300 text-gray900 rounded-xl p-4'>
                                                <p>Such deviations do not constitute system malfunction or investment advice.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 14 --------- */}
                            <div id="no-expected-performance" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        14
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        No Expected Performance or Economic Advantage
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Use of the Platform and Private Beta access for certain investors does not imply any expectation of:</p>
                                            <ul className='list-disc pl-7'>
                                                <li>Financial gain</li>
                                                <li>Economic advantagee</li>
                                                <li>Preferential executio</li>
                                                <li>Improved outcomess</li>
                                            </ul>
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-gray700 text-base leading-relaxed">
                                                <div className='space-y-3 text-gray900'>
                                                    <p><strong>Nothing on the Platform is to be construed as a guarantee of profitability, risk reduction, or performance improvement.</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 15 --------- */}
                            <div id="governing-law" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-red-500 text-white font-semibold">
                                        15
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Governing Law and Jurisdiction
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <div className='bg-gray100 border border-gray300 rounded-xl p-6 md:p-8'>
                                                <div className='space-y-3 text-gray700 leading-relaxed'>
                                                    <h3 className="text-lg font-semibold text-gray900 mb-2">
                                                        15.1 Swiss Law
                                                    </h3>
                                                    <p>This Risk Disclosure Statement, the Terms of Use, and all contractual or pre-contractual legal relationships between the user and Tradoo AG are governed exclusively by substantive Swiss law, excluding conflict of laws provisions of Swiss private international law (including the PILA) and international conventions, including the UN Convention on Contracts for the International Sale of Goods (CISG).</p>
                                                </div>
                                            </div>
                                            <div className='bg-gray100 border border-gray300 rounded-xl p-6 md:p-8'>
                                                <div className='space-y-3 text-gray700 leading-relaxed'>
                                                    <h3 className="text-lg font-medium text-gray900 mb-2">
                                                        15.2 Closed user group
                                                    </h3>
                                                    <p>The Platform is made available in Phase 1 exclusively to a closed user group (as defined in the Terms of Use and Private Beta Terms). Therefore, consumer protection provisions applicable to retail customers in Switzerland or abroad do not apply.</p>
                                                </div>
                                            </div>
                                            <div className='bg-gray100 border border-gray300 rounded-xl p-6 md:p-8'>
                                                <div className='space-y-3 text-gray700 leading-relaxed'>
                                                    <h3 className="text-lg font-semibold text-gray900 mb-2">
                                                        15.3 Jurisdiction
                                                    </h3>
                                                    <p>Exclusive Place of Jurisdiction</p>
                                                    <p className='text-gray900'><strong>Zug, Switzerland</strong></p>
                                                    <p>Tradoo AG reserves the right to seek interim or precautionary measures before any competent court.</p>
                                                </div>
                                            </div>
                                            <div className="bg-gray100 border border-gray300 rounded-xl p-6">
                                                <div className="space-y-3 text-gray700 leading-relaxed">
                                                    {/* Header */}
                                                    <div className="flex items-start gap-3 mb-6">
                                                        <div className="mt-1 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                                            <FileText className="w-6 h-6 text-gray900" />
                                                        </div>
                                                        <div>
                                                            <h2 className="text-xl font-semibold text-gray900">
                                                                Supplementary Documents
                                                            </h2>
                                                            <p className="text-gray700 text-base">
                                                                Additional legal documentation for our services
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


                                                        <Link
                                                            href="/privatebetaterms"
                                                            className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                                        >
                                                            <h3 className="text-gray-900 font-semibold text-base">Private Beta Terms</h3>
                                                            <p className="text-gray-500 text-sm mt-1">Phase 1 Framework</p>
                                                        </Link>



                                                        <Link
                                                            href="/terms-of-use"
                                                            className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                                        >
                                                            <h3 className="text-gray900 font-semibold text-base">Terms-of-use</h3>
                                                            <p className="text-gray700 text-sm mt-1">General Terms</p>
                                                        </Link>


                                                        <Link
                                                            href="/privacy-policy"
                                                            className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                                        >
                                                            <h3 className="text-gray900 font-semibold text-base">Privacy Notice</h3>
                                                            <p className="text-gray700 text-sm mt-1">Data protection</p>
                                                        </Link>


                                                        <Link
                                                            href="/cookie-policy"
                                                            className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                                        >
                                                            <h3 className="text-gray900 font-semibold text-base">Cookie Policy</h3>
                                                            <p className="text-gray700 text-sm mt-1">Cookie Information</p>
                                                        </Link>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="w-full border-t border-gray300 pt-6">
                                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6 text-gray700">

                                    {/* Left Section */}
                                    <div className="space-y-1 text-sm">
                                        <h4 className="font-semibold">Tradoo AG</h4>
                                        <p>Baarerstrasse 8 • CH-6300 Zug • Switzerland</p>
                                        <p>
                                            UID: CHE-216.713.957 •{" "}
                                            <Link
                                                href="#"
                                                className="text-gray900 underline"
                                            >
                                                Commercial Register
                                            </Link>
                                        </p>
                                        <p>
                                            Email:{" "}
                                            <Link href="mailto:legal@tradoo.io" className="text-gray900 underline">
                                                legal@tradoo.io
                                            </Link>
                                        </p>
                                    </div>

                                    {/* Right Section */}
                                    <div className="text-sm text-left md:text-right space-y-1">
                                        <p>Risk Disclosure Statement</p>
                                        <p>Version 1.0 · November 15, 2025</p>
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
