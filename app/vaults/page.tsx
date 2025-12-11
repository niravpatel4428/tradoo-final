import React from 'react'
import VaultsBanner from '../sections/VaultsBanner'
import Professional from '../sections/Professional'
import WorkWithTradoo from '../sections/WorkWithTradoo'
import ToolBox from '../sections/ToolBox'
import Templates from '../sections/Templates'
import Modules from '../sections/Modules'

const page = () => {
  return (
    <main>
      <VaultsBanner/>
      <Professional/>
      <WorkWithTradoo/>
      <ToolBox/>
      <Templates/>
      <Modules/>
    </main>
  )
}

export default page
