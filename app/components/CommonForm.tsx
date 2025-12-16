import React from "react"
import SelectField from "./SelectField"
import InputField from "./InputField"
import Dropzone from "./Dropzone"
import TextareaField from "./TextareaField"
import Button from "./Button"
import DSLink from "./DSLink"


export type CommonFormConfig = {
  title: string
  description: string
  positionOptions: string[]
  showLinkedIn?: boolean
  textareaLabel: string
  textareaPlaceholder: string
  buttonLabel: string
  buttonHref: string
  footerText?: string
  footerEmail?: string
}


type CommonFormProps = {
    config: CommonFormConfig
}

const CommonForm: React.FC<CommonFormProps> = ({ config }) => {
    return (
        <div className="bg-gray900 pt-2 md:pt-42">
            <div className="container max-sm:px-0">
                <div className="bg-white rounded-20 py-14 px-4 md:p-10 xxl:p-14 grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-4">
                        <div className="space-y-8 xl:pr-1">
                            <h2 className="text-gray800 text-4xl md:text-40 xl:text-[44px] leading-14 font-semibold">
                                {config.title}
                            </h2>
                            <p className="text-gray700 text-base font-normal leading-5.5">
                                {config.description}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:col-span-8">
                        <div className="space-y-6">
                            <SelectField
                                label="Position"
                                options={config.positionOptions}
                            />

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                <InputField type="text" label="First name" placeholder="First name" />
                                <InputField type="text" label="Last name" placeholder="Last name" />
                            </div>

                            <InputField type="email" label="Email" placeholder="Email" />

                            {config.showLinkedIn && (
                                <InputField
                                    type="text"
                                    label="LinkedIn Profile (Optional)"
                                    placeholder="https://linkedin.com/"
                                />
                            )}

                            <TextareaField
                                label={config.textareaLabel}
                                placeholder={config.textareaPlaceholder}
                            />

                            <Dropzone />

                            <div className="pt-2">
                                <Button
                                    variant="primarydefault"
                                    label={config.buttonLabel}
                                    href={config.buttonHref}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                {config.footerText && config.footerEmail && (
                    <div className="mt-10 max-md:hidden text-center">
                        <div className="text-gray400 text-lg leading-6.5 font-medium">
                            {config.footerText}{" "}
                            <DSLink
                                variant="contrast"
                                href={`mailto:${config.footerEmail}`}
                                size="16"
                            >
                                {config.footerEmail}
                            </DSLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CommonForm
