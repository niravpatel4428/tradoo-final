import React from 'react'
import Badge from '../components/Badge'
import Image from 'next/image'
import profile from "@/public/image/profile1.png";
import profile2 from "@/public/image/profile2.png";
import profile3 from "@/public/image/profile3.png";
import Button from '../components/Button';

const testimonials = [
    {
        name: "Dr. Hans Martin Oberholzer",
        role: "Insurance & Wealth Management, Zurich",
        image: profile,
        text: "What convinced me during the first demo was the combination of clear risk profiles and full control over my own vault. No custody, no black box trading – exactly the structured approach we’ve been missing in digital wealth management.",
    },
    {
        name: "Sarah Meier",
        role: "Investment Strategist, Basel",
        image: profile2,
        text: "What convinced me during the first demo was the combination of clear risk profiles and full control over my own vault. No custody, no black box trading – exactly the structured approach we’ve been missing in digital wealth management.",
    },
    {
        name: "Thomas Berger",
        role: "Portfolio Manager, Geneva",
        image: profile3,
        text: "What convinced me during the first demo was the combination of clear risk profiles and full control over my own vault. No custody, no black box trading – exactly the structured approach we’ve been missing in digital wealth management.",
    },
];


const TrustedByInvestors: React.FC = () => {
    return (
        <div className='py-24'>
            <div className='container'>
                <div className='space-y-18'>
                    <div className='sm:text-center space-y-6'>
                        <div>
                            <Badge
                                label="Trusted by Investors"
                            />
                        </div>
                        <div>
                            <h3 className='max-xs:tracking-normal max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-lightgray900'>What Early Access Investors Say</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-3xl max-sm:py-10 max-sm:px-4 sm:p-7 xl:p-10 bg-white space-y-10"
                            >
                                <div>
                                    <svg
                                        width="40"
                                        height="34"
                                        viewBox="0 0 40 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 34L10.1742 0H18.8153L12.6829 34H0ZM21.1847 34L31.3589 0H40L33.8676 34H21.1847Z"
                                            fill="#202533"
                                        />
                                    </svg>
                                </div>

                                <p className="mt-12 text-lg leading-[144%] text-gray700">
                                    {item.text}
                                </p>

                                <div className="flex gap-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="min-w-13 w-13 h-13 rounded-full"
                                    />
                                    <div className="space-y-1">
                                        <h5 className="text-lg font-semibold leading-6 text-lightgray900">
                                            {item.name}
                                        </h5>
                                        <p className="text-base leading-5.5 text-gray700">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='sm:text-center'>
                        <Button label="Get Early Access" href="#" trailingIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedByInvestors
