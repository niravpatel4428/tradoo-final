"use client";

import React from 'react'
import Button from '../components/Button'

const DigitalWealth = () => {
    return (
        <>
            {/* Digital Weather */}
            <div className="block max-xs:py-16 py-24 bg-darkjunglegreen relative">
                <div className="container">
                    <div className="flex flex-wrap flex-col md:text-center max-xs:gap-6 gap-10 relative z-10">
                        <div className="block font-semibold text-white text-40 leading-[46px] -tracking-[1.20px] max-xs:text-[32px] max-xs:leading-[40px] max-xs:-tracking-[0.7px] xl:text-56 xl:leading-16 xl:-tracking-[1.68px]">
                            <h2>A Modern, Disciplined Approach to Digital Wealth</h2>
                        </div>

                        <div className="flex flex-wrap flex-col gap-4 text-lg leading-snug text-gray200 max-w-[685px] w-full mx-auto">
                            <p>Tradoo combines institutional principles with user controlled infrastructure to provide a stable foundation for long-term wealth.</p>
                        </div>

                        <div className="max-sm:justify-start flex flex-wrap justify-center gap-4">
                            <Button label='Join Waitlist' href='#' trailingIcon={true} variant='contrastdefault' size='L' />
                            <Button label='Start With Your Risk Profile' href='#' variant='primarydefault' size='L' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Digital Weather */}
        </>
    )
}

export default DigitalWealth
