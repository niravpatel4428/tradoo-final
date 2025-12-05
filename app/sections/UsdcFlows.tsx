import React from 'react'
import Image from 'next/image';
import Badge from '../components/Badge';
import usdcFlowImg1 from "@/public/image/svg/usdc-flow-step1.svg";
import usdcFlowImg2 from "@/public/image/svg/usdc-flow-step2.svg";
import usdcFlowImg3 from "@/public/image/svg/usdc-flow-step3.svg";
import infoCircleIcon from "@/public/image/svg/form-Info-circle.svg";

const UsdcFlows = () => {
    return (
        <>
            <div className="block bg-gray900 max-xs:py-20 py-42">
                <div className="container">
                    <div className="block max-xs:space-y-16 space-y-24">
                        {/* Main Section Title */}
                        <div className="grid grid-cols-12 gap-y-4 md:gap-6">
                            <div className="col-span-12 md:col-span-6">
                                <div className="max-md:px-4 max-xs:space-y-6 space-y-10">
                                    <div className="block">
                                        <Badge label="Risk Tolerance Sets Structure" variant="darkgreen" />
                                    </div>
                                    <div className="block max-xs:text-3xl max-xs:leading-9 text-40 tracking-[-1.20px] xl:text-56 font-semibold text-white xl:tracking-[-1.68px] leading-tight">
                                        <h2>How Your USDC Flows Through the System</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <div className='max-md:px-4 h-full flex flex-col items-start gap-8 justify-end'>
                                    <div className='max-xs:text-base text-lg leading-[144%] text-gray400 space-y-4'>
                                        <p>Your treasury deposits into a non custodial smart vault. Tradoo routes capital to whitelisted, overcollateralized lending venues under predefined risk limits.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Main Section Title */}

                        {/* Flow List */}
                        {/* <div className="grid grid-cols-12 gap-32 items-center">
                            <div className="col-span-12 md:col-span-4 relative before:absolute before:content-[''] before:left-full before:top-1/2 before:-translate-y-1/2 before:w-16 before:h-3 before:bg-[url('/image/svg/usdc-flow-arrow.svg')] before:bg-no-repeat before:bg-[length:100%_100%] before:ml-8 last:before:hidden">
                                <div className="block">
                                    <Image src={usdcFlowImg1} alt="usdc-flow-img" className='max-w-full w-full' />
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4 relative before:absolute before:content-[''] before:left-full before:top-1/2 before:-translate-y-1/2 before:w-16 before:h-3 before:bg-[url('/image/svg/usdc-flow-arrow.svg')] before:bg-no-repeat before:bg-[length:100%_100%] before:ml-8 last:before:hidden">
                                <div className="block">
                                    <Image src={usdcFlowImg2} alt="usdc-flow-img" className='max-w-full w-full' />
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4 relative before:absolute before:content-[''] before:left-full before:top-1/2 before:-translate-y-1/2 before:w-16 before:h-3 before:bg-[url('/image/svg/usdc-flow-arrow.svg')] before:bg-no-repeat before:bg-[length:100%_100%] before:ml-8 last:before:hidden">
                                <div className="block">
                                    <Image src={usdcFlowImg3} alt="usdc-flow-img" className='max-w-full w-full' />
                                </div>
                            </div>
                        </div> */}

                        <div className="flex flex-wrap items-center space-y-25 lg:-mx-10 xl:-mx-16">
                            <div className="flex-none w-full lg:w-1/3 lg:px-10 xl:px-16 relative before:absolute before:content-[''] before:left-1/2 lg:before:left-auto lg:before:-right-8 before:top-full before:mt-10 lg:before:mt-0 lg:before:top-1/2 before:-translate-x-1/2 before:rotate-90 lg:before:rotate-0 lg:before:-translate-x-0 lg:before:-translate-y-1/2 before:w-16 before:h-3 before:bg-[url('/image/svg/usdc-flow-arrow.svg')] before:bg-no-repeat before:bg-[length:100%_100%] last:before:hidden">
                                <div className="block text-center">
                                    <Image src={usdcFlowImg1} alt="usdc-flow-img" className='inline-block max-w-full lg:w-full' />
                                </div>
                            </div>
                            <div className="flex-none w-full lg:w-1/3 lg:px-10 xl:px-16 relative before:absolute before:content-[''] before:left-1/2 lg:before:left-auto lg:before:-right-8 before:top-full before:mt-10 lg:before:mt-0 lg:before:top-1/2 before:-translate-x-1/2 before:rotate-90 lg:before:rotate-0 lg:before:-translate-x-0 lg:before:-translate-y-1/2 before:w-16 before:h-3 before:bg-[url('/image/svg/usdc-flow-arrow.svg')] before:bg-no-repeat before:bg-[length:100%_100%] last:before:hidden">
                                <div className="block text-center">
                                    <Image src={usdcFlowImg2} alt="usdc-flow-img" className='inline-block max-w-full lg:w-full' />
                                </div>
                            </div>
                            <div className="flex-none w-full lg:w-1/3 lg:px-10 xl:px-16 relative before:absolute before:content-[''] before:left-1/2 lg:before:left-auto lg:before:-right-8 before:top-full before:mt-10 lg:before:mt-0 lg:before:top-1/2 before:-translate-x-1/2 before:rotate-90 lg:before:rotate-0 lg:before:-translate-x-0 lg:before:-translate-y-1/2 before:w-16 before:h-3 before:bg-[url('/image/svg/usdc-flow-arrow.svg')] before:bg-no-repeat before:bg-[length:100%_100%] last:before:hidden">
                                <div className="block text-center">
                                    <Image src={usdcFlowImg3} alt="usdc-flow-img" className='inline-block max-w-full lg:w-full' />
                                </div>
                            </div>
                        </div>
                        {/* Flow List */}

                        {/* Smart Values */}
                        <div className="block">
                            <div className='flex items-start justify-center space-x-3.5 md:text-center'>
                                <div className="inline-flex items-center justify-center min-w-5 min-h-5 relative top-0.5">
                                    <Image src={infoCircleIcon} alt="info-icon" className='max-w-full max-h-full object-cover' />
                                </div>
                                <div className="block text-gray500 max-xs:text-base text-lg leading-tight">
                                    <p>Submitting this form does not constitute an offer or the provision of regulated investment services. We currently provide demo access only.</p>
                                </div>
                            </div>
                        </div>
                        {/* Smart Values */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsdcFlows
