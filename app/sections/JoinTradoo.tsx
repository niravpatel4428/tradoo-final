import React from 'react'
import Badge from '../components/Badge';
import Image from "next/image";
import bolt from "@/public/image/svg/white-bolt.svg";
import handshake from "@/public/image/svg/hand-shake.svg";
import rocket from "@/public/image/svg/rocket.svg";
import VaultsForm from '../components/VaultsForm';

const JoinTradoo = () => {
    const steps = [
        {
            icon: bolt,
            title: "Early access to the toolbox",
            detail:
                "Use the MVP console and strategy modules in a sandbox environment. Test how vaults would behave with your mandates.",
        },
        {
            icon: handshake,
            title: "Influence on roadmap",
            detail:
                "Help prioritize features, reporting and integrations that matter for your business, from specific strategies to data exports.",
        },
        {
            icon: rocket,
            title: "Priority when licensing is live",
            detail:
                "Design partners with signed LOIs will be first in line when we start onboarding real client assets post licensing.",
        },
    ];
    return (
        <>
            <div className="bg-gray900 max-xs:pb-10 pb-14 md:pb-20 max-xs:pt-14 pt-[168px] block">
                <div className="block max-xs:space-y-10 space-y-24">
                    {/* Section Main Title */}
                    <div className="block">
                        <div className="container">
                            <div className="flex flex-wrap flex-col md:items-center md:text-center gap-6">
                                <div> <Badge
                                    label="Join Tradoo"
                                    variant='darkgreen'
                                /></div>
                                <div className="block font-semibold text-white text-40 leading-[46px] -tracking-[1.20px] max-xs:text-[32px] max-xs:leading-[40px] max-xs:-tracking-[0.7px] xl:text-56 xl:leading-16 xl:-tracking-[1.68px]">
                                    <h2>Become a Design Partner</h2>
                                </div>

                                <div className="block w-full max-w-230 max-xs:text-base text-lg font-normal leading-snug text-gray400">
                                    <p>We are looking for 5–20 professional investors who want to co-design the next generation of non-custodial digital asset mandates before licenses are in place and capital flows through the system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Section Main Title */}

                    {/* Section Main Content */}
                    <div className="block">
                        <div className="container max-sm:px-0">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                {steps.map((item, index) => (
                                    <div key={index} className="block">
                                        <div className="flex flex-col gap-14 max-xs:gap-6 bg-lightgray900 rounded-xl md:rounded-3xl py-10 px-4 max-xs:py-6 md:p-6 xxl:p-10 h-full">
                                            {/* icon*/}
                                            <div className="min-w-16 w-16 h-16 rounded-xl p-3 bg-[#2E3342] flex justify-center items-center">
                                                <Image
                                                    src={item.icon}
                                                    alt="icon"
                                                    className="max-h-full"
                                                />
                                            </div>

                                            {/* Title + Detail */}
                                            <div className="block">
                                                {/* Title */}
                                                <div className="block text-white text-2xl max-xs:text-lg leading-tight font-semibold capitalize mb-4">
                                                    <span>{item.title}</span>
                                                </div>

                                                {/* Detail */}
                                                <div className="block text-gray400 text-lg max-xs:text-base leading-snug">
                                                    <p>{item.detail}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Section Main Content */}

                    <VaultsForm className='!pt-0' />
                </div>
            </div>
        </>
    )
}

export default JoinTradoo
