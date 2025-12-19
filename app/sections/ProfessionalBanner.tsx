"use client";
import React from 'react'
import Badge from "../components/Badge"; 
import Image from "next/image";
import Button from '../components/Button';
import FooterGradient from "@/public/image/footer-top-gradient.png";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 80; // adjust to your header height
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const ProfessionalBanner: React.FC = () => {

    const data = [
        { id: 1, text: "USDC-only, overcollateralized lending" },
        { id: 2, text: "Non custodial smart vault per treasury" },
        { id: 3, text: "Built for treasury, audit & reporting" },  
    ];

    return (
        <div className="max-xs:pt-30 max-xs:pb-12 max-sm:pb-24 pt-46 pb-42 bg-gray900 relative">
            <div className="container">
                <div className="sm:text-center"> 
                    <div className="">
                        <Badge
                            label="For Corporate & Crypro Treasuries"
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
                        <h1 className="max-xs:text-3xl max-xs:leading-9 text-5xl leading-13 xxl:text-80 font-semibold xxl:leading-22 tracking-[-1.44px] xxl:tracking-[-2.40px] text-white">Stablecoin Treasury Infrastructure for Professionals</h1>
                    </div>
                    <div className="mt-8 w-full max-w-230 mx-auto">
                        <p className="text-lg xxl:text-xl font-normal leading-7 text-gray400">Tradoo gives CFOs and treasury teams a non-custodial way to deploy USDC reserves into overcollateralized on-chain credit markets with conservative returns, diversified venues and a risk-first framework.</p>
                    </div>
                    <div className='relative z-10 mt-12 md:mt-18'>
                        <div className='grid grid-cols-12 gap-2'>
                            {data.map((item, index) => (
                                <div key={index} className='col-span-12 md:col-span-4'>
                                    <div className='h-full max-xs:gap-5 max-xs:p-5 max-sm:gap-8 max-sm:p-10 flex items-center gap-5 xl:gap-8 rounded-3xl p-6 xl:p-10 bg-gray800'>
                                        <span className='text-2xl font-semibold leading-8 tracking-[-0.24px] text-greenlight'>
                                            {item.id}
                                        </span>
                                        <p className='text-lg font-semibold leading-6 text-white'>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='relative z-10 mt-12 md:mt-18 max-sm:flex-col max-sm:items-start flex gap-4 justify-center'>
                        <Button label="Request Treasury Demo" onClick={() => scrollToSection("treasury-demo")} trailingIcon variant='contrastdefault' />
                        <Button label="Become a Design Partner" onClick={() => scrollToSection("treasury-demo")} />
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

export default ProfessionalBanner
