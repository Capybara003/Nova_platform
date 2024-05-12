import { useState } from 'react'

import { CatogeryModel } from 'design-systems/Atoms/CatogeryModel'
import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import { ValueCal } from 'design-systems/Atoms/ViewCal'
import { ViewShowCase } from 'design-systems/Atoms/ViewShowCase'
import { WalletsModel } from 'design-systems/Atoms/WalletsModel'

const CollectionModel: React.FC<ModelProps> = ({
  showModal,
  setShow,
  category,
  activeTabIndex,
  valueCal,
  showCase,
  wallets,
  heading,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeTab1, setActiveTab1] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  const handleTabChange2 = (tab: number) => {
    setActiveTab1(tab)
  }
  return (
    <Model className={''} heading={heading} setShow={setShow} showModal={showModal}>
      <div
        className={`${
          (activeTabIndex === 0 && ' !grid-cols-1 md:!grid-cols-2') ||
          (activeTabIndex === 1 && ' !grid-cols-1 md:!grid-cols-2') ||
          (activeTabIndex === 2 && '!grid-cols-1') ||
          (activeTabIndex === 3 && ' !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3') ||
          (activeTabIndex === 4 && '!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3')
        } grid gap-[36px]`}
      >
        {valueCal && (
          <ValueCal
            activeTab={activeTab}
            activeTab1={activeTab1}
            handleTabChange={handleTabChange}
            handleTabChange2={handleTabChange2}
            tabs={['Total', 'Avg.']}
            tabs2={['Floor Value', 'Trait Floor']}
          />
        )}
        {showCase && (
          <ViewShowCase
            activeTab={activeTab}
            activeTab1={activeTab1}
            handleTabChange={handleTabChange}
            tabs={['Amount', '%']}
            tabs2={['Collections', 'Projects']}
          />
        )}

        {category && <CatogeryModel />}
        {wallets && <WalletsModel />}
      </div>
    </Model>
  )
}

export default CollectionModel
