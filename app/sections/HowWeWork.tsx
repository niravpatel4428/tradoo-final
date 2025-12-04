import React from 'react'
import Image from "next/image";
import heartbrocken from "@/public/image/svg/heart-broken.svg";
import fire from "@/public/image/svg/fire.svg";
import notification from "@/public/image/svg/notification-lines-remove.svg";
import city from "@/public/image/svg/city.svg";

const HowWeWork: React.FC = () => {

    const items = [
        {
            icon: heartbrocken,
            title: "Collaboration",
            desc: "Tradoo operates as a lean, high-trust team. We prioritize clear communication, structured workflows and ownership at every level."
        },
        {
            icon: fire,
            title: "Remote Flexibility",
            desc: "Most roles offer flexible remote work options. We meet regularly in Zug, Switzerland for planning and collaboration."
        },
        {
            icon: notification,
            title: "Selective Hiring",
            desc: "We don't hire for the sake of growth. Every role is carefully considered and directly contributes to the platform's success."
        },
        {
            icon: city,
            title: "Structured Mindset",
            desc: "If you value structure, transparency and building long-term solutions over quick wins, you'll fit right in."
        },
    ];


    return (
        <div className='max-xs:pt-14 max-sm:pb-2 pt-21 pb-42'>
            <div className='container max-sm:p-0'>
                <div className=''>
                    <div className='max-sm:px-4'>
                        <h3 className='text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'>How we work</h3>
                    </div>
                    <div className='mt-12 md:mt-16'>
                        <div className="grid grid-cols-12 gap-2">

                            {items.map((item, index) => (
                                <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                                    <div className="h-full gap-y-12 flex flex-col rounded-3xl max-xs:p-5 max-sm:px-4 p-10 bg-white">
                                        <span className="min-w-16 w-16 h-16 flex justify-center items-center bg-gray100 rounded-xl">
                                            <Image src={item.icon} alt="icon" className="max-h-full" />
                                        </span>

                                        <div className="flex flex-col gap-5">
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


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork
