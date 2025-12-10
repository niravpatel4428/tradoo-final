import React from "react";
import ApproachBanner from "../sections/ApproachBanner";
import Structure from "../sections/Sructure";
import Design from "../sections/Design";
import Works from "../sections/Works";
import ProblemSolved from "../sections/ProblemSolved";
import FullOwnership from "../sections/FullOwnership";
import infocircul from "@/public/image/svg/Info-circle.svg";
import StepsSection from "../components/StepsSection";
import DigitalWealthSection from "../components/DigitalWealthSection";


const steps = [
  {
    id: 1,
    number: 1,
    title: "Data Intake",
    description:
      "Tradoo gathers market and environmental data continuously to build a complete view. This covers price movements, volatility, liquidity, sentiment and significant events across the landscape.",
  },
  {
    id: 2,
    number: 2,
    title: "Regime Detection",
    description:
      "Tradoo reads market regimes and their underlying phases. It recognises whether conditions are calm, overheated, shifting or under pressure.",
  },
  {
    id: 3,
    number: 3,
    title: "Principle & Playbook Validation",
    description:
      "Tradoo checks which proven approaches have worked reliably in similar conditions. No speculation, just robust principles that have stood the test.",
  },
  {
    id: 4,
    number: 4,
    title: "Risk Based Weighting & Execution",
    description:
      "Tradoo adjusts your portfolio weighting within clearly defined risk boundaries. Everything happens in a controlled way, step by step, entirely within your own smart-contract vault.",
    list: [
      "Volatility ceiling",
      "Position sizing",
      "Defensive adjustments",
      "Maximum drawdown",
      "Allowed exposure",
      "Cash allocation",
    ],
    badge: {
      text: "Trades only happen here. Never earlier in the process.",
      icon: infocircul,
    },
  },
  {
    id: 5,
    number: 5,
    title: "Continuous Oversight & Risk Control",
    description:
      "Tradoo monitors market conditions continuously, making sure every position stays within the risk and exposure boundaries of your profile. When regimes shift, the portfolio moves automatically to a more defensive stance.",
  },
];

const page = () => {
  return (
    <main>
      <ApproachBanner />
      <Structure />
      <StepsSection
        badgeLabel="Our Investment Framework"
        title="A five-layer framework for smarter wealth decisions."
        subtitle="Tradoo processes information through 5 structured steps."
        ctaLabel="Explore in Private Beta"
        ctaHref="#"
        steps={steps}
      />
      <Design />
      <Works />
      <ProblemSolved /> 
      <FullOwnership />
      <DigitalWealthSection
        title="A Modern, Disciplined Approach to Digital Wealth"
        description="Tradoo combines institutional principles with user controlled infrastructure to provide a stable foundation for long-term wealth."
        buttons={[
          {
            label: "Join Waitlist",
            href: "#",
            variant: "contrastdefault",
            size: "L",
            trailingIcon: true,
          },
          {
            label: "Start With Your Risk Profile",
            href: "#",
            variant: "primarydefault",
            size: "L",
          },
        ]}
      />
    </main>
  );
};

export default page;
