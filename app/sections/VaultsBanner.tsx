import React from 'react'
import Badge from "../components/Badge";
import Image from "next/image";
import Button from '../components/Button';
import FooterGradient from "@/public/image/footer-top-gradient.png";

const VaultsBanner: React.FC = () => {

    const data = [
        { id: "6+1", text: "Risk profiles on BTC / ETH / USDC" },
        { id: "15+", text: "Strategy modules for core, growth, hedging" },
        { id: "100%", text: "Non-custodial smart vaults, risk first" },
    ];

    return (
        <div className="max-xs:pt-30 max-xs:pb-12 max-sm:pb-24 pt-46 pb-42 bg-gray900 relative">
            <div className="container">
                <div className="sm:text-center">
                    <div className="">
                        <Badge
                            label="For Asset Managers, Family Offices & Crypto Funds" 
                            variant='darkgreen'
                            icon={
                                <Image
                                    src="/image/svg/building.svg"
                                    alt="icon"
                                    width={15}
                                    height={15}
                                />
                            }
                        />
                    </div>
                    <div className="mt-8">
                        <h1 className="max-xs:text-3xl max-xs:leading-9 max-xs:tracking-normal text-5xl leading-13 xxl:text-80 font-semibold xxl:leading-22 tracking-[-1.44px] xxl:tracking-[-2.40px] text-white">Institutional Strategy Vaults for Professional Investors</h1>
                    </div>
                    <div className="mt-8 w-full max-w-230 mx-auto">
                        <p className="text-lg xxl:text-xl font-normal leading-7 text-gray400">Build and manage non-custodial digital asset portfolios using our strategy toolbox with 6+1 risk profiles, 15+ modules and a narrow universe of BTC, ETH and USDC.</p>
                    </div>
                    <div className='relative z-10 mt-12 md:mt-18'>
                        <div className='grid grid-cols-12 gap-2'>
                            {data.map((item, index) => (
                                <div key={index} className='col-span-12 md:col-span-4'>
                                    <div className='h-full max-xs:gap-5 sm:text-left max-xs:p-5 max-sm:gap-4 max-sm:p-10 flex flex-col items-start gap-4 xl:gap-4 rounded-3xl p-6 xl:p-10 bg-gray800'>
                                        <span className='text-4xl font-semibold leading-none tracking-[-1.08px] text-white'>
                                            {item.id}
                                        </span>
                                        <p className='text-lg font-normal leading-[144%] text-gray400'>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='relative z-10 mt-12 md:mt-18 max-sm:flex-col max-sm:items-start flex gap-4 justify-center'>
                        <Button label="Request Institutional Demo" href="#" trailingIcon variant='contrastdefault' />
                        <Button label="Apply as Design Partner" href="#" />
                    </div>
                </div>
            </div>
            <div className="max-sm:hidden absolute w-full max-w-480 mx-auto bottom-0 left-1/2 -translate-x-1/2 h-[452px] overflow-hidden">
                <Image
                    src={FooterGradient}
                    alt="Footer Gradient"
                    className="w-auto h-full object-cover object-center"
                />
            </div>
        </div>
    )
}

export default VaultsBanner
