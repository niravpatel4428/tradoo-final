"use client";
import React from 'react'
import { Shield } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FileText } from "lucide-react";
import Link from 'next/link';

const privateBetaData = {
    badge: "LEGAL DOCUMENT · PHASE 1",
    title: "Private Beta Terms",
    framework: "Phase 1 Execution Framework",
    version: "Version 1.0",
    date: "November 15, 2025",
    scope:
        "Scope: Phase 1 (Execution-Only, Non Custodial, No Asset Management)",
};

const privateBetaSection2 = {
    text: `These Phase 1 Terms (Execution Framework, "Private Beta Terms") govern the scope of services, execution mechanics, user responsibilities, fees, and usage restrictions during Phase 1 (Private Beta). They apply in addition to the Terms of Use and Risk Disclosure Statement of Tradao AG.`,

    orderTitle: "Order of precedence in case of conflict:",

    items: [
        { id: 1, label: "Private Beta Terms (Phase 1)" },
        { id: 2, label: "Terms of Use" },
        { id: 3, label: "Risk Disclosure Statement" },
    ],
};

const tableOfContents = {
    title: "Table of Contents",
    subtitle: "Navigate to specific sections of these terms",

    items: [
        "Preamble",
        "Contracting Parties",
        "Definitions",
        "Scope and Usage Restrictions",
        "Wallet and Asset Control",
        "Strategy Selection",
        "Fee Structure (Phase 1)",
        "Risk Disclosure",
        "No Advisory Services",
        "Transition to Phase 2",
        "User Obligations",
        "Liability Limitations",
        "Amendment of Terms",
        "Governing Law",
        "Contact and Notices",
        "Final Provisions",
    ],
};




const page = () => {


    return (
        <main className='bg-white'>
            <div className='py-25'>
                <div className='bg-gray900 py-25'>
                    <div className='container'>
                        <div>
                            <div className="">
                                <div className="text-center max-w-3xl mx-auto">

                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                                            <Shield className="w-7 h-7 text-gray400" />
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <p className="text-gray400 uppercase text-sm mb-3">
                                        {privateBetaData.badge}
                                    </p>

                                    {/* Title */}
                                    <h1 className="text-white text-5xl font-semibold mb-6">
                                        {privateBetaData.title}
                                    </h1>

                                    {/* Framework, version, date */}
                                    <p className="text-gray400 text-lg">
                                        {privateBetaData.framework} · {privateBetaData.version} ·{" "}
                                        {privateBetaData.date}
                                    </p>

                                    {/* Scope */}
                                    <p className="text-gray400 text-base mt-4">
                                        {privateBetaData.scope}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray100 py-10 px-4 border-b border-b-solid border-b-gray300">
                    <div className="max-w-224 mx-auto">

                        {/* Icon + Description */}
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-primary shrink-0 mt-0.5"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>

                            <p className="text-gray700 text-[15px] leading-relaxed">
                                {privateBetaSection2.text}
                            </p>
                        </div>

                        {/* Title */}
                        <p className="mt-6 font-semibold text-gray900 text-[16px]">
                            {privateBetaSection2.orderTitle}
                        </p>

                        {/* Buttons Row */}
                        <div className="flex flex-wrap gap-3 mt-4">

                            {privateBetaSection2.items.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md border text-[14px] 
                ${index === 0
                                            ? "bg-gray900 text-white border-gray900"
                                            : "bg-white text-gray900 border-gray900"
                                        }
              `}
                                >
                                    <span>{item.id}. {item.label}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className='space-y-20 pt-20'>
                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            {/* Header */}
                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                    <FileText className="w-6 h-6 text-gray700" />
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {tableOfContents.items.map((label, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 py-2"
                                    >
                                        <span className="px-3 py-1 rounded-md bg-gray200 text-gray800 text-sm font-semibold">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray800 text-sm">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto md:px-0">


                            <div className="bg-gray100 border border-gray200 rounded-2xl shadow-sm p-6 md:p-8">


                                <h2 className="text-xl md:text-2xl font-semibold text-gray900 flex items-center gap-3">
                                    <span className="min-w-10 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lh-5 w-5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                    </span>
                                    Preliminary Remarks: Scope / Phase 1 (Execution-Only)
                                </h2>


                                <p className="text-gray700 text-base pl-13">
                                    Scope and regulatory context
                                </p>


                                <div className="mt-6 space-y-5 text-gray700 leading-relaxed text-base">
                                    <p>
                                        These terms apply exclusively to Phase 1 (“Execution-Only”). In Phase 1, Tradoo
                                        provides a non custodial technical execution infrastructure. No asset management,
                                        investment advice, or strategic asset allocation is performed by Tradoo.
                                    </p>

                                    <p>
                                        Access is limited exclusively to a closed user group (shareholders, Pre-Seed/Seed
                                        investors, contractually bound team members, and expressly authorized pilot users).
                                        Any public offering is made exclusively within the prospectus exemption pursuant to
                                        Art. 36(1)(b) FIDLEG, as the maximum total volume of capital raising does not exceed
                                        CHF 8 million. No retail use or marketing to undefined groups of persons occurs.
                                    </p>

                                    <p>
                                        The Platform performs only parametric execution adjustments within the strategy and
                                        risk framework defined by the user. All strategy and risk decisions remain entirely
                                        with the user.
                                    </p>


                                    <div className="bg-white/80 border border-gray-200 rounded-lg p-4 text-gray700 text-base leading-relaxed">
                                        <strong>Regulatory status:</strong> Under current legal understanding, Phase 1 does
                                        not require authorization. Tradoo continuously monitors regulatory developments.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto md:px-0">


                            <div className="bg-gray100 border border-gray200 rounded-2xl shadow-sm p-6 md:p-8">


                                <h2 className="text-xl md:text-2xl font-semibold text-gray900 flex items-center gap-3">
                                    <span className="min-w-10 w-10 h-10 flex justify-center items-center bg-[#fef3c7] rounded-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </span>
                                    Outlook / Phase 2 (Regulated Asset Management)
                                </h2>


                                <p className="text-gray700 text-base pl-13">
                                    Future development path
                                </p>


                                <div className="mt-6 space-y-5 text-gray700 leading-relaxed text-base">
                                    <p>
                                        Tradoo plans a later Phase 2 with licensed asset management services.
                                    </p>

                                    <p>
                                        Activation will occur only:
                                    </p>

                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                            <span>After obtaining the required regulatory authorization (e.g., FINMA / FMA)</span>
                                        </li>

                                        <li className="flex items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                            <span>After prior notification to the user</span>
                                        </li>

                                        <li className="flex items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                            <span>Only with separate, explicit opt-in by the user</span>
                                        </li>
                                    </ul>


                                    <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray700 text-base leading-relaxed">
                                        <strong>Important:</strong> Phase 1 does not automatically transition to Phase 2. Licensed services apply only after separate activation.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto space-y-10">

                            {/* --------- SECTION 1 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        1
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Preamble
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    {/* Item 1 */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            1.1 Purpose and legal nature of these Private Beta Terms
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                These Private Beta Terms govern the use of the non custodial technical execution infrastructure provided by Tradoo AG, Baarerstrasse 8, CH-6300 Zug, within the scope of Phase 1 (Execution Mode). The Platform enables the user to perform parametric execution of trading strategies for digital assets previously defined by the user. Tradoo makes no strategic investment decisions, performs no asset selection, and does not alter the risk profile.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            1.2 Closed user group (Private Beta / Early Access)
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Access is restricted to a closed user group (shareholders, Pre-Seed/Seed investors, contractually bound team members, and expressly authorized beta testers). No use by the general public occurs. Any public offering is made exclusively within the prospectus exemption pursuant to Art. 36(1)(b) FIDLEG, as the maximum total volume of capital raising does not exceed CHF 8 million.
                                            </p>
                                            <p>
                                                The user undertakes to treat access credentials and internal information confidentially and not to disclose them to third parties.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            1.3 No investment advice / No individual recommendation
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Tradoo does not provide investment advice, suitability or appropriateness assessments, or individual recommendations for the acquisition or disposal of assets. All strategic decisions remain entirely with the user.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 4 */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            1.4 Distinction from licensed activities (Phase 1)
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                In Phase 1, no discretionary asset management pursuant to Art. 17 FinIA, no portfolio monitoring with intervention rights, no free asset allocation or rebalancing, and no custody or control of private keys occurs. Tradoo provides exclusively an Execution-Only infrastructure that performs tactical parameterization within the strategy framework defined by the user.
                                            </p>
                                            <p>
                                                Under current legal understanding, Phase 1 does not require authorization. Tradoo continuously monitors regulatory developments. Any future extension to licensed functions will occur only after obtaining the required authorization and with separate user consent (opt-in).
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 2 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        2
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Contracting Parties and Company Information
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    {/* Item 2.1 CARD */}
                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <h3 className="text-lg font-semibold text-gray900 mb-4">
                                            2.1 Operator
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            {/* Left Info */}
                                            <div className="space-y-2 font-medium">
                                                <p style={{ color: "#171717" }} className="text-base">Tradoo AG</p>
                                                <p style={{ color: "#545B6A" }} className="text-base">Baarerstrasse 8</p>
                                                <p style={{ color: "#545B6A" }} className="text-base">CH-6300 Zug</p>
                                                <p style={{ color: "#545B6A" }} className="text-base">Switzerland</p>
                                            </div>

                                            {/* Right Info */}
                                            <div className="space-y-2 text-gray700">
                                                <p className="space-y-3">
                                                    <span className="text-gray700 block text-sm">Company Identification (UID)</span>
                                                    <span className="font-medium text-gray900">CHE-216.713.957</span>
                                                </p>
                                                <p className="space-y-3">
                                                    <span className="text-gray700 block text-sm">Commercial Register of Canton Zug</span>
                                                    <span className="font-medium text-gray900"></span>
                                                </p>

                                                <Link
                                                    href="https://zg.chregister.ch/cr-portal/auszug/auszug.xhtml?uid=CHE-216.713.957"
                                                    target="_blank"
                                                    className="text-gray900 text-sm underline"
                                                >
                                                    View Register Entry ↗
                                                </Link>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Item 2.2 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            2.2 Contact point
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Email: <Link href="mailto:legal@tradoo.io" className="text-gray900">legal@tradoo.io</Link>
                                            </p>
                                            <p>
                                                Communications may be transmitted electronically. Written form is required only where expressly mandated by law or contract.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 2.3 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            2.3 User group and consumer protection
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Services in Phase 1 are directed exclusively to the closed user group defined in Section 1.2. No contractual relationship with consumers within the meaning of Swiss or foreign consumer protection law is established. Consumer protection provisions do not apply as the Platform is not offered to the general public.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 3 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        3
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Definitions
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    {/* Item 3.1 CARD */}
                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className='flex gap-3'>
                                            <span className='mt-0.5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5 shrink-0"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                                            </span>
                                            <h3 className="text-lg font-semibold text-gray900 mb-4">
                                                3.1 &quot;Wallet&quot;
                                            </h3>
                                        </div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                A Wallet is a user-controlled digital wallet. The private keys to this wallet are held exclusively by the user. Tradoo has no access to these keys at any time and cannot initiate transfers or withdrawals of assets for technical, organizational, and legal reasons.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 3.2 card */}
                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className='flex gap-3'>
                                            <span className='mt-0.5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5 shrink-0"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                            </span>
                                            <h3 className="text-lg font-semibold text-gray900 mb-4">
                                                3.2 &quot;Smart Contract Vault&quot; (&quot;Vault&quot;)
                                            </h3>
                                        </div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                The Smart Contract Vault is a user-activated contract deployed on a public blockchain through which the user provides digital assets for execution of their selected strategy. Beneficial ownership of the deposited assets remains with the user at all times.
                                            </p>
                                            <p>Deposits into the Vault occur exclusively through a user-authorized signature. Internal vault operations are technically limited to the strategy framework and risk parameters defined by the user and occur deterministically according to the execution logic embedded in the smart contracts. A change to the strategy framework, a free selection of assets, or a rebalancing between asset classes does not occur through the Vault and always requires a prior user decision.</p>
                                            <p>Withdrawals or transfers from the Vault can only be triggered by a valid user signature. Tradoo has neither private keys of the user nor any technical, contractual, or economic disposal capability over assets held in the Vault. No rehypothecation, pledging, commingling, or other reuse of user assets by Tradoo occurs.</p>
                                            <p>If the Vault is subject to technical adjustment or update, this occurs exclusively within a transparent and time-delayed governance mechanism (e.g., Timelock or comparable procedures) that does not open any independent disposal over the user&quot;s assets.</p>
                                        </div>
                                    </div>

                                    {/* Item 3.3 card */}
                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className='flex gap-3'>
                                            <span className='mt-0.5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5 shrink-0"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                                            </span>
                                            <h3 className="text-lg font-semibold text-gray900 mb-4">
                                                3.3 &quot;Non custodial architecture&quot;
                                            </h3>
                                        </div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                The Platform is designed so that Tradoo never obtains actual or legal control over assets held in the smart contracts. Tradoo does not store or control user private keys and cannot initiate or release deposits or withdrawals. There is no ability to initiate, prevent, accelerate, or delay transactions.
                                            </p>
                                            <p>Assets held in the Vault are neither custodied by Tradoo nor held in Tradoo accounts or omnibus containers. No commingling, pledging, lending, reuse, or rehypothecation of user assets occurs.</p>
                                            <p>All access, transfer, and disposal rights remain exclusively with the user. Tradoo possesses no technical or contractual mechanisms that could enable disposal of assets without a valid user signature.</p>
                                        </div>
                                    </div>

                                    {/* Item 3.4 card */}
                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className='flex gap-3'>
                                            <span className='mt-0.5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5 shrink-0"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                                            </span>
                                            <h3 className="text-lg font-semibold text-gray900 mb-4">
                                                3.4 &quot;Risk parameters&quot;
                                            </h3>
                                        </div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Risk parameters designate the overarching risk framework defined by the user. The user selects one of the following risk profiles:</p>
                                            <div className="w-full mx-auto md:px-0 grid grid-cols-12 gap-4">

                                                {/* Row 1 */}
                                                <div className="col-span-12 md:col-span-6 bg-gray200 rounded-xl p-5">
                                                    <h3 className="text-gray900 font-semibold text-base">
                                                        Ultra Stable (delta-neutral)
                                                    </h3>
                                                    <p className="text-gray700 text-sm mt-1">No leverage (1x)</p>
                                                </div>
                                                <div className="col-span-12 md:col-span-6 bg-gray200 rounded-xl p-5">
                                                    <h3 className="text-gray900 font-semibold text-base">Conservative</h3>
                                                    <p className="text-gray700 text-sm mt-1">No leverage (1x)</p>
                                                </div>

                                                {/* Row 2 */}
                                                <div className="col-span-12 md:col-span-6 bg-gray200 rounded-xl p-5">
                                                    <h3 className="text-gray900 font-semibold text-base">Moderate</h3>
                                                    <p className="text-gray700 text-sm mt-1">Leverage up to max. 2x</p>
                                                </div>
                                                <div className="col-span-12 md:col-span-6 bg-gray200 rounded-xl p-5">
                                                    <h3 className="text-gray900 font-semibold text-base">
                                                        Macro Adaptive (macro-sentiment)
                                                    </h3>
                                                    <p className="text-gray700 text-sm mt-1">Leverage up to max. 2x</p>
                                                </div>

                                                {/* Row 3 */}
                                                <div className="col-span-12 md:col-span-6 bg-gray200 rounded-xl p-5">
                                                    <h3 className="text-gray900 font-semibold text-base">Opportunity</h3>
                                                    <p className="text-gray700 text-sm mt-1">Leverage up to max. 3x</p>
                                                </div>
                                                <div className="col-span-12 md:col-span-6 bg-gray200 rounded-xl p-5">
                                                    <h3 className="text-gray900 font-semibold text-base">Risk Prone</h3>
                                                    <p className="text-gray700 text-sm mt-1">Leverage up to max. 5x</p>
                                                </div>

                                                {/* Full-width Row */}
                                                <div className="col-span-12 bg-gray300 rounded-xl p-5">
                                                    <h3 className="text-gray900 font-semibold text-base">
                                                        Tradoo AI (Multi-Strategy)
                                                    </h3>
                                                    <p className="text-gray700 text-sm mt-1">
                                                        Dynamic (Portfolio Leverage ≤ 1.3x, Position Leverage ≤ 5x)
                                                    </p>
                                                </div>
                                            </div>
                                            <p>
                                                The risk profile is set exclusively by the user and can only be changed by the user. Tradoo does not adjust the risk profile.
                                            </p>
                                            <p>For the six standard profiles (Ultra Stable to Risk Prone), execution occurs within fixed allocation targets and static leverage caps. The seventh profile, Tradoo AI, uses a multi-strategy ensemble that dynamically adjusts weighting between the six validated strategy approaches to market regimes. Tradoo AI remains strictly within defined risk limits (portfolio leverage max. 1.3x, position leverage max. 5x). Allocation decisions are made according to rule-based, transparent models – without discretionary scope.</p>
                                            <p>Within the selected risk profile, execution occurs exclusively in the form of parametric fine-tuning. This includes in particular adjustment of execution intensity, rebalancing frequency, and position size within maximum values previously defined by the user. Exceeding the maximum values selected by the user is technically excluded.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 4 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        4
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Scope and Usage Restrictions
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    {/* Item 4.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            4.1 Subject of use in Phase 1 (Execution Mode)
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                In Phase 1, Tradoo provides a non custodial, rule-based execution infrastructure enabling the user to perform algorithmically defined trade executions in their own name and for their own account. Tradoo does not provide asset management, investment advice, strategic allocation decisions, or portfolio monitoring with intervention rights in Phase 1.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 4.2 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            4.2 Permitted user groups (Closed User Group / Private Beta)
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Access to the Platform in Phase 1 is restricted exclusively to the following user groups:
                                            </p>
                                        </div>
                                        <ul className="space-y-3 mt-2">
                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                <span>Shareholders of Tradoo AG</span>
                                            </li>

                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                <span>Pre-Seed and Seed investors</span>
                                            </li>

                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                <span>Contractually bound employees and officers</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                <span>Expressly authorized pilot users / beta testers under confidentiality agreements</span>
                                            </li>
                                        </ul>
                                        <div className="space-y-3 text-gray700 leading-relaxed mt-2">
                                            <p>The provision of the Platform in Phase 1 occurs exclusively within this closed user group. Any public offering is made exclusively within the prospectus exemption pursuant to Art. 36(1)(b) FIDLEG, as the maximum total volume of capital raising does not exceed CHF 8 million.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 5 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        5
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Wallet and Asset Control (Non Custody)
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    {/* Item 5.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            5.1 Exclusive control by the user
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                All digital assets deposited by the user into the Smart Contract Vault for strategy execution remain at all times in the ownership and sole control of the user. The user retains complete and exclusive control over the associated private keys. Tradoo has no access to private keys or other means by which assets could be moved, released, or transferred at any time.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 5.4 DEFAULT */}
                                    <div className='space-y-3 bg-[#f0fdf4] p-6 rounded-xl border border-solid border-green-200 shadow-sm'>
                                        <h3 className="text-lg font-semibold text-gray900">
                                            5.4 No Custody – No Transfer – No Rehypothecation
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Tradoo does not custody user assets, does not hold client funds or tokens, does not maintain omnibus accounts or accounts in its own name, does not pledge, lend, or rehypothecate user assets.
                                            </p>
                                            <p>Tradoo does not act as a custodian, depositary, intermediary, trustee, or broker in any regulatory or civil law sense.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 6 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        6
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Strategy Selection and Parametric Optimization
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    {/* Item 6.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            6.1 Strategy selection by the user
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                The user independently and at their own responsibility selects the strategy family (e.g., dynamic grid strategy, long-short hedge, market-neutral execution), the risk level, and other fundamental framework parameters that determine the permitted orientation of trade execution. The fundamental strategic decision including risk capacity lies exclusively with the user. Tradoo has no substantive influence on these decisions.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 6.2 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            6.2 Parametric optimization (tactical execution within the framework)
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                The Platform performs exclusively tactical fine-tuning within the strategy family and risk level selected by the user. This includes in particular: adaptive structuring and adjustment of grid/range levels, setting of hedge and hedging intensities within permissible limits, control of rebalancing frequencies and trigger mechanisms, and variable position sizes within maximum parameters defined by the user.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 7 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        7
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Fee Structure (Phase 1)
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    {/* Item 7.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            7.1 Principle
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Usage-dependent fees apply for use of the Platform. These fees relate exclusively to the provision of the technical execution and parametric infrastructure (Execution Layer, optimization logic, monitoring). The fees do not constitute compensation for asset management, investment advice, or strategic allocation decisions.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 7.1a DEFAULT */}
                                    <div className='space-y-3 bg-[#f0fdf4] p-6 rounded-xl border border-solid border-green-200 shadow-sm'>
                                        <h3 className="text-lg font-semibold text-gray900">
                                            7.1a Fee waiver during the closed pilot phase
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>During the closed Private Beta (Phase 1), both the management fee (1.5% p.a.) and the performance fee (15% high-watermark) are fully waived. Participants in the pilot phase use the Platform free of charge. This arrangement applies exclusively to the closed participant group (shareholders, Pre-Seed/Seed investors, team members, and authorized beta testers) and ends with the transition to Phase 2 or a corresponding notification by Tradoo..</p>
                                        </div>
                                    </div>

                                    {/* Item 7.2 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            7.2 Management fee (1.5% p.a.)
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                The management fee is 1.5% per year and relates exclusively to the provision of technical execution and infrastructure services in Phase 1. Calculation is pro rata temporis based on the assets deposited by the user in the Smart Contract Vault.
                                            </p>
                                        </div>
                                    </div>


                                    <div className='space-y-3 bg-gray100 border border-gray300 p-4 rounded-xl border-solid shadow-sm'>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p><strong>Applicable:</strong> The fee applies exclusively to actually realized gains (no fee on paper gains or interim fluctuations). Losses from prior periods must be fully recovered before a performance fee can be charged again (loss recapture principle).</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 8 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        8
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Risk Disclosure
                                    </h2>
                                </div>

                                <div className="space-y-8">



                                    <div className='space-y-3 bg-[#fef2f2] p-6 mt-8 rounded-xl border border-solid border-red-200 shadow-sm'>
                                        <div className='flex gap-3'>
                                            <span className='mt-0.5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-red-500 mt-0.5 shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                                            </span>
                                            <h3 className="text-lg font-semibold text-gray900">
                                                Important risk notice
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Item 8.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            8.1 Principle of self-responsibility
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                The user acts exclusively in their own name, for their own account, and at their own risk. Use of the Platform may result in significant financial losses, including total loss of assets deposited in the Smart Contract Vault.
                                            </p>
                                            <p>Tradoo makes no representations or guarantees regarding price or market developments, the effectiveness of individual execution logics, the achievability of specific results or returns, or the availability or uninterrupted operation of systems.</p>
                                        </div>
                                    </div>

                                    {/* Item 8.2 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            8.2 Market and price volatility
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Digital assets are subject to sometimes significant price fluctuations. Rapid or unexpected market movements can materially affect execution of the selected strategy. The user bears the risk of all market and price changes entirely themselves.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 8.3 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            8.3 Derivative and leverage risks
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>To the extent selected strategies use derivative instruments or leverage mechanisms, there is risk of disproportionate losses, rapid liquidations (e.g., through protocol or margin mechanisms), and automatic position closures. Such events may occur without warning and lead to total loss of collateral deposited in the Vault.</p>
                                        </div>
                                    </div>

                                    {/* Item 8.4 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            8.4 Smart contract and protocol risks
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Execution occurs through smart contracts and third-party decentralized protocols. These may be affected by implementation or logic errors, security vulnerabilities, network congestion or outages, changes through protocol governance, or external attacks or manipulations. Tradoo has no influence over these systems and assumes no liability for them.</p>
                                        </div>
                                    </div>

                                    {/* Item 8.6 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            8.6 No capital guarantee / No minimum return
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>There is no guarantee of capital preservation or achievement of any particular return. Past results or simulated strategy performance do not allow conclusions about future results.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 9 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        9
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        No Advisory / No Discretionary Asset Management in Phase 1
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    {/* Item 9.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            9.1 No investment advice
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Tradoo does not provide investment advice within the meaning of Art. 3 lit. c FinSA or comparable foreign regulations. In particular, there is no personal or individual recommendation, assessment of suitability or appropriateness, evaluation of risk capacity, or recommendation regarding strategy or target value specifications.</p>
                                        </div>
                                    </div>

                                    {/* Item 9.2 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            9.2 No asset management within the meaning of Art. 17 FinIA / FMA guidelines
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Tradoo does not provide asset management in the regulatory sense in Phase 1. In particular, the following do not occur:
                                            </p>
                                        </div>
                                        <ul className="space-y-3 mt-2">
                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-red-500 mt-1 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                                                <span>Autonomous selection or exchange of assets</span>
                                            </li>

                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-red-500 mt-1 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                                                <span>Strategic rebalancing between asset classes</span>
                                            </li>

                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-red-500 mt-1 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                                                <span>Ongoing risk monitoring with intervention rights</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-red-500 mt-1 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                                                <span>Adjustment of risk level without express user decision</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-red-500 mt-1 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                                                <span>Ongoing portfolio optimization with discretionary scope</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 10 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        10
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Transition to Phase 2 (Regulated Asset Management)
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    {/* Item 10.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            10.1 Required regulatory authorization
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                An extension of functions provided in Phase 1 to discretionary asset management, including autonomous allocation decisions or strategic portfolio adjustments, is permissible only after obtaining corresponding authorization from the competent supervisory authority (e.g., FMA Liechtenstein or FINMA Switzerland). Until such authorization is obtained, use remains limited to Execution Mode.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 10.4 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            10.4 Consent requirement (opt-in)
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Participation in Phase 2 requires separate, express, and documented user consent, including:
                                            </p>
                                        </div>
                                        <ul className="space-y-3 mt-2">
                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                <span>Conclusion of a new separate contract</span>
                                            </li>

                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                <span>Acceptance of regulatory framework conditions</span>
                                            </li>

                                            <li className="flex items-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500 mt-1 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                <span>Identity and origin verification pursuant to anti-money laundering legislation (KYC/AML)</span>
                                            </li>
                                        </ul>
                                        <div className="space-y-3 text-gray700 leading-relaxed mt-2">
                                            <p>
                                                Without this consent, the user remains permanently in Phase 1 (Execution Mode).
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 11 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        11
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        User Obligations
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    {/* Item 11.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            11.1 Safeguarding of private keys
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                The user is solely responsible for secure custody of their private keys, protection against loss, theft, or unauthorized access, and appropriate backup and security measures.
                                            </p>
                                        </div>
                                        <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray700 text-base leading-relaxed mt-3">
                                            <strong>Important:</strong> Loss or compromise of private keys leads to permanent loss of access to assets held in the Wallet or Smart Contract Vault. Tradoo cannot recover private keys and has no access to them.
                                        </div>
                                    </div>


                                    {/* Item 11.2 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            11.2 Beneficial ownership and legal authorization
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                The user represents that they are the legal and beneficial owner of the deposited assets, that they do not deposit any assets of unlawful or unclear origin, and that they do not violate any legal, regulatory, or contractual obligations.
                                            </p>
                                            <p>The user bears responsibility for compliance with all applicable regulations, in particular anti-money laundering legislation (AML/CFT), sanctions and embargo provisions, and tax declaration obligations.</p>
                                        </div>
                                    </div>


                                    {/* Item 11.4 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            11.4 Confidentiality during Phase 1 (Private Beta)
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>During Phase 1, the user undertakes to treat all information about the Platform confidentially, not to disclose any content, data, screenshots, or technical details without consent, and to use the Platform exclusively for internal evaluation purposes. This confidentiality obligation continues to apply after termination of use.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 12 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        12
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Liability Limitations
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    {/* Item 12.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            12.1 Principle of self-responsibility
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                All user decisions regarding selection of strategy family, setting of risk parameters, amount of assets deployed, and activation, deactivation, or adjustment of strategy execution occur exclusively at the user&quot;s own responsibility and risk. Tradoo assumes no fiduciary position and no duty of care or protection regarding the user&quot;s investment decisions.
                                            </p>
                                        </div>
                                    </div>


                                    {/* Item 12.2 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            12.2 Exclusion of liability for market and protocol risks
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Tradoo is not liable for damages, losses, or value changes arising from or in connection with: market volatility, price movements, or liquidity shortages; liquidations or automated closures of derivative positions; smart contract vulnerabilities, implementation errors, protocol or code exploits; failures, attacks, or misconduct of decentralized protocols, oracles, or blockchain networks; or network congestion, transaction delays, or gas/fee fluctuations.</p>
                                        </div>
                                    </div>


                                    {/* Item 12.3 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            12.3 No liability for private key losses
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Since Tradoo has no access to user private keys or seed phrases, any liability for loss, forgetting, damage, disclosure, or compromise of the user&quot;s private keys is excluded.</p>
                                        </div>
                                    </div>

                                    {/* Item 12.6 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            12.6 Liability only for intent and gross negligence
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Tradoo is liable exclusively for intent and gross negligence. Any further liability, in particular for slight negligence, is excluded to the extent legally permissible.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 13 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        13
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Amendment of Terms
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Tradoo reserves the right to amend these Private Beta Terms with effect for the future, to the extent required for technical, regulatory, or operational reasons. Amendments will be communicated to the user electronically in advance. Continued use after expiration of a reasonable review period (at least 10 days) constitutes acceptance of the amended version. The user may withdraw their assets from the Smart Contract Vault at any time without cost.
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 14 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        14
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Governing Law and Jurisdiction
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    <div className="space-y-3 bg-gray100 border border-gray300 p-6 rounded-xl border-solid shadow-sm">
                                        <div className='grid grid-cols-12 gap-5'>
                                            <div className='col-span-12 md:col-span-6'>
                                                <h3 className="text-lg font-semibold text-gray900 mb-2">
                                                    14.1 Applicable law
                                                </h3>
                                                <div className="space-y-3 text-gray700 leading-relaxed">
                                                    <p>These Private Beta Terms are governed exclusively by Swiss law, excluding conflict of laws provisions and the UN Convention on Contracts for the International Sale of Goods (CISG).</p>
                                                </div>
                                            </div>
                                            <div className='col-span-12 md:col-span-6'>
                                                <h3 className="text-lg font-semibold text-gray900 mb-2">
                                                    14.2 Jurisdiction
                                                </h3>
                                                <div className="space-y-3 text-gray700 leading-relaxed">
                                                    <p>TThe exclusive place of jurisdiction for all disputes arising from or in connection with these Private Beta Terms is Zug, Switzerland.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                </div>
                            </div>

                            {/* --------- SECTION 15 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        15
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Contact and Notices
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>All notices in connection with these Private Beta Terms may be transmitted electronically. For legally relevant notices, the email address legal@tradoo.io is deemed delivered, unless written form is expressly required by law or contract.</p>
                                        </div>
                                    </div>





                                </div>
                            </div>

                            {/* --------- SECTION 16 --------- */}
                            <div>

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        16
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Final Provisions
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    {/* Item 16.1 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            16.1 Severability clause
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Should any provision of these Private Beta Terms be or become invalid, unlawful, or unenforceable, the remaining provisions shall remain unaffected. The invalid, unlawful, or unenforceable provision shall be replaced by a valid, lawful, and enforceable provision that most closely reflects the economic purpose of the original provision.</p>
                                        </div>
                                    </div>

                                    {/* Item 16.2 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            16.2 No assignment
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>The user may not assign any rights or obligations under these Private Beta Terms without Tradoo&quot;s prior written consent. Tradoo is entitled to assign these Private Beta Terms in whole or in part to affiliated companies or successors.</p>
                                        </div>
                                    </div>

                                    {/* Item 16.3 DEFAULT */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray900 mb-2">
                                            16.3 Entire agreement
                                        </h3>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>These Private Beta Terms, together with the supplementary documents (Terms of Use, Risk Disclosure Statement), constitute the entire agreement between the user and Tradoo. No oral side agreements exist.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 bg-gray100 border border-gray200/5 p-6 rounded-xl border-solid shadow-sm">
                                        <div className="flex items-start gap-4 mb-6"><div className="mt-1 min-w-10 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-6 h-6 text-gray700" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div><div><h2 className="text-xl font-semibold text-gray900">Supplementary Documents</h2><p className="text-gray700 text-base">These Private Beta Terms apply in addition to the documents below. In case of conflict, the precedence is: Private Beta Terms → Terms of Use → Risk Disclosure Statement</p></div></div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                                            {/* Terms of Use */}
                                            <Link
                                                href="/"
                                                className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                            >
                                                <h3 className="text-gray-900 font-semibold text-lg">Terms of Use</h3>
                                                <p className="text-gray-500 text-sm mt-1">General Terms</p>
                                            </Link>


                                            {/* Risk Disclosure */}
                                            <Link
                                                href="/"
                                                className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                            >
                                                <h3 className="text-gray900 font-semibold text-lg">Risk Disclosure</h3>
                                                <p className="text-gray700 text-sm mt-1">Risk Information</p>
                                            </Link>

                                            {/* Privacy Notice */}
                                            <Link
                                                href="/"
                                                className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                            >
                                                <h3 className="text-gray900 font-semibold text-lg">Privacy Notice</h3>
                                                <p className="text-gray700 text-sm mt-1">Data Protection</p>
                                            </Link>

                                            {/* Cookie Policy */}
                                            <Link
                                                href="/"
                                                className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                            >
                                                <h3 className="text-gray900 font-semibold text-lg">Cookie Policy</h3>
                                                <p className="text-gray700 text-sm mt-1">Cookie Information</p>
                                            </Link>

                                            {/* Imprint */}
                                            <Link
                                                href="/"
                                                className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                            >
                                                <h3 className="text-gray900 font-semibold text-lg">Imprint</h3>
                                                <p className="text-gray700 text-sm mt-1">Legal Notice</p>
                                            </Link>

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
                                        <p>Document Type: Private Beta Terms</p>
                                        <p>Phase 1 Execution Framework</p>
                                        <p>Version 1.0 • November 15, 2025</p>
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
