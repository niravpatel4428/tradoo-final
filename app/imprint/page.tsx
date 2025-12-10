"use client";
import React from 'react'

import {
    FileText,
    Building2,
    Shield,
    Users,
    AlertTriangle,
    Copyright,
    Mail,
    BookOpen,
    MapPin,
} from "lucide-react";
import Link from 'next/link';

const privateImprintData = {
    badge: "Legal Information",
    title: "Legal Notice / Imprint",
    datetitle: "Effective Date:",
    date: " November 15, 2025",
};

const tableOfContents = {
    title: "Table of Contents",
    subtitle: "Navigate to specific sections",

    items: [
        { id: "operator-legal-entity", label: "Operator / Legal Entity", icon: Building2 },
        { id: "board-of-directors", label: "Board of Directors", icon: Users },
        { id: "contact", label: "Contact", icon: Mail },
        { id: "regulatory-status", label: "Regulatory Status", icon: Shield },
        { id: "liability-notice", label: "Liability Notice", icon: AlertTriangle },
        { id: "intellectual-property", label: "Intellectual Property", icon: BookOpen },
        { id: "copyright", label: "Copyright", icon: Copyright },

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
                                        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                            <Building2 className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <p className="text-gray400 uppercase text-sm mb-3 tracking-wider">
                                        {privateImprintData.badge}
                                    </p>

                                    {/* Title */}
                                    <h1 className="text-white text-5xl font-semibold mb-6">
                                        {privateImprintData.title}
                                    </h1>

                                    {/* Framework, version, date */}
                                    <p className="text-gray400 text-lg">
                                        {privateImprintData.datetitle}
                                        {privateImprintData.date}
                                    </p>
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
                    <div className="w-full px-5 scroll-mt-28" id="operator-legal-entity">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                    <Building2 className="w-6 h-6 text-gray900" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray900">
                                        Operator / Legal Entity
                                    </h2>
                                    <p className="text-gray700 text-base">
                                        Company information
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                {/* Company Name + Address */}
                                <div className="space-y-3">
                                    <h2 className="text-sm font-medium tracking-wide text-gray700">
                                        Company Name
                                    </h2>
                                    <h1 className="text-xl font-semibold text-gray900">Tradoo AG</h1>

                                    <div className='flex gap-2 mt-4'>
                                        <h3 className="text-sm font-medium text-gray700">
                                            <MapPin className="w-6 h-6 text-gray900" />
                                        </h3>
                                        <div>
                                            <span className='text-sm font-medium text-gray700 block mb-1'>Registered Address</span>
                                            <div className="text-gray800 leading-none space-y-2">
                                                <p>Baarerstrasse 8</p>
                                                <p>CH-6300 Zug</p>
                                                <p>Switzerland</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Commercial Register */}
                                <div className="space-y-3">
                                    <h2 className="text-sm font-medium uppercase tracking-wide text-gray700">
                                        Commercial Register
                                    </h2>
                                    <p className="text-lg font-medium text-gray900">
                                        Canton of Zug, Switzerland
                                    </p>


                                    <div className="flex items-center gap-4 text-gray900 text-sm font-medium">
                                        <a href="#" className="hover:underline flex gap-1 items-center">View Register Entry <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-3 w-3"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
                                        <a href="https://www.zefix.ch/de/search/entity/list/firm/1721689" target='_blanck' className="hover:underline flex gap-1 items-center">Zefix <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-3 w-3"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
                                    </div>


                                    <div className="mt-4">
                                        <p className="text-sm font-medium text-gray700">
                                            UID / Company Identification Number
                                        </p>
                                        <p className="text-gray900 font-semibold">CHE-216.713.957</p>
                                    </div>
                                </div>
                            </div>


                            {/* Divider */}
                            <div className="border-t border-gray-200 pb-6 mt-6"></div>


                            {/* Bottom Identifiers */}
                            <div className="grid md:grid-cols-3 gap-8 text-gray900">
                                {/* VAT */}
                                <div>
                                    <h4 className="text-sm font-medium text-gray700">VAT Number</h4>
                                    <p className="mt-1 font-medium">CHE-216.713.957 MWST</p>
                                </div>


                                {/* CH-ID */}
                                <div>
                                    <h4 className="text-sm font-medium text-gray700">CH-ID</h4>
                                    <p className="mt-1 font-medium">CH-170-3051931-5</p>
                                </div>


                                {/* EHRA */}
                                <div>
                                    <h4 className="text-sm font-medium text-gray700">EHRA-ID</h4>
                                    <p className="mt-1 font-medium">1721689</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full px-5 scroll-mt-28" id="board-of-directors">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                    <Users className="w-6 h-6 text-gray900" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray900">
                                        Board of Directors
                                    </h2>
                                    <p className="text-gray700 text-base">
                                        Company leadership
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-6"><div className="rounded-xl border border-gray200 text-gray700 shadow-sm p-4 bg-gray200"><p className="text-sm text-gray700 mb-1">Chairman of the Board</p><p className="font-semibold text-gray900">Jens Herbst</p></div><div className="rounded-xl border border-gray200 text-gray700 shadow-sm p-4 bg-gray200"><p className="text-sm text-gray700 mb-1">Board Member</p><p className="font-semibold text-gray900">Christian Busse</p></div><div className="rounded-xl border border-gray200 text-gray700 shadow-sm p-4 bg-gray200"><p className="text-sm text-gray700 mb-1">Board Member</p><p className="font-semibold text-gray900">Jürgen Kob</p></div></div>


                        </div>
                    </div>
                    <div className="w-full px-5 scroll-mt-28" id="contact">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                    <Mail className="w-6 h-6 text-gray900" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray900">
                                        Contact
                                    </h2>
                                    <p className="text-gray700 text-base">
                                        Get in touch
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6"><div className="rounded-xl border border-gray200 text-gray700 shadow-sm p-4 bg-gray200"><p className="text-sm text-gray700 mb-1">General Inquiries</p><Link href="mailto:hello@tradoo.io" className="text-gray900 hover:underline font-medium">hello@tradoo.io</Link></div><div className="rounded-xl border border-gray200 text-gray700 shadow-sm p-4 bg-gray200"><p className="text-sm text-gray700 mb-1">Board Member</p><Link href="mailto:legal@tradoo.io" className="text-gray900 hover:underline font-medium">legal@tradoo.io</Link></div></div>


                        </div>
                    </div>
                    <div className="w-full px-5 scroll-mt-28" id="regulatory-status">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                    <Shield className="w-6 h-6 text-gray900" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray900">
                                        Regulatory Status – Phase 1 (Private Beta / Execution-Only)
                                    </h2>
                                    <p className="text-gray700 text-base">
                                        Current operational framework
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 text-gray700 leading-relaxed">
                                <p>The Platform is currently operated in Phase 1 as a closed Private Beta.</p>
                                <p>Access is limited to shareholders, Pre-Seed/Seed investors, team members, and expressly authorized pilot users.</p>
                                <p>In Phase 1, Tradoo provides a non custodial technical execution infrastructure for digital asset strategies.</p>
                                <p>All strategic investment decisions and risk settings are determined solely by the user. Users retain full and exclusive control over their private keys at all times.</p>
                                <div className="rounded-xl border text-gray800 shadow-sm p-4 bg-gray200 border-gray300"><p className="text-sm">Use of the Platform does not constitute a financial service within the meaning of Art. 3 et seq. FIDLEG and specifically does not include individual investment advice, asset management, or portfolio allocation.</p></div>
                                <p>Tradoo AG does not provide regulated services in Phase 1 (Private Beta) and assumes no fiduciary or investment-related obligations.</p>
                                <p>The Platform does not constitute a prospectus-required offering.</p>
                                <p>Any public offering is made exclusively within the framework of the prospectus exemption pursuant to Art. 36(1)(b) FIDLEG, as the maximum total volume of capital raised does not exceed CHF 8 million.</p>
                                <p>The Platform is therefore not a prospectus, not a recommendation, not a personal solicitation to acquire financial instruments, but serves exclusively to provide a technical, non custodial infrastructure.</p>
                                <div className="rounded-xl border border-gray200/50 text-gray800 shadow-sm p-4 bg-gray200"><p className="text-sm">Regulated services within the meaning of FIDLEG/FINIG will – if planned for later phases – only be offered after obtaining the required licenses and with a separate, express opt-in from users.</p></div>
                            </div>


                        </div>
                    </div>
                    <div className="w-full px-5 scroll-mt-28" id="liability-notice">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 w-10 h-10 flex justify-center items-center bg-[#fef3c7] rounded-6">
                                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray900">
                                        Liability Notice
                                    </h2>
                                    <p className="text-gray700 text-base">
                                        Important disclaimers
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 text-gray700 leading-relaxed">
                                <p>The website may contain references or links to third-party protocols or platforms. Tradoo does not recommend, control, or assume responsibility for third-party content, smart contracts, liquidity conditions, market data accuracy, or protocol security.</p>
                                <p>The use of decentralized protocols involves market, liquidity, smart contract, and execution risks.</p>
                                <p>Users assume full responsibility for their decisions and the security of their digital assets.</p>
                                <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray900 text-base leading-relaxed"><strong>No guarantees are made regarding performance, returns, or uninterrupted system availability.</strong></div>
                            </div>


                        </div>
                    </div>
                    <div className="w-full px-5 scroll-mt-28" id="intellectual-property">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                    <BookOpen className="w-6 h-6 text-gray900" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray900">
                                        Intellectual Property
                                    </h2>
                                    <p className="text-gray700 text-base">
                                        Protected content and materials
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 text-gray700 leading-relaxed">
                                <p>All trademarks, product names, branding elements, design assets, texts, and software related to Tradoo are protected by intellectual property law.</p>
                                <p>Reproduction or distribution is only permitted with prior written consent..</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5 scroll-mt-28" id="copyright">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

                            <div className="flex items-start gap-3 mb-6">
                                <div className="mt-1 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                    <Copyright className="w-6 h-6 text-gray900" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray900">
                                        Copyright
                                    </h2>
                                    <p className="text-gray700 text-base">
                                        Rights and ownership
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 text-gray700 leading-relaxed">
                                <p>All trademarks, product names, branding elements, design assets, texts, and software related to Tradoo are protected by intellectual property law.</p>
                                <p>Reproduction or distribution is only permitted with prior written consent..</p>
                                <div className="space-y-3 rounded-xl border border-gray200/50 text-gray800 shadow-sm p-4 bg-gray200"><p className="text-lg font-medium">© Tradoo AG, Switzerland</p> <span className='text-gray700 leading-relaxed'>All rights reserved.</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5">
                        <div className="max-w-224 mx-auto rounded-2xl border border-gray200 bg-gray100 p-8 shadow-sm">

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

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">


                                <Link
                                    href="/privatebetaterms"
                                    className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                >
                                    <h3 className="text-gray-900 font-semibold text-lg">Private Beta Terms</h3>
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
                                    href="/risk-disclosure"
                                    className="block px-6 py-5 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                >
                                    <h3 className="text-gray900 font-semibold text-base">Risk Disclosure</h3>
                                    <p className="text-gray700 text-sm mt-1">risk information</p>
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
                        <div className="max-w-224 mt-10 mx-auto w-full border-t border-gray300 pt-6">
                            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6 text-gray700">

                                {/* Left Section */}
                                <div className="space-y-1 text-sm">
                                    <h4 className="font-semibold">Tradoo AG</h4>
                                    <p>Baarerstrasse 8 • CH-6300 Zug • Switzerland</p>
                                    <p>
                                        Email:{" "}
                                        <Link href="mailto:hello@tradoo.io" className="text-gray900 underline">
                                            hello@tradoo.io
                                        </Link>
                                    </p>
                                </div>

                                {/* Right Section */}
                                <div className="text-sm text-left md:text-right space-y-1">
                                    <p>Document Type: Legal Notice / Imprint</p>
                                    <p>Effective Date: November 15, 2025</p>
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
