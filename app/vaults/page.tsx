import React from 'react'
import VaultsBanner from '../sections/VaultsBanner'
import Professional from '../sections/Professional'
import WorkWithTradoo from '../sections/WorkWithTradoo'
import ToolBox from '../sections/ToolBox'
import Templates from '../sections/Templates'
import Modules from '../sections/Modules'
import StepsSection from '../components/StepsSection'
import InfoIconDark from "@/public/image/svg/dark-info-circle.svg";
import FAQ from '../components/Faq'
import DigitalWealthSection from '../components/DigitalWealthSection'
import JoinTradoo from '../sections/JoinTradoo'
import RiskFirst from '../sections/RiskFirst'
import DigitalAsset from '../sections/DigitalAsset'
import WhyStrategyToolbox from '../sections/WhyStrategyToolbox'

const steps = [
  {
    id: 1,
    number: 1,
    title: "Define the mandate",
    description:
      "You specify the objective: for example, a BTC/ETH growth sleeve, a balanced multi-asset portfolio, or a capital-preserving runway vault. Together, we translate it into risk, time horizon, and liquidity constraints.",
    className: "bg-gray800!",
    titleclassName: "text-white",
    subtitleclassName: "text-gray300!",
  },
  {
    id: 2,
    number: 2,
    title: "Configure the toolbox",
    description:
      "You choose whether to start from a guided profile or build from scratch. Select the modules you want to use, set BTC / ETH / USDC allocations and define key parameters such as DCA frequency, hedge logic and profit-taking rules.",
    className: "bg-gray800!",
    titleclassName: "text-white",
    subtitleclassName: "text-gray300!",
  },
  {
    id: 3,
    number: 3,
    title: "Simulate, review, and iterate",
    description:
      "We run simulations, stress scenarios, and regime checks. You review the behavior, refine the configuration, and document it as a vault policy ready to be activated once licensing is live.",
    className: "bg-gray800!",
    titleclassName: "text-white",
    subtitleclassName: "text-gray300!",  
  },
];

const page = () => {
  return (
    <main>
      <VaultsBanner />
      <Professional />
      <WorkWithTradoo />
      <ToolBox />
      <WhyStrategyToolbox />
      <Templates />
      <Modules />
      <StepsSection
        className='bg-gray900'
        titleclassName="text-white"
        subtitleclassName="text-gray400"
        buttonVariant="contrastdefault"
        badgeLabel="Our Investment Framework"
        badgeVariant="darkgreen"
        title="How Professionals Build and Test Vaults Today"
        subtitle="In the pilot, you use our infrastructure in a sandbox environment. You can design vaults, configure strategies and test behaviors without deploying real client assets yet."
        ctaLabel="Explore in Private Beta"
        info={{
          icon: InfoIconDark,
          text: "All vaults in the current pilot run with simulated balances only. No client funds are managed or deployed via Tradoo at this stage.",
        }}
        steps={steps}
      />
      <DigitalAsset />
      <RiskFirst />
      <JoinTradoo />
      <FAQ />
      <DigitalWealthSection
        title="A Modern, Disciplined Approach to Digital Wealth"
        description="Tradoo combines institutional principles with user controlled infrastructure to provide a stable foundation for long-term wealth."
        buttons={[
          {
            label: "Join Waitlist",
            href: "/waitlist",
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
