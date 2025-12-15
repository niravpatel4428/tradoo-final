import React from 'react'
import Badge from '../components/Badge'
import { FaCheck } from 'react-icons/fa'

const FundingPahsesInvestPage = () => {
    return (
        <>
            <div className="py-42">
                <div className="container max-sm:px-0">
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='max-sm:px-4 space-y-5 md:space-y-8'>
                                <div>
                                    <Badge
                                        label="Reality Check"
                                    />
                                </div>
                                <div>
                                    <h2 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'>Funding phases & development progress</h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='max-sm:px-4 flex h-full flex-col justify-end gap-y-6'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>Overview of planned capitalization steps. No statement regarding future performance.</p>
                            </div>
                        </div>
                    </div>

                    {/* add design here */}
                    <div className="space-y-2 mt-14">
                        {/* <div className="bg-white rounded-3xl py-12 px-14"> */}
                        {fundingPhases.map((phase, index) => (
                            <div
                                key={index}
                                className={`rounded-3xl py-12 px-4 md:px-10 xxl:px-14 ${phase.dark
                                    ? "bg-gray900 text-white"
                                    : "bg-white text-gray800"
                                    }`}
                            >
                                <div className="grid grid-cols-1 xl:grid-cols-12 items-start gap-10">

                                    {/* Left */}
                                    <div className="xl:col-span-3 space-y-4">
                                        <div className="flex flex-wrap items-center gap-4">
                                            <h3 className={`text-4xl font-semibold leading-none ${phase.dark ? "text-white" : "text-gray800"}`}>{phase.year}</h3>
                                            {phase.badge && (
                                                <span className="text-base leading-4.5 font-medium px-3 py-1.75 rounded-md bg-lightgreen text-green flex items-center gap-2">
                                                    {phase.badge === "Done" && <FaCheck size={18} />}   {phase.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className={`text-lg leading-6 font-semibold ${phase.dark ? "text-white" : "text-gray800"}`}>
                                            {phase.subtitle}
                                        </p>
                                    </div>


                                    <div className="xl:col-span-9">
                                        <div className="flex flex-col xxl:flex-row gap-10">
                                            {/* Middle */}
                                            <div className="xl:flex-1 space-y-3">
                                                <ul className={`space-y-2 text-lg font-normal leading-[144%] pl-5 list-disc ${phase.dark ? "text-gray300" : "text-gray700"}`}>
                                                    {phase.bullets.map((item, i) => (
                                                        <li key={i}>
                                                            {/* <span>•</span> */}
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {phase.tag && (
                                                    <span className={`inline-block rounded-md mt-3 px-3 py-1.75 font-medium text-base leading-4.5 ${phase.dark ? "bg-white text-gray800" : "bg-gray200 text-gray800"}`}>
                                                        {phase.tag}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Right */}
                                            <div className="xl:flex-1">
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                                    {phase.stats.map((stat, i) => (
                                                        <div key={i} className='space-y-4'>
                                                            <p className={`text-lg font-normal leading-[144%] ${phase.dark ? "text-gray300" : "text-gray700"}`}>
                                                                {stat.label}
                                                            </p>
                                                            <p className={`text-2xl leading-8 font-semibold ${phase.dark ? "text-white" : "text-gray800"}`}>{stat.value}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                        {/* </div> */}
                    </div>

                    <div className="max-sm:px-4 md:text-center mt-10">
                        <p className='text-lg font-normal leading-[144%] text-gray700'>*Seed 3: No new equity – Share tokenization + Secondary market only (Growth Phase)</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FundingPahsesInvestPage

const fundingPhases = [
    {
        year: "2025",
        subtitle: "Pre-Seed",
        badge: "Done",
        dark: false,
        bullets: [
            "Tradoo AG (Zug) incorporated",
            "Token & SAFE structure defined",
            "Core team, board, advisors built",
            "Alpha development started",
        ],
        tag: "0.25M CHF",
        stats: [
            { label: "Raised", value: "0.25M" },
            { label: "Advisors", value: "3" },
            { label: "Status", value: "Done" },
        ],
    },
    {
        year: "Q1–Q3 2026",
        subtitle: "Seed 1 & MVP",
        badge: "Now",
        dark: true,
        bullets: [
            "Q1: Private Beta Launch",
            "Q2: Certik audit + 5 AM LOIs",
            "Q3: Public Beta + pilot AUM $1–5M",
            "Conversion: LoI → License → $20M pipe",
        ],
        tag: "2–4M CHF",
        stats: [
            { label: "Target", value: "2–4M" },
            { label: "Beta-users", value: "250+" },
            { label: "AM LOIs", value: "5–10" },
        ],
    },
    {
        year: "Q4 2026",
        subtitle: "Foundation & FMA",
        dark: false,
        bullets: [
            "Certik + Hacken audits completed",
            "Tradoo Foundation (LIE) incorporated",
            "LIE license entity formed, FMA filing submitted",
            "10 AM/FO partners → $20–50M pipeline",
        ],
        tag: "Regulation",
        stats: [
            { label: "FMA", value: "LIE" },
            { label: "Partners", value: "10+" },
            { label: "Pipeline", value: "$20–50M" },
        ],
    },
    {
        year: "2027",
        subtitle: "Token & Seed 2",
        dark: false,
        bullets: [
            "Regulated public launch (post private beta)",
            "Seed 2: CHF 3–5M @ 25M pre",
            "Token Sale: $9M @ $80M FDV + CEX listing",
            "License active: $100M AUM target",
        ],
        tag: "$9M + 3–5M CHF",
        stats: [
            { label: "Token", value: "$80M FDV" },
            { label: "AUM", value: "$100M+" },
            { label: "Revenue", value: "$1M+" },
        ],
    },
    {
        year: "2028",
        subtitle: "Seed 3* (No New Equity)",
        dark: false,
        bullets: [
            "Share tokenization (Security Token)",
            "Secondary market opens",
            "Liquidity event for Seed 1/2 investors",
            "EU market rollout (licensing & distribution)",
        ],
        tag: "~50M Valuation",
        stats: [
            { label: "Tokenize", value: "Shares" },
            { label: "Secondary market", value: "Hold or Sell" },
        ],
    },
    {
        year: "2029–30+",
        subtitle: "Scale or Exit",
        dark: false,
        bullets: [
            "Series A optional (global expansion)",
            "EU-wide scaling completed",
            "Strategic M&A exit",
            "5-year horizon achieved",
        ],
        tag: "Optional",
        stats: [
            { label: "AUM", value: ">500M" },
            { label: "Partners", value: "20+" },
            { label: "Options", value: "2" },
        ],
    },
];
