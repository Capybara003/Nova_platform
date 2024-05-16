/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { Graphdata } from '../MarketAnaliticsTemplate/utils'
import NftChatBox from '../SingleCollectionTradesTemplate/NftChatBox'

import Button from 'design-systems/Atoms/Button'
import { BlueDot, ClockIcons, DownArrow, FilterIcon, YellowDot } from 'design-systems/Atoms/Icons'
import { ProgessBarWithSpeedmeter } from 'design-systems/Atoms/ProgessBarWithSpeedmeter'
import { TopAssets } from 'design-systems/Atoms/TopAssets'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import RealTimeTable from 'design-systems/Molecules/RealTimeTable/RealTimeTable'
import SingleCollectionMolecules from 'design-systems/Molecules/SingleCollectionMolecules/SingleCollectionMolecules'
import Speedometer from 'design-systems/Molecules/Speedometer'
import TwoLineGraph from 'design-systems/Molecules/TwoLineGraph'
import { RealTimeData } from 'design-systems/data/data'
import CustomSingleBar from 'design-systems/Molecules/CustomSingleBar'
import DynamicLineGraph from 'design-systems/Molecules/DynamicLineGraph'
import { IMG } from 'assets/images'

const graphData = [
  {
    month: '15.01.2023',
    listings: 4000,
    floor: 2400,
  },
  {
    month: '15.02.2023',
    listings: 3000,
    floor: 1398,
  },
  {
    month: '15.03.2023',
    listings: 2000,
    floor: 9800,
  },
  {
    month: '15.04.2023',
    listings: 2780,
    floor: 3908,
  },
  {
    month: '15.05.2023',
    listings: 1890,
    floor: 4800,
  },
  {
    month: '15.06.2023',
    listings: 2390,
    floor: 3800,
  },
  {
    month: '15.07.2023',
    listings: 3490,
    floor: 4300,
  },
  {
    month: '15.08.2023',
    listings: 4200,
    floor: 3200,
  },
  {
    month: '15.09.2023',
    listings: 3100,
    floor: 2200,
  },
  {
    month: '15.10.2023',
    listings: 2500,
    floor: 4200,
  },
  {
    month: '15.11.2023',
    listings: 3200,
    floor: 2900,
  },
  {
    month: '15.12.2023',
    listings: 3900,
    floor: 3600,
  },
]

const SingleTemplate: React.FC = () => {
  const searchParams = useSearchParams()
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false)

  const ID = searchParams.get('data')

  const [activeTab, setActiveTab] = useState<number>(0)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="grid !grid-cols-1 justify-center gap-[20px]  xm:!grid-cols-4 ">
        <SingleCollectionMolecules />
        <div className="col-span-3 w-full rounded-[24px] bg-blackCardBg p-2 xm:col-span-2  ">
          <div className="flex w-full flex-col gap-8">
            <div className="flex  items-center justify-between gap-12 rounded-[8px] bg-blackCardBg p-[16px]">
              <div className="flex flex-col items-center gap-4 md:!flex-row">
                <div className="flex flex-col gap-1 text-left font-Lexend">
                  <Typography className=" flex items-center gap-2" size="paragraph">
                    <YellowDot />
                    <Typography>Floor</Typography>
                  </Typography>
                  <Typography className=" font-normal" size="h3">
                    5.463,56 SEI
                  </Typography>
                  <Typography className=" text-success-500" size="paragraph">
                    +225,53%
                  </Typography>
                </div>

                <div className="flex flex-col gap-1 text-left font-Lexend">
                  <Typography className=" flex items-center gap-2" size="paragraph">
                    <BlueDot />
                    <Typography>Listing</Typography>
                  </Typography>
                  <Typography className=" font-normal" size="h3">
                    5.463,56 SEI
                  </Typography>
                  <Typography className=" text-success-500" size="paragraph">
                    +225,53%
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col justify-end gap-1 text-right font-Lexend">
                <Typography className="flex items-center justify-end gap-2 text-grayDB opacity-[0.5]" size="paragraph">
                  Your Position
                </Typography>
                <Typography className=" font-normal" size="h3">
                  5.463,56 SEI
                </Typography>
                <Typography className=" text-success-500" size="paragraph">
                  +225,53%
                </Typography>
              </div>
            </div>
            <div className="h-[600px]">
              <DynamicLineGraph
                data={graphData}
                height={'100%'}
                lineKeys={[
                  {
                    key: 'floor',
                    strokeColor: '#CE9136',
                  },
                  {
                    key: 'listings',
                    strokeColor: '#6F1ED7',
                  },
                ]}
                lineWidth={2}
                width="100%"
                xAxisLabelKey="month"
              />
            </div>
          </div>
        </div>
        <NftChatBox innerdiv={'max-h-[665px]'} />
      </div>
      <div className="flex  flex-col gap-[22px] rounded-[24px] bg-blackCardBg p-[22px] ">
        <div className="flex w-full flex-wrap items-center justify-between gap-3 xsm:!w-auto">
          <NavTabsMolecule
            activeTab={activeTab}
            tabs={['Trades', 'Analytics', 'Top Whales']}
            onTabChange={handleTabChange}
          />
          <Typography className="flex gap-3">
            <ClockIcons />
            <Typography size="subtitle-25">Real Time Trades</Typography>
          </Typography>
          <div className="flex flex-row gap-3">
            <Button
              className="flex flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2"
              // onClick={openModal}
            >
              <FilterIcon />
              <DownArrow />{' '}
            </Button>
            <TopAssets
              checked={isCheckboxChecked}
              label={'My TX'}
              onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
            />
          </div>
        </div>
        <div className="max-h-[599px] w-full  overflow-auto">
          <RealTimeTable
            data={RealTimeData}
            headData={[
              { name: 'Type', key: 'Type', isInfo: false, isSort: true },
              { name: 'Amount', key: 'Amount', isInfo: false, isSort: true },
              { name: 'Floor', key: 'Floor', isInfo: false, isSort: true },
              { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: true },
              { name: 'Est. Fees/Paid Fees', key: 'EstFeesPaidFees', isInfo: false, isSort: true },
              { name: 'Floor Value / Income', key: 'FloorValueIncome', isInfo: false, isSort: true },
              { name: 'Gains', key: 'Gains', isInfo: false, isSort: true },
              { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: true },
              { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: true },
              { name: 'Date', key: 'Date', isInfo: false, isSort: true },
              { name: 'Trader', key: 'Trader', isInfo: false, isSort: true },
              { name: 'Link', key: 'Link', isInfo: false, isSort: true },
            ]}
          />
        </div>
      </div>
      <div className="grid  !grid-cols-1 gap-[22px] lg:!grid-cols-2 ">
        <div className="w-full rounded-[24px] bg-black225_05 p-[22px]">
          <Typography className="text-left font-Lexend font-normal text-[#ffffffcc]" size="h4" variant="regular">
            Buyer / Seller
          </Typography>
          <div className="grid !grid-cols-1 flex-col justify-between gap-6 md:!grid-cols-2 md:flex-row">
            <div className=" grid grid-cols-2 items-center justify-between gap-6">
              <div className="w-full">
                <ul className="flex w-full flex-col justify-between gap-y-2">
                  {Array(6)
                    .fill('')
                    .map((item, index) => {
                      return (
                        <li
                          className="flex w-full content-between items-center justify-start gap-1 text-md text-[#DBDBDB] "
                          key={index}
                        >
                          <Image alt="marker" className="h-5 w-5" src={IMG.clm1} />
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
                  <ul className="flex flex-col gap-y-2">
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
                  <ul className="flex flex-col gap-y-2">
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

            <div className="flex h-[260px]  w-full items-center  justify-center overflow-hidden bg-[#181620] ">
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
          {/* <ProgessBarWithSpeedmeter headerData={['Wallets', '', 'Buyer/Seller', 'net']} /> */}
        </div>
        <div className=" flex-1 rounded-[24px] bg-blackCardBg p-6">
          <div className="grid h-full !grid-cols-1 items-center  justify-center gap-[22px] bg-[#181620] p-2 xsm:!grid-cols-2 md:flex-row">
            <div className="flex h-full flex-1 flex-col justify-between bg-[inherit] ">
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
            <div className="flex h-full flex-1 flex-col bg-[inherit]">
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
    </div>
  )
}
export default SingleTemplate
