'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import AnalyticsTab from './AnalyticsTab'
import NftTableSetting from './NftTableSetting'
import NftTabsHeader from './TabHeader'
import TopWhalesTab from './TopWhalesTab'
import TradesTab from './TradesTab'
import DonutWithTableChart from './AnalyticsTab/DonutWithTableChart'

import { IMG } from 'assets/images'
import { InfoIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import CustomSingleBar from 'design-systems/Molecules/CustomSingleBar'
import Speedometer from 'design-systems/Molecules/Speedometer'

const NftTabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isShowSetting, setIsShowSetting] = useState<boolean>(false)
  const [tradesTableFilter, setTradesTableFilter] = useState<string>('listings')
  const [topWhalesTableFilter, setTopWhalesTableFilter] = useState<string>('total')

  return (
    <>
      <div className="overflow-hidden rounded-lg bg-blackCardBg p-3 md:!rounded-xl md:!p-6">
        <NftTabsHeader
          activeTab={activeTab}
          onChangeActiveTab={activeTab => setActiveTab(activeTab)}
          onChangeTopWhalesTableFilter={value => setTopWhalesTableFilter(value)}
          onChangeTradesTableFilter={value => setTradesTableFilter(value)}
          onShowSetting={value => setIsShowSetting(value)}
        />

        {activeTab === 0 && <TradesTab tradesTableFilter={tradesTableFilter} />}

        {activeTab === 1 && <AnalyticsTab />}

        {activeTab === 2 && <TopWhalesTab topWhalesTableFilter={topWhalesTableFilter} />}
      </div>

      {activeTab === 0 && (
        <div className="flex flex-col items-center justify-center gap-10 xlg:!flex-row">
          <div className="flex h-[300px] w-full flex-1 flex-col-reverse items-center gap-16 rounded-xl bg-blackCardBg p-6 md:flex-row md:items-start">
            <div className="w-full flex-1 md:pt-6">
              <Typography className="text-left font-Lexend font-normal text-[#ffffffcc]" size="h4" variant="regular">
                Buyer / Seller
              </Typography>
              <div className="flex flex-col justify-between gap-6 md:flex-row">
                <div className="mt-4 flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="w-[50%]">
                    <ul>
                      {Array(6)
                        .fill('')
                        .map((item, index) => {
                          return (
                            <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                              <Image alt="marker" src={IMG.clm1} />
                              <CustomSingleBar
                                downValue={`${index + 1 * Math.floor(Math.random() * 100)}`}
                                upValue={`${index + 1 * Math.floor(Math.random() * 100)}`}
                              />
                            </li>
                          )
                        })}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-6">
                    <div>
                      <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                        Buyer / Seller
                      </Typography>
                      <ul>
                        {Array(6)
                          .fill('500 / 600')
                          .map((item, index) => {
                            return (
                              <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                                <Typography>{item}</Typography>
                              </li>
                            )
                          })}
                      </ul>
                    </div>

                    <div>
                      <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                        Net
                      </Typography>
                      <ul>
                        {Array(6)
                          .fill('+100')
                          .map((item, index) => {
                            return (
                              <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                                <Typography>{item}</Typography>
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex h-[200px] items-center  justify-center overflow-hidden bg-[#181620] ">
                  <Speedometer
                    className="rotate-90"
                    content={
                      <div className="text-sm">
                        <div className="value">NET</div>
                        <div className="label text-xl">+1.250</div>
                      </div>
                    }
                    endVal="250"
                    isShowStartEndValue
                    percentageValue={40}
                    startVal="200"
                    width="200px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[300px] flex-1 rounded-xl bg-blackCardBg p-6">
            <div className="flex flex-col items-center justify-center gap-2 bg-[#181620] p-2 md:flex-row">
              <div className="flex-1 bg-[inherit]">
                <Typography className="text-left font-Lexend font-normal text-[#ffffffcc]" size="h4" variant="regular">
                  Volume
                </Typography>
                <div className="mt-4 h-full overflow-hidden rounded-lg border-2 border-[#ffffff1f] py-4">
                  <Speedometer
                    content={
                      <div className="mr-4 text-sm">
                        <div className="value">NET</div>
                        <div className="label text-xl">+1.250</div>
                      </div>
                    }
                    endVal="250"
                    isShowStartEndValue
                    percentageValue={40}
                    startVal="200"
                    width="250px"
                  />
                </div>
              </div>
              <div className="flex-1 bg-[inherit]">
                <Typography className="text-left font-Lexend font-normal text-[#ffffffcc]" size="h4" variant="regular">
                  Gains
                </Typography>
                <div className="mt-4 h-full overflow-hidden rounded-lg border-2 border-[#ffffff1f] py-4">
                  <Speedometer
                    content={
                      <div className="text-sm">
                        <div className="value">NET</div>
                        <div className="label text-xl">+1.250</div>
                      </div>
                    }
                    endVal="250"
                    isShowStartEndValue
                    percentageValue={40}
                    startVal="200"
                    width="250px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 1 && (
        <>
          <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-xl bg-blackCardBg p-4">
              <DonutWithTableChart
                chartCenterContent={
                  <>
                    <p>Avg. Age</p>
                    <p className="text-2xl text-white font-medium">379 Days</p>
                  </>
                }
                columnHeadingFirst="Wallet"
                columnHeadingSecond="Distribution"
                heading="Wallet Distribution"
                isBg={false}
                totalHeading="Total Average"
              />
            </div>
            <div className="rounded-xl bg-blackCardBg p-4">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Holder Profit / Loss
                </Typography>
                <div>
                  <InfoIcons />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 md:flex-row">
                <div className="mt-4 flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div>
                    <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                      Wallets
                    </Typography>
                    <ul>
                      {Array(6)
                        .fill('')
                        .map((item, index) => {
                          return (
                            <li
                              className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]"
                              key={index}
                            >
                              <Image alt="marker" src={IMG.clm1} />
                              <CustomSingleBar
                                className="w-72"
                                downValue={`${index + 1 * Math.floor(Math.random() * 100)}`}
                                upValue={`${index + 1 * Math.floor(Math.random() * 100)}`}
                              />
                            </li>
                          )
                        })}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-6">
                    <div>
                      <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                        Buyer / Seller
                      </Typography>
                      <ul>
                        {Array(6)
                          .fill('500 / 600')
                          .map((item, index) => {
                            return (
                              <li
                                className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]"
                                key={index}
                              >
                                <Typography>{item}</Typography>
                              </li>
                            )
                          })}
                      </ul>
                    </div>

                    <div>
                      <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                        Net
                      </Typography>
                      <ul>
                        {Array(6)
                          .fill('+100')
                          .map((item, index) => {
                            return (
                              <li
                                className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]"
                                key={index}
                              >
                                <Typography>{item}</Typography>
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex h-[200px] items-center  justify-center overflow-hidden">
                  <Speedometer
                    // bgColor="bg-[#24222b]"
                    className="rotate-90"
                    content={
                      <div className="text-sm">
                        <div className="value">NET</div>
                        <div className="label text-xl">+1.250</div>
                      </div>
                    }
                    endVal="250"
                    isShowStartEndValue
                    percentageValue={40}
                    startVal="200"
                    width="200px"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <NftTableSetting activeTab={activeTab} handleOpen={value => setIsShowSetting(value)} isOpen={isShowSetting} />
    </>
  )
}
export default NftTabSection
