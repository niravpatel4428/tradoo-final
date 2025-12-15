import React from 'react'
import Button from '../components/Button'

const cards = [
    {
        number: "1",
        title: "Risk Profile",
        description: "Guardrails & allocation limits",
    },
    {
        number: "2",
        title: "Market Phase",
        description: "Quiet, neutral, or volatile",
    },
    {
        number: "3",
        title: "Strategy Selection",
        description: "15 modules, filtered by context",
    },
    {
        number: "4",
        title: "Execute & Monitor",
        description: "Auto-pause if limits are breached",
    },
];

const PortfolioAllocation = () => {
    return (
        <>
            <div className={`block pt-42 pb-24 relative bg-darkjunglegreen`}>
                <div className="container max-sm:px-0">
                    <div className={`flex flex-wrap flex-col md:text-center relative z-10 $ mx-auto`}>

                        <div className="max-xs:space-y-6 space-y-10 max-sm:px-4">
                            {/* Title */}
                            <div className={`block font-semibold text-white text-40 leading-[46px] -tracking-[1.20px] max-xs:text-[32px] max-xs:leading-10 max-xs:-tracking-[0.7px] xl:text-56 xl:leading-16 xl:-tracking-[1.68px]`}>
                                <h2>From Research to Portfolio Allocation</h2>
                            </div>

                            {/* Description */}
                            <div className="flex flex-wrap flex-col gap-4 text-lg leading-snug text-gray200 max-w-[685px] w-full mx-auto">
                                <p>Insights is the public research layer. Inside the Tradoo Dashboard, research becomes allocation through a structured 4-step process.</p>
                            </div>
                        </div>

                        {/* cards */}
                        <div className="my-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-3xl p-6 md:p-10 space-y-14 text-start"
                                    >
                                        <div>
                                            <span className="text-5xl font-semibold leading-none tracking-[-1.44px] text-romansilver">
                                                {card.number}
                                            </span>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                                {card.title}
                                            </h4>
                                            <p className="text-lg font-normal leading-[144%] text-gray700">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="max-sm:justify-start flex flex-wrap justify-center gap-4 max-sm:px-4">
                            <Button
                                label="Join Private Beta "
                                href="/"
                                trailingIcon={true}
                                variant="contrastdefault"
                                size="L"
                            />
                            <Button
                                label="Full Strategy Framework"
                                href="/"
                                variant="primarydefault"
                                size="L"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioAllocation
