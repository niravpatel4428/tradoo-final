"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQItem {
    id: number;
    question: string;
    answer: string[];
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "How does the investment process work?",
        answer: [
            "During the current pilot, all flows run in a demo environment with simulated balances. No client assets are deployed until the required licenses are in place.",
        ]
    },
    {
        id: 2,
        question: "Why are there three share classes?",
        answer: [
            "Returns depend on market conditions and the selected strategy parameters.",
        ]
    },
    {
        id: 3,
        question: "When will shares be issued?",
        answer: [
            "Your assets stay inside your dedicated smart-contract vault. You remain the owner at all times.",
        ]
    },
    {
        id: 4,
        question: "Can shares be sold later?",
        answer: [
            "We currently support major L1 and L2 networks. More integrations are coming soon.",
        ]
    },
    {
        id: 5,
        question: "What does the Seed-1 Bonus include?",
        answer: [
            "There is no minimum during the private pilot phase.",
        ]
    },
    {
        id: 6,
        question: "How is Tradoo AG regulated?",
        answer: [
            "All execution is fully transparent and traceable on-chain.",
        ]
    },
    {
        id: 7,
        question: "When will the public token sale take place?",
        answer: [
            "We operate globally with regulatory alignment depending on the region.",
        ]
    },
];

const InvestorFAQ = () => {
    const [active, setActive] = useState<number | null>(null);
    const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
    const [height, setHeight] = useState(0);

    const toggle = (id: number) => {
        setActive((prev) => (prev === id ? null : id));
    };

    useEffect(() => {
        if (active !== null && contentRefs.current[active]) {
            setHeight(contentRefs.current[active]!.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [active]);
    return (
        <>
            <div className="bg-gray900 py-10 lg:py-20 block">
                <div className="container">
                    <div className="flex flex-wrap flex-col lg:flex-row gap-10">
                        <div className="flex-none w-full lg:w-[400px] xl:w-[450px]">
                            {/* Page Title */}
                            <div className="block max-xs:space-y-4 space-y-7">
                                <div className="max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-white">
                                    <h2>Investor FAQ</h2>
                                </div>
                                <div className="block max-xs:text-base text-lg leading-snug text-gray400 space-y-4">
                                    <p>Answers to key questions about the Tradoo investment, process and investor rights.</p>
                                </div>
                            </div>
                            {/* Page Title */}
                        </div>

                        <div className="flex-none w-full lg:flex-1">
                            {/* Accordion */}
                            <div className="block space-y-4">
                                {faqData.map((item) => (
                                    <div key={item.id} className="bg-gray800 rounded-2xl lg:rounded-3xl py-4 md:py-6 xl:py-9">
                                        <button onClick={() => toggle(item.id)} className="w-full flex justify-between items-center px-4 md:px-6 xl:px-10 text-left text-white text-lg font-semibold outline-0">
                                            {item.question}
                                            <FiChevronDown
                                                size={22}
                                                className={`transition-transform duration-300 min-w-5 min-h-5 ml-2 ${active === item.id ? "rotate-180" : "rotate-0"
                                                    }`}
                                            />
                                        </button>

                                        <div
                                            ref={(el) => {
                                                contentRefs.current[item.id] = el;
                                            }}
                                            className="overflow-hidden transition-all duration-300"
                                            style={{
                                                maxHeight: active === item.id ? `${height}px` : "0px",
                                            }}
                                        >
                                            <div className="pt-4 md:pt-6 px-4 md:px-6 xl:px-10 text-gray400 text-base leading-snug space-y-4">
                                                {item.answer.map((para, index) => (
                                                    <p key={index}>{para}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Accordion */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvestorFAQ
