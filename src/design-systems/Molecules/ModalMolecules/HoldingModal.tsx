import React, { useState } from 'react'

import { CatogeryModel } from 'design-systems/Atoms/CatogeryModel'
import { Country } from 'design-systems/Atoms/Country'
import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import { ValueCal } from 'design-systems/Atoms/ViewCal'
import { ViewShowCase } from 'design-systems/Atoms/ViewShowCase'

const HoldingModal: React.FC<ModelProps> = ({ setShow, showModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeTab1, setActiveTab1] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  const handleTabChange2 = (tab: number) => {
    setActiveTab1(tab)
  }

  return (
    <Model
      className={'z-1 !mt-[1500px] xsm:!mt-[200px]'}
      heading="Holding Portfolio Settings"
      setShow={setShow}
      showModal={showModal}
    >
      <div className="grid w-full grid-cols-1 gap-[36px]  md:grid-cols-2 lg:grid-cols-3 xlg:!grid-cols-4">
        <ValueCal
          activeTab={activeTab}
          activeTab1={activeTab1}
          handleTabChange={handleTabChange}
          handleTabChange2={handleTabChange2}
          tabs={['Total', 'Avg.']}
          tabs2={['Floor Value', 'Trait Floor']}
        />
        <ViewShowCase
          activeTab={activeTab}
          activeTab1={activeTab1}
          handleTabChange={handleTabChange}
          handleTabChange2={handleTabChange2}
          tabs={['Amount', '%']}
          tabs2={['Collections', 'Projects']}
        />
        <CatogeryModel />
        <Country />
      </div>
    </Model>
  )
}

export default HoldingModal
