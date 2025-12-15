import React from 'react'
import Image from "next/image";
import calendersearch from "@/public/image/svg/calendar-search.svg";
import crown from "@/public/image/svg/crown-line.svg";
import handshake from "@/public/image/svg/handshake.svg";
import graphnewup from "@/public/image/svg/graph-up.svg";
import plus from "@/public/image/svg/plus.svg";
import rocket from "@/public/image/svg/rocket-icon.svg";
import Badge from '../components/Badge';
import Button from '../components/Button';



const Performance: React.FC = () => {

    const items = [
        {
            icon: crown,
            title: "Seed-1: Bonus & whitelist",
            desc: "Priority access. +10% token bonus. Whitelist guaranteed."
        },
        {
            icon: handshake,
            title: "Voting rights & share register entry",
            desc: "Share participation · Entry in official register (Ledgy)."
        },
        {
            icon: calendersearch,
            title: "Monthly investor updates",
            desc: "Monthly updates · Progress & governance."
        },
        {
            icon: graphnewup,
            title: "Rule-based & disciplined",
            desc: "Rule-based execution · Consistent strategy."
        },
        {
            icon: plus,
            title: "Swiss structure (FinSA/FinIA)",
            desc: "FinSA/FinIA · Skribble signature · Ledgy register."
        },
        {
            icon: rocket,
            title: "Scaling & exit perspective",
            desc: "Tokenization & scaling · Transparent communication."
        }
    ];

    return (
        <div className='max-xs:py-10 max-xs:pb-2 max-sm:pb-2 max-sm:pt-27 py-42 bg-white'>
            <div className='container max-sm:p-0'>
                <div className='space-y-16'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-6'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='space-y-8'>
                                <div>
                                    <Badge
                                        label="Performance Ranking"
                                    />
                                </div>
                                <div>
                                    <h3 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-gray800'>Why Invest in Tradoo Now?</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col w-full max-w-170 ml-auto h-full justify-end gap-5'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>Early stage participation with clear governance and structured reporting.</p>
                            </div>
                        </div>
                        <div className='col-span-12 block md:hidden'>
                            <div className=''>
                                <Button label="Select Amount and Sign" href="#" trailingIcon />
                            </div>
                        </div>
                    </div>
                    <div className="max-sm:m-0 grid grid-cols-12 gap-2">

                        {items.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4">
                                <div className="h-full gap-y-12 flex flex-col rounded-3xl max-xs:p-5 max-sm:px-4 p-10 bg-gray100">
                                    <div className="w-16 h-16 rounded-xl p-3 bg-white flex justify-center items-center">
                                        <Image
                                            src={item.icon}
                                            alt="icon"
                                            className="max-h-full"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-4">
                                        <h5 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-lightgray900">
                                            {item.title}
                                        </h5>
                                        <p className="text-lg font-normal leading-[144%] text-gray700">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='max-sm:px-4 md:block hidden'>
                        <Button label="Select Amount and Sign Digitally" href="#" trailingIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance
