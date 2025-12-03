import React from 'react'
import Badge from '../components/Badge'
import Image from "next/image";
import colourtuneing from "@/public/image/svg/colour-tuneing.svg";
import graphdown from "@/public/image/svg/graph-down-new.svg";
import structureboundries from "@/public/image/structure-boundries.jpg";
import piechart from "@/public/image/svg/pie-chart.svg";
import dollar from "@/public/image/svg/dollar.svg";
import rewindforwardcircle from "@/public/image/svg/rewind-forward-circle.svg";
import sheild from "@/public/image/svg/shield-check.svg";
import turning from "@/public/image/svg/turning.svg";
import refresh from "@/public/image/svg/refresh.svg";
import carousel from "@/public/image/svg/posts-carousel-horizontal.svg";
import chart from "@/public/image/svg/chart.svg";
import Button from '../components/Button';

const ProfileStructuralBoundaries: React.FC = () => {

    const items = [
        {
            icon: colourtuneing,
            title: "Target volatility",
            desc: "The maximum level of price fluctuation the profile is allowed to take on."
        },
        {
            icon: graphdown,
            title: "Max drawdown",
            desc: "The deepest acceptable portfolio decline during adverse market conditions."
        },
        {
            icon: piechart,
            title: "Position size",
            desc: "The maximum share of the portfolio allocated to any single asset."
        }, 
        {
            icon: dollar,
            title: "Cash reserve",
            desc: "The minimum portion kept in stable assets (e.g., USDC) for protection or flexibility."
        },
        {
            icon: rewindforwardcircle,
            title: "Adjustment speed",
            desc: "How quickly the profile changes exposure when market conditions shift."
        },
        {
            icon: sheild,
            title: "Leverage constraints",
            desc: "Limits that prevent the portfolio from taking leveraged or amplified positions."
        },
        {
            icon: turning,
            title: "Risk transition rules",
            desc: "Conditions that trigger shifts between defensive, balanced, or aggressive exposure."
        },
        {
            icon: refresh,
            title: "Rebalancing cadence",
            desc: "How often the portfolio realigns back to its target structure."
        },
        {
            icon: carousel,
            title: "Exposure drift limits",
            desc: "How far allocations are allowed to deviate from targets before correction."
        },
        {
            icon: chart,
            title: "Transition thresholds",
            desc: "Specific levels of volatility, trend, or regime signals required to change exposure."
        },
    ];


    return (
        <div className='max-xs:pt-14 max-sm:pb-2 py-42 bg-white'>
            <div className='container max-sm:p-0'>
                <div className=''>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-6">
                            <div className="max-sm:px-4">
                                <div>
                                    <Badge
                                        label="The Tradoo Framework"
                                    />
                                </div>
                                <div className="mt-8">
                                    <h3 className="max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.20px] xxl:tracking-[-1.68px] text-gray800">Each profile enforces strict structural boundaries.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="max-sm:px-4 h-full w-full md:max-w-171 ml-auto flex flex-col gap-5 justify-end">
                                <div>
                                    <p className="text-lg font-normal leading-[144%] text-gray700">Clear limits define how each profile behaves. Exposure stays disciplined, stable and aligned with your tolerance. No signals. No speculation. Just clearly defined, disciplined boundaries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className="grid grid-cols-12 gap-2">

                            {items.map((item, index) => (
                                <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                                    <div className="h-full gap-y-14 flex flex-col rounded-3xl max-xs:p-5 p-10 bg-gray100">
                                        <span className="min-w-16 w-16 h-16 flex justify-center items-center bg-white rounded-xl">
                                            <Image src={item.icon} alt="icon" className="max-h-full" />
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

                            {/* Right side big image box */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-6">
                                <div className="max-sm:h-81.5 w-full h-full rounded-3xl relative">
                                    <Image
                                        src={structureboundries}
                                        alt="img"
                                        className="w-full h-full object-cover rounded-3xl"
                                    />

                                    <div className="absolute max-sm:p-4 max-sm:left-0 p-14 bottom-0 right-0">
                                        <Button
                                            label="Explore the Tradoo Aproach"
                                            href="#"
                                            variant="contrastdefault"
                                            trailingIcon
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileStructuralBoundaries
