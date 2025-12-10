"use client";
import React from 'react'
import {
    FileText,
    Building2,
    Shield,
    Scale,
    Users,
    Link2,
    Gavel,
    Coins,
    AlertTriangle,
    Lock,
    BookOpen,
    MapPin,
    Mail,
} from "lucide-react";
import NextLink from 'next/link';
import Link from 'next/link';

const privateTermData = {
    badge: "Legal Document",
    title: "Terms of Use",
    version: "Version 1.0",
    datetitle: "Effective Date:",
    date: " November 15, 2025",
};

const tableOfContents = {
    title: "Table of Contents",
    subtitle: "Navigate to specific sections of these terms",

    items: [
        { id: "relationship-documents", label: "Relationship to Other Documents", icon: Link2 },
        { id: "scope-application", label: "1. Scope of Application", icon: FileText },

        { id: "operator", label: "2. Operator", icon: Building2 },
        { id: "role-tradoo", label: "3. Role of Tradoo", icon: Shield },

        { id: "investment-advice", label: "4. No Investment Advice", icon: Scale },
        { id: "private-beta-access", label: "5. Private Beta Access", icon: Users },

        { id: "equity-participations", label: "6. Equity Participations", icon: Coins },
        { id: "third-party-protocols", label: "7. Third-Party Protocols", icon: Link2 },

        { id: "risk-notice", label: "8. Risk Notice", icon: AlertTriangle },
        { id: "liability", label: "9. Liability", icon: Gavel },

        { id: "data-protection", label: "10. Data Protection", icon: Lock },
        { id: "intellectual-property", label: "11. Intellectual Property", icon: BookOpen },

        { id: "law-jurisdiction", label: "12. Governing Law and Jurisdiction", icon: MapPin },
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
                <div className='bg-gray900 py-25'>
                    <div className='container'>
                        <div>
                            <div className="">
                                <div className="text-center max-w-3xl mx-auto">

                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                                            <Scale className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <p className="text-gray400 uppercase text-sm mb-3 tracking-wider">
                                        {privateTermData.badge}
                                    </p>

                                    {/* Title */}
                                    <h1 className="text-white text-5xl font-semibold mb-6">
                                        {privateTermData.title}
                                    </h1>

                                    {/* Framework, version, date */}
                                    <p className="text-gray400 text-lg">
                                        {privateTermData.version} . {privateTermData.datetitle}
                                        {privateTermData.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray100 py-10 px-4 border-b border-b-solid border-b-gray300">
                    <div className="max-w-224 mx-auto">
                        <div className="w-full grid grid-cols-12 gap-4">

                            {/* Operator */}
                            <div className='col-span-12 md:col-span-8'>
                                <div className="flex items-center gap-3">
                                    <Building2 className="min-w-6 w-6 h-6 text-gray900" />
                                    <div>
                                        <p className="text-sm text-gray700 mb-1">Operator</p>
                                        <p className="text-gray900 font-medium leading-relaxed">
                                            Tradoo AG · Baarerstrasse 8, CH-6300 Zug, Switzerland
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Legal Contact */}
                            <div className='col-span-12 md:col-span-4'>
                                <div className="flex items-center gap-3">
                                    <Mail className="min-w-6 w-6 h-6 text-gray900" />
                                    <div>
                                        <p className="text-sm text-gray700 mb-1">Legal Contact</p>
                                        <NextLink
                                            href="mailto:legal@tradoo.io"
                                            className="text-gray900 font-medium hover:underline"
                                        >
                                            legal@tradoo.io
                                        </NextLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='space-y-20 pt-20'>
                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            {/* Header */}
                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tableOfContents.items.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => handleScroll(item.id)}
                                            className="flex items-center gap-3 py-2 px-3 hover:bg-white cursor-pointer rounded-lg hover:shadow-sm transition-all duration-300"
                                        >
                                            <div className="w-9 h-9 flex justify-center items-center bg-gray200 rounded-md">
                                                <Icon className="w-5 h-5 text-gray800" />
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
                    <div className="w-full px-5 scroll-mt-28" id="relationship-documents">
                        <div className="max-w-224 mx-auto md:px-0">


                            <div className="bg-gray100 border border-gray200 rounded-2xl shadow-sm p-6 md:p-8">


                                <h2 className="text-xl md:text-2xl font-semibold text-gray900 flex items-center gap-3">
                                    <span className="min-w-10 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                        <Link2 className="w-6 h-6 text-gray900" />
                                    </span>
                                    Relationship to Other Documents
                                </h2>


                                <p className="text-gray700 text-base pl-13">
                                    How these terms interact with other legal documents
                                </p>


                                <div className="mt-6 space-y-5 text-gray700 leading-relaxed text-base">
                                    <p>These Terms of Use apply together with the following supplementary documents:
                                    </p>
                                </div>

                                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

                                    {/* Terms of Use */}
                                    <Link
                                        href="/"
                                        className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                    >
                                        <h3 className="text-gray-900 font-semibold text-lg">Private Beta Terms</h3>
                                        <p className="text-gray-500 text-sm mt-1">Phase 1 Execution Framework</p>
                                    </Link>


                                    {/* Risk Disclosure */}
                                    <Link
                                        href="/"
                                        className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                    >
                                        <h3 className="text-gray900 font-semibold text-lg">Risk Disclosure Statement</h3>
                                        <p className="text-gray700 text-sm mt-1">Important risk information</p>
                                    </Link>

                                    {/* Privacy Notice */}
                                    <Link
                                        href="/"
                                        className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                    >
                                        <h3 className="text-gray900 font-semibold text-lg">Privacy Notice</h3>
                                        <p className="text-gray700 text-sm mt-1">Data protection information</p>
                                    </Link>

                                    {/* Cookie Policy */}
                                    <Link
                                        href="/"
                                        className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                    >
                                        <h3 className="text-gray900 font-semibold text-lg">Cookie Policy</h3>
                                        <p className="text-gray700 text-sm mt-1">Cookie Information</p>
                                    </Link>

                                </div>

                                <div className="mt-6 space-y-5 text-gray700 leading-relaxed text-base">
                                    <p>The Private Beta Terms govern the specific scope of services, functionality, fees, and user responsibilities during Phase 1 (Private Beta / Execution-Only).
                                    </p>
                                </div>

                                <div className="mt-5 rounded-xl border border-gray-200 bg-white p-6">
                                    <h2 className="text-lg font-medium text-gray900 mb-6">
                                        Order of precedence in case of conflict:
                                    </h2>

                                    <div className="space-y-3">

                                        {/* 1 */}
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-8 min-w-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold">
                                                1
                                            </div>
                                            <span className="text-gray900">Private Beta Terms (Phase 1)</span>
                                        </div>

                                        {/* 2 */}
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-8 min-w-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white  text-sm font-semibold">
                                                2
                                            </div>
                                            <span className="text-gray900">Terms of Use (this document)</span>
                                        </div>

                                        {/* 3 */}
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-8 min-w-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white  text-sm font-semibold">
                                                3
                                            </div>
                                            <span className="text-gray900">Risk Disclosure Statement</span>
                                        </div>

                                        {/* 4 */}
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-8 min-w-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white  text-sm font-semibold">
                                                4
                                            </div>
                                            <span className="text-gray900">Privacy Notice</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto space-y-10">
                            {/* --------- SECTION 1 --------- */}
                            <div id="scope-application" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        1
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Scope of Application
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>These Terms of Use govern access to and use of the website tradoo.finance, the associated platforms, and all features and services provided during the Private Beta (hereinafter &quot;Platform&quot;)..
                                            </p>
                                            <p>They apply to:</p>
                                            <ul className='list-disc pl-7'>
                                                <li>Visitors to the website</li>
                                                <li>Users who register on the waitlist</li>
                                                <li>Registered Private Beta users</li>
                                                <li>Pre-Seed and Seed investors who have acquired shares or participation certificates (PS) of Tradoo AG</li>
                                            </ul>
                                            <div className="bg-gray100 border border-gray300 rounded-xl p-4">
                                                <p>By using the Platform, the user confirms that they have read and accepted these Terms of Use.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 2 --------- */}
                            <div id="operator" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        2
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Operator
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">

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
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --------- SECTION 3 --------- */}
                            <div id="role-tradoo" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        3
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Role of Tradoo
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                The Platform is in Phase 1 (Private Beta) and provides a non custodial execution infrastructure (&quot;Execution-Only&quot;).
                                            </p>
                                            <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                                <div className="space-y-3 text-gray700 leading-relaxed">
                                                    <p>
                                                        Tradoo does not:
                                                    </p>
                                                    <ul className="space-y-2"><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm shrink-0 mt-0.5">✗</span><span>Hold or custody any assets</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm shrink-0 mt-0.5">✗</span><span>Have control over users&apos; private keys</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm shrink-0 mt-0.5">✗</span><span>Execute transactions on behalf of the user</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm shrink-0 mt-0.5">✗</span><span>Make investment, portfolio, or risk decisions</span></li></ul>
                                                </div>
                                            </div>
                                            <p>
                                                The Platform serves exclusively for self-management and autonomous decision-making by the user.
                                            </p>
                                        </div>

                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 4 --------- */}
                            <div id="investment-advice" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        4
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        No Investment Advice / No Portfolio Management
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                                <div className="space-y-3 text-gray700 leading-relaxed">
                                                    <p>
                                                        Tradoo does not provide:
                                                    </p>
                                                    <ul className="space-y-2"><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm shrink-0 mt-0.5">✗</span><span>Investment advice</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm shrink-0 mt-0.5">✗</span><span>Asset management</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm shrink-0 mt-0.5">✗</span><span>Financial analysis</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm shrink-0 mt-0.5">✗</span><span>Personal recommendations</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm shrink-0 mt-0.5">✗</span><span>Execution of trades on behalf of the user</span></li></ul>
                                                </div>

                                            </div>
                                            <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray700 text-base leading-relaxed mt-3">
                                                <strong>Important:</strong> All investment or trading decisions are solely the responsibility of the user.
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 5 --------- */}
                            <div id="private-beta-access" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        5
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Private Beta Access
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>Access to the Private Beta is granted through:</p>
                                            <ul className='list-disc pl-7'>
                                                <li>Online registration by the user, with</li>
                                                <li>Internal review and approval by Tradoo</li>
                                            </ul>
                                            <p>Access serves exclusively for:</p>
                                            <ul className='list-disc pl-7'>
                                                <li>Evaluation and development purposes, and</li>
                                                <li>Feedback to improve the Platform</li>
                                            </ul>
                                            <div className="bg-gray100 border border-gray300 rounded-xl p-4">
                                                <div className="space-y-3 text-gray700 leading-relaxed">
                                                    <p>
                                                        Access does not establish any entitlement to scope of services, availability, or continuation.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 6 --------- */}
                            <div id="equity-participations" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        6
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Equity Participations (Shares / PS)
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>During the Seed rounds, qualified investors may acquire shares or participation certificates (PS).</p>

                                            <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray700 text-base leading-relaxed">
                                                <div className='flex gap-3'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                                                    <div className='space-y-3 text-gray900'>
                                                        <span>Important notice</span>
                                                        <p>These participations represent entrepreneurial risk. They do not include any promise of returns, performance, or repayment.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Any public offering is made exclusively within the framework of the prospectus exemption pursuant to Art. 36(1)(b) FIDLEG, as the maximum total volume of capital raised does not exceed CHF 8 million.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 7 --------- */}
                            <div id="third-party-protocols" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        7
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Third-Party Protocols and Smart Contracts
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>The Platform may provide certain interfaces to external protocols, exchanges, or smart contracts..</p>
                                            <div className="bg-gray100 border border-gray300 rounded-xl p-4">
                                                <div className="space-y-3 text-gray700 leading-relaxed">
                                                    <p>
                                                        Tradoo provides no warranty for:
                                                    </p>
                                                    <ul className="space-y-2"><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray300 text-muted-foreground text-xs shrink-0 mt-0.5">—</span><span>Availability</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray300 text-muted-foreground text-xs shrink-0 mt-0.5">—</span><span>Functionality</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray300 text-muted-foreground text-xs shrink-0 mt-0.5">—</span><span>Security</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray300 text-muted-foreground text-xs shrink-0 mt-0.5">—</span><span>Pricing</span></li><li className="flex items-start gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray300 text-muted-foreground text-xs shrink-0 mt-0.5">—</span><span>Regulatory status of third-party offerings</span></li></ul>
                                                </div>

                                            </div>
                                            <p>Users act independently and at their own responsibility.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 8 --------- */}
                            <div id="risk-notice" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        8
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Risk Notice
                                    </h2>
                                </div>

                                <div className="space-y-8">


                                    <div className="space-y-3 bg-[#fef2f2] p-6 mt-8 rounded-xl border border-solid border-red-200 shadow-sm"><div className="flex gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></div><div className='space-y-1'><h3 className="text-lg font-semibold text-gray900">Significant Risks</h3><p>Trading digital assets (e.g., cryptocurrencies) involves significant risks, including the possibility of total loss.</p><Link href="/" className="inline-flex items-center text-sm font-medium text-gray900 hover:underline">View Risk Disclosure Statement<span className="ml-1">→</span></Link></div></div></div>


                                </div>
                            </div>

                            {/* --------- SECTION 9 --------- */}
                            <div id="liability" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        9
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        User Obligations
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Tradoo is liable only for damages caused by intentional or grossly negligent conduct.
                                            </p>
                                            <p>Any further liability is excluded to the extent permitted by law.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 10 --------- */}
                            <div id="data-protection" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        10
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Data Protection
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                Tradoo is liable only for damages caused by intentional or grossly negligent conduct.
                                            </p>
                                            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray900 hover:underline">View Privacy Policy<span className="ml-1">→</span></Link>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 11 --------- */}
                            <div id="intellectual-property" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        11
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Intellectual Property
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p>
                                                All content on the Platform is protected by copyright.
                                            </p>
                                            <p>Use is only permitted within the scope of these Terms.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* --------- SECTION 12 --------- */}
                            <div id="law-jurisdiction" className="scroll-mt-28">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        12
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Governing Law and Jurisdiction
                                    </h2>
                                </div>

                                <div className="space-y-8">

                                    <div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <div className="bg-gray100 border border-gray300 rounded-xl p-6">
                                                <div className="space-y-3 text-gray700 leading-relaxed">
                                                    <div className="grid sm:grid-cols-2 gap-6"><div><p className="text-sm text-gray700 mb-1">Governing Law</p><p className="font-medium text-gray800">Swiss Law</p></div><div><p className="text-sm text-gray700 mb-1">Jurisdiction</p><p className="font-medium text-gray800">Zug, Switzerland</p></div></div>
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

                                                        {/* Terms of Use */}
                                                        <Link 
                                                            href="/"
                                                            className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                                        >
                                                            <h3 className="text-gray-900 font-semibold text-base">Private Beta Terms</h3>
                                                            <p className="text-gray-500 text-sm mt-1">Phase 1 Framework</p>
                                                        </Link>


                                                        {/* Risk Disclosure */}
                                                        <Link
                                                            href="/"
                                                            className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                                        >
                                                            <h3 className="text-gray900 font-semibold text-base">Risk Disclosure</h3>
                                                            <p className="text-gray700 text-sm mt-1">risk information</p>
                                                        </Link>

                                                        {/* Privacy Notice */}
                                                        <Link
                                                            href="/"
                                                            className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                                        >
                                                            <h3 className="text-gray900 font-semibold text-base">Privacy Notice</h3>
                                                            <p className="text-gray700 text-sm mt-1">Data protection</p>
                                                        </Link>

                                                        {/* Cookie Policy */}
                                                        <Link
                                                            href="/"
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
                                        <p>Document Type: Terms of Use</p>
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




