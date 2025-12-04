import React from 'react'
import CareersBanner from '../sections/CareersBanner'
import WhyJoinTradoo from '../sections/WhyJoinTradoo'
import Positions from '../sections/Postitions'
import HowWeWork from '../sections/HowWeWork'
import ApplyNow from '../components/ApplyNow'

const page = () => {
  return (
    <main>
      <CareersBanner />
      <WhyJoinTradoo />
      <Positions />
      <HowWeWork />
      <ApplyNow />
    </main>
  )
}

export default page
