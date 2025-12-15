import Image from 'next/image'
import Badge from '../components/Badge'
import icon1 from "@/public/image/svg/invest-logo-1.svg";
import icon2 from "@/public/image/svg/invest-logo-2.svg";
import icon3 from "@/public/image/svg/invest-logo-3.svg";
import icon4 from "@/public/image/svg/invest-logo-4.svg";
import icon5 from "@/public/image/svg/invest-logo-5.svg";

const TechnologyPartners = () => {
    return (
        <>
            <div className="py-42">
                <div className="container">

                    <div className='max-sm:px-4 space-y-5 md:space-y-8 mb-12 md:mb-16'>
                        <div>
                            <Badge
                                label="Technology & Partners"
                            />
                        </div>
                        <div>
                            <h2 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'>We work with selected infrastructure and compliance partners.</h2>
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
            </div>
        </>
    )
}

export default TechnologyPartners
