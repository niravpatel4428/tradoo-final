import React from 'react'
import Badge from '../components/Badge'
import Image from "next/image";
import Button from '../components/Button';

const RiskProfilesBanner: React.FC = () => {
    return (
        <div className="max-xs:pt-30 max-xs:pb-12 pt-46 pb-24">
            <div className="container">
                <div className="sm:text-center">
                    <div className="">
                        <Badge
                            label="Risk Profiles"
                            icon={
                                <Image
                                    src="/image/svg/zap.svg"
                                    alt="icon"
                                    width={15}
                                    height={15}
                                />
                            }
                        />
                    </div>
                    <div className="mt-8">
                        <h1 className="max-xs:text-3xl max-xs:leading-9 text-5xl leading-13 xxl:text-80 font-semibold xxl:leading-22 tracking-[-1.44px] xxl:tracking-[-2.40px] text-gray800">Choose a framework that matches your risk tolerance.</h1>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg xxl:text-xl font-normal leading-7 text-gray700">You define the risk boundaries. Tradoo manages the allocation with disciplined structure.</p>
                    </div>
                    <div className="max-xs:mt-5 mt-12 xxl:mt-18 max-sm:flex-col max-sm:items-start flex gap-4 justify-center">
                        <Button label="Join Private Beta" href="#" trailingIcon />
                        <Button label="Strategy Framework" href="#" variant="secondarydefault" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskProfilesBanner
