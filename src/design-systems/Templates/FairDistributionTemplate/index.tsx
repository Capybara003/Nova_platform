'use client'
import { useState } from 'react'

import { BulbIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'

const FairDistributionTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center px-[23px] xsm:px-[70px] md:px-[140px] ">
      <div className="flex w-full justify-between gap-5 rounded-[10px] bg-black225_05 p-[22px]">
        <div className="flex items-center justify-center gap-[10px]">
          <BulbIcon />
          <Typography className="text-[18px] xsm:text-[25px]">How it works?</Typography>
        </div>
        <div>
          <NavTabsMolecule activeTab={activeTab} tabs={['NFT', 'Token']} onTabChange={handleTabChange} />
        </div>
      </div>
      <div>
        <div className="h-full rounded-[10px] bg-gradint-dark-pink p-[1px]">
          <div className="h-[99.4%] w-[99.6%] rounded-[10px] bg-[#25202B] p-[22px] shadow-xl">
            <div className=" flex h-full flex-col items-center justify-between  gap-2">
              <div className="flex flex-col items-center justify-between  gap-2">
                {/* <IconAtom alt={''} className="flex-shrink-0" height={49} src={infographiclogo} width={50} /> */}
                <Typography className="font-medium text-[#DBDBDB]" size="lg">
                  Market Analytics
                </Typography>
                <Typography size="md">Basic</Typography>
              </div>
              <div className="mt-4 flex w-full">
                {/* <Button className="w-full rounded-xs bg-button-gradient p-[12px]" onClick={openModal}>
                    <Typography className="font-normal" size="md">
                      Upgrade
                    </Typography>
                  </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FairDistributionTemplate
