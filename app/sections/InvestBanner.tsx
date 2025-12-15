import React from 'react'
import Badge from "../components/Badge";
import Image from "next/image";
import FooterGradient from "@/public/image/footer-top-gradient.png";

const InvestBanner: React.FC = () => {

    return (
        <div className="max-xs:pt-30 max-xs:pb-12 max-sm:pb-24 pt-46 pb-42 bg-gray900 relative">
            <div className="container">
                <div>
                    <div className="sm:text-center">
                        <div className="">
                            <Badge
                                label="Early Access Opportunity"
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
                            <h1 className="max-xs:text-3xl max-xs:leading-9 max-xs:tracking-normal text-5xl leading-13 xxl:text-80 font-semibold xxl:leading-22 tracking-[-1.44px] xxl:tracking-[-2.40px] text-white">Seed 1 Participation in Tradoo AG</h1>
                        </div>
                        <div className="mt-8 w-full max-w-230 mx-auto">
                            <p className="text-lg xxl:text-xl font-normal leading-7 text-gray400">Tradoo operates a rule-based, model-driven approach with adaptive weighting across market conditions.</p>
                        </div>
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

export default InvestBanner
