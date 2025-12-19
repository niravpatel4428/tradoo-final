"use client";
import React from 'react'
import WhyStrategyFramework from '../sections/WhyStrategyFramework'
import DisciplinedStructure from '../sections/DisciplinedStructure'
import Strategies from '../sections/Strategies'
import WhyStrategyFrameworkMechanisms from '../sections/WhyStrategyFrameworkMechanisms'
import WhyStrategyFrameworkExecution from '../sections/WhyStrategyFrameworkExecution'
import infocircul from "@/public/image/svg/Info-circle.svg";
import StepsSection from '../components/StepsSection'
import DigitalWealthSection from '../components/DigitalWealthSection'
import CommonBannerSection from '../components/CommonBannerSection'

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
    number: 1,
    title: "Apply risk profile",
    description:
      "The Engine always starts with your profile. It defines the guardrails for your portfolio: how much risk you can bear, how BTC, ETH and USDC may be distributed, which volatility and drawdown limits apply. Only strategies that match these parameters are considered.",
  },
  {
    id: 2,
    number: 2,
    title: "Check market phase",
    description:
      "The Engine evaluates whether a strategy fundamentally fits the current market phase. Some strategies only activate in quiet or neutral phases, others only in volatile markets. Strategies can be excluded at this stage.",
  },
  {
    id: 3,
    number: 3,
    title: "Filter strategy modules",
    description:
      "From 15 strategies, the Engine selects only those compatible with both your profile and market phase. Each strategy has a clearly defined role: Core, Growth, Hedging, or Meta Control.",
  },
  {
    id: 4,
    number: 4,
    title: "Weighting & execution",
    description:
      "The target distribution of BTC, ETH and USDC is clearly defined per risk profile. At this step, the Engine controls how this target allocation is operationally achieved and how actively individual strategy modules work within this framework. Position sizes, caps, rebalancing intervals and execution logic are set here. Trades are only triggered from this layer onwards.",
    badge: {
      text: "Trades are only triggered from this step onwards, within the guardrails and approvals from the Approach Framework.",
      icon: infocircul,
    },
  },
  {
    id: 5,
    number: 5,
    title: "Monitoring & auto-pause",
    description:
      "After activation, the Engine monitors each strategy individually. It continuously checks volatility, drawdowns, risk parameters, liquidity in respective markets and protocol risks of involved modules. When a strategy operates outside its guardrails, it is automatically paused or exposure is reduced, fully non-custodial and without manual intervention.",
  },
];

const page = () => {
  return (
    <main>
      <CommonBannerSection
        badge={{
          label: "Strategy Framework",
          icon: "/image/svg/zap.svg",
        }}
        title="A structured, Risk-Based Approach for Modern Wealth"
        description="Disciplined framework combining market regimes, risk factors and behavioural patterns."
        buttons={[
          {
            label: "View Strategy Modules",
            onClick: () => scrollToSection("strategy-modules"),
            trailingIcon: true,
          },
          {
            label: "Safety Mechanisms",
            onClick: () => scrollToSection("safety-mechanisms"),
            variant: "secondarydefault",
          },
        ]}
      />
      <WhyStrategyFramework />
      <StepsSection
        badgeLabel="Our Strategy Process"
        title="How the Engine selects the right strategies for your profile"
        subtitle="The Engine follows a defined process that ensures each strategy is activated only when your risk profile, market phase and all safety boundaries align."
        ctaLabel="Explore in Private Beta"
        ctaHref="/waitlist"
        steps={steps}
      />
      <DisciplinedStructure />
      <div className="py-42 space-y-42" id="strategy-modules">
        <Strategies />
        <div id="safety-mechanisms">
          <WhyStrategyFrameworkMechanisms  />
        </div>
      </div>
      <WhyStrategyFrameworkExecution />

      <DigitalWealthSection
        title="Ready to build your portfolio with structure?"
        description="With the Strategy Framework, you understand how the Engine selects strategies, manages risks and makes decisions. Create your Vault, choose your risk profile and experience how the Engine builds your portfolio based on clear guardrails."
        buttons={[
          {
            label: "Get Early Access",
            href: "/waitlist",
            variant: "contrastdefault",
            size: "L",
            trailingIcon: true,
          },
          {
            label: "Explore Risk Profiles",
            href: "/riskprofiles",
            variant: "primarydefault",
            size: "L",
          },
        ]}
      />
    </main>
  )
}

export default page
