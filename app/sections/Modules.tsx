import React from 'react'
import Image from "next/image";
import shield from "@/public/image/svg/shield-check.svg";
import atom from "@/public/image/svg/atom.svg";
import graph from "@/public/image/svg/graph.svg";
import layer from "@/public/image/svg/layers.svg";
import Badge from '../components/Badge';
import Button from '../components/Button';



const Modules: React.FC = () => {

    const items = [
        {
            icon: atom,
            title: "Core & Stability",
            desc: "These modules form the foundation of a portfolio. They provide liquidity, calm and discipline even in turbulent markets. The core aligns directly with your target allocation for BTC, ETH and USDC."
        },
        {
            icon: graph,
            title: "Growth & Building",
            desc: "These strategies use market phases to build BTC and ETH exposure systematically or to generate additional returns. The goal is controlled growth without unnecessary risks."
        },
        {
            icon: shield,
            title: "Risk Control & Hedging",
            desc: "These modules protect the portfolio from excess movements, unexpected shifts and technical risks. When markets turn or become volatile, these strategies activate first."
        },
        {
            icon: layer,
            title: "Meta Engine & Control Logic",
            desc: "These modules execute no trades. They control the overall process: identify regimes, analyze events, filter strategies and determine which modules are active or paused."
        }
    ];

    return (
        <div className='max-xs:py-10 max-xs:pb-12 max-sm:pb-42 py-42 bg-white'>
            <div className='container max-sm:p-0'>
                <div className='space-y-16'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-6'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='space-y-8'>
                                <div>
                                    <Badge
                                        label="Our 15 Strategies"
                                    />
                                </div>
                                <div>
                                    <h3 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-gray800'>The Modules Behind Each Vault.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col w-full max-w-170 ml-auto h-full justify-end gap-5'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>Each module has a clearly defined purpose. The engine combines them to balance core stability, growth and risk control, tailored to your risk profile or configured directly by you in Pro mode.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">

                        {items.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3">
                                <div className="h-full gap-y-12 flex flex-col rounded-3xl max-xs:p-5 max-sm:px-4 p-8 bg-gray100">
                                    <div className="w-16 h-16 rounded-xl p-3 bg-white flex justify-center items-center">
                                        <Image
                                            src={item.icon}
                                            alt="icon"
                                            className="max-h-full"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-6">
                                        <h5 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                            {item.title}
                                        </h5>
                                        <p className="text-lg font-normal leading-[144%] text-gray700">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='max-sm:px-4'>
                        <Button label="Explore Strategy Framework" href="/strategy-framework" trailingIcon  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modules
