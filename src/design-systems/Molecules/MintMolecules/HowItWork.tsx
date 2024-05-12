'use client'
import { useState } from 'react'

import { BulbIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Fair } from 'design-systems/Molecules/HowItWorkMolecules/Fair'
import { FairDis } from 'design-systems/Molecules/HowItWorkMolecules/FairDis'
import { HowItWorkTab } from 'design-systems/Molecules/HowItWorkMolecules/HowItWorkTab'
import { OrderPlace } from 'design-systems/Molecules/HowItWorkMolecules/OrderPlace'
import { OrderPlaceToken } from 'design-systems/Molecules/HowItWorkMolecules/OrderPlaceToken'
import { OverViewTab } from 'design-systems/Molecules/HowItWorkMolecules/OverViewTab'
import { OverViewTokenTab } from 'design-systems/Molecules/HowItWorkMolecules/OverViewTokenTab'
import { PriceDisPhase } from 'design-systems/Molecules/HowItWorkMolecules/PriceDisPhase'
import { Queue } from 'design-systems/Molecules/HowItWorkMolecules/Queue'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'

export const HowItWork = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [fairActivetab, setFairActiveTab] = useState<number>(0)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
    setFairActiveTab(0)
  }
  const handlesetFairTabChange = (tab: number) => {
    setFairActiveTab(tab)
  }
  return (
    <div className="mt-[120px] flex h-full flex-col justify-center">
      <div className="flex w-full flex-col gap-[44px] rounded-[24px] bg-black225_05 p-[22px]">
        <div className="flex w-full flex-col items-start justify-between gap-5 md:!flex-row">
          <div className="flex items-center justify-start gap-[22px] md:!justify-center">
            <div className="min-w-auto   xsm:max-w-[80px]">
              <BulbIcon />
            </div>
            <Typography size="subtitle-25">How it works?</Typography>
          </div>
          <div className="w-full md:!w-fit">
            <NavTabsMolecule
              activeTab={activeTab}
              className="!h-fit w-full"
              tabs={['NFT', 'Token']}
              onTabChange={handleTabChange}
            />
          </div>
        </div>
        <HowItWorkTab
          activeTab={activeTab}
          fairActivetab={fairActivetab}
          handlesetFairTabChange={handlesetFairTabChange}
        />

        {activeTab === 0 && fairActivetab === 0 && <OverViewTab />}
        {activeTab === 0 && fairActivetab === 1 && <Queue />}
        {activeTab === 0 && fairActivetab === 2 && <OrderPlace />}
        {activeTab === 0 && fairActivetab === 3 && <Fair />}
        {activeTab === 1 && fairActivetab === 0 && <OverViewTokenTab />}
        {activeTab === 1 && fairActivetab === 1 && <OrderPlaceToken />}
        {activeTab === 1 && fairActivetab === 2 && <FairDis />}
        {activeTab === 1 && fairActivetab === 3 && <PriceDisPhase />}
      </div>
    </div>
  )
}
