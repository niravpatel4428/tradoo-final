import React from 'react'
import InvestBanner from '../sections/InvestBanner'
import Performance from '../sections/Performance'
import ProfitSection from '../sections/ProfitSection'
import DigitalWealthSection from '../components/DigitalWealthSection'
import InvestorFAQ from '../sections/InvestorFAQ'
import TeamInvestPage from '../sections/TeamInvestPage'
import FundingPahsesInvestPage from '../sections/FundingPahsesInvestPage'
import Documents from '../sections/Documents'
import TechnologyPartners from '../sections/TechnologyPartners'

const page = () => {
  return (
    <main>
      <InvestBanner/>
      <Performance/>
      <ProfitSection/>
      <TechnologyPartners />
      <Documents />
      <FundingPahsesInvestPage />
      <TeamInvestPage />
      <InvestorFAQ />
      <DigitalWealthSection
        title="Select Amount and Sign Digitally to Invest"
        description="Start the submission process to formalize your participation in Tradoo’s current round."
        buttons={[
          {
            label: "Invest in Tradoo",
            href: "#",
            variant: "contrastdefault",
            size: "L",
            trailingIcon: true,
          },
        ]}
      />
    </main>
  )
}

export default page
