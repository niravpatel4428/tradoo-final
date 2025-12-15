
import React from 'react'
import Badge from '../components/Badge'
import { ChevronRight } from "lucide-react";


const WorkWithTradoo: React.FC = () => {

    const featureBoxes = [
        {
            title: "Guided Mode: 6+1 risk profiles",
            desc: "For teams who want clear risk buckets. Choose one of our 6+1 profiles from capital preservation to growth and let the engine map the appropriate strategy modules for BTC, ETH and USDC.",
            list: [
                { text: "Predefined volatility and drawdown ranges per profile" },
                { text: "Automatic selection of core, growth and hedging modules" },
                { text: "Consistent behavior across client accounts" },
            ],
        },
        {
            title: "Pro Mode: Full Strategy Toolbox",
            desc: "For teams who need maximum control. Use our 15 strategy modules as a toolbox, configure allocations and parameters yourself and run them within your own mandate definitions.",
            list: [
                { text: "Adjust BTC / ETH / USDC allocation per vault" },
                { text: "Toggle individual modules on or off per mandate" },
                { text: "Set parameters like DCA frequency, hedge triggers, profit-taking logic" },
                { text: "Keep everything within predefined risk guardrails" },
            ],
        },
    ];

    return (
        <div className='max-xs:py-15 max-xs:pb-2 max-sm:pb-2 py-42'>
            <div className='container max-sm:p-0'>
                <div className='space-y-16'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-6'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='space-y-6'>
                                <div>
                                    <Badge
                                        label="Two Paths"
                                    />
                                </div>
                                <div>
                                    <h3 className='w-full max-w-lg max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-gray800'>Two Ways to Work with Tradoo</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col h-full justify-end gap-5 w-full max-w-2xl ml-auto'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>You can start with guided risk profiles or go straight to the toolbox and design your own vaults. In both cases, we keep assets in non-custodial smart vaults and operate within predefined risk guardrails. The strategy toolbox gives you these levers in a structured way – the section below shows how they come together in practice.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {featureBoxes.map((box, i) => (
                            <div key={i} className="h-full bg-white rounded-3xl space-y-8 px-8 py-8 lg:px-12 lg:py-14">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                        {box.title}
                                    </h3>
                                    <p className="text-lg font-normal leading-[144%] text-gray700">
                                        {box.desc}
                                    </p>
                                </div>

                                <ul className="space-y-3">
                                    {box.list.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="min-w-5 w-5 h-5 mt-0.5 rounded-full flex justify-center items-center bg-[#4A948D]">
                                                <ChevronRight className="w-4 h-4 text-white" />
                                            </span>
                                            <span className="text-lg font-normal leading-[144%] text-gray700">
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkWithTradoo
