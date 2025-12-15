import React from 'react'
import Image from 'next/image'
import Badge from '../components/Badge'
import beyond from "@/public/image/svg/beyond-chain.svg"
import icon1 from "@/public/image/svg/beyond-icon-1.svg"
import icon2 from "@/public/image/svg/beyond-icon-2.svg"
import icon3 from "@/public/image/svg/beyond-icon-3.svg"
import icon4 from "@/public/image/svg/beyond-icon-4.svg"


const BeyondOnChain = () => {
    return (
        <>
            <div className='max-sm:pb-2 pb-42'>
                <div className="mb-16">
                    <div className="container">
                        <div className="flex max-lg:flex-col items-center gap-6">
                            <div className="flex-1">
                                <div className="py-5 lg:py-20 xxl:py-29">
                                    <div className='space-y-8 xxl:pr-31'>
                                        <div>
                                            <Badge
                                                label="Beyond On-Chain"
                                            />
                                        </div>
                                        <div>
                                            <h2 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'><span className='text-gray500'>More Than On-Chain.</span> A Full Research Stack Behind the Engine.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="w-full h-full">
                                    <Image src={beyond} alt="beyond" className='w-full h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container max-sm:px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
                        <div className="hover:bg-gray300 transition-all duration-300 flex flex-col gap-y-12 xxl:gap-y-16 h-full px-4 py-10 md:p-5 xxl:p-10 max-xs:rounded-2xl rounded-3xl bg-white">
                            <div className="rounded-xl w-16 h-16 flex justify-center items-center bg-gray100 p-3">
                                <Image src={icon1} alt="icon1" className='w-full h-full' />
                            </div>
                            <div className="flex flex-col gap-y-5">
                                <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">Research-Driven Signals</span>
                                <p className="text-lg text-gray700 font-normal leading-[144%]">On-chain smart wallet behavior is just one data input. Tradoo AI also ingests academic research, dissertations, and peer-reviewed insights on risk, momentum, and market regimes.</p>
                            </div>
                        </div>
                        <div className="hover:bg-gray300 transition-all duration-300 flex flex-col gap-y-12 xxl:gap-y-16 h-full px-4 py-10 md:p-5 xxl:p-10 max-xs:rounded-2xl rounded-3xl bg-white">
                            <div className="rounded-xl w-16 h-16 flex justify-center items-center bg-gray100 p-3">
                                <Image src={icon2} alt="icon2" className='w-full h-full' />
                            </div>
                            <div className="flex flex-col gap-y-5">
                                <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">Stress-Tested Quant Models</span>
                                <p className="text-lg text-gray700 font-normal leading-[144%]">Quantitative models and open-source ML frameworks are evaluated, stress-tested and integrated where they strengthen our 15-strategy framework.</p>
                            </div>
                        </div>
                        <div className="hover:bg-gray300 transition-all duration-300 flex flex-col gap-y-12 xxl:gap-y-16 h-full px-4 py-10 md:p-5 xxl:p-10 max-xs:rounded-2xl rounded-3xl bg-white">
                            <div className="rounded-xl w-16 h-16 flex justify-center items-center bg-gray100 p-3">
                                <Image src={icon3} alt="icon3" className='w-full h-full' />
                            </div>
                            <div className="flex flex-col gap-y-5">
                                <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">Macro-Integrated Framework</span>
                                <p className="text-lg text-gray700 font-normal leading-[144%]">Macro, rates, geopolitical events and sentiment indicators are combined with strict drawdown and volatility limits within the Strategy Framework.</p>
                            </div>
                        </div>
                        <div className="hover:bg-gray300 transition-all duration-300 flex flex-col gap-y-12 xxl:gap-y-16 h-full px-4 py-10 md:p-5 xxl:p-10 max-xs:rounded-2xl rounded-3xl bg-white">
                            <div className="rounded-xl w-16 h-16 flex justify-center items-center bg-gray100 p-3">
                                <Image src={icon4} alt="icon4" className='w-full h-full' />
                            </div>
                            <div className="flex flex-col gap-y-5">
                                <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">Profile-Aligned Execution</span>
                                <p className="text-lg text-gray700 font-normal leading-[144%]">Only strategies that pass profile, market phase and safety checks can act on this research — everything else stays inactive by design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white py-10 md:py-14">
                <div className="container">
                    <div className="flex sm:items-center gap-6">
                        <div className="bg-gray200 size-5 rounded-full flex justify-center items-center flex-none">
                            <IconCenter />
                        </div>

                        <div className="text-gray700 font-normal text-lg leading-6.5">
                            <p>Tradoo Insights is a public analytics view for educational purposes only. Tradoo’s investment products remain risk-profile based, non-custodial and limited to BTC, ETH and USDC within a regulated framework.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const IconCenter = () => {
    return (
        <>
            <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 8.75V4.75M0.75 0.75H0.76" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )
}

export default BeyondOnChain
