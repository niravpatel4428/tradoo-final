import React from 'react'
import AboutBanner from '../sections/AboutBanner'
import OurTeam from '../sections/OurTeam'
import OurMission from '../sections/OurMission'
import GuidingPrinciples from '../sections/GuidingPrinciples'
import CareerTradoo from '../sections/CareerTradoo'
import WantPart from '../sections/WantPart'

const page = () => {
  return (
    <div>
      <AboutBanner/>
      <OurTeam/>
      <OurMission/>
      <GuidingPrinciples/>
      <CareerTradoo/>
      <WantPart/>
    </div>
  )
}

export default page

