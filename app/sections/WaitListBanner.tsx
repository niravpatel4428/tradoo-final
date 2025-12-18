"use client";
import React, { useState } from 'react'
import Badge from "../components/Badge";
import Image from "next/image";
import FooterGradient from "@/public/image/footer-top-gradient.png";
import info from "@/public/image/svg/dark-gray-info-circle.svg";
import { Check } from 'lucide-react';
import InputField from '../components/InputField';
import CountrySelectField from '../components/CountrySelectField';
import Button from '../components/Button';



const WaitListBanner: React.FC = () => {


    const box = {
        list: [
            { text: "$5,000 demo vault" },
            { text: "Real time insights" },
            { text: "No wallet required. No obligation" },
        ],
    };

    return (
        <div className="max-xs:pt-30 max-xs:pb-12 max-sm:pb-24 pt-46 pb-24 bg-gray900 relative">
            <div className="container max-sm:p-0">
                <div className="sm:text-center max-sm:px-4">
                    <div className="">
                        <Badge
                            label="Early Access"
                            variant='darkgreen'
                        />
                    </div>
                    <div className="mt-8">
                        <h1 className="max-xs:text-3xl max-xs:leading-9 text-5xl leading-13 xxl:text-80 font-semibold xxl:leading-22 tracking-[-1.44px] xxl:tracking-[-2.40px] text-white">Join the Private Beta</h1>
                    </div>
                    <div className="mt-8 w-full max-w-230 mx-auto">
                        <p className="max-sm:text-xl text-lg xxl:text-xl font-normal leading-7 text-gray400">Structured, non-custodial wealth management for digital assets. Clear frameworks. Transparent execution. Institutional discipline for individual investors.</p>
                    </div>
                </div>
                <div className="max-sm:mt-12 mt-18 relative z-20 grid grid-cols-12 gap-2">
                    <div className="col-span-12 lg:col-span-4 max-sm:rounded-20 max-sm:py-12 max-sm:px-4 rounded-3xl bg-white p-7 xxl:p-12">
                        <div className='h-full flex flex-col max-sm:gap-y-6 gap-5 justify-between'>
                            <div className='space-y-4'>
                                <h4 className='text-4xl leading-11 tracking-[-0.72px] xl:text-44 font-semibold xl:leading-13 xl:tracking-[-0.88px] text-lightgray900'>Get early access</h4>
                                <p className='text-base leading-5.5 text-gray700'>Test strategies and influence what’s next with a live Q&A with a founding team.</p>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    {box.list.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="min-w-5 w-5 h-5 mt-0.5 rounded-full flex justify-center items-center bg-[#4A948D]">
                                                <Check className="w-4 h-4 text-white" />
                                            </span>
                                            <span className="text-base font-medium leading-5.5 text-lightgray900">
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 max-sm:rounded-20 max-sm:py-10 max-sm:px-4 rounded-3xl bg-white p-7 xxl:p-12">
                        <div className='space-y-8'>
                            <h3 className='text-2xl font-semibold leading-8 tyracking-[-0.24px] text-lightgray900'>Enter your details</h3>
                            <div className='grid grid-cols-12 gap-6'>
                                <div className='col-span-12'>
                                    <InputField type='email' label="Your email" placeholder="email@example.com" />
                                </div>
                                <div className='col-span-12'>
                                    <CountrySelectField label="Your country" />
                                </div>
                                <div className='col-span-12'>
                                    <InputField type='text' label="Referral code (optional)" placeholder="XYZ123" />
                                </div>
                                <div className='col-span-12'>
                                    <div className='max-sm:flex-col max-sm:items-start flex gap-6 mt-2'>
                                        <Button label="Join Waitlist" href="#" trailingIcon />
                                        <div className="flex items-center gap-2.5">
                                            <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-[#0E9F8C]" />
                                            <p className="text-base leading-5.5 font-normal text-gray700">
                                                <span className="font-medium text-lightgray900">1,200</span> already joined
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-sm:px-4 relative z-10 mt-12 flex gap-3 justify-center'>
                    <Image src={info} alt='icon'/>
                    <span className='text-base leading-5.5 text-gray300'>You can upgrade your <strong className='font-medium text-white'>Priority Access Level</strong> after registration by trusted inviting contacts.</span>
                </div>
            </div>
            <div className="absolute w-full max-w-480 mx-auto bottom-0 left-1/2 -translate-x-1/2 h-[452px] overflow-hidden">
                <Image
                    src={FooterGradient}
                    alt="Footer Gradient"
                    className="w-auto h-full object-cover object-center"
                />
            </div>
        </div>
    )
}

export default WaitListBanner
