import React from 'react'
import WhyJoinTradoo from '../sections/WhyJoinTradoo'
import Positions from '../sections/Postitions'
import HowWeWork from '../sections/HowWeWork'
import ApplyNow from '../components/ApplyNow'
import CommonBannerSection from '../components/CommonBannerSection'

const page = () => {
  return (
    <main>
      <CommonBannerSection
        badge={{
          label: "Careers",
          icon: "/image/svg/zap.svg",
        }}
        title="Build the Future of Digital Wealth"
        description="Join a small, focused team building structured, transparent wealth management for the next generation of investors."
        buttons={[
          {
            label: "View Open Roles",
            href: "#",
            trailingIcon: true,
          },
        ]}
      />
      <WhyJoinTradoo />
      <Positions />
      <HowWeWork />
      <ApplyNow />
    </main>
  )
}

export default page
