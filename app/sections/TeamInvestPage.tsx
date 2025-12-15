import React from 'react'
import Badge from '../components/Badge'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import Link from 'next/link';
import Button from '../components/Button';

const teamMembers = [
  {
    name: "Jens Herbst",
    role: "Founder & VRP",
    image: "/image/leader-img1.jpg",
    linkedin: "#",
  },
  {
    name: "Natascha Retzler-Tavoletta",
    role: "CEO",
    image: "/image/leader-img2.jpg",
    linkedin: "#",
  },
  {
    name: "Nico Lucciola",
    role: "CTO",
    image: "/image/leader-img3.jpg",
    linkedin: "#",
  },
  {
    name: "Jens Herbst",
    role: "Founder & VRP",
    image: "/image/leader-img1.jpg",
    linkedin: "#",
  },
  {
    name: "Natascha Retzler-Tavoletta",
    role: "CEO",
    image: "/image/leader-img2.jpg",
    linkedin: "#",
  },
  {
    name: "Nico Lucciola",
    role: "CTO",
    image: "/image/leader-img3.jpg",
    linkedin: "#",
  },
];

const TeamInvestPage = () => {
  return (
    <>
      <div className="py-42 bg-white">
        <div className="container max-sm:px-0">
          <div className="block w-full max-w-190 mx-auto text-center px-4 sm:px-0 max-xs:mb-14 mb-[72px] xl:mb-24 space-y-6">
            <Badge label="Our Team" variant="lightgreen" />

            <div className="block font-semibold text-gray800 text-56 leading-16 -tracking-[3px]">
              <h2>Core Team & Board of Directors</h2>
            </div>

            <div className="block max-xs:text-base text-lg leading-snug text-gray700 space-y-4 lg:px-5">
              <p>On-chain performance of selected high-conviction wallets over the chosen timeframe. Purely analytical — no copy trading, no recommendations.</p>
            </div>
          </div>

          <div className="w-full max-w-[1042px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
              {teamMembers.map((member, index) => (
                <div className="block" key={index}>
                  <div className="relative">
                    <Image
                      src={member.image}
                      width={340}
                      height={340}
                      alt={member.name}
                      className="max-w-full w-full h-full object-cover object-top rounded-t-3xl"
                    />
                  </div>

                  <div className="rounded-b-3xl bg-gray-100 p-6 space-y-4">
                    <div className="space-y-2">
                      <p className="font-semibold text-lg leading-snug text-gray800">
                        {member.name}
                      </p>
                      <span className="text-gary700 text-base leading-5.5 font-normal capitalize">
                        {member.role}
                      </span>
                    </div>

                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center max-xs:w-10 max-xs:h-10 w-14 h-14 max-xs:rounded-lg rounded-2xl text-gray800 bg-white hover:bg-gray800 hover:text-white transition-all duration-300"
                    >
                      <FaLinkedin size={26} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 lg:mt-16 text-center">
            <Button href="#" variant='secondarydefault' label='View full team' />
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamInvestPage
