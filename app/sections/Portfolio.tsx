import React from 'react'
import Badge from '../components/Badge'
import Image from "next/image";
import portfoliograph from "@/public/image/svg/portfolio.svg";
import portfoliographmobile from "@/public/image/svg/mobile-portfolio-graph.svg";

const Portfolio: React.FC = () => {
    return (
        <div className='max-xs:pt-15 max-xs:pb-10 pt-42 pb-18 bg-gray900'>
            <div className='container'>
                <div>
                    <div>
                        <div>
                            <Badge label="Transparency by Design" variant='darkgreen'/>
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
                        <Image src={portfoliograph} alt='portfolio-graph' className='md:block hidden'/>
                        <Image src={portfoliographmobile} alt='portfolio-graph' className='md:hidden block w-full'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
