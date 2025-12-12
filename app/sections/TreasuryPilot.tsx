import React from 'react'
import AboutTreasury from '../components/AboutTreasury'

const TreasuryPilot = () => {
    const steps = [
        {
        number: 1,
        title: "Pick Your Risk Profile", 
        detail:
            "Choose a disciplined, risk-based framework — from ultra-stable to adaptive. Your profile defines how assets are allocated.",
        },
        {
        number: 2,
        title: "Funds Go Into Smart-Contract Vaults",
        detail:
            "You keep full custody; rules execute transparently without intermediaries.",
        },
        {
        number: 3,
        title: "System Monitors and Adjusts",
        detail:
            "Market regimes, risk factors and disciplined rebalancing keep allocations aligned.",
        },
    ];
    return (
        <>
            <div className="bg-gray900 max-xs:pb-10 pb-14 md:pb-20 max-xs:pt-14 pt-[168px] block">
                <div className="block max-xs:space-y-10 space-y-24">
                    {/* Section Main Title */}
                    <div className="block">
                        <div className="container">
                            <div className="flex flex-wrap flex-col md:items-center md:text-center gap-6">
                                <div className="block font-semibold text-white text-40 leading-[46px] -tracking-[1.20px] max-xs:text-[32px] max-xs:leading-[40px] max-xs:-tracking-[0.7px] xl:text-56 xl:leading-16 xl:-tracking-[1.68px]">
                                    <h2>Join the Tradoo Treasury Pilot.</h2>
                                </div>

                                <div className="block max-xs:text-base text-lg font-normal leading-snug text-gray400">
                                    <p>Get access to our demo console, test treasury scenarios and co-design our stablecoin credit policies before licensing goes live.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Section Main Title */}

                    {/* Section Main Content */}
                    <div className="block">
                        <div className="container max-sm:px-0">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                {steps.map((item) => (
                                <div key={item.number} className="block">
                                    <div className="flex flex-col gap-14 max-xs:gap-6 bg-darkGunmetal rounded-xl md:rounded-3xl py-10 px-4 max-xs:py-6 md:p-6 xxl:p-10 h-full">
                                        {/* Number */}
                                        <div className="block font-semibold text-gray500 text-5xl max-xs:text-3xl leading-tight">
                                            <span>{item.number}</span>
                                        </div>

                                        {/* Title + Detail */}
                                        <div className="block">
                                            {/* Title */}
                                            <div className="block text-white text-2xl max-xs:text-lg leading-tight font-semibold capitalize mb-4">
                                                <span>{item.title}</span>
                                            </div>

                                            {/* Detail */}
                                            <div className="block text-gray400 text-lg max-xs:text-base leading-snug">
                                                <p>{item.detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Section Main Content */}

                    <AboutTreasury className='!pt-0'/>
                </div>
            </div>
        </>
    )
}

export default TreasuryPilot
