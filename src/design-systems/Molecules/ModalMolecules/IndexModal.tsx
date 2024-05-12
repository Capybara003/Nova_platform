import React, { useState } from 'react'

import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import { ViewShowCase } from 'design-systems/Atoms/ViewShowCase'

const IndexModal: React.FC<ModelProps> = ({ setShow, showModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeTab1, setActiveTab1] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  const handleTabChange2 = (tab: number) => {
    setActiveTab1(tab)
  }

  return (
    // Your Index modal content goes here
    <Model className={''} heading="Index Settings" setShow={setShow} showModal={showModal}>
      <ViewShowCase
        activeTab={activeTab}
        activeTab1={activeTab1}
        handleTabChange={handleTabChange}
        handleTabChange2={handleTabChange2}
        tabs={['Amount', '%']}
        tabs2={['Collections', 'Projects']}
      />
    </Model>
  )
}

export default IndexModal
