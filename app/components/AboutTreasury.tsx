import React from 'react'
import SelectField from './SelectField'
import InputField from './InputField'
import TextareaField from './TextareaField'
import Button from './Button'
import Image from "next/image";
import infoCircleIcon from "@/public/image/svg/form-Info-circle.svg";

interface AboutTreasuryProps {
  className?: string;
}

const AboutTreasury = ({ className = "" }: AboutTreasuryProps) => {
    return (
        <div className={`bg-gray900 pt-2 md:pt-42 ${className}`}>
            <div className="container max-sm:px-0">
                <div className="bg-white rounded-20 py-14 px-4 md:p-10 xxl:p-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* LEFT SIDE */}
                    <div className="lg:col-span-4">
                        <div className='space-y-8 xl:pr-1'>
                        <h2 className='text-gray800 text-4xl md:text-40 xl:text-[44px] leading-tight font-semibold'>
                            Tell us a bit about your treasury and we’ll reach out with a pilot slot.
                        </h2>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-8">
                        <div className="space-y-6">
                        
                        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                            <InputField type='text' label="Company name" placeholder="Company name" />
                            <InputField type='text' label="Your name" placeholder="Your name" />
                        </div>

                        <InputField type='email' label="Business email" placeholder="Business email" />

                        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                            <SelectField label="Your role" options={["Select your role","Option 1", "Option 2", "Option 3"]} />
                            <SelectField label="Approximate stablecoin treasury size" options={["Select range","Option 1", "Option 2", "Option 3"]} />
                        </div>

                        <SelectField label="Segment" options={["Select your segment","Option 1", "Option 2", "Option 3"]} />

                        <TextareaField
                            label="What are you mainly looking to improve? (optional)"
                            placeholder="Tell us about your treasury challenges..."
                        />

                        <div className='pt-2'>
                            <Button variant="primarydefault" label="Submit Application" href="/" />
                        </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 max-sm:px-4">
                    <div className='flex items-start space-x-3.5 md:text-center'>
                        <div className="inline-flex items-center justify-center min-w-5 min-h-5 relative top-0.5">
                            <Image src={infoCircleIcon} alt="info-icon" className='max-w-full max-h-full object-cover' />
                        </div>
                        <div className="block text-gray500 max-xs:text-base text-lg leading-tight">
                            <p>Submitting this form does not constitute an offer or the provision of regulated investment services. We currently provide demo access only.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTreasury;
