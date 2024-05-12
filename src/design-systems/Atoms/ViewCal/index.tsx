/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from '../Typography'

import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'

export const ValueCal: React.FC<any> = ({ activeTab, handleTabChange, activeTab1, handleTabChange2, tabs, tabs2 }) => {
  return (
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
            <NavTabsMolecule activeTab={activeTab} tabs={tabs} onTabChange={handleTabChange} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[16px] px-[17px]">
          <Typography className="font-medium" size="subtitle">
            Group
          </Typography>
          <Typography className="text-black7f" size="md">
            Choose your preferred grouping
          </Typography>
          <div className=" flex  justify-center">
            <NavTabsMolecule activeTab={activeTab1} tabs={tabs2} onTabChange={handleTabChange2} />
          </div>
        </div>
      </div>
    </div>
  )
}
