'use client'
import { useState } from 'react'

import { CatogeryModel } from 'design-systems/Atoms/CatogeryModel'
import { Country } from 'design-systems/Atoms/Country'
import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import { ViewShowCase } from 'design-systems/Atoms/ViewShowCase'

export const TaxesModel: React.FC<ModelProps> = ({ setShow, showModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeTab1, setActiveTab1] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  const handleTabChange2 = (tab: number) => {
    setActiveTab1(tab)
  }
  return (
    <Model className={'!mt-[1500px] xsm:!mt-[200px]'} heading="Tax Settings" setShow={setShow} showModal={showModal}>
      <div className="mt-[22px] grid !grid-cols-1 gap-[22px] md:!grid-cols-3">
        <ViewShowCase
          activeTab={activeTab}
          activeTab1={activeTab1}
          handleTabChange={handleTabChange}
          handleTabChange2={handleTabChange2}
          tabs={['Amount', '%']}
          tabs2={['Amount', '%']}
        />
        <CatogeryModel />
        <Country />
      </div>
    </Model>
  )
}
