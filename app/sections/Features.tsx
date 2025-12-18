import React from 'react'
import medal from "@/public/image/svg/medal-ribbon-star.svg";
import graphnewup from "@/public/image/svg/graph-up.svg";
import moneybag from "@/public/image/svg/money-bag.svg";
import dialoge from "@/public/image/svg/dialog.svg";
import routing from "@/public/image/svg/routing.svg";
import shieldcheck from "@/public/image/svg/shield-check.svg";
import info from "@/public/image/svg/gray-info-circle.svg";
import Image from "next/image";



const items = [
  {
    icon: moneybag,
    title: "$5,000 Demo Vault in Private Beta",
    desc: "Test real strategies with a fully funded demo vault. No risk, real insights."
  },
  {
    icon: medal,
    title: "Priority Access in Exclusive Beta Batches",
    desc: "Join early cohorts and experience the platform before public launch."
  },
  {
    icon: graphnewup,
    title: "Engine & Portfolio Simulation Insights",
    desc: "See how our AI evaluates market regimes and adjusts portfolio weightings in real time."
  },
  {
    icon: dialoge,
    title: "Live Q&A with the Founding Team",
    desc: "Direct access to the people building Tradoo. Ask anything."
  },
  {
    icon: routing,
    title: "Roadmap Preview Before Anyone Else",
    desc: "Be the first to know what’s coming next and help shape the product."
  },
  {
    icon: shieldcheck,
    title: "No Wallet Required. No obligation.",
    desc: "Join now, explore later. You’re in control every step of the way."
  }
];

const Features: React.FC = () => {
    return (
        <div className='max-sm:pt-2 pt-24 pb-14 bg-white'>
            <div className='container max-sm:p-0'>
                <div className='space-y-14'>
                    <div className="grid grid-cols-12 gap-2">

                        {items.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4">
                                <div className="h-full gap-y-12 flex flex-col justify-end rounded-3xl max-xs:p-5 max-sm:px-4 p-10 bg-gray100">
                                    <div className="min-w-16 w-16 h-16 rounded-xl p-3 bg-white flex justify-center items-center">
                                        <Image
                                            src={item.icon}
                                            alt="icon"
                                            className="max-h-full"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <h5 className="text-2xl font-semibold leading-8 text-lightgray900 tracking-[-0.24px]">
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
                    <div className='max-sm:px-4 flex justify-center gap-4'>
                        <Image src={info} alt="icon" />
                        <span className='text-lg leading-[144%] text-gray700'>Joined by early supporters, advisors and pre-seed investors. No public access yet.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
