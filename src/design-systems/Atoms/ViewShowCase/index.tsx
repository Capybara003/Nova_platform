/* eslint-disable @typescript-eslint/no-explicit-any */
import { TopAssets } from '../TopAssets'
import Typography from '../Typography'

import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'

export const ViewShowCase: React.FC<any> = ({
  activeTab,
  handleTabChange,
  activeTab1,
  handleTabChange2,
  tabs,
  tabs2,
}) => {
  return (
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
            <NavTabsMolecule activeTab={activeTab} tabs={tabs} onTabChange={handleTabChange} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[16px] px-[17px]">
          <Typography className="font-medium" size="subtitle">
            Group
          </Typography>
          <Typography className="font-Inter text-black7f" size="md">
            Choose your preferred grouping
          </Typography>
          <div className="flex justify-center">
            <NavTabsMolecule activeTab={activeTab1} tabs={tabs2} onTabChange={handleTabChange2} />
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
  )
}
