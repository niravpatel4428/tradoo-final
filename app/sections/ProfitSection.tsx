"use client";

import React from "react";
import Badge from "../components/Badge";
import Image, { StaticImageData } from "next/image";

import profit from "@/public/image/profit.jpg";
import clipboardcheck from "@/public/image/svg/clipboardcheck.svg";
import book from "@/public/image/svg/book.svg";
import pen from "@/public/image/svg/pen-icon.svg";
import calendersearch from "@/public/image/svg/calendar-search.svg";

interface BenefitItem {
    icon: StaticImageData;
    title: string;
    desc: string;
}

interface ClassesItem {
    label: string;
    desc: string;
}

interface BenefitBlock {
    type: "image" | "double";
    img?: StaticImageData;
    title?: string;
    desc?: string;
    classes?: ClassesItem[];
    items?: BenefitItem[];
}

const ProfitSection: React.FC = () => {
    const benefitsData: BenefitBlock[] = [
        {
            type: "image",
            img: profit,
            title: "Share classes",
            desc: "Non-voting,  CHF 1,000–25,000",
            classes: [
                {
                    label: "Class A",
                    desc: "Non-voting,  CHF 1,000–25,000",
                },
                {
                    label: "Class B",
                    desc: "Preferred, Seed investors",
                },
            ],
        },
        {
            type: "double",
            items: [
                {
                    icon: clipboardcheck,
                    title: "Share participation",
                    desc: "Nominal-value shares of Tradoo AG with voting rights.",
                },
                {
                    icon: book,
                    title: "Share register entry",
                    desc: "Entry in the official share register via Ledgy.",
                },
            ],
        },
        {
            type: "double",
            items: [
                {
                    icon: pen,
                    title: "Digital subscription",
                    desc: "Digital signature via Skribble (legally binding).",
                },
                {
                    icon: calendersearch,
                    title: "Investor updates",
                    desc: "Monthly report on progress, financials & governance.",
                },
            ],
        },
    ];

    return (
        <div className="max-xs:py-10 max-xs:pb-2 max-md:pb-2 py-42">
            <div className="container max-sm:p-0">
                <div className='max-sm:px-4 grid grid-cols-12 gap-6'>
                    <div className='col-span-12 md:col-span-6'>
                        <div className='space-y-6'>
                            <div>
                                <Badge
                                    label="Your Profit"
                                />
                            </div>
                            <div>
                                <h3 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-gray800'>What you receive</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <div className='flex flex-col w-full max-w-170 ml-auto h-full justify-end gap-5'>
                            <p className='text-lg font-normal leading-[144%] text-gray700'>All documents and register management are handled digitally. All documents and register management are handled digitally.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-14 xxl:mt-16">
                    <div className="grid grid-cols-12 gap-2">
                        {benefitsData.map((block, index) => (
                            <div className="col-span-12 lg:col-span-4" key={index}>
                                {/* IMAGE CARD */}
                                {block.type === "image" && block.img && (
                                    <div className="h-full flex flex-col justify-between rounded-3xl bg-white overflow-hidden hover:bg-gray300 transition-all duration-300">
                                        <div className="w-full h-101">
                                            <Image
                                                src={block.img}
                                                alt="img"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="px-4 py-10 md:p-5 xxl:p-10 flex flex-col gap-y-5">
                                            <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                                {block.title}
                                            </span>
                                            {block.classes?.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex gap-4 text-lg text-gray700 font-normal leading-[144%]"
                                                >
                                                    <span className="font-semibold text-lightgray900">
                                                        {item.label}
                                                    </span>

                                                    <p className="text-lg text-gray700 font-normal leading-[144%]">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                )}

                                {/* DOUBLE BLOCK */}
                                {block.type === "double" && (
                                    <div className="flex flex-col gap-y-2 h-full justify-between">
                                        {block.items?.map((item, i) => (
                                            <div
                                                key={i}
                                                className="hover:bg-gray300 transition-all duration-300 flex flex-col justify-between gap-y-12 h-full px-4 py-10 md:p-5 xxl:p-10 rounded-3xl bg-white"
                                            >
                                                <div className="rounded-xl min-w-16 w-16 h-16 flex justify-center items-center bg-gray100 p-3">
                                                    <Image src={item.icon} alt="img" />
                                                </div>

                                                <div className="flex flex-col gap-y-5">
                                                    <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-lightgray900">
                                                        {item.title}
                                                    </span>
                                                    <p className="text-lg text-gray700 font-normal leading-[144%]">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfitSection;
