import React from 'react'
import ProfessionalBanner from '../sections/ProfessionalBanner'
import WhyItMatters from '../sections/WhyItMatters'
import Infrastructure from '../sections/Infrastructure'
import TransparencyDesign from '../sections/TransparencyDesign'
import StepsSection from '../components/StepsSection'
import TreasuryPilot from '../sections/TreasuryPilot'
import FAQ from '../components/Faq'
import DigitalWealthSection from '../components/DigitalWealthSection'
import riskIcon1 from "@/public/image/svg/risk-icon1.svg";
import riskIcon2 from "@/public/image/svg/risk-icon2.svg";
import riskIcon3 from "@/public/image/svg/risk-icon3.svg";
import riskIcon4 from "@/public/image/svg/risk-icon4.svg";
import riskIcon5 from "@/public/image/svg/risk-icon5.svg";
import riskIcon6 from "@/public/image/svg/risk-icon6.svg";
import UsdcFlows from '../sections/UsdcFlows'

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 80; // adjust to your header height
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const steps = [
  {
    id: 1,
    icon: riskIcon3,
    iconBg: "bg-white",
    title: "Conservative by design",
    description:
      "Lending-only, overcollateralized markets. No leverage, no complex farming strategies, no exposure to untested protocol experiments.",
    className: "!bg-[#F3F4F6]",
  },
  {
    id: 2,
    icon: riskIcon5,
    iconBg: "bg-white",
    title: "Non custodial smart vaults",
    description:
      "Assets are held in dedicated on-chain vaults. Tradoo cannot move funds outside predefined policies or rehypothecate your treasury.",
    className: "!bg-[#F3F4F6]",
  },
  {
    id: 3,
    icon: riskIcon2,
    iconBg: "bg-white",
    title: "Transparent venues",
    description:
      "Only vetted, battle-tested on-chain lending protocols. You always see which venues are in use and how your USDC is allocated.",
    className: "!bg-[#F3F4F6]",
  },
  {
    id: 4,
    icon: riskIcon6,
    iconBg: "bg-white",
    title: "Clear regulatory path",
    description:
      "Designed with a Swiss / Liechtenstein regulatory path in mind. Live onboarding of real treasuries will only start once licenses are in place.",
    className: "!bg-[#F3F4F6]",
  },
];

const steps2 = [
  {
    id: 1,
    icon: riskIcon1,
    title: "Client-controlled smart vaults",
    description:
      "Lending-only, overcollateralized markets. No leverage, no complex farming strategies, no exposure to untested protocol experiments.",
  },
  {
    id: 2,
    icon: riskIcon2,
    title: "Whitelisted venues only",
    description:
      "Assets are held in dedicated on-chain vaults. Tradoo cannot move funds outside predefined policies or rehypothecate your treasury.",
  },
  {
    id: 3,
    icon: riskIcon3,
    title: "Predefined risk limits",
    description:
      "Only vetted, battle-tested on-chain lending protocols. You always see which venues are in use and how your USDC is allocated.",
  },
  {
    id: 4,
    icon: riskIcon4,
    title: "Full transparency",
    description:
      "Designed with a Swiss / Liechtenstein regulatory path in mind. Live onboarding of real treasuries will only start once licenses are in place.",
  },
];

const page = () => {
  return (
    <main>
      <ProfessionalBanner />
      <WhyItMatters />
      <Infrastructure />
      <StepsSection
        className='bg-white'
        badgeLabel="The Tradoo Framework"
        title="Why Tradoo for On-Chain Treasury."
        steps={steps}
      />
      <TransparencyDesign />
      <UsdcFlows />
      <StepsSection
        badgeLabel="The Tradoo Framework"
        title="Non Custodial by Design. Risk-First in Execution."
        subtitle="Every treasury vault is a separate smart contract in your name. Tradoo defines and operates the risk framework around it, but does not take custody of your assets. Instead of chasing APYs, we focus on counterparty quality, overcollateralization, diversification and clear governance."
        steps={steps2}
      />
      <div id="treasury-demo">
        <TreasuryPilot />
      </div>
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
