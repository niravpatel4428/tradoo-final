import React from "react";
import Button from "../components/Button";
import Image, { StaticImageData } from "next/image";
import eye from "@/public/image/svg/eye-icon.svg";
import clock from "@/public/image/svg/clock.svg";
import positionimg from "@/public/image/position-img1.jpg";
import positionimg2 from "@/public/image/position-img2.jpg";

const Positions: React.FC = () => {
    type Step = {
        id: number;
        title: string;
        description: string;
        location?: {
            icon: StaticImageData;
            label: string;
        }[];
    };

    const steps: Step[] = [
        {
            id: 1,
            title: "Head of marketing",
            description:
                "You'll lead all marketing at Tradoo and work on-site at our office in Zug. Together with the founding team, you'll shape our brand positioning, align all communication channels, and build a marketing framework that fits a modern wealth tech platform.",
            location: [
                { icon: eye, label: "Zug, Switzerland" },
                { icon: clock, label: "Full-time (on-site)" }
            ]
        },
        {
            id: 2,
            title: "Social Media Manager",
            description:
                "The Engine always starts with your profile. It defines the guardrails for your portfolio: how much risk you can bear, how BTC, ETH and USDC may be distributed, which volatility and drawdown limits apply. Only strategies that match these parameters are considered.",
            location: [
                { icon: eye, label: "Zug, Switzerland" },
                { icon: clock, label: "Full-time (on-site)" }
            ]
        },
        {
            id: 3,
            title: "Community Manager",
            description:
                "You're the bridge between Tradoo and our early user community. In this role, you'll moderate feedback, support private beta testers, have conversations with users, and help us build a structured, trusted environment. Your goal is to ensure every user feels heard, understood, and valued.",
            location: [
                { icon: eye, label: "Zug, Switzerland" },
                { icon: clock, label: "Full-time (on-site)" }
            ]
        },
    ];

    const images = [positionimg, positionimg2];

    return (
        <div className="max-xs:py-10 pt-42 pb-21">
            <div className="container max-sm:p-0">
                <div className="grid grid-cols-12 max-xs:gap-y-14 max-sm:gap-y-18 sm:gap-7">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="max-sm:px-4 sm:text-left sticky top-42">
                            <div className="">
                                <h3 className="max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800">
                                    Open positions
                                </h3>
                            </div>
                            <div className="mt-5 md:mt-8">
                                <p className="text-lg font-normal leading-[144%] color-gray700">
                                    We are looking for talented people who want to build something meaningful.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="w-full lg:max-w-171 ml-auto flex flex-col gap-2">
                            {steps.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-3xl bg-white max-sm:py-10 max-sm:px-4 sm:p-7 xxl:p-10 flex flex-col items-start gap-y-14"
                                >
                                    <div className="flex flex-col items-start gap-y-4">
                                        <h4 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">
                                            {item.title}
                                        </h4>

                                        {item.location && item.location.length > 0 && (
                                            <div className="max-xs:flex-col flex gap-2">
                                                {item.location.map((loc, index) => (
                                                    <span
                                                        key={index}
                                                        className="py-2 px-3 rounded-md bg-gray100 text-base font-medium leading-4.5 text-gray800 flex gap-2 items-center"
                                                    >
                                                        <Image src={loc.icon} alt="icon" />
                                                        {loc.label}
                                                    </span>
                                                ))}
                                            </div>
                                        )}



                                        <p className="mt-4 text-lg font-normal leading-[144%] text-gray700">
                                            {item.description}
                                        </p>

                                        <div className="mt-4">
                                            <Button label="Apply Now" href="#" size="M" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-2 md:mt-32 lg:mt-42">
                    <div className="grid grid-cols-12 gap-2">
                        {images.map((img, index) => (
                            <div key={index} className="col-span-12 md:col-span-6">
                                <div className="w-full h-69 sm:h-100 lg:h-119 min-h-full">
                                    <Image
                                        src={img}
                                        alt={`img-${index}`}
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Positions;
