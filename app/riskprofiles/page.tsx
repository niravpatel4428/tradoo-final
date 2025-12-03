import React from 'react'
import RiskProfilesBanner from '../sections/RiskProfilesBanner'
import RiskStructure from '../sections/RiskStructure'
import RiskTabs from '../sections/RiskTabs'
import ProfileStructuralBoundaries from '../sections/ProfileStructuralBoundaries'
import BottomRiskProfile from '../sections/BottomRiskProfile'
import Portfolio from '../sections/Portfolio'

const page = () => {
    return (
        <main>
            <RiskProfilesBanner/>
            <RiskStructure/>
            <RiskTabs/>
            <ProfileStructuralBoundaries/>
            <Portfolio/>
            <BottomRiskProfile/>
        </main >
    )
}

export default page
