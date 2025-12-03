import React from 'react'
import Button from '../components/Button'

const WhyStrategyFrameworkStepsStructure = () => {
    return (
        <>
            <div className="block max-xs:py-16 py-24 bg-darkjunglegreen relative">
                <div className="container">
                    <div className="flex flex-wrap flex-col md:text-center max-xs:gap-6 gap-10 relative z-10">
                        <div className="block font-semibold text-white text-40 leading-[46px] -tracking-[1.20px] max-xs:text-[32px] max-xs:leading-10 max-xs:-tracking-[0.7px] xl:text-56 xl:leading-16 xl:-tracking-[1.68px]">
                            <h2>Ready to build your portfolio with structure?</h2>
                        </div>

                        <div className="flex flex-wrap flex-col gap-4 text-lg leading-snug text-gray200 max-w-[685px] w-full mx-auto">
                            <p>With the Strategy Framework, you understand how the Engine selects strategies, manages risks and makes decisions. Create your Vault, choose your risk profile and experience how the Engine builds your portfolio based on clear guardrails.</p>
                        </div>

                        <div className="max-sm:justify-start flex flex-wrap justify-center gap-4">
                            <Button label='Get Early Access' href='#' trailingIcon={true} variant='contrastdefault' size='L' />
                            <Button label='Explore Risk Profiles' href='#' variant='primarydefault' size='L' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyStrategyFrameworkStepsStructure
