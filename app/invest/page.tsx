import React from 'react'
import InvestBanner from '../sections/InvestBanner'
import Performance from '../sections/Performance'
import ProfitSection from '../sections/ProfitSection'

const page = () => {
  return (
    <main>
      <InvestBanner/>
      <Performance/>
      <ProfitSection/>
    </main>
  )
}

export default page
