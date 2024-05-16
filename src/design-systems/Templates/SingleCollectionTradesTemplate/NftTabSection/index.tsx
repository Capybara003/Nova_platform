'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FiInfo } from 'react-icons/fi'

import AnalyticsTab from './AnalyticsTab'
import AssetTab from './AssetTab'
import NftTableSetting from './NftTableSetting'
import NftTabsHeader from './TabHeader'
import TopWhalesTab from './TopWhalesTab'
import TradesTab from './TradesTab'

import { IMG } from 'assets/images'
import Typography from 'design-systems/Atoms/Typography'
import DynamicDonutChart from 'design-systems/Molecules/DynamicDonutChart'
import Speedometer from 'design-systems/Molecules/Speedometer'

const NftTabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isShowSetting, setIsShowSetting] = useState<boolean>(false)
  const [tradesTableFilter, setTradesTableFilter] = useState<string>('listings')
  const [topWhalesTableFilter, setTopWhalesTableFilter] = useState<string>('total')
  return (
    <>
      <div className="w-full overflow-hidden rounded-[24px] bg-blackCardBg p-3 md:!p-6">
        <NftTabsHeader
          activeTab={activeTab}
          onChangeActiveTab={activeTab => setActiveTab(activeTab)}
          onChangeTopWhalesTableFilter={value => setTopWhalesTableFilter(value)}
          onChangeTradesTableFilter={value => setTradesTableFilter(value)}
          onShowSetting={value => setIsShowSetting(value)}
        />

        {activeTab === 0 && <TradesTab tradesTableFilter={tradesTableFilter} />}

        {activeTab === 1 && <AnalyticsTab />}

        {activeTab === 2 && <AssetTab />}

        {activeTab === 3 && <TopWhalesTab topWhalesTableFilter={topWhalesTableFilter} />}
      </div>

      {activeTab === 0 && (
        <div className="flex h-auto flex-col gap-[32px] pb-8 xlg:!flex-row">
          <div className="flex flex-1 flex-col-reverse items-center gap-16 rounded-[24px] bg-blackCardBg p-6 md:flex-row md:justify-center">
            <DynamicDonutChart
              centerContent={
                <>
                  <p>Listed</p>
                  <p className="text-2xl text-white font-medium">5%/325</p>
                  <p> of 6500</p>
                </>
              }
              colors={['#5A3FFF', '#2592D9', '#1ED6FF', '#F466FE', '#C517D1', '#6B0090']}
              height={280}
              labels={['0-5K ', '5K-25k', '25K-100K', '100K-250K', '250K-1M', '1M+']}
              series={[22, 20, 20, 22, 32, 51]}
              width={300}
            />

            <div className="">
              <Typography
                className="flex items-center gap-2 text-left font-Lexend font-normal text-[#ffffffcc]"
                size="h4"
                variant="regular"
              >
                Listing Wallets <FiInfo className="text-subtitle" />
              </Typography>
              <div className="mt-4 flex items-center justify-start gap-[155px]">
                <div>
                  <Typography className="mb-1 text-left font-Inter text-small uppercase text-[rgba(255,255,255,0.6)]">
                    Wallets
                  </Typography>
                  <ul className="space-y-2">
                    {[
                      { text: '0-5K SEI', icon: IMG.clm1 },
                      { text: '5K-25k SEI', icon: IMG.clm2 },
                      { text: '25K-100K SEI', icon: IMG.clm3 },
                      { text: '100K-250K SEI', icon: IMG.clm4 },
                      { text: '250K-1M SEI', icon: IMG.clm5 },
                      { text: '1M+ SEI', icon: IMG.clm6 },
                    ].map(item => {
                      return (
                        <li className="flex items-center justify-start gap-2 text-md text-[#DBDBDB]" key={item.text}>
                          <Image alt="marker" className="h-[22px] w-[22px]" src={item.icon} />
                          <Typography>{item.text}</Typography>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div>
                  <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                    Listed
                  </Typography>
                  <ul className="space-y-2">
                    {Array(6)
                      .fill('12% / 600')
                      .map(item => {
                        return (
                          <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={item}>
                            <Typography>{item}</Typography>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>
              <hr className="mt-3 bg-[#ffffffcc] md:!hidden" />
            </div>
          </div>

          <div className="flex h-auto flex-1 flex-col gap-[16px] rounded-[24px] bg-blackCardBg p-6 font-Lexend text-grayDB ">
            <Typography className="text-left  font-medium " size="subtitle-25" variant="regular">
              Unrealized Gains
            </Typography>
            <div className="grid h-full !grid-cols-1 gap-[22px] text-start xsm:!grid-cols-2">
              <div className="flex h-full flex-col justify-between rounded-[8px] border-[2px] border-black225_05 px-[8px] py-[5px]">
                <Typography className="text-[18px] font-medium">Assets</Typography>
                <div className="h-[180px]">
                  <Speedometer
                    content={
                      <div className="mr-4 text-sm">
                        <div className="value text-[14px] text-[#ffffff99]">NET</div>
                        <div className="label mt-2 text-[32px]">+1.250</div>
                      </div>
                    }
                    endVal="250"
                    isShowStartEndValue
                    percentageValue={40}
                    startVal="200"
                    width="240px"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-[8px] border-[2px] border-black225_05 px-[8px] py-[5px]">
                <Typography className="text-[18px] font-medium">SEI</Typography>
                <div className="h-[180px]">
                  <Speedometer
                    content={
                      <div className="mr-4 text-sm">
                        <div className="value text-[14px] text-[#ffffff99]">NET</div>
                        <div className="label mt-2 text-[32px]">+1.250</div>
                      </div>
                    }
                    endVal="250"
                    isShowStartEndValue
                    percentageValue={40}
                    startVal="200"
                    width="240px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <NftTableSetting activeTab={activeTab} handleOpen={value => setIsShowSetting(value)} isOpen={isShowSetting} />
    </>
  )
}
export default NftTabSection
