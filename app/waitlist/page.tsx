import React from 'react'
import WaitListBanner from '../sections/WaitListBanner'
import Features from '../sections/Features'
import TrustedByInvestors from '../sections/TrustedByInvestors'
import FooterLinks from '../sections/FooterLinks'

const page = () => {
  return (
    <main>
      <WaitListBanner/>
      <Features/>
      <TrustedByInvestors/>
      <FooterLinks/>
    </main>
  )
}

export default page
