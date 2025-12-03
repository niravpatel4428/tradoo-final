import React from 'react'
import Image from 'next/image'
import Badge from '../components/Badge'
import Button from '../components/Button'
import icon1 from "@/public/image/svg/execution-1.svg";
import icon2 from "@/public/image/svg/execution-2.svg";
import icon3 from "@/public/image/svg/execution-3.svg";
import icon4 from "@/public/image/svg/execution-4.svg";
import icon5 from "@/public/image/svg/execution-5.svg";
const WhyStrategyFrameworkExecution = () => {
  return (
    <>
      <div className="py-42 bg-white">
        <div className="container">
          <div className="space-y-36">
            <div className="space-y-24">
              <div className="flex max-lg:flex-col gap-6 xl:gap-5">
                <div className="flex-none lg:flex-1">
                  <div className="space-y-6">
                    <div>
                      <Badge label="Infrastructure & Execution" />
                    </div>
                    <div className="mt-6">
                      <h2 className="max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800">
                        Whitelisted execution on vetted protocols
                      </h2>
                    </div>

                  </div>
                </div>
                <div className="flex-none lg:flex-1">
                  <div className="h-full flex items-end">
                    <div className="text-lg font-normal leading-[144%] color-gray700">
                      <p>The Tradoo Engine executes strategies exclusively through independent, established protocols and low-fee infrastructure (e.g. Base & Arbitrum). All deployed systems have a clear security, governance and long-term track record. Execution is fully non-custodial and fee-optimized.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex max-sm:flex-col max-md:flex-wrap md:flex-row sm:items-center gap-14">
                <div className="md:flex-1 flex sm:justify-center sm:items-center"><Image src={icon1} alt="icon" className='object-contain' /></div>
                <div className="md:flex-1 flex sm:justify-center sm:items-center"><Image src={icon2} alt="icon" className='object-contain' /></div>
                <div className="md:flex-1 flex sm:justify-center sm:items-center"><Image src={icon3} alt="icon" className='object-contain' /></div>
                <div className="md:flex-1 flex sm:justify-center sm:items-center"><Image src={icon4} alt="icon" className='object-contain' /></div>
                <div className="md:flex-1 flex sm:justify-center sm:items-center"><Image src={icon5} alt="icon" className='object-contain' /></div>
              </div>
            </div>


            <div className="max-sm:-mx-[15px] py-10 lg:py-16 px-4 md:p-8 xxl:py-10 xxl:px-14 bg-[#F3F4F6] rounded-3xl flex max-lg:flex-col lg:items-center gap-3 lg:gap-5">
              <div className="flex-1">
                <div className="mb-3">
                  <h2 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800">Low-fee infrastructure & Vetted protocols</h2>
                </div>
                <div className="text-lg font-normal leading-[144%] color-gray700">
                  <p>Infrastructure selection is deliberately designed for low network fees and efficient execution.</p>
                </div>
              </div>

              <div className="flex-none">
                <Button label="Join Private Beta" href="#" trailingIcon variant='contrastdefault' />
              </div>
            </div>
            <div>
              <h2 className='max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800'>The combination of non-custodial vaults, whitelisted protocols and clearly defined risk limits ensures that all strategies are executed within a stable, verifiable framework. <span className='text-gray500'>No centralized custody, no blind trust, but transparent, technically sound execution.</span></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyStrategyFrameworkExecution
