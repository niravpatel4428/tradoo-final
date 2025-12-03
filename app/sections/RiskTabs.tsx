// "use client";

// import React, { useEffect, useState, useRef } from "react";

// type Asset = { label: string; percent: number; color: string };
// type Profile = {
//   title: string;
//   sub: string;
//   desc: string;
//   assets: Asset[];
// };

// const tabs = [
//   "Ultra Stable",
//   "Conservative",
//   "Moderate",
//   "Macro Adaptive",
//   "Opportunity",
//   "High-Risk Adaptive",
// ];

// const profiles: Profile[] = [
//   {
//     title: "Ultra Stable",
//     sub: "Delta Neutral",
//     desc: "Built for maximum capital preservation with minimal volatility.",
//     assets: [
//       { label: "USDC", percent: 80, color: "bg-[#D8E6FF]" },
//       { label: "BTC", percent: 10, color: "bg-[#FFE7B5]" },
//       { label: "ETH", percent: 10, color: "bg-[#E4E6F3]" },
//     ],
//   },
//   {
//     title: "Conservative",
//     sub: "Trend & Defensive Balance",
//     desc: "Built for maximum capital preservation with minimal volatility.",
//     assets: [
//       { label: "USDC", percent: 60, color: "bg-[#D8E6FF]" },
//       { label: "BTC", percent: 20, color: "bg-[#FFE7B5]" },
//       { label: "ETH", percent: 20, color: "bg-[#E4E6F3]" },
//     ],
//   },
//   {
//     title: "Moderate",
//     sub: "Balanced Momentum",
//     desc: "Built for maximum capital preservation with minimal volatility.",
//     assets: [
//       { label: "USDC", percent: 40, color: "bg-[#D8E6FF]" },
//       { label: "BTC", percent: 30, color: "bg-[#FFE7B5]" },
//       { label: "ETH", percent: 30, color: "bg-[#E4E6F3]" },
//     ],
//   },
//   {
//     title: "Macro Adaptive",
//     sub: "Macro & Sentiment Aligned",
//     desc: "Built for maximum capital preservation with minimal volatility.",
//     assets: [
//       { label: "USDC", percent: 30, color: "bg-[#D8E6FF]" },
//       { label: "BTC", percent: 35, color: "bg-[#FFE7B5]" },
//       { label: "ETH", percent: 35, color: "bg-[#E4E6F3]" },
//     ],
//   },
//   {
//     title: "Opportunity",
//     sub: "Delta Neutral",
//     desc: "Built for maximum capital preservation with minimal volatility.",
//     assets: [
//       { label: "USDC", percent: 50, color: "bg-[#D8E6FF]" },
//       { label: "BTC", percent: 25, color: "bg-[#FFE7B5]" },
//       { label: "ETH", percent: 25, color: "bg-[#E4E6F3]" },
//     ],
//   },
//   {
//     title: "High-Risk Adaptive",
//     sub: "Delta Neutral",
//     desc: "Built for maximum capital preservation with minimal volatility.",
//     assets: [
//       { label: "USDC", percent: 20, color: "bg-[#D8E6FF]" },
//       { label: "BTC", percent: 40, color: "bg-[#FFE7B5]" },
//       { label: "ETH", percent: 40, color: "bg-[#E4E6F3]" },
//     ],
//   },
// ];

// const RiskTabs = () => {
//   const [active, setActive] = useState(0);
//   const [ready, setReady] = useState(false);
//   const [boot, setBoot] = useState(false); // 🔥 FIX for first-load animation
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const timer = useRef<NodeJS.Timeout | null>(null);

//   // 🔥 Fix: ensure first tab animation runs after first render
//   useEffect(() => {
//     setTimeout(() => setBoot(true), 30);
//   }, []);

//   // 🔥 Strict autoplay: changes tab ONLY after 6s animation completes
//   const startTimer = () => {
//     if (timer.current) clearTimeout(timer.current);

//     timer.current = setTimeout(() => {
//       setActive((prev) => (prev + 1) % tabs.length);
//     }, 6000);
//   };

//   // Start autoplay when section enters view
//   useEffect(() => {
//     const target = sectionRef.current;
//     if (!target) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setReady(true);
//         });
//       },
//       { threshold: 0.4 }
//     );

//     observer.observe(target);
//     return () => observer.disconnect();
//   }, []);

//   // Restart timer on active tab change
//   useEffect(() => {
//     if (ready) startTimer();
//   }, [ready, active]);

//   // Manual click → move tab + restart animation
//   const handleClick = (i: number) => {
//     setActive(i);
//   };

//   return (
//     <div ref={sectionRef} className="w-full flex flex-col gap-6">
//       {/* Tabs */}
//       <div className="flex overflow-x-auto gap-3 px-2 no-scrollbar">
//         {tabs.map((t, i) => (
//           <button
//             key={i}
//             onClick={() => handleClick(i)}
//             className={`relative flex-shrink-0 px-8 py-4 rounded-2xl text-[15px] font-semibold
//               transition-all duration-300 whitespace-nowrap border
//               ${
//                 active === i
//                   ? "bg-white text-black shadow-md border-gray-200"
//                   : "bg-white text-gray-700 border-gray-200"
//               }`}
//           >
//             {t}

//             {/* Animated fill */}
//             {active === i && boot && (
//               <div
//                 key={active} // important for animation reset
//                 className="absolute inset-0 rounded-2xl pointer-events-none"
//                 style={{
//                   background:
//                     "linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.05))",
//                   width: "0%",
//                   animation: "fillTab 6s linear forwards",
//                 }}
//               />
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Active Content */}
//       <div className="flex flex-col gap-4 px-2">
//         <div className="bg-white shadow-sm rounded-xl p-4 border border-gray-200">
//           <h3 className="text-base font-semibold text-gray-900">
//             {profiles[active].title}
//           </h3>
//           <p className="text-sm text-gray-500 -mt-1">{profiles[active].sub}</p>
//           <p className="text-xs text-gray-500 mt-1 mb-3">
//             {profiles[active].desc}
//           </p>

//           {/* Bars */}
//           <div className="flex gap-2 mb-3">
//             {profiles[active].assets.map((a, i) => (
//               <div
//                 key={i}
//                 style={{ width: `${a.percent}%` }}
//                 className={`${a.color} h-3 rounded-lg`}
//               />
//             ))}
//           </div>

//           {/* Labels */}
//           <div className="flex gap-4 flex-wrap">
//             {profiles[active].assets.map((a, i) => (
//               <div key={i} className="text-xs flex items-center gap-1">
//                 <span className="font-semibold">{a.label}</span>
//                 <span className="bg-gray-100 px-2 py-0.5 rounded-md text-[10px]">
//                   {a.percent}%
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fillTab {
//           from {
//             width: 0%;
//           }
//           to {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default RiskTabs;


"use client";

import React, { useEffect, useState, useRef } from "react";
import Badge from "../components/Badge";
import Button from "../components/Button";

type Asset = { label: string; percent: number; color: string };
type Profile = {
    title: string;
    sub: string;
    desc: string;
    assets: Asset[];
};

const tabs = [
    "Ultra Stable",
    "Conservative",
    "Moderate",
    "Macro Adaptive",
    "Opportunity",
    "High-Risk Adaptive",
];

const profiles: Profile[] = [
    {
        title: "Ultra Stable",
        sub: "Delta Neutral",
        desc: "Built for maximum capital preservation with minimal volatility.",
        assets: [
            { label: "USDC", percent: 80, color: "bg-[#CFE1F4]" },
            { label: "BTC", percent: 10, color: "bg-[#FFE4AB]" },
            { label: "ETH", percent: 10, color: "bg-[#DEE3EB]" },
        ],
    },
    {
        title: "Conservative",
        sub: "Trend & Defensive Balance",
        desc: "Built for maximum capital preservation with minimal volatility.",
        assets: [
            { label: "USDC", percent: 60, color: "bg-[#CFE1F4]" },
            { label: "BTC", percent: 20, color: "bg-[#FFE4AB]" },
            { label: "ETH", percent: 20, color: "bg-[#DEE3EB]" },
        ],
    },
    {
        title: "Moderate",
        sub: "Balanced Momentum",
        desc: "Built for maximum capital preservation with minimal volatility.",
        assets: [
            { label: "USDC", percent: 40, color: "bg-[#CFE1F4]" },
            { label: "BTC", percent: 30, color: "bg-[#FFE4AB]" },
            { label: "ETH", percent: 30, color: "bg-[#DEE3EB]" },
        ],
    },
    {
        title: "Macro Adaptive",
        sub: "Macro & Sentiment Aligned",
        desc: "Built for maximum capital preservation with minimal volatility.",
        assets: [
            { label: "USDC", percent: 30, color: "bg-[#CFE1F4]" },
            { label: "BTC", percent: 35, color: "bg-[#FFE4AB]" },
            { label: "ETH", percent: 35, color: "bg-[#DEE3EB]" },
        ],
    },
    {
        title: "Opportunity",
        sub: "Delta Neutral",
        desc: "Built for maximum capital preservation with minimal volatility.",
        assets: [
            { label: "USDC", percent: 50, color: "bg-[#CFE1F4]" },
            { label: "BTC", percent: 25, color: "bg-[#FFE4AB]" },
            { label: "ETH", percent: 25, color: "bg-[#DEE3EB]" },
        ],
    },
    {
        title: "High-Risk Adaptive",
        sub: "Delta Neutral",
        desc: "Built for maximum capital preservation with minimal volatility.",
        assets: [
            { label: "USDC", percent: 20, color: "bg-[#CFE1F4]" },
            { label: "BTC", percent: 40, color: "bg-[#FFE4AB]" },
            { label: "ETH", percent: 40, color: "bg-[#DEE3EB]" },
        ],
    },
];

const RiskTabs = () => {
    const [active, setActive] = useState(0);
    const [ready, setReady] = useState(false);
    const [boot, setBoot] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const timer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setTimeout(() => setBoot(true), 30);
    }, []);

    const startTimer = () => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setActive((prev) => (prev + 1) % tabs.length);
        }, 6000);
    };

    useEffect(() => {
        const target = sectionRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setReady(true);
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (ready) startTimer();
    }, [ready, active]);

    const handleClick = (i: number) => {
        setActive(i);
    };

    return (
        <div className="max-xs:py-14 py-42">
            <div className="container max-md:p-0">
                <div>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-6">
                            <div className="max-md:px-4">
                                <div>
                                    <Badge
                                        label="The Tradoo Framework"
                                    />
                                </div>
                                <div className="mt-8">
                                    <h3 className="max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.20px] xxl:tracking-[-1.68px] text-gray800">Structured portfolios built for your risk tolerance.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="max-md:px-4 h-full w-full md:max-w-171 ml-auto flex flex-col gap-5 justify-end">
                                <div>
                                    <p className="text-lg font-normal leading-[144%] text-gray700">Tradoo adjusts exposure within your profile boundaries. We shift between growth assets and stability reserves based on market regimes, volatility conditions and behavioral indicators. No speculation. No strategy hopping. Just structure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={sectionRef} className="mt-18 w-full flex flex-col gap-6">

                        {/* --------------------------------------------- */}
                        {/* DESKTOP TABS — unchanged (hidden on mobile)    */}
                        {/* --------------------------------------------- */}
                        <div className="hidden md:flex bg-gray200 rounded-3xl p-1 overflow-x-auto gap-1 no-scrollbar">
                            {tabs.map((t, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleClick(i)}
                                    className={`cursor-pointer relative overflow-hidden flex-[1_0_0] p-5 rounded-20 md:text-sm lg:text-lg font-semibold
              transition-all duration-300 xxl:whitespace-nowrap text-gray800 leading-6 text-center border-transparent border-0 
              ${active === i
                                            ? `bg-white shadow-[var(--shadowtab)] border-transparent border-0 after:content-['']
                                            after:absolute after:inset-0 after:rounded-20
                                            after:pointer-events-none
                                            after:shadow-[var(--shadowtab)]`
                                            : "text-gray800 md:text-sm lg:text-lg font-semibold leading-6 text-center border-transparent border-0"
                                        }`}

                                >
                                    {t}

                                    {active === i && boot && ready && (
                                        <div
                                            key={active}
                                            className="absolute inset-0 rounded-20 pointer-events-none"
                                            style={{
                                                background:
                                                    "linear-gradient(to right, rgba(0,0,0,0.03), rgba(0,0,0,0.03))",
                                                width: "0%",
                                                animation: "fillTab 6s linear forwards",
                                            }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* -------------------------------------------------- */}
                        {/* DESKTOP CONTENT — only current tab (unchanged)     */}
                        {/* -------------------------------------------------- */}
                        <div className="hidden md:flex flex-col gap-4 px-2">
                            <div className="bg-white rounded-3xl p-8">
                                <h3 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                    {profiles[active].title}
                                    <span className="text-romansilver pl-3">{profiles[active].sub}</span>
                                </h3>
                                <p className="text-lg font-normal leading-[144%] text-gray700 mt-2 mb-8">
                                    {profiles[active].desc}
                                </p>

                                <div className="w-full">

                                    {/* TOP BARS WITH LABEL + PERCENT BADGE */}
                                    <div className="flex gap-2 mb-4">
                                        {profiles[active].assets.map((a, i) => (
                                            <div
                                                key={i}
                                                style={{ width: `${a.percent}%` }}
                                                className={`${a.color} h-30 rounded-lg relative flex items-start p-4`}
                                            >
                                                {/* Label */}
                                                <span className="text-sm font-medium leading-4 text-darblue">{a.label}</span>

                                                {/* Percent badge */}
                                                <span className="absolute right-4 bottom-4 bg-gunmetal text-white text-sm font-medium leading-5 px-2 py-0.5 rounded-md">
                                                    {a.percent}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* -------------------------------------------------- */}
                        {/* MOBILE VERSION — card list (NO TABS)              */}
                        {/* -------------------------------------------------- */}
                        <div className="md:hidden flex flex-col gap-2">
                            {profiles.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl py-12 px-4"
                                >
                                    <h3 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                        {item.title}
                                        <span className="block text-romansilver pt-2">{item.sub}</span>
                                    </h3>
                                    {/* <p className="text-sm text-gray-500 -mt-1">{item.sub}</p> */}
                                    <p className="text-lg font-normal leading-[144%] text-gray700 mt-2 mb-8">{item.desc}</p>

                                    {/* Bars */}
                                    <div className="flex gap-2 mb-8">
                                        {item.assets.map((a, i) => (
                                            <div
                                                key={i}
                                                style={{ width: `${a.percent}%` }}
                                                className={`${a.color} h-20 rounded-md`}
                                            />
                                        ))}
                                    </div>

                                    {/* Labels with small color box */}
                                    <div className="flex gap-4 flex-wrap">
                                        {item.assets.map((a, i) => (
                                            <div key={i} className="text-xs flex items-center gap-2">

                                                {/* COLOR SQUARE BOX */}
                                                <span
                                                    className={`w-5 h-5 rounded-md ${a.color}`}
                                                ></span>

                                                {/* LABEL */}
                                                <span className="text-sm font-medium leading-4 text-darblue pl-1">{a.label}</span>

                                                {/* % BOX */}
                                                <span className="bg-gunmetal text-white text-sm font-medium leading-5 px-2 py-0.5 rounded-md">
                                                    {a.percent}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <style jsx>{`
        @keyframes fillTab {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
                    </div>
                    <div className="mt-10 max-md:px-4">
                        <Button label="Get Early Access" href="#" trailingIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskTabs;
