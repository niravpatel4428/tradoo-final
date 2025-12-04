import React from 'react'
import Badge from '../components/Badge'
import Image from "next/image";
import portfoliograph from "@/public/image/svg/portfolio.svg";
import portfoliographmobile from "@/public/image/svg/mobile-portfolio-graph.svg";

const Portfolio: React.FC = () => {

    const items = [
        { color: "#365B8D", label: "Ultra Stable" },
        { color: "#418B77", label: "Conservative" },
        { color: "#78B76A", label: "Moderate" },
        { color: "#D1C972", label: "Macro Adaptive" },
        { color: "#D9904F", label: "Opportunity" },
        { color: "#C74343", label: "High-Risk Adaptive" },
    ];

    return (
        <div className='max-xs:pt-15 max-xs:pb-10 pt-42 pb-18 bg-gray900'>
            <div className='container'>
                <div>
                    <div>
                        <div>
                            <Badge label="Transparency by Design" variant='darkgreen' />
                        </div>
                        <div className='mt-10'>
                            <h3 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-white'>Your risk profile shapes how your portfolio behaves in different market environments.</h3>
                        </div>
                        <div className='mt-16 max-md:gap-6 gap-16 flex max-md:flex-col'>
                            <p className='text-lg font-normal leading-[144%] text-gray400'>Each risk profile responds differently to market movements. A defensive profile stays close to the stability zone and moves only slightly. A balanced approach allows more dynamism but remains well controlled. </p>
                            <p className='text-lg font-normal leading-[144%] text-gray400'>Each risk profile responds differently to market movements. A defensive profile stays close to the stability zone and moves only slightly. A balanced approach allows more dynamism but remains well controlled. </p>
                        </div>
                    </div>
                    <div className='max-md:mt-16 mt-24'>
                        <Image src={portfoliograph} alt='portfolio-graph' className='md:block hidden' />
                        <Image src={portfoliographmobile} alt='portfolio-graph' className='md:hidden block w-full' />
                    </div>
                    <div className='mt-6 md:mt-5'>
                        <ul className="flex flex-wrap md:justify-center gap-x-4 gap-y-2 md:gap-6">
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-4 text-base md:text-lg font-normal leading-[144%] text-gray400"
                                >
                                    <span
                                        className="min-w-3 w-3 h-3 rounded-sm"
                                        style={{ backgroundColor: item.color }}
                                    ></span>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
