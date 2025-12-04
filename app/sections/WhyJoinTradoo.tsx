import React from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import whyjointradoo from "@/public/image/why-join-tradoo.jpg";
import target from "@/public/image/svg/target.svg";
import pen from "@/public/image/svg/pen.svg";
import globus from "@/public/image/svg/globus.svg";
import cap from "@/public/image/svg/square-academic-cap.svg";

const WhyJoinTradoo: React.FC = () => {
    type Feature = {
        icon: string;
        title: string;
        description: string;
    };

    const features: Feature[] = [
        {
            icon: target,
            title: "Structured Thinking",
            description:
                "We value clarity, discipline and systematic approaces to complex problems.",
        },
        {
            icon: pen,
            title: "Ownership & Accountability",
            description:
                "Take responsibility for your work. Deliver results that matter.",
        },
        {
            icon: globus,
            title: "Global Perspective",
            description:
                "We operate in crypto and fintech with a Swiss foundation and global mindset.",
        }, 
        {
            icon: cap,
            title: "Continuous Learning",
            description:
                "Markets evolve. Technology evolves. We adapt and improve constantly.",
        },
    ];

    return (
        <div className="max-xs:pt-10 pt-27 pb-2 sm:pb-42 bg-white">
            <div className="container max-sm:p-0">
                <div>
                    <div className="max-sm:px-4 max-sm:text-left max-lg:gap-6 max-lg:text-center max-lg:items-center max-lg:flex-col flex justify-between items-end gap-7">
                        <div className="w-full md:max-w-171">
                            <div>
                                <Badge label="Why Join Tradoo" />
                            </div>
                            <div className="mt-6">
                                <h2 className="max-xs:text-3xl max-xs:leading-10 text-40 leading-12 lg:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800">
                                    We value clarity, discipline and systematic approaches to complex problems.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="max-xs:mt-12 max-lg:items-center max-lg:flex-col mt-18 md:mt-16 flex sm:gap-2 md:gap-7 justify-between">
                        <div className="w-full max-sm:max-w-98 max-xs:h-120 max-sm:h-136.5 max-w-82.5 sm:h-140 lg:h-155 xl:h-155.5">
                            <Image
                                src={whyjointradoo}
                                alt="img"
                                className="rounded-3xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="max-sm:mt-2 max-lg:max-w-full w-full h-full max-w-171 ml-auto flex flex-col gap-2">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray100 max-sm:py-8 max-sm:px-4  p-8 items-center rounded-3xl max-sm:items-start max-sm:flex-col flex gap-8"
                                >
                                    <span className="min-w-16 w-16 h-16 flex justify-center items-center bg-white rounded-xl">
                                        <Image src={item.icon} alt="icon" className="max-h-full" />
                                    </span>

                                    <div className="flex flex-col items-start gap-2">
                                        <h4 className="text-2xl font-semibold leading-8 tracling-[-0.24px] text-gray800">
                                            {item.title}
                                        </h4>

                                        <p className="text-lg font-normal leading-[144%] text-gray700">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyJoinTradoo;
