import React from 'react'
import OurTeam from '../sections/OurTeam'
import OurMission from '../sections/OurMission'
import GuidingPrinciples from '../sections/GuidingPrinciples'
import CareerTradoo from '../sections/CareerTradoo'
import DigitalWealthSection from '../components/DigitalWealthSection'
import CommonBannerSection from '../components/CommonBannerSection'

const page = () => {
  return (
    <main>
      <CommonBannerSection
        badge={{
          label: "About us",
          icon: "/image/svg/asterisk-icon.svg",
        }}
        title="We are building the future of adaptive asset management."
        description="A multidisciplinary team of engineers, researchers, and financial professionals aligned around one goal: systematic, research-driven wealth management at scale."
        buttons={[
          {
            label: "Join Waitlist",
            href: "/waitlist",
            trailingIcon: true,
          },
          {
            label: "View careers",
            href: "/career",
            variant: "secondarydefault",
          },
        ]}
      />
      <OurTeam />
      <OurMission />
      <GuidingPrinciples />
      <CareerTradoo />
      <DigitalWealthSection
        title="Want to be part of this early on?"
        // description="Tradoo combines institutional principles with user controlled infrastructure to provide a stable foundation for long-term wealth."
        buttons={[
          {
            label: "Join Waitlist",
            href: "/waitlist",
            variant: "contrastdefault",
            size: "L",
            trailingIcon: true,
          },
          // {
          //   label: "Start With Your Risk Profile",
          //   href: "#",
          //   variant: "primarydefault",
          //   size: "L",
          // },
        ]}
      />
    </main>
  )
}

export default page

