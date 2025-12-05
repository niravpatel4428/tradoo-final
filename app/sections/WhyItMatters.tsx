import React from 'react'
import Badge from '../components/Badge'
import Image from "next/image";
import WhyMatters from "@/public/image/whyitmatters.jpg";
import info from "@/public/image/svg/gray-info-circle.svg";

const WhyItMatters: React.FC = () => {

    const statsData = [
        {
            value: "$290B+",
            text: "Approximate total stablecoin market capitalization.",
        },
        {
            value: "$50B+",
            text: "Active on-chain credit and money markets for stablecoins.",
        },
        {
            value: "24/7",
            text: "Continuous deposits and redemptions across on-chain lending venues.",
        },
        {
            value: "4–8%",
            text: "Indicative historical ranges for overcollateralized stablecoin lending rates.",
        },
    ];


    return ( 
        <div className='max-xs:pt-15 max-md:pt-27 max-md:pb-2 md:py-42 bg-white'>
            <div className='container max-sm:p-0'>
                <div>
                    <div className='grid grid-cols-12 gap-y-8 md:gap-5'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='max-sm:px-4 space-y-8'>
                                <div>
                                    <Badge
                                        label="Why It Matters"
                                    />
                                </div>
                                <div>
                                    <h2 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'>Stablecoin Credit Markets Are Already Operating at Scale</h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='max-sm:px-4 flex h-full flex-col justify-end gap-y-6'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>Stablecoins have become the settlement layer of digital asset markets. Billions in USDC move through on-chain credit and money markets every day, but direct access is still too complex and risky for most treasuries. <br /> <br />
                                    Tradoo focuses on a narrow slice of this universe: conservative, overcollateralized lending markets that are suitable as a building block for professional treasury strategies.</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-xs:mt-14 mt-18 lg:mt-20'>
                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='w-full max-sm:h-75 sm:h-100 lg:h-133 min-h-full'>
                                    <Image
                                        src={WhyMatters}
                                        alt="img"
                                        className='w-full h-full object-cover rounded-3xl'
                                    />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='h-full'>
                                    <div className="grid grid-cols-12 gap-2 h-full">
                                        {statsData.map((item, index) => (
                                            <div key={index} className="col-span-12 md:col-span-6">
                                                <div className="h-full max-md:py-10 max-md:px-4 max-md:gap-y-10 flex flex-col md:p-6 md:gap-10 xl:gap-14 xl:p-10 bg-gray100 rounded-3xl">
                                                    <h3 className="max-xs:text-3xl max-md:text-5xl md:text-4xl xl:text-5xl font-semibold leading-none tracking-[-1.44px] text-gray800">
                                                        {item.value}
                                                    </h3>
                                                    <p className="text-lg font-normal leading-[144%] text-gray700">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='max-md:hidden max-sm:px-4 mt-10 flex justify-center ite
                    ms-center gap-3'>
                        <Image
                            src={info}
                            alt="icon"
                        />
                        <p className='text-lg font-normal leading-[144%] text-aurometalsaurus'>Figures are indicative and based on public on-chain market data. They are not a guarantee of future returns.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyItMatters
