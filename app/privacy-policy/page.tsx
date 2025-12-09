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
    Globe,
} from "lucide-react";
import NextLink from 'next/link';
import Link from 'next/link';

const privateTermData = {
    badge: "Legal Document",
    title: "Privacy Policy",
    version: "Privacy Notice",
    datetitle: "Last Updated:",
    date: "December 1, 2025",
};

const bannerDomains = [
    "tradoo.finance",
    "tradoo.io",
    "tradoo.ai",
    "tradoo.foundation",
];

const tableOfContents = {
    title: "Table of Contents",
    subtitle: "Navigate to specific sections of these terms",

    items: [
        { id: "section1", label: "About This Privacy Notice", number: "1", icon: undefined },
        { id: "section2", label: "Data Controller", number: "2", icon: undefined },

        { id: "section3", label: "Data Controller", number: "3", icon: undefined },
        { id: "section4", label: "Purposes of Processing", number: "4", icon: undefined },

        { id: "section5", label: "Legal Basis for Processing", number: "5", icon: undefined },
        { id: "section6", label: "Profiling and Automated Decisions", number: "6", icon: undefined },

        { id: "section7", label: "Data Sharing and Recipients", number: "7", icon: undefined },
        { id: "section8", label: "International Data Transfers", number: "8", icon: undefined },

        { id: "section9", label: "Data Retention Periods", number: "9", icon: undefined },
        { id: "section10", label: "Data Security", number: "10", icon: undefined },

        { id: "section11", label: "Your Rights", number: "11", icon: undefined },
        { id: "section12", label: "Cookies and Tracking Technologies", number: "12", icon: undefined },

        { id: "section13", label: "Social Media Presence", number: "13", icon: undefined },
        { id: "section14", label: "Changes to This Notice", number: "14", icon: undefined },

        { id: "section15", label: "Regulatory Context", number: "15", icon: undefined },
        { id: "section16", label: "Contact for Data Protection", number: "16", icon: undefined },
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
                                        <Shield className="w-7 h-7 text-white" />
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
                                        <p>{privateTermData.version} . {privateTermData.datetitle} {privateTermData.date}</p>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-2 text-sm">
                                        {bannerDomains.map((item, index) => (
                                            <span key={index} className="py-1 px-3 rounded-2xl bg-white/10 text-[#e5e7eb]">{item}</span>
                                        ))}
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
                                    <Globe className="min-w-6 w-6 h-6 text-gray900" />
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tableOfContents.items.map((item, index) => {
                                    const IconComponent = item.icon as React.ComponentType<{ className?: string }> | undefined;
                                    return (
                                        <Link href={`#${item.id}`} key={index} className="group flex items-center gap-3 py-2 px-3 rounded-6 hover:bg-[#e8eaed80]">
                                            {/* ICON OR CUSTOM NUMBER */}
                                            <div className="w-7 h-7 flex justify-center items-center bg-gray200 rounded-md text-gray800 text-xs leading-tight font-semibold group-hover:bg-foreground group-hover:text-[#f6f8fe]">
                                                {IconComponent && (
                                                    <IconComponent className="w-5 h-5 text-gray800" />
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
                                        About This Privacy Notice
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Tradoo AG (hereinafter also &quot;we&quot;, &quot;us&quot;, or &quot;Tradoo&quot;) collects and processes personal data relating to you and, in some cases, other individuals (&quot;third parties&quot;). In this Privacy Notice, the terms &quot;data&quot; and &quot;personal data&quot; are used interchangeably.</p>
                                    </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="block space-y-4">
                                            <div className="block text-lg font-semibold text-gray900">
                                                <h3 className="">Key definitions</h3>
                                            </div>
                                            <div className="block space-y-5">
                                                <div className="block space-y-2 text-sm leading-5">
                                                    <span className='block font-medium text-base text-foreground'>&quot;Personal Data&quot;</span>
                                                    <p>Any information relating to an identified or identifiable natural person. A person is identifiable if they can be identified, directly or indirectly, by an identifier (e.g., name, identification number, location data, online identifier) or by one or more factors specific to their identity.</p>
                                                </div>

                                                <div className="block space-y-2 text-sm leading-5">
                                                    <span className='block font-medium text-base text-foreground'>&quot;Sensitive Personal Data&quot;</span>
                                                    <p>A legally protected subcategory that may include data revealing racial or ethnic origin, religious or philosophical beliefs, health data, biometric data for identification, data concerning sex life or sexual orientation, genetic data, and data on trade union membership.</p>
                                                </div>

                                                <div className="block space-y-2 text-sm leading-5">
                                                    <span className='block font-medium text-base text-foreground'>&quot;Processing&quot;</span>
                                                    <p>Any operation performed on personal data, such as collection, recording, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination, alignment or combination, restriction, erasure, or destruction.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>This Privacy Notice explains what we do with your data when you:</p>

                                        <ul>
                                            <li>Access or use our websites (tradoo.finance, tradoo.io, tradoo.ai, tradoo.foundation)</li>
                                            <li>Obtain our services or products</li>
                                            <li>Subscribe to newsletters, events, or waitlists</li>
                                            <li>Interact or communicate with us (e.g., via email, phone, forms, social media)</li>
                                            <li>Otherwise engage with us as a customer, supplier, partner, investor, or prospect</li>
                                        </ul>

                                        <p>Where applicable, we may provide just-in-time notices for specific processing activities not covered by or supplementing this Privacy Notice. We may also inform you separately (e.g., in consent forms, contract terms, additional privacy notices, forms, and other communications).</p>

                                        <p>If you disclose personal data about third parties to us (e.g., colleagues, employees, business partners), you confirm that you are authorized to do so, that such data is accurate, and that those individuals have been informed about this Privacy Notice.</p>

                                        <p>This Privacy Notice is governed by the Swiss Federal Act on Data Protection (FADP) and, where applicable, the EU General Data Protection Regulation (GDPR). The specific application of these laws depends on the individual case.</p>
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
                                        Data Controller
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Tradoo AG is the controller for the processing described in this Privacy Notice, unless we inform you otherwise in a specific case (e.g., in an additional privacy notice, on a form, in a contract, or when a service provider acts as an independent controller).</p>
                                    </div>

                                    <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                        <div className="block space-y-4">
                                            <div className="block text-lg font-semibold text-gray900">
                                                <h3 className="">Contact for privacy matters and to exercise your rights</h3>
                                            </div>
                                            <div className="block space-y-5">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2 font-medium">
                                                        <p className="text-base text-[#171717]">Tradoo AG</p>
                                                        <p className="text-base text-[#545B6A]">Baarerstrasse 8</p>
                                                        <p className="text-base text-[#545B6A]">CH-6300 Zug, Switzerland</p>
                                                        <p className="text-base text-[#545B6A]">Email: <Link href="mailto:privacy@tradoo.io" className="text-primary hover:underline">privacy@tradoo.io</Link></p>
                                                    </div>
                                                    <div className="space-y-2 text-gray700">
                                                        <p className="space-y-3"><span className="text-gray700 block text-sm">Company Identification (UID)</span><span className="font-medium text-sm text-gray900">CHE-216.713.957</span></p>
                                                        <p className="space-y-3"><span className="text-gray700 block font-medium"><Link href="https://www.zefix.ch/de/search/entity/list/firm/1721689" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Commercial Register of Canton Zug</Link></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray100 border border-gray200 rounded-2xl shadow-sm p-6 md:p-8">
                                        <h2 className="text-lg md:text-xl font-semibold text-gray900 flex items-center gap-3">
                                            <span className="min-w-10 w-10 h-10 flex justify-center items-center bg-gray300 rounded-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lh-5 w-5">
                                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                                </svg>
                                            </span>
                                            Data Protection Representative in the EEA
                                        </h2>
                                        <div className="mt-1 space-y-5 text-gray700 text-base pl-13">
                                            <p>To ensure compliance with Art. 27 of the General Data Protection Regulation (GDPR), Tradoo has appointed a data protection representative within the European Economic Area (EEA). The EEA includes the European Union (EU) as well as the Principality of Liechtenstein, Iceland, and Norway.</p>

                                            <p>Our subsidiary, <strong>VGS Datenschutzpartner GmbH,</strong> located in Germany, serves as our official data protection representative in the EEA. They act as an additional point of contact for supervisory authorities and data subjects regarding all inquiries related to ensuring compliance with the GDPR.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>We may also appoint additional representatives or a data protection officer for specific jurisdictions if required by law; where applicable, relevant details will be provided in the respective local notice.</p>
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
                                        What Data We Process
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Depending on your interaction with us, we process various categories of data. The main categories are:</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                            <div className="flex gap-3">
                                                <span className="mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141824" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-primary mt-0.5 shrink-0"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                                                </span>
                                                <h3 className="text-lg font-semibold text-gray900 mb-4">a) Technical data</h3>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>When you use our websites or other online offerings, we collect technical data to ensure functionality, security, and performance. This includes IP address, device and browser details, operating system, referrer URL, timestamps, pages viewed, interactions, session identifiers, cookie IDs and similar identifiers, and server log files.</p>

                                                <p className="mt-3 text-xs bg-[#e8eaed80] p-2 rounded"><strong>Retention:</strong> Typically 6-24 months; longer if required for security, forensic, legal, or technical reasons.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                            <div className="flex gap-3">
                                                <span className="mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-5 w-5 text-primary mt-0.5 shrink-0"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                </span>
                                                <h3 className="text-lg font-semibold text-gray900 mb-4">b) Registration data</h3>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Certain offerings (e.g., account areas, investor or partner portals, newsletter subscriptions, event registrations) require a user account or sign-up. You provide data such as name, email, password (hashed), 2FA details (if enabled), organization, role, preferences; we also collect metadata about access and use of the service.</p>

                                                <p className="mt-3 text-xs bg-[#e8eaed80] p-2 rounded"><strong>Retention:</strong> For the duration of use plus typically 12 months after account closure or last use, unless longer retention is required for legal obligations, dispute resolution, or security.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                            <div className="flex gap-3">
                                                <span className="mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail h-5 w-5 text-primary mt-0.5 shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                                </span>
                                                <h3 className="text-lg font-semibold text-gray900 mb-4">c) Communication data</h3>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Certain offerings (e.g., account areas, investor or partner portals, newsletter subscriptions, event registrations) require a user account or sign-up. You provide data such as name, email, password (hashed), 2FA details (if enabled), organization, role, preferences; we also collect metadata about access and use of the service.</p>

                                                <p className="mt-3 text-xs bg-[#e8eaed80] p-2 rounded"><strong>Retention:</strong> Typically 12 months after last interaction; emails and formal correspondence may be retained up to 10 years if required for compliance or evidentiary purposes.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                            <div className="flex gap-3">
                                                <span className="mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text h-5 w-5 text-primary mt-0.5 shrink-0"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                                                </span>
                                                <h3 className="text-lg font-semibold text-gray900 mb-4">d) Master data</h3>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Basic identity and relationship data required to manage our business relationships and for marketing/relationship management (where permitted): name, address, email, phone, language, job title/role, employer, relationship history, preferences, customer/investor numbers, powers of attorney, consent records, opt-outs, bank details (if relevant), and similar.</p>

                                                <p className="mt-3 text-xs bg-[#e8eaed80] p-2 rounded"><strong>Retention:</strong> Typically 10 years after last interaction or contract end; shorter (often up to 2 years) for pure marketing contacts, unless legally or for evidentiary purposes required longer.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                            <div className="flex gap-3">
                                                <span className="mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-scale h-5 w-5 text-primary mt-0.5 shrink-0"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
                                                </span>
                                                <h3 className="text-lg font-semibold text-gray900 mb-4">e) Contract data</h3>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Data arising in connection with contract initiation and performance: agreements, usage records, billing and payment information, deliverables, support cases, KYC/AML data (if legally required), feedback, and complaints.</p>

                                                <p className="mt-3 text-xs bg-[#e8eaed80] p-2 rounded"><strong>Retention:</strong> Typically 10 years after last contract activity or contract end; longer if legally or for evidentiary purposes required.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                            <div className="flex gap-3">
                                                <span className="mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings h-5 w-5 text-primary mt-0.5 shrink-0"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                </span>
                                                <h3 className="text-lg font-semibold text-gray900 mb-4">f) Behavioral and preference data</h3>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>To improve our offerings and personalize communications (where permitted), we analyze how users interact with our websites and services (e.g., page flows, clicks, features used). We may combine this with other data (e.g., master/registration data) to infer preferences.</p>

                                                <p className="mt-3 text-xs bg-[#e8eaed80] p-2 rounded"><strong>Retention:</strong> Typically 2 weeks to 24 months, depending on relevance; longer if required for legal or technical reasons.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl p-6 md:p-8">
                                            <div className="flex gap-3">
                                                <span className="mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-database h-5 w-5 text-primary mt-0.5 shrink-0"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                                                </span>
                                                <h3 className="text-lg font-semibold text-gray900 mb-4">g) Other data</h3>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>To improve our offerings and personalize communications (where permitted), we analyze how users interact with our websites and services (e.g., page flows, clicks, features used). We may combine this with other data (e.g., master/registration data) to infer preferences.</p>
                                            </div>
                                        </div>

                                        <div className="bg-[#FFFBEB] border border-[#fde68a] rounded-lg p-4 text-gray700 text-base leading-relaxed p-6 md:p-8 space-y-3">
                                            <h3 className="text-lg font-medium text-gray900">Obligation to provide data</h3>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>You are generally not obligated to provide data. However, certain services (account creation, contracts, access to protected areas) cannot be provided without necessary data. The websites cannot be used without processing technical data. For marketing analytics and non-essential cookies, you can refuse or withdraw consent (see Section 12).</p>
                                            </div>
                                        </div>
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
                                        Purposes of Processing
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>We process personal data for the following purposes (and compatible purposes):</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Communication</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Responding to inquiries, providing information, customer support, exercising data subject rights; documentation for training, quality assurance, and evidentiary purposes.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Website operation and security</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Providing and improving functionality, availability, performance, information security (including fraud/abuse detection, incident handling), user experience, and accessibility.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Contract initiation and performance</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Concluding, managing, and performing agreements with customers, suppliers, partners, and investors; account management; billing; compliance checks (e.g., AML/KYC, where locally applicable).</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Product/service improvement and market research</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Analyzing usage and feedback to develop and improve features, content, design, and performance.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Marketing and relationship management</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Sending information about our products and services (including newsletters), where permitted; personalizing content and offers where consent is given; organizing events and community activities.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Legal compliance and internal governance</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Fulfilling legal obligations (commercial, tax, corporate, regulatory), record-keeping, enforcing or defending legal claims, risk management, and corporate governance.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Security and access control</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Protecting facilities, infrastructure, networks, and data; managing visitor access and incident response.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Right to object / withdrawal</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>You can object to processing based on legitimate interests and you can withdraw consent at any time (see Section 11 and Section 12). For direct marketing, you can unsubscribe at any time via the unsubscribe link or by contacting <Link href="mailto:privacy@tradoo.io" className="text-primary hover:underline">privacy@tradoo.io</Link>.</p>
                                            </div>
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
                                        Legal Basis for Processing
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Depending on the specific processing and jurisdiction, we rely on:</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Consent (Art. 6(1)(a) GDPR / Swiss FADP principles)</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>E.g., newsletters, certain cookies/analytics, specific optional features. You can withdraw consent at any time with effect for the future.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Contract performance or pre-contractual measures (Art. 6(1)(b) GDPR)</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>E.g., account creation, service provision, billing.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Legitimate interests (Art. 6(1)(f) GDPR)</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>E.g., website security and analytics, communicating with you, improving and managing our business, defending legal claims, ensuring network and information security.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Legal obligations (Art. 6(1)(c) GDPR; Swiss law)</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>E.g., retention obligations, accounting, corporate, tax, or regulatory requirements (including AML/KYC, where applicable).</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Vital interests / public interest in exceptional cases (Art. 6(1)(d/e) GDPR)</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>In rare cases only.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>Where we process sensitive personal data, we do so only if and to the extent a legal basis exists (e.g., explicit consent, necessity for the establishment, exercise, or defense of legal claims, overriding public interest, or as otherwise permitted under applicable law).</p>
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
                                        Profiling and Automated Decisions
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>We may analyze personal aspects concerning you (profiling) based on the data described in Section 3, in order to:</p>
                                        <ul className='pl-8 list-disc'>
                                            <li>Infer preferences to improve content and UX</li>
                                            <li>Detect abuse and enhance security</li>
                                            <li>Conduct statistical analyses, forecasts, and capacity planning</li>
                                            <li>Tailor information (including, where consent is given, marketing)</li>
                                        </ul>
                                        <p>We aim for proportionality and accuracy and implement safeguards against misuse.</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Automated individual decisions</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>Automated individual decisions with legal effect or similarly significant impact on you are not made without human review. If such decisions become necessary (e.g., for legally required fraud prevention), we will inform you as required by law and provide the opportunity to obtain human intervention and contest the decision.</p>
                                            </div>
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
                                        Data Sharing and Recipients
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>In connection with the purposes described in Section 4, we may disclose personal data to the following categories of recipients. These recipients may process the data as processors (acting on our behalf), joint controllers, or independent controllers:</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">a) Service providers (processors)</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>We use carefully selected third-party providers in Switzerland or abroad to perform certain tasks on our behalf, such as: IT hosting, cloud storage, and server infrastructure; website operation and analytics; communication tools (email providers, support platforms); payment and billing service providers; identity verification or security service providers (if applicable).</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">b) Contractual partners and business contacts</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>We may share data with customers, suppliers, advisors, investors, or other contractual partners where necessary for contract performance, due diligence, collaboration, negotiations, reporting, advisory services, or relationship management.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">c) Authorities, courts, and regulators</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>We may disclose data when: legally obligated to do so; fulfilling regulatory or reporting obligations; necessary for the establishment, exercise, or defense of legal claims; necessary to protect our rights, property, or safety.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">d) Professional advisors</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>We may disclose data to lawyers, auditors, tax advisors, and consultants. These parties are subject to professional confidentiality obligations.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">e) Other recipients</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p>In some cases, data may be disclosed to third parties in the context of transactions (e.g., mergers, acquisitions, financing arrangements), strictly to the extent required and under confidentiality obligations.</p>
                                            </div>
                                        </div>
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
                                        International Data Transfers
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>As set out in Section 7, personal data may be disclosed:</p>
                                        <ul className='pl-8 list-disc'>
                                            <li>Within Switzerland</li>
                                            <li>Within the European Economic Area (EEA)</li>
                                            <li>And in certain cases worldwide (e.g., United States)</li>
                                        </ul>
                                        <p>If the recipient is located in a country without adequate data protection under Swiss or EU law, we ensure protection through one or more of the following measures:</p>
                                        <ul className='pl-8 list-disc'>
                                            <li>Adequacy decision by the Swiss Federal Council or European Commission</li>
                                            <li>Standard Contractual Clauses (SCCs) of the European Commission</li>
                                            <li>Binding Corporate Rules of the recipient</li>
                                            <li>Your explicit consent, where appropriate</li>
                                            <li>Situations where disclosure is contractually, legally, in the public interest, or for legal claims required</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-2 p-6 md:p-8">
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <p><strong>Note:</strong> Internet routing may involve data transmission across borders even when sender and recipient are in the same country.</p>
                                            </div>
                                        </div>
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
                                        Data Retention Periods
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>We store personal data for as long as necessary:</p>

                                        <ul className='pl-8 list-disc'>
                                            <li>To fulfill the purposes described in Section 4</li>
                                            <li>To meet legal and regulatory retention requirements</li>
                                            <li>Or for our legitimate interests in documentation and evidence preservation (e.g., to enforce or defend legal claims)</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gray100 border border-gray300 rounded-xl space-y-4 p-6 md:p-8">
                                            <div className="block">
                                                <span className="text-md font-semibold text-gray900">Common retention periods</span>
                                            </div>
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <div className="overflow-x-auto">
                                                    <table className='w-full text-left text-foreground text-sm'>
                                                        <thead>
                                                            <tr className='border-b border-[#e5e7eb]'>
                                                                <th className="font-medium py-2 px-4 first:pl-0 last:pr-0">Data Type</th>
                                                                <th className="font-medium py-2 px-4 first:pl-0 last:pr-0">Typical Retention Period</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className='border-b border-[#e5e7eb] last:border-none'>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Technical / Analytics data</td>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">6-24 months</td>
                                                            </tr>
                                                            <tr className='border-b border-[#e5e7eb] last:border-none'>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Registration and account data</td>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Duration of use + 12 months</td>
                                                            </tr>
                                                            <tr className='border-b border-[#e5e7eb] last:border-none'>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Emails and correspondence</td>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Up to 10 years (evidence and legal compliance)</td>
                                                            </tr>
                                                            <tr className='border-b border-[#e5e7eb] last:border-none'>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Contract and billing records</td>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">10 years (statutory retention)</td>
                                                            </tr>
                                                            <tr className='border-b border-[#e5e7eb] last:border-none'>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Visitor and access logs</td>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Typically up to 3 months</td>
                                                            </tr>
                                                            <tr className='border-b border-[#e5e7eb] last:border-none'>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Marketing contact data</td>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Until withdrawal or 2 years after last interaction</td>
                                                            </tr>
                                                            <tr className='border-b border-[#e5e7eb] last:border-none'>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">Investor / shareholder records</td>
                                                                <td className="py-2 px-4 first:pl-0 last:pr-0">As legally required (may exceed 10 years)</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray700 leading-relaxed">
                                        <p>After the applicable retention period expires, we delete or anonymize the data in accordance with our normal operational procedures.</p>
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
                                        {/* <div className="bg-gray100 border border-gray300 rounded-xl p-6"> */}
                                            <div className="space-y-3 text-gray700 leading-relaxed">
                                                <div className="flex flex-wrap space-y-5 -mx-5">
                                                    <div className="flex-none w-full sm:w-1/2 px-5">
                                                        {/* Access */}
                                                        <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                            <h3 className="text-gray-900 font-medium text-base">Access</h3>
                                                            <p className="text-gray-500 text-sm mt-1">Access to your personal data</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex-none w-full sm:w-1/2 px-5">
                                                        {/* Data Portability */}
                                                        <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                            <h3 className="text-gray-900 font-medium text-base">Data Portability</h3>
                                                            <p className="text-gray-500 text-sm mt-1">Receive a copy of your data in a common electronic format</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex-none w-full sm:w-1/2 px-5">
                                                        {/* Rectification */}
                                                        <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                            <h3 className="text-gray-900 font-medium text-base">Rectification</h3>
                                                            <p className="text-gray-500 text-sm mt-1">Correction of inaccurate or incomplete data</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex-none w-full sm:w-1/2 px-5">
                                                        {/* Erasure */}
                                                        <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                            <h3 className="text-gray-900 font-medium text-base">Erasure</h3>
                                                            <p className="text-gray-500 text-sm mt-1">Deletion of your data (subject to legal limitations)</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex-none w-full sm:w-1/2 px-5">
                                                        {/* Restriction */}
                                                        <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                            <h3 className="text-gray-900 font-medium text-base">Restriction</h3>
                                                            <p className="text-gray-500 text-sm mt-1">Restriction of processing</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex-none w-full sm:w-1/2 px-5">
                                                        {/* Objection */}
                                                        <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                            <h3 className="text-gray-900 font-medium text-base">Objection</h3>
                                                            <p className="text-gray-500 text-sm mt-1">Object to processing based on legitimate interests</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex-none w-full sm:w-1/2 px-5">
                                                        {/* Objection */}
                                                        <div className="block bg-gray100 px-6 py-5 rounded-xl border border-gray-200">
                                                            <h3 className="text-gray-900 font-medium text-base">Withdrawal of Consent</h3>
                                                            <p className="text-gray-500 text-sm mt-1">At any time (for consent-based processing; with effect for the future)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* </div> */}
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




