import React from 'react'
import ApproachBanner from '../sections/ApproachBanner'
import Structure from '../sections/Sructure'
import Steps from '../sections/Steps'
import Design from '../sections/Design'
import Works from '../sections/Works'
import ProblemSolved from '../sections/ProblemSolved'
import FullOwnership from '../sections/FullOwnership'

const page = () => {
  return (
    <main>
      <ApproachBanner/>
      <Structure/>
      <Steps/>
      <Design/>
      <Works/>
      <ProblemSolved/>
      <FullOwnership/>
    </main>
  )
}

export default page
