
import React from 'react'
import Badge from '../components/Badge'
import Image from "next/image";
import design from "@/public/image/designimage.jpg";
import info from "@/public/image/svg/gray-info-circle.svg";

const TransparencyDesign: React.FC = () => {

    const items = [
        {
            number: "1",
            title: "Pick Your Risk Profile",
            desc: "We review your stablecoin balances, cash-flow needs and internal risk and compliance policies to define a suitable framework."
        },
        {
            number: "2",
            title: "Funds Go Into Smart-Contract Vaults",
            desc: "We configure your non custodial treasury vault, select whitelisted lending venues and agree allocation, concentration and liquidity limits."
        },
        {
            number: "3",
            title: "System Monitors and Adjusts",
            desc: "You monitor your vault in the dashboard while we provide regular reports, alerts and review calls to adapt the policy as markets and your needs evolve."
        }
    ];

    return (
        <div className='max-xs:py-15 py-42'>
            <div className='container max-sm:p-0'>
                <div className='space-y-16'>
                    <div className='max-sm:px-4 grid grid-cols-12 gap-6'>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='space-y-10'>
                                <div>
                                    <Badge
                                        label="Transparency by Design"
                                    />
                                </div>
                                <div>
                                    <h3 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-gray800'>How Tradoo's Stablecoin Treasury Rail Works</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col h-full justify-end gap-5'>
                                <p className='text-lg font-normal leading-[144%] text-gray700'>From first conversation to a treasury policy you can explain to your board, in three steps.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">

                        {items.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3">
                                <div className="h-full gap-y-14 flex flex-col rounded-3xl max-xs:p-5 max-sm:px-4 p-10 bg-white">
                                    <span className="text-5xl font-semibold leading-none tracking-[-1.44px] text-romansilver">
                                        {item.number}
                                    </span>

                                    <div className="flex flex-col gap-4">
                                        <h5 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                            {item.title}
                                        </h5>
                                        <p className="text-lg font-normal leading-[144%] text-gray700">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='col-span-12 md:col-span-6 xl:col-span-3'>
                            <div className='w-full max-sm:h-112 h-98.5 min-h-full'>
                                <Image
                                    src={design}
                                    alt="img"
                                    className='w-full h-full object-cover rounded-3xl'
                                />
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className='flex flex-col gap-y-5 rounded-3xl max-xs:p-5 max-sm:px-4 py-8 px-10 bg-white'>
                                <div className='flex items-start gap-3'>
                                    <Image
                                        src={info}
                                        alt="icon"
                                    />
                                    <h4 className='text-lg font-normal leading-[144%] text-gray700'>During the current pilot, all flows run in a demo environment with simulated balances. No client assets are deployed until the required licenses are in place.</h4>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransparencyDesign
