// Top50Modal.tsx
import React, { useState } from 'react'

import { CatogeryModel } from 'design-systems/Atoms/CatogeryModel'
import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'

const TreeMapModal: React.FC<ModelProps> = ({ setShow, showModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }

  return (
    // Your Tree Map modal content goes here
    <Model className={''} heading="Tree Map Settings" setShow={setShow} showModal={showModal}>
      <div className="grid w-full !grid-cols-1 flex-row gap-[22px] md:!grid-cols-2 ">
        <div className="rounded-[10px] bg-blackCardBg">
          <div className="flex h-full flex-col items-center justify-center gap-8 p-[22px] font-Lexend">
            <div className="flex flex-col gap-[16px]">
              <Typography className="font-medium" size="subtitle">
                Cateogry
              </Typography>
              <Typography className="font-Inter text-black7f" size="md">
                Choose your category to show
              </Typography>
              <div className="flex  justify-center">
                <NavTabsMolecule
                  activeTab={activeTab}
                  tabs={['Collections', 'Projects', 'Index']}
                  onTabChange={handleTabChange}
                />
              </div>
            </div>
          </div>
        </div>
        <CatogeryModel />
      </div>
    </Model>
  )
}

export default TreeMapModal
