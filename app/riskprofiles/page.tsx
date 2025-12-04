import React from 'react'
import RiskStructure from '../sections/RiskStructure'
import RiskTabs from '../sections/RiskTabs'
import ProfileStructuralBoundaries from '../sections/ProfileStructuralBoundaries'
import Portfolio from '../sections/Portfolio'
import DigitalWealthSection from '../components/DigitalWealthSection'
import CommonBannerSection from '../components/CommonBannerSection'

const page = () => {
    return (
        <main>
            <CommonBannerSection
                badge={{
                    label: "Risk Profiles",
                    icon: "/image/svg/zap.svg",
                }}
                title="Choose a framework that matches your risk tolerance."
                description="You define the risk boundaries. Tradoo manages the allocation with disciplined structure."
                buttons={[
                    {
                        label: "Join Private Beta",
                        href: "#",
                        trailingIcon: true,
                    },
                    {
                        label: "Strategy Framework",
                        href: "#",
                        variant: "secondarydefault",
                    },
                ]}
            />
            <RiskStructure />
            <RiskTabs />
            <ProfileStructuralBoundaries />
            <Portfolio />
            <DigitalWealthSection
                containerClass='max-w-200'
                title="Want to understand how Tradoo
adjusts within your profile?"
                description="Learn how we interpret market regimes and make disciplined portfolio decisions within your chosen risk framework."
                buttons={[
                    {
                        label: "Join Waitlist",
                        href: "#",
                        variant: "contrastdefault",
                        size: "L",
                        trailingIcon: true,
                    },
                    {
                        label: "Explore the Tradoo Approach",
                        href: "#",
                        variant: "primarydefault",
                        size: "L",
                    },
                ]}
            />
        </main >
    )
}

export default page
