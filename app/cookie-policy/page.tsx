import React from 'react'
import {
    FileText,
    Mail,
    Cookie,
    Building2,
    Settings,
    Link2,
    Eye,
    ToggleLeft,
    Code,
    Database,
} from "lucide-react";
import NextLink from 'next/link';
import Link from 'next/link';

const privateTermData = {
    badge: "Legal Document",
    title: "Cookie Policy",
    datetitle: "Last Updated :",
    date: "November 2025",
};

const tableOfContents = {
    title: "Table of Contents",
    subtitle: "Navigate to specific sections of this policy",

    items: [
        { id: "", label: "1. Introduction", number: "", icon: FileText },
        { id: "section2", label: "2. What Are Cookies?", number: "", icon: Cookie },
        { id: "section3", label: "3. How We Use Cookies", number: "", icon: Settings },

        { id: "section4", label: "4. Third-Party Cookies and Embedded Content", number: "", icon: Link2 },
        { id: "section5", label: "5. Do-Not-Track Signals", number: "", icon: Eye },
        { id: "section6", label: "6. Managing or Disabling Cookies", number: "", icon: ToggleLeft },


        { id: "section7", label: "7. Additional Web Technologies", number: "", icon: Code },
        { id: "section8", label: "8. Data Usage", number: "", icon: Database },
        { id: "section9", label: "9. Contact", number: "", icon: Mail },
    ],
};

const page = () => {
    return (
        <main className='bg-white'>
            <div className='py-25'>
                {/* Banner */}
                <div className='bg-gray900 py-25'>
                    <div className='container'>
                        <div className='block'>
                            <div className="text-center max-w-3xl mx-auto">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                                        <Cookie className="w-7 h-7 text-white" />
                                    </div>
                                </div>

                                {/* Badge */}
                                <p className="text-gray400 uppercase text-sm mb-3 tracking-wider">
                                    {privateTermData.badge}
                                </p>

                                {/* Title */}
                                <h1 className="text-white text-5xl font-medium mb-6">
                                    {privateTermData.title}
                                </h1>

                                <div className="block space-y-6">
                                    {/* Framework, version, date */}
                                    <div className="text-[#cbd5e1] text-lg space-y-4">
                                        <p>{privateTermData.datetitle} {privateTermData.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner */}

                {/* Data-Contact */}
                <div className="w-full bg-gray100 py-10 px-4 border-b border-b-solid border-b-gray300">
                    <div className="max-w-224 mx-auto">
                        <div className="w-full grid grid-cols-12 gap-4">
                            {/* Operator */}
                            <div className='col-span-12 md:col-span-8'>
                                <div className="flex items-center gap-3">
                                    <Building2 className="min-w-6 w-6 h-6 text-gray900" />
                                    <div>
                                        <p className="text-sm text-gray700 mb-1">Data Controller</p>
                                        <p className="text-gray900 font-medium leading-relaxed">Tradoo AG · Baarerstrasse 8, CH-6300 Zug, Switzerland</p>
                                    </div>
                                </div>
                            </div>

                            {/* Legal Contact */}
                            <div className='col-span-12 md:col-span-4'>
                                <div className="flex items-center gap-3">
                                    <Mail className="min-w-6 w-6 h-6 text-gray900" />
                                    <div>
                                        <p className="text-sm text-gray700 mb-1">Privacy Contact</p>
                                        <NextLink
                                            href="mailto:privacy@tradoo.io"
                                            className="text-gray900 font-medium hover:underline"
                                        >
                                            privacy@tradoo.io
                                        </NextLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Data-Contact */}

                <div className='space-y-20 pt-20 relative z-9'>
                    {/* 1st Main Block */}
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {tableOfContents.items.map((item, index) => {
                                    const IconComponent = item.icon as React.ComponentType<{ className?: string }> | undefined;
                                    return (
                                        <Link href={`#${item.id}`} key={index} className="group flex items-center gap-3 py-2 px-3 rounded-6 hover:bg-[#e8eaed80]">
                                            {/* ICON OR CUSTOM NUMBER */}
                                            <div className="w-7 h-7 p-1 flex justify-center items-center bg-gray200 rounded-md text-gray800 text-xs leading-tight font-semibold group-hover:bg-foreground group-hover:text-[#f6f8fe]">
                                                {IconComponent && (
                                                    <IconComponent className="w-5 h-5 text-gray80" />
                                                ) || (item.number ? (
                                                    <span>
                                                        {item.number}
                                                    </span>
                                                ) : null)}
                                            </div>
                                
                                            {/* LABEL */}
                                            <span className="text-gray800 text-sm">
                                                {item.label}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* 1st Main Block */}


                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto space-y-10">
                            {/* --------- SECTION 1 --------- */}
                            <div id="section1">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        1
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Introduction
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>This Cookie Policy (&quot;Policy&quot;) explains how Tradoo AG (&quot;Tradoo&quot;, &quot;we&quot;, or &quot;us&quot;) uses cookies and similar technologies in connection with our website and related interfaces (the &quot;Site&quot;).</p>

                                        <p>This Policy has been designed to comply with applicable data protection laws, including the Swiss Federal Act on Data Protection (FADP) and, where applicable, the EU General Data Protection Regulation (GDPR).</p>
                                    </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="flex gap-3">
                                            <span className="mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-5 w-5 text-primary mt-0.5 shrink-0"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                            </span>
                                            <p>Tradoo operates in Phase 1 (Private Beta, Execution-Only). Access to the Platform is restricted exclusively to authorized users.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>For more information about our data practices, please see our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 2 --------- */}
                            <div id="section2">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        2
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        What Are Cookies?
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Cookies are small files stored on your device when you visit a website. Your browser may send these cookies back on subsequent visits to support website functionality or to store certain settings.</p>
                                    </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="flex gap-3">
                                            <h3 className="text-lg font-semibold text-gray900 mb-4">Tradoo does not use cookies for:</h3>
                                        </div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <ul className='space-y-3'>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs shrink-0 mt-0.5">✗</span>
                                                    <span>User tracking</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs shrink-0 mt-0.5">✗</span>
                                                    <span>Behavioral analytics</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs shrink-0 mt-0.5">✗</span>
                                                    <span>Targeted or personalized advertising</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs shrink-0 mt-0.5">✗</span>
                                                    <span>User profiling</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>We do not collect cookie-based identifiers for marketing or commercial resale purposes.</p>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 3 --------- */}
                            <div id="section3">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        3
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        How We Use Cookies
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>We may use only technically necessary cookies, such as:</p>
                                    </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <ul className='space-y-3'>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#071a4b33] text-primary text-xs shrink-0 mt-0.5">✓</span>
                                                    <span>Session management cookies (if applicable)</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#071a4b33] text-primary text-xs shrink-0 mt-0.5">✓</span>
                                                    <span>Preference settings (e.g., language or display mode)</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#071a4b33] text-primary text-xs shrink-0 mt-0.5">✓</span>
                                                    <span>Security and abuse prevention systems</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>These cookies exclusively support core functionality and do not track your browsing behavior across websites.</p>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 4 --------- */}
                            <div id="section4">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        4
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Third-Party Cookies and Embedded Content
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Certain parts of the Site may contain embedded tools or services from third parties, such as:</p>

                                        <ul className='pl-8 list-disc'>
                                            <li>Blockchain network widgets</li>
                                            <li>Charts or analytics dashboards</li>
                                            <li>Sharing or integration modules</li>
                                            <li>Embedded maps or external resources</li>
                                        </ul>

                                        <p>These third parties may set their own cookies when their features are loaded.</p>
                                    </div>

                                    <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray700 text-base leading-relaxed p-6 md:p-8 space-y-3">
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p><strong>Important:</strong> Tradoo does not control these cookies and does not receive or store their data. When you interact with these external services, their own privacy and cookie policies apply.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 5 --------- */}
                            <div id="section5">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        5
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Do-Not-Track Signals
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Industry standards regarding Do-Not-Track browser settings are still evolving. At this time, the Site may not respond to Do-Not-Track signals.</p>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 6 --------- */}
                            <div id="section6">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        6
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Managing or Disabling Cookies
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>You can disable or delete cookies through your browser settings.</p>
                                    </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3">
                                                <div className="flex-none w-full md:flex-1">
                                                    <div className="flex gap-3">
                                                        <span className="mt-0.5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings h-5 w-5 text-primary mt-0.5 shrink-0"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                        </span>
                                                        <h3 className="text-lg font-semibold text-gray900">Manage your cookie preferences</h3>
                                                    </div>
                                                    <div className="space-y-3 pl-8 text-gray700 leading-relaxed">
                                                        <p>You can review and update your cookie settings at any time.</p>
                                                    </div>
                                                </div>
                                                <div className="flex-none w-full md:w-auto">
                                                    <div className="block">
                                                        <Link href="/" className='inline-flex gap-3 font-semibold text-sm leading-snug border border-gray300 rounded-6 py-2 px-5 hover:bg-black/3'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cookie h-4 w-4"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
                                                            <span>Cookie Settings</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="flex gap-3">
                                            <h3 className="text-lg font-semibold text-gray900 mb-4">Please note:</h3>
                                        </div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <ul className='space-y-3'>
                                                <li className='flex items-center gap-3'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help h-5 w-5 text-muted-foreground shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                                                    <span>Disabling certain cookies may limit basic website functions</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help h-5 w-5 text-muted-foreground shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                                                    <span>Some embedded third-party features may not display correctly without cookies</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help h-5 w-5 text-muted-foreground shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                                                    <span>Consult your browser provider&apos;s documentation for instructions</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 7 --------- */}
                            <div id="section7">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        7
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Additional Web Technologies
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="flex gap-3">
                                            <h3 className="text-lg font-semibold text-gray900 mb-4">Tradoo intentionally does not use:</h3>
                                        </div>
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <ul className='space-y-3'>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs shrink-0 mt-0.5">✗</span>
                                                    <span>Web beacons</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs shrink-0 mt-0.5">✗</span>
                                                    <span>Fingerprinting</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs shrink-0 mt-0.5">✗</span>
                                                    <span>Tracking pixels</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs shrink-0 mt-0.5">✗</span>
                                                    <span>Clear GIFs</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Some third-party service providers may use such technologies exclusively for:</p>

                                        <ul className='pl-8 list-disc'>
                                            <li>Operational reliability</li>
                                            <li>Security</li>
                                            <li>Aggregated, non-identifiable performance measurement</li>
                                        </ul>

                                        <p><strong>No personal user profiles are created.</strong></p>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 8 --------- */}
                            <div id="section8">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        8
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Data Usage
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>All technical data collected through cookies or server logs is used exclusively for:</p>
                                    </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <ul className='space-y-3'>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#071a4b33] text-primary text-xs shrink-0 mt-0.5">✓</span>
                                                    <span>Maintaining and improving website security and performance</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#071a4b33] text-primary text-xs shrink-0 mt-0.5">✓</span>
                                                    <span>Preventing fraud or abuse</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#071a4b33] text-primary text-xs shrink-0 mt-0.5">✓</span>
                                                    <span>Ensuring stable platform operation</span>
                                                </li>
                                                <li className='flex items-center gap-3'>
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#071a4b33] text-primary text-xs shrink-0 mt-0.5">✓</span>
                                                    <span>Fulfilling legal obligations, where required</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <p><strong>No behavioral tracking or targeted advertising is conducted.</strong></p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>For more details on how we process personal data, please see our Privacy Policy.</p>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 9 --------- */}
                            <div id="section9">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        9
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Contact
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>For questions about this Policy:</p>
                                    </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="block space-y-4">
                                            <div className="block text-lg font-semibold text-gray900">
                                                <h3>Tradoo AG</h3>
                                            </div>
                                            <div className="block space-y-5">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2 font-medium">
                                                        <p className="text-base text-[#545B6A]">Baarerstrasse 8</p>
                                                        <p className="text-base text-[#545B6A]">CH-6300 Zug, Switzerland</p>
                                                        <p className="text-sm text-[#545B6A] pt-5">Email (Privacy)</p>
                                                        <p className="text-base text-[#545B6A]"><Link href="mailto:privacy@tradoo.io" className="text-primary hover:underline">privacy@tradoo.io</Link></p>
                                                    </div>
                                                    <div className="space-y-2 text-gray700">
                                                        <p className="space-y-3"><span className="text-gray700 block text-sm">Company Identification</span><span className="font-medium text-sm text-gray900">CHE-216.713.957</span></p>
                                                        <p className="space-y-3"><span className="text-gray700 block text-sm">Commercial Register of Canton Zug</span></p>
                                                        <p className="space-y-3"><span className="text-gray700 block font-medium"><Link href="https://zg.chregister.ch/cr-portal/auszug/auszug.xhtml?uid=CHE-216.713.957" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1">View Register Entry</Link></span></p>
                                                    </div>
                                                </div>
                                            </div>
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
                                                        Related Documents
                                                    </h2>
                                                    <p className="text-gray700 text-base">
                                                        Additional legal documentation for our services
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                                {/* Privacy Policy */}
                                                <Link href="/privacy-policy" className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                                    <h3 className="text-gray-900 font-medium text-base">Privacy Policy</h3>
                                                    <p className="text-gray-500 text-sm mt-1">Privacy Policy</p>
                                                </Link>
                                                
                                                {/* Terms of Use */}
                                                <Link href="/terms-of-use" className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                                    <h3 className="text-gray-900 font-medium text-base">Terms of Use</h3>
                                                    <p className="text-gray-500 text-sm mt-1">General Terms</p>
                                                </Link>
                                                
                                                {/* Private Beta Terms */}
                                                <Link href="/privatebetaterms" className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                                    <h3 className="text-gray-900 font-medium text-base">Private Beta Terms</h3>
                                                    <p className="text-gray-500 text-sm mt-1">Phase 1 Framework</p>
                                                </Link>

                                                {/* Imprint */}
                                                <Link href="/imprint" className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                                    <h3 className="text-gray-900 font-medium text-base">Imprint</h3>
                                                    <p className="text-gray-500 text-sm mt-1">Legal Notice</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 10 --------- */}
                            <div id="section10">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        10
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Data Security
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>We implement technical and organizational measures to ensure the confidentiality, integrity, and availability of your personal data. These include, as appropriate:</p>

                                        <ul className='pl-8 list-disc'>
                                            <li>Access controls and authentication procedures</li>
                                            <li>Encryption of data in transit and at rest (where appropriate)</li>
                                            <li>Network and infrastructure monitoring</li>
                                            <li>Backup and recovery procedures</li>
                                            <li>Security and access logging</li>
                                            <li>Internal confidentiality policies and training</li>
                                            <li>Access restriction on a need-to-know basis</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg space-y-2 p-6 md:p-8 text-gray700 text-base leading-relaxed">
                                            <div className="flex gap-3">
                                                <div className="flex justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                                                </div>
                                                <div className="space-y-1">
                                                    <h3 className="text-md font-semibold text-gray900">Security notice</h3>
                                                    <p>However, no system can be completely secure. If you believe your data or account may have been compromised, contact us immediately at: <Link href="mailto:privacy@tradoo.io" className="text-primary hover:underline">privacy@tradoo.io</Link>.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 11 --------- */}
                            <div id="section11">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        11
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Your Rights
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Depending on applicable law (Swiss FADP / GDPR), you have the right to:</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-3 text-gray700 leading-relaxed">
                                            <div className="flex flex-wrap space-y-5 -mx-5">
                                                <div className="flex-none w-full sm:w-1/2 [&:last-child:nth-child(odd)]:sm:w-full px-5">
                                                    {/* Access */}
                                                    <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                        <h3 className="text-gray-900 font-medium text-base">Access</h3>
                                                        <p className="text-gray-500 text-sm mt-1">Access to your personal data</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex-none w-full sm:w-1/2 [&:last-child:nth-child(odd)]:sm:w-full px-5">
                                                    {/* Data Portability */}
                                                    <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                        <h3 className="text-gray-900 font-medium text-base">Data Portability</h3>
                                                        <p className="text-gray-500 text-sm mt-1">Receive a copy of your data in a common electronic format</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex-none w-full sm:w-1/2 [&:last-child:nth-child(odd)]:sm:w-full px-5">
                                                    {/* Rectification */}
                                                    <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                        <h3 className="text-gray-900 font-medium text-base">Rectification</h3>
                                                        <p className="text-gray-500 text-sm mt-1">Correction of inaccurate or incomplete data</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex-none w-full sm:w-1/2 [&:last-child:nth-child(odd)]:sm:w-full px-5">
                                                    {/* Erasure */}
                                                    <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                        <h3 className="text-gray-900 font-medium text-base">Erasure</h3>
                                                        <p className="text-gray-500 text-sm mt-1">Deletion of your data (subject to legal limitations)</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex-none w-full sm:w-1/2 [&:last-child:nth-child(odd)]:sm:w-full px-5">
                                                    {/* Restriction */}
                                                    <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                        <h3 className="text-gray-900 font-medium text-base">Restriction</h3>
                                                        <p className="text-gray-500 text-sm mt-1">Restriction of processing</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex-none w-full sm:w-1/2 [&:last-child:nth-child(odd)]:sm:w-full px-5">
                                                    {/* Objection */}
                                                    <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                        <h3 className="text-gray-900 font-medium text-base">Objection</h3>
                                                        <p className="text-gray-500 text-sm mt-1">Object to processing based on legitimate interests</p>
                                                    </div>
                                                </div>

                                                <div className="flex-none w-full sm:w-1/2 [&:last-child:nth-child(odd)]:sm:w-full px-5">
                                                    {/* Objection */}
                                                    <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                        <h3 className="text-gray-900 font-medium text-base">Withdrawal of Consent</h3>
                                                        <p className="text-gray-500 text-sm mt-1">At any time (for consent-based processing; with effect for the future)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">To exercise your rights, contact:</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p><Link href="mailto:privacy@tradoo.io" className="hover:underline">privacy@tradoo.io</Link></p>
                                                <p>We may request proof of identity to prevent unauthorized access.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>If you are located in Switzerland, the EU, or the EEA, you have the right to lodge a complaint with the competent data protection authority. However, we encourage you to contact us first so we can address your concern.</p>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 12 --------- */}
                            <div id="section12">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        12
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Cookies and Tracking Technologies
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 bg-[#f0fdf4] p-6 rounded-xl border border-solid border-green-200 shadow-sm">
                                        <div className="flex gap-3">
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white shrink-0">
                                                <span className="text-sm font-bold">✓</span>
                                            </div>
                                            <div className='space-y-2'>
                                                <h3 className="text-md font-medium text-gray900">Strictly necessary cookies only</h3>
                                                <div className="space-y-1">
                                                    <p>We use only strictly necessary cookies required for the technical operation and security of the websites. These cookies do not track your browsing behavior across websites and are not used for analytics, profiling, or targeted advertising.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 bg-[#fef2f2] p-6 mt-8 rounded-xl border border-solid border-red-200 shadow-sm">
                                        <div className="flex gap-3">
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shrink-0">
                                                <span className="text-sm font-bold">✗</span>
                                            </div>
                                            <div className='space-y-2'>
                                                <h3 className="text-md font-medium text-gray900">We do NOT use</h3>
                                                <div className="space-y-1">
                                                    <p>Marketing cookies</p>
                                                    <p>Cross-site tracking identifiers</p>
                                                    <p>Advertising pixels</p>
                                                    <p>Behavioral analytics cookies (e.g., Google Analytics, Meta Pixel, LinkedIn Insight Tag)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Certain third-party tools or embedded content (e.g., blockchain network widgets, chart visualizations, or social media sharing modules) may set their own cookies when loaded. These cookies are controlled by the respective third parties. Their own privacy and cookie policies apply.</p>
                                        <p>You can disable cookies via your browser settings. Please note that disabling certain cookies may impair the basic functionality of the websites.</p>
                                        <p>For more details, see our Cookie Policy.</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3">
                                                <div className="flex-none w-full md:flex-1">
                                                    <div className="flex gap-3">
                                                        <span className="mt-0.5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings h-5 w-5 text-primary mt-0.5 shrink-0"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                        </span>
                                                        <h3 className="text-lg font-semibold text-gray900">Manage your cookie preferences</h3>
                                                    </div>
                                                    <div className="space-y-3 pl-8 text-gray700 leading-relaxed">
                                                        <p>You can review and update your cookie settings at any time.</p>
                                                    </div>
                                                </div>
                                                <div className="flex-none w-full md:w-auto">
                                                    <div className="block">
                                                        <Link href="/" className='inline-flex gap-3 font-semibold text-sm leading-snug border border-gray300 rounded-6 py-2 px-5 hover:bg-black/3'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cookie h-4 w-4"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
                                                            <span>Cookie Settings</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 13 --------- */}
                            <div id="section13">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        13
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Social Media Presence
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>We maintain pages on social platforms (e.g., X/Twitter, LinkedIn, Instagram, YouTube, Telegram, Discord).</p>

                                        <p>When you visit or interact with such pages:</p>
                                        <p>For details, please consult the privacy policies of the respective platforms.</p>

                                        <ul className='pl-8 list-disc'>
                                            <li>We may receive statistics and interaction data about visits and engagement</li>
                                            <li>The platform operators process your data independently for their own purposes (e.g., profiling, marketing, platform improvement)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 14 --------- */}
                            <div id="section14">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        14
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Changes to This Notice
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>We may change or update this Privacy Notice at any time, particularly when we:</p>

                                        <ul className='pl-8 list-disc'>
                                            <li>Adjust our internal data processing practices</li>
                                            <li>Introduce new products or services</li>
                                            <li>Adopt changes to legal, regulatory, or technical requirements</li>
                                            <li>Integrate new service providers, technologies, or data transfers</li>
                                            <li>Or develop our operational or organizational structures</li>
                                        </ul>

                                        <p>The version published on our websites at the time of access applies.</p>

                                        <p>If changes are material, we will take appropriate steps to inform you transparently. This may include notifications on the websites, in-product notifications, email communications, or prompts at your next interaction with our services.</p>

                                        <p>Where required by law, we will obtain your renewed consent before applying changes—for example, when introducing new processing purposes, expanded use of data categories, cross-border transfers to recipients without adequacy decisions, or additional tracking and profiling features.</p>

                                        <p>We recommend reviewing this Privacy Notice regularly. The date of the last update is indicated at the end of this document.</p>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 15 --------- */}
                            <div id="section15">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        15
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Regulatory Context - Financial Services and Wealth Management
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Activities in the area of digital asset management, algorithmic trading support, tokenization, or automated portfolio strategies may be subject to financial market and anti-money laundering regulations. In this context, the processing of personal data may additionally be subject to the following legal frameworks, where applicable:</p>

                                        <ul className='pl-8 list-disc'>
                                            <li>Swiss Anti-Money Laundering Act (AMLA / GwG)</li>
                                            <li>Swiss Financial Services Act (FinSA / FIDLEG)</li>
                                            <li>Swiss Financial Institutions Act (FinIA / FINIG)</li>
                                            <li>Swiss Anti-Money Laundering Ordinance (AMLO / GwV)</li>
                                            <li>And the supervisory practice of the Swiss Financial Market Supervisory Authority (FINMA) or comparable foreign authorities</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Regulatory status</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Tradoo AG currently does not provide any services that require authorization or licensing under FinSA, FinIA, AMLA, or comparable international financial market regulations.</p>

                                                <p>The platform provides software-based analysis, automation, and data tools only.</p>

                                                <p>Tradoo AG does not receive, hold, safeguard, manage, or invest client funds on behalf of users.</p>

                                                <p>Tradoo AG does not provide investment advice, portfolio management, asset management, brokerage, execution services, or any activity involving discretionary management of client assets.</p>

                                                <p>All trading and investment decisions are made solely and independently by the user, at their own discretion and risk.</p>

                                                <p>Any potential future expansion of the service offering into regulated activities will only occur after full regulatory assessment and obtaining all necessary licenses and registrations. Regulatory and compliance integrity is a core priority for Tradoo AG.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Data processing in the context of regulatory obligations</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Depending on your interaction with us - particularly if you:</p>

                                                <ul className='pl-8 list-disc'>
                                                    <li>Create or maintain a user, trading, or investment account</li>
                                                    <li>Submit identity or residency documentation</li>
                                                    <li>Conduct transactions, deposits, withdrawals, or token-related activities</li>
                                                </ul>

                                                <p>Tradoo AG may be legally required to:</p>

                                                <ul className='pl-8 list-disc'>
                                                    <li>Verify identity and beneficial ownership (KYC)</li>
                                                    <li>Assess risk category and suitability, where applicable</li>
                                                    <li>Monitor and document transactions in accordance with anti-money laundering requirements</li>
                                                    <li>Retain records for at least 10 years for audit and compliance purposes</li>
                                                    <li>And disclose certain data to competent authorities, where legally required</li>
                                                </ul>

                                                <p>These obligations apply regardless of your place of residence, nationality, or access method (e.g., web interface, API, wallet or smart contract interactions).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------- SECTION 16 --------- */}
                            <div id="section16">

                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center min-w-10 w-10 h-10 rounded-lg bg-gray800 text-white font-semibold">
                                        16
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray900">
                                        Contact for Data Protection and Regulatory Inquiries
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="block space-y-4">
                                            <div className="block text-lg font-semibold text-gray900">
                                                <h3 className="">Tradoo AG</h3>
                                            </div>
                                            <div className="block space-y-5">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2 font-medium">
                                                        <p className="text-base text-[#545B6A]">Baarerstrasse 8</p>
                                                        <p className="text-base text-[#545B6A]">CH-6300 Zug, Switzerland</p>
                                                        <p className="text-base text-[#545B6A]">Switzerland</p>
                                                        <p className="text-sm text-[#545B6A] pt-5">Email (Privacy)</p>
                                                        <p className="text-base text-[#545B6A]"><Link href="mailto:privacy@tradoo.io" className="text-primary hover:underline">privacy@tradoo.io</Link></p>
                                                    </div>
                                                    <div className="space-y-2 text-gray700">
                                                        <p className="space-y-3"><span className="text-gray700 block text-sm">Company Identification (UID)</span><span className="font-medium text-sm text-gray900">CHE-216.713.957</span></p>
                                                        <p className="space-y-3"><span className="text-gray700 block text-sm">Commercial Register of Canton Zug</span></p>
                                                        <p className="space-y-3"><span className="text-gray700 block font-medium"><Link href="https://zg.chregister.ch/cr-portal/auszug/auszug.xhtml?uid=CHE-216.713.957" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1">View Register Entry</Link></span></p>
                                                    </div>
                                                </div>
                                            </div>
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
                                                        Related Legal Documents
                                                    </h2>
                                                    <p className="text-gray700 text-base">
                                                        Additional information about our services
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                                {/* Private Beta Terms */}
                                                <Link href="/privatebetaterms" className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                                    <h3 className="text-gray-900 font-medium text-base">Private Beta Terms</h3>
                                                    <p className="text-gray-500 text-sm mt-1">Phase 1 Execution Framework</p>
                                                </Link>
                                                
                                                {/* Terms of Use */}
                                                <Link href="/terms-of-use" className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                                    <h3 className="text-gray-900 font-medium text-base">Terms of Use</h3>
                                                    <p className="text-gray-500 text-sm mt-1">General Terms</p>
                                                </Link>


                                                {/* Risk Disclosure */}
                                                <Link href="/terms-of-use" className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                                    <h3 className="text-gray-900 font-medium text-base">Risk Disclosure</h3>
                                                    <p className="text-gray-500 text-sm mt-1">Risk Disclosure</p>
                                                </Link>

                                                {/* Cookie Policy */}
                                                <Link href="/cookie-policy" className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                                    <h3 className="text-gray-900 font-medium text-base">Cookie Policy</h3>
                                                    <p className="text-gray-500 text-sm mt-1">Cookie Information</p>
                                                </Link>

                                                {/* Imprint */}
                                                <Link href="/imprint" className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                                    <h3 className="text-gray-900 font-medium text-base">Imprint</h3>
                                                    <p className="text-gray-500 text-sm mt-1">Legal Notice</p>
                                                </Link>
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