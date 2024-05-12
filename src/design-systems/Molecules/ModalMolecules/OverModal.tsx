/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

import closeIcon from 'assets/images/close.svg'
import Button from 'design-systems/Atoms/Button'
import { FilterIcon } from 'design-systems/Atoms/Icons'
import IconAtom from 'design-systems/Atoms/Logo'
import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import { MarketCatogery } from 'design-systems/data/data'
import { CheckboxLabel } from 'design-systems/Atoms/CheckboxLabel'

const OverviewModal: React.FC<ModelProps> = ({ setShow, showModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeTab1, setActiveTab1] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  const handleTabChange2 = (tab: number) => {
    setActiveTab1(tab)
  }

  return (
    // Your Top 50 modal content goes here
    <Model className={''} heading="Top 50 Settings" setShow={setShow} showModal={showModal}>
      <div className="grid !w-full !grid-cols-1 flex-row gap-[36px] md:!grid-cols-2">
        <div className="flex w-full flex-col items-center justify-between gap-8 rounded-[10px] bg-blackCardBg p-[22px] py-[52px]">
          <div className=" flex flex-col items-center justify-center gap-[16px]">
            <Typography className="font-medium" size="subtitle">
              Value Showcased
            </Typography>
            <Typography className="font-Inter text-black7f" size="md">
              Choose which value to showcase in the table
            </Typography>
            <div className=" flex justify-center">
              <NavTabsMolecule activeTab={activeTab} tabs={['Amount', '%']} onTabChange={handleTabChange} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <Typography className="font-medium" size="subtitle">
              Group
            </Typography>
            <Typography className="font-Inter text-black7f" size="md">
              Choose your preferred grouping
            </Typography>
            <div className="flex justify-center">
              <NavTabsMolecule
                activeTab={activeTab1}
                tabs={['Collections', 'Projects']}
                onTabChange={handleTabChange2}
              />
            </div>
          </div>
        </div>
        <div className="flex  w-full flex-col items-center gap-[16px]  rounded-[10px] bg-blackCardBg p-[22px]">
          <div className="mt-4 flex flex-col gap-[16px]">
            <Typography className="font-medium" size="subtitle">
              Category
            </Typography>
            <Typography className="font-Inter text-black7f" size="md">
              Choose your category to show
            </Typography>
          </div>
          <div className="flex w-full flex-col items-start  justify-start gap-2 p-[22px] pt-0 font-Inter">
            {MarketCatogery.map((item, key) => (
              <React.Fragment key={key}>
                <CheckboxLabel label={item.label} value="" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Model>
  )
}

export default OverviewModal
