import React from 'react'
import SelectField from './SelectField'
import InputField from './InputField'
import Dropzone from './Dropzone'
import TextareaField from './TextareaField'
import Button from './Button'
import DSLink from './DSLink'

const ApplyNow = () => {
  return (
    <>
      <div className="bg-gray900 pt-2 md:pt-42">
        <div className="container max-sm:px-0">
          <div className="bg-white rounded-20 py-14 px-4 md:p-10 xxl:p-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <div className='space-y-8 xl:pr-1'>
                <h2 className='text-gray800 text-4xl md:text-40 xl:text-[44px] leading-14 font-semibold'>Apply now</h2>
                <p className='text-gray700 text-base font-normal leading-5.5'>Submit your application and we’ll get back to you within a few days.</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <div>
                  <SelectField
                    label="Position"
                    options={["Select position", "Option 1", "Option 2", "Option 3"]}
                  />
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                  <div>
                    <InputField type='text' label="First name" placeholder="First name" />
                  </div>
                  <div>
                    <InputField type='text' label="last name" placeholder="last name" />
                  </div>
                </div>
                <div>
                  <InputField type='email' label="email" placeholder="Email" />
                </div>
                <div>
                  <InputField type='text' label="LinkedIn Profile (Optional)" placeholder="https://linkedin.com/" />
                </div>
                <div>
                  <TextareaField label="Why do you want to join Tradoo?" placeholder="Tell us more about your motivation, experience and what you’d bring to the team" />
                </div>
                <div>
                  <Dropzone />
                </div>

                <div className='pt-2'>
                  <Button
                    variant="primarydefault"
                    label="Submit Application"
                    href="/"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 max-md:hidden">
            <div className='text-gray400 text-lg leading-6.5 font-medium text-center'>
              Questions? Reach us at <DSLink variant='contrast' href='mailto:hello@tradoo.io' size='16' >hello@tradoo.io</DSLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyNow
