import React, { useState } from 'react'

import CustomBarChart from '../BarChart'
import NavTabsMolecule from '../NavTabs/NavTabsMolecule'

import Typography from 'design-systems/Atoms/Typography'
import { GraphData2 } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'
import { InfoIcon } from 'design-systems/Atoms/Icons'

const TotalVolume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="grid w-full grid-cols-1 gap-4 !rounded-md bg-blackCardBg p-5 font-Lexend md:grid-cols-2">
      <div className="flex  flex-col gap-4">
        <div className="flex flex-row flex-wrap justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                Total Volume
              </Typography>
              <div>
                <InfoIcon />
              </div>
            </div>
            <div className="mt-2 flex flex-row items-center gap-2">
              <Typography className="text-left font-medium" size="lg">
                5.463 SEI
              </Typography>
              <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                +225,53%
              </Typography>
            </div>
            <Typography className="text-left font-light text-black7f" size="small">
              01.02.2022
            </Typography>
          </div>
          <div className="!w-full xsm:!w-auto">
            <NavTabsMolecule
              activeTab={activeTab}
              outerClassName="!h-fit"
              tabs={['D', 'W', 'M']}
              onTabChange={handleTabChange}
            />
          </div>
        </div>
        <div>
          <CustomBarChart
            data={GraphData2}
            height={200}
            name="name"
            width="100%"
            xdata1="pv"
            xdata2="uv"
            xdata3="amt"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row flex-wrap justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                Transactions
              </Typography>
              <InfoIcon />
            </div>
            <div className="mt-2 flex flex-row items-center gap-2">
              <Typography className="text-left font-medium" size="lg">
                5.463 SEI
              </Typography>
              <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                +225,53%
              </Typography>
            </div>
            <Typography className="text-left font-light text-black7f" size="small">
              01.02.2022
            </Typography>
          </div>
          <div className="!w-full xsm:!w-auto">
            <NavTabsMolecule
              activeTab={activeTab}
              outerClassName="!h-fit"
              tabs={['D', 'W', 'M']}
              onTabChange={handleTabChange}
            />
          </div>
        </div>
        <div>
          <CustomBarChart
            data={GraphData2}
            height={200}
            name="name"
            width="100%"
            xdata1="pv"
            xdata2="uv"
            xdata3="amt"
          />
        </div>
      </div>
    </div>
  )
}

export default TotalVolume
