import React, { JSX } from 'react'
import { Target, SlidersVertical, CircleCheck } from "lucide-react"

const WorkWithTradoo: React.FC = () => {

    interface Feature {
        text: string;
    }

    interface ModeCard {
        title: string;
        description: string;
        icon: JSX.Element;
        highlight?: boolean;
        features: Feature[];
    }

    const modes: ModeCard[] = [
        {
            title: "Guided mode: 6+1 risk profiles",
            description:
                "For teams who want clear risk buckets. Choose one of our 6+1 profiles from capital preservation to growth and let the engine map the appropriate strategy modules for BTC, ETH and USDC.",
            icon: <Target className="h-6 w-6" />,
            highlight: false,
            features: [
                { text: "Predefined volatility and drawdown ranges per profile" },
                { text: "Automatic selection of core, growth and hedging modules" },
                { text: "Consistent behavior across client accounts" },
            ],
        },
        {
            title: "Pro mode: full strategy toolbox",
            description:
                "For teams who need maximum control. Use our 15 strategy modules as a toolbox, configure allocations and parameters yourself and run them within your own mandate definitions.",
            icon: <SlidersVertical className="h-6 w-6" />,
            highlight: true,
            features: [
                { text: "Adjust BTC / ETH / USDC allocation per vault" },
                { text: "Toggle individual modules on or off per mandate" },
                { text: "Set parameters like DCA frequency, hedge triggers, profit-taking logic" },
                { text: "Keep everything within predefined risk guardrails" },
            ],
        },
    ];

    return (
        <div className='max-xs:py-10 max-xs:pb-12 max-sm:pb-12 py-42 bg-white'>
            <div className='container'>
                <div>
                    <div className='max-sm:text-left text-center'>
                        <div className=''>
                            <h2 className="max-xs:tracking-[-1px] max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xl:text-56 font-semibold text-gray800 tracking-[-1.68px] xl:leading-16">
                                Two Ways to Work with Tradoo
                            </h2>
                        </div>
                        <div className="mt-4 w-full max-w-180 mx-auto">
                            <p className="text-lg font-normal leading-[144%] text-gray700">
                                You can start with guided risk profiles or go straight to the toolbox and design your own vaults. In both cases, we keep assets in non custodial smart vaults and operate within predefined risk guardrails. The strategy toolbox gives you these levers in a structured way – the section below shows how they come together in practice.
                            </p>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className="grid md:grid-cols-2 gap-8">
                            {modes.map((mode, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl bg-gray100 hover:bg-gray200 text-gray700 shadow-sm p-6 md:p-8 border-2 transition-all
            ${mode.highlight ? "border-gray900" : "border-gray300"}`}
                                >
                                    <div
                                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg 
              ${mode.highlight ? "bg-gray900 text-white" : "bg-gray400 text-gray900"}`}
                                    >
                                        {mode.icon}
                                    </div>

                                    <h3 className="text-xl text-gray900 font-semibold mb-3">{mode.title}</h3>
                                    <p className="text-gray700 text-lg leading-relaxed mb-6">{mode.description}</p>

                                    <ul className="space-y-3">
                                        {mode.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CircleCheck className="h-5 w-5 text-gray900 mt-0.5 shrink-0" />
                                                <span className="text-lg text-gra700">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div></div>
                        <div className="flex flex-col items-center">
                            <div className="w-0.5 h-32 bg-gradient-to-b from-[#001A4D]/90 via-[#001A4D]/40 to-transparent rounded-full"></div>
                            <div className="relative mt-1">
                                <div className="absolute inset-0 bg-gray400 rounded-full blur-xl scale-[2]"></div>
                                <div
                                    className="relative text-gray800 flex h-10 w-10 items-center justify-center rounded-full bg-gray400 border-2 border-gray700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-chevron-down h-6 w-6 text-primary">
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg></div>
                            </div>
                            <p className="text-sm text-gray800 mt-3 font-medium tracking-wide">FULL TOOLBOX ACCESS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkWithTradoo
