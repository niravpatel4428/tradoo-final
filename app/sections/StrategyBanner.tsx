import React from 'react'
import Badge from '../components/Badge'
import Image from 'next/image'
import Button from '../components/Button'

const StrategyBanner = () => {
    return (
        <>
            <div className="max-xs:py-10 pt-46 pb-24">
                <div className="container">
                    <div className="text-left md:text-center">
                        <Badge
                            label="Strategy Framework"
                            icon={
                                <Image src="/image/svg/asterisk-icon.svg" alt="icon" width={15} height={15} />
                            }
                        />
                        <div className="mt-8">
                            <h1 className="max-xs:tracking-[-1px] max-xs:text-3xl text-5xl xxl:text-80 font-semibold xxl:leading-22 tracking-[-2.40px] text-left md:text-center text-gray800">
                                A structured, Risk-Based Approach for Modern Wealth
                            </h1>
                        </div>
                        <div className="mt-8 w-full max-w-230 mx-auto">
                            <p className="max-sm:text-lg text-xl leading-[144%] font-normal">
                                Disciplined framework combining market regimes, risk factors and behavioural patterns.
                            </p>
                        </div>
                        <div className="max-sm:flex-col max-sm:items-start flex gap-4 justify-center mt-12">
                            <Button label="View Strategy Modules" href="#" trailingIcon />
                            <Button label="Safety Mechanisms" href="#" variant="secondarydefault" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StrategyBanner
