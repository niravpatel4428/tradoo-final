"use client";

import React, { useEffect, useState } from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import FooterGradient from "@/public/image/footer-top-gradient.png";
import clockicon from "@/public/image/svg/clock-icon.svg";
import redplus from "@/public/image/svg/red-plus.svg";
import InvestWidget from "../components/InvestWidget";

import { StaticImageData } from "next/image";

type InfoItem = {
  id: number;
  label: string;
  highlight?: string;
  icon?: StaticImageData;
};

const infoList: InfoItem[] = [
  {
    id: 1,
    label: "Share register",
    highlight: "Ledgy",
  },
  {
    id: 2,
    label: "Digital signature",
    highlight: "Skribble",
  },
  {
    id: 3,
    label: "Made in",
    highlight: "Switzerland",
    icon: redplus,
  },
];


/* =======================
   Countdown Logic
======================= */




type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const TARGET_DATE = new Date("2026-03-02T00:00:00");

const getTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const diff = TARGET_DATE.getTime() - now;

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

/* =======================
   Component
======================= */

const InvestBanner: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
        setTime(getTimeLeft());

        const interval = setInterval(() => {
            setTime(getTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-xs:pt-30 max-xs:pb-12 max-sm:pb-24 pt-46 pb-42 bg-gray900 relative overflow-hidden">
            <div className="container max-sm:p-0">
                <div className="z-10 relative">
                    <div className="sm:text-center max-sm:px-4">
                        {/* Badge */}
                        <Badge
                            label="Early Access Opportunity"
                            variant="darkgreen"
                            icon={
                                <Image
                                    src="/image/svg/building.svg"
                                    alt="icon"
                                    width={15}
                                    height={15}
                                />
                            }
                        />

                        {/* Title */}
                        <div className="mt-8">
                            <h1 className="max-xs:text-3xl max-xs:leading-9 max-xs:tracking-normal text-5xl leading-13 xxl:text-80 font-semibold xxl:leading-22 tracking-[-1.44px] xxl:tracking-[-2.40px] text-white">
                                Seed 1 Participation in Tradoo AG
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="mt-8 w-full max-w-230 mx-auto">
                            <p className="text-lg xxl:text-xl font-normal leading-7 text-gray400">
                                Tradoo operates a rule-based, model-driven approach with adaptive
                                weighting across market conditions.
                            </p>
                        </div>
                    </div>
                    {/* ======================= Countdown Section ======================= */}
                    {mounted && (
                        <div className="mt-12 flex flex-col max-sm:items-start items-center gap-y-6">
                            {/* Top label */}
                            <div className="max-sm:px-4 flex items-center gap-2 text-gray400 text-lg leading-[144%]">
                                <span className="flex min-w-5 h-5 w-5 items-center justify-center rounded-full bg-white/20">
                                    <Image src={clockicon} alt="icon" className="max-h-full" />
                                </span>
                                <span>
                                    Seed 1 sale starts{" "}
                                    <strong className="text-white font-semibold">2nd March 2026</strong>
                                </span>
                            </div>

                            {/* Countdown box */}
                            <div className="w-full max-w-230 mx-auto rounded-3xl bg-lightgray900 max-sm:py-8 max-sm:px-4 p-8">
                                <div className="w-full max-w-161 mx-auto grid grid-cols-4 gap-4 lg:gap-5">
                                    <TimeBlock value={time.days} label="Days" />
                                    <TimeBlock value={time.hours} label="Hours" />
                                    <TimeBlock value={time.minutes} label="Minutes" />
                                    <TimeBlock value={time.seconds} label="Seconds" />
                                </div>
                            </div>
                        </div>
                    )}
                    {/* ======================= InvestWidget ======================= */}
                    <div className="max-sm:mt-2 mt-14">
                        <InvestWidget />
                    </div>
                    <div className="mt-2.5 md:mt-12 max-sm:px-4">
                        <ul className="flex gap-3 md:gap-12 max-md:flex-wrap md:justify-center">
                            {infoList.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex gap-2 text-base leading-5.5 text-gray300"
                                >
                                    {item.label}

                                    {item.icon && (
                                        <Image src={item.icon} alt="icon" />
                                    )}

                                    <span className="font-medium text-white">
                                        {item.highlight}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Gradient */}
            <div className="max-sm:hidden absolute w-full max-w-480 mx-auto bottom-0 left-1/2 -translate-x-1/2 h-[452px] overflow-hidden">
                <Image
                    src={FooterGradient}
                    alt="Footer Gradient"
                    className="w-auto h-full object-cover object-center"
                />
            </div>
        </div>
    );
};

export default InvestBanner;

/* =======================
   Time Block
======================= */

function TimeBlock({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    return (
        <div className="flex max-md:flex-col max-md:items-start items-end gap-3">
            <span className="text-4xl xl:text-5xl font-semibold leading-none xl:tracking-[-1.44px] text-white">
                {String(value).padStart(2, "0")}
            </span>
            <span className="max-sm:text-base text-lg font-semibold leading-6 text-white">{label}</span>
        </div>
    );
}
