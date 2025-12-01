"use client";

import React from 'react'
import Image from 'next/image';
import Badge from '../components/Badge';

const OurMission = () => {
    return (
        <>
            <div className="max-xs:pb-20 pb-[168px] md:py-20 lg:py-[168px] bg-gray900 overflow-hidden">
                <div className="container">
                    <div className="flex flex-wrap max-xs:gap-10 gap-20 md:gap-10 lg:gap-20 -mx-4 md:mx-0">
                        <div className="flex-none md:flex-1 w-full lg:w-1/2">
                            <div className="block md:rounded-2xl lg:rounded-3xl overflow-hidden lg:max-w-[448px] w-full">
                                <Image src="/image/our-mission-img.jpg" alt="Our Mission Image" width={500} height={500} className="max-w-full w-full" />
                            </div>
                        </div>

                        <div className="flex-none md:flex-1 w-full lg:w-1/2 px-4 md:px-0">
                            <div className="flex flex-wrap flex-col max-xs:gap-10 gap-20 items-start justify-between h-full">
                                {/* Main Section Title */}
                                <div className="block">
                                    <Badge label="Mission" variant="darkgreen" className="mb-6" />

                                    <div className="block font-semibold text-white text-40 leading-[46px] xl:text-56 xl:leading-16 max-xs:text-[32px] max-xs:leading-[40px] max-xs:mb-6 mb-10 -tracking-[1.20px]">
                                        <h2><span className='text-gray500'>Our mission is to make</span> adaptive, research-driven wealth management globally accessible.</h2>
                                    </div>
                                </div>
                                {/* Main Section Title */}

                                <div className="flex flex-wrap gap-8 text-lg leading-[144%] font-normal text-gray400">
                                    <p>We believe the next generation of asset management will be model-based, transparent, and globally accessible. Financial markets change constantly. Static products and single-strategy approaches break when conditions shift. We take a research-based approach.</p>
                                    <p>Tradoo evaluates academic models, quantitative trading systems, and real-time market signals to understand which strategies perform in which regime — and why. The Tradoo Engine continuously reallocates capital toward validated logic with controlled risk exposure. Not speculation. Not prediction. Structured adaptation designed to protect capital and compound returns over decades, not days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default OurMission
