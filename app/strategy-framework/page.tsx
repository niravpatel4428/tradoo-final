import React from 'react'
import StrategyBanner from '../sections/StrategyBanner'
import WhyStrategyFramework from '../sections/WhyStrategyFramework'
import WhyStrategyFrameworkSteps from '../sections/WhyStrategyFrameworkSteps'
import DisciplinedStructure from '../sections/DisciplinedStructure'
import WhyStrategyFrameworkStepsStructure from '../sections/WhyStrategyFrameworkStepsStructure'
import Strategies from '../sections/Strategies'
import WhyStrategyFrameworkMechanisms from '../sections/WhyStrategyFrameworkMechanisms'
import WhyStrategyFrameworkExecution from '../sections/WhyStrategyFrameworkExecution'

const page = () => {
  return (
    <main>
      <StrategyBanner />
      <WhyStrategyFramework />
      <WhyStrategyFrameworkSteps />
      <DisciplinedStructure />
      <div className="py-42 space-y-42">
        <Strategies />
        <WhyStrategyFrameworkMechanisms />
      </div>
      <WhyStrategyFrameworkExecution />

      <WhyStrategyFrameworkStepsStructure />
    </main>
  )
}

export default page
