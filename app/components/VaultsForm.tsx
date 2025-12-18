import React from 'react'
import SelectField from './SelectField'
import InputField from './InputField'
import TextareaField from './TextareaField'
import Button from './Button'
import Image from "next/image";
import infoCircleIcon from "@/public/image/svg/form-Info-circle.svg";

interface VaultsFormProps {
    className?: string;
}

const VaultsForm = ({ className = "" }: VaultsFormProps) => {
    return (
        <div className={`bg-gray900 pt-2 md:pt-42 ${className}`}>
            <div className="container max-sm:px-0">
                <div className="bg-white rounded-20 py-14 px-4 md:p-10 xxl:p-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* LEFT SIDE */}
                    <div className="lg:col-span-4">
                        <div className='flex flex-col h-full justify-between gap-5 xl:pr-1 lg:max-w-91'>
                            <h2 className='text-gray800 text-4xl md:text-40 xl:text-[44px] leading-tight font-semibold'>
                                Tell us about your firm and investment approach to apply for a design partner slot.
                            </h2>
                            <p className='text-base leading-5.5 text-gray700'>Commercial terms for design partners will be defined individually once the licensing framework and live onboarding timelines are confirmed.</p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-8">
                        <div className="space-y-6">

                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                                <InputField type='text' label="Company / Firm name" placeholder="Company name" />
                                <InputField type='text' label="Your name" placeholder="Your name" />
                            </div>

                            <InputField type='email' label="Business email" placeholder="Business email" />

                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                                <SelectField label="Your role" options={["Select your role", "Option 1", "Option 2", "Option 3"]} />
                                <SelectField label="Approximate AUM" options={["Select range", "Option 1", "Option 2", "Option 3"]} />
                            </div>

                            <SelectField label="Investor type" options={["Select your investor type", "Option 1", "Option 2", "Option 3"]} />

                            <TextareaField
                                label="What would you like to build or test? (optional)"
                                placeholder="Tell us about your digital asset strategy or mandate ideas..."
                            />

                            <div className='pt-2'>
                                <Button variant="primarydefault" label="Submit Application" href="/" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 max-sm:px-4">
                    <div className='flex items-start md:justify-center space-x-3.5 md:text-center'>
                        <div className="inline-flex items-center justify-center min-w-5 min-h-5 relative top-0.5">
                            <Image src={infoCircleIcon} alt="info-icon" className='max-w-full max-h-full object-cover' />
                        </div>
                        <div className="block text-gray500 md:text-center max-xs:text-base text-lg leading-tight">
                            <p>Participation in the design partner program does not involve any transfer of client assets to Tradoo and does not constitute a regulated investment service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VaultsForm;
