import React from 'react'
import Badge from '../components/Badge'

const WhyStrategyToolbox = () => {

    const steps = [
        {
            number: 1,
            title: "Start from mandates, not from protocols.",
            detail:
                "You define objectives and risk envelope – the toolbox translates them into modules, not the other way round.",
        },
        {
            number: 2,
            title: "Full control without building your own infrastructure.",
            detail:
                "Use our modules, vault engine and APIs instead of stitching together wallets, protocols and dashboards yourself.",
        },
        {
            number: 3,
            title: "Non-custodial by default.",
            detail:
                "Client assets sit in dedicated smart vaults; Tradoo operates the rules within your agreed limits.",
        },
        {
            number: 4,
            title: "Ready to connect to your stack.",
            detail:
                "Use APIs to feed vault data into your existing reporting, treasury or portfolio systems.",
        },
    ];

    return (
        <div className='max-sm:pb-2 pt-24 pb-42 bg-gray900'>
            <div className='container max-sm:p-0'>
                <div className='space-y-16'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-y-8 lg:gap-8'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='space-y-6'>
                                <div>
                                    <Badge label="Why Strategy Toolbox" variant='darkgreen' />
                                </div>
                                <div>
                                    <h3 className='max-xs:tracking-normal max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-white'>From Mandate to Execution <span className='text-gray500'>— Without Rebuilding the Stack</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col h-full justify-end gap-5 ml-auto'>
                                <p className='text-lg font-normal leading-[144%] text-gray400'>A modular, non-custodial framework that turns investment mandates into governed strategy vaults.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                        {steps.map((item) => (
                            <div key={item.number} className="block">
                                <div className="flex flex-col gap-12 max-xs:gap-6 bg-gray800 rounded-xl md:rounded-3xl py-8 px-4 max-xs:py-6 md:p-6 xxl:p-8 h-full">
                                    {/* Number */}
                                    <div className="block font-semibold text-gray500 text-5xl max-xs:text-3xl leading-none tracking-[-1.44px]">
                                        <span>{item.number}</span>
                                    </div>

                                    {/* Title + Detail */}
                                    <div className="block">
                                        {/* Title */}
                                        <div className="max-xs:tracking-normal block text-white text-2xl max-xs:text-lg leading-8 tracking-[-0.24px] font-semibold capitalize mb-5">
                                            <span>{item.title}</span>
                                        </div>

                                        {/* Detail */}
                                        <div className="block text-gray300 text-lg max-xs:text-base font-normal leading-[144%]">
                                            <p>{item.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyStrategyToolbox
