import React from 'react'

import CustomBarChart from '../BarChart'

import { InfoIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { GraphData2 } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'
import DonutWithTableChart from 'design-systems/Templates/SingleTokenTemplate/NftTabSection/AnalyticsTab/DonutWithTableChart'

const UniqueHolderMarket: React.FC = () => {
  return (
    <div className="grid w-full !grid-cols-1 gap-4 !rounded-md bg-blackCardBg p-5 font-Lexend md:!grid-cols-2">
      <div className="flex  flex-col gap-4">
        <div className="flex flex-row flex-wrap justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap items-center gap-2">
              <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                Unique Holders Market
              </Typography>
              <div>
                <InfoIcons />
              </div>
            </div>
            <div className="mt-2 flex w-full flex-row items-center gap-2">
              <Typography className="text-left font-medium" size="lg">
                5.463 ₳
              </Typography>
              <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                +225,53%
              </Typography>
            </div>
            <Typography className="text-left font-light text-black7f" size="small">
              01.02.2022
            </Typography>
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
      <div className="w-full">
        <DonutWithTableChart
          chartCenterContent={
            <>
              <p>Total Holder</p>
              <p className="text-2xl text-white font-medium">550.000</p>
            </>
          }
          columnHeadingFirst="Wallet"
          columnHeadingSecond="Trader"
          isBg={false}
          totalHeading="Total Average"
        />
      </div>
    </div>
  )
}

export default UniqueHolderMarket
