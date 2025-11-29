import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'

const CareerTradoo = () => {
    return (
        <>
            <div className="block max-xs:pt-12 pt-20 md:py-20 xl:pt-[84px] xl:pb-[168px]">
                <div className="container">
                    <div className="flex flex-wrap flex-row-reverse -mx-4 md:mx-0 gap-2">
                        <div className="flex-none w-full md:w-5/12 xl:w-[490px]">
                            <div className="block rounded-20 overflow-hidden">
                                <Image src="/image/career-tradoo-img.jpg" alt="career-tradoo" width={490} height={600} className="max-w-full w-full object-cover"/>
                            </div>
                        </div>
                        <div className="flex-none w-full md:flex-1">
                            <div className="flex flex-wrap flex-col justify-between h-full bg-white max-xs:pt-4 max-xs:pb-16 max-xs:px-4 pt-8 pb-28 px-4 md:p-8 xl:p-16 rounded-20">
                                {/* Section Main Title */}
                                <div className="block max-xs:mb-8 mb-12">
                                    <div className="block max-xs:mb-4 mb-8">
                                        <h3 className="max-xs:text-3xl text-4xl lg:text-[44px] font-semibold leading-10 tracking-[-1.25px] text-gray800">
                                            Career at Tradoo
                                        </h3>
                                    </div>

                                    <div className="block text-base leading-snug text-gray700">
                                        <p>We are currently hiring for Community Management, Marketing, and Sales support. Remote-friendly. Core team based in Zug & Zürich.</p>
                                    </div>
                                </div>
                                {/* Section Main Title */}

                                {/* Role Buttons */}
                                <div className="max-xs:flex-col max-xs:items-start flex flex-wrap gap-3">
                                    <Button label="Open Roles" href="#" />
                                    <Button label="Contact" href="#" variant="secondarydefault" />
                                </div>
                                {/* Role Buttons */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerTradoo
