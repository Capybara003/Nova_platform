import { useState } from 'react'

import NavTabsMolecule from '../NavTabs/NavTabsMolecule'

import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import { WalletsModel } from 'design-systems/Atoms/WalletsModel'
import Typography from 'design-systems/Atoms/Typography'
import { TopAssets } from 'design-systems/Atoms/TopAssets'

const WhalesModel: React.FC<ModelProps> = ({ showModal, setShow, heading }) => {
  const [valueCal, setValueCal] = useState<number>(0)
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeTab1, setActiveTab1] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }

  return (
    <Model className={''} heading={heading} setShow={setShow} showModal={showModal}>
      <div className={`mt-[22px] grid !grid-cols-1 gap-[36px] md:!grid-cols-3`}>
        <div className="!rounded-[10px] bg-blackCardBg p-[22px] font-Lexend">
          <div className="flex h-full flex-col justify-between gap-[22px] py-[32px]">
            <div className="flex flex-col items-center justify-center gap-[16px] px-[17px]">
              <Typography className="font-medium" size="subtitle">
                Value Calculation
              </Typography>
              <Typography className="text-black7f" size="md">
                Choose your preferred Value Calculation
              </Typography>
              <div className=" flex justify-center">
                <NavTabsMolecule activeTab={valueCal} tabs={['Total', 'Avg.']} onTabChange={tab => setValueCal(tab)} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[16px] px-[17px]">
              <Typography className="font-medium" size="subtitle">
                Floor Value Calculation
              </Typography>
              <Typography className="text-black7f" size="md">
                Choose your preferred Floor Calculation
              </Typography>
              <div className=" flex  justify-center">
                <NavTabsMolecule
                  activeTab={activeTab1}
                  className="whitespace-nowrap"
                  tabs={['Floor Value', 'Trait Value']}
                  onTabChange={tab => setActiveTab1(tab)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xs bg-blackCardBg p-[22px] font-Lexend">
          <div className="flex h-full  flex-col items-center justify-between gap-[27px] py-[32px]">
            <div className=" flex flex-col items-center justify-center gap-[16px] px-[17px]">
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

            <div className="flex flex-col items-center justify-center gap-[16px] px-[17px] ">
              <Typography className="font-medium" size="subtitle">
                Trade History
              </Typography>
              <Typography className="text-black7f" size="md">
                Switch between Total and Trade History
              </Typography>
              <TopAssets label={'Trade History'} />
            </div>
          </div>
        </div>
        <WalletsModel />
      </div>
    </Model>
  )
}

export default WhalesModel
