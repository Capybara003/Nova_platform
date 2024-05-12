import { useState } from 'react'
import Image from 'next/image'

import CustomBarChart from '../BarChart'
import NavTabsMolecule from '../NavTabs/NavTabsMolecule'
import CustomSingleBar from '../CustomSingleBar'
import Speedometer from '../Speedometer'

import { IMG } from 'assets/images'
import { InfoIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { GraphData2 } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'

export const ProjectSingle = () => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="mt-[22px] flex flex-col gap-[22px]">
      <div className="grid grid-cols-1 gap-[22px] rounded-[24px] bg-[#1e1c26] p-[22px] md:!grid-cols-2">
        <div className="space-y-7">
          <div className="flex flex-row items-center gap-2">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Volume Buy / Sell
            </Typography>
            <InfoIcon />
          </div>
          <div className="me-16 flex flex-row items-center justify-between gap-24">
            <div className="flex-1">
              <ul className="flex flex-col gap-y-2">
                {Array(6)
                  .fill('')
                  .map((item, index) => {
                    return (
                      <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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
            </div>
            <div className="flex items-center justify-center gap-6">
              <div>
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                  Sell volume
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
            </div>
            <div className="flex items-center justify-center gap-6">
              <div>
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">Net</Typography>
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
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col">
            <div className="flex gap-[10px]">
              <div>
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Buy Volume
                </Typography>
                <div className="mt-2 flex w-full flex-row items-center gap-2">
                  <Typography className="text-left font-medium" size="lg">
                    5.463 ₳
                  </Typography>
                  <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                    +225,53%
                  </Typography>
                </div>
              </div>
              <Typography size="subtitle-25">/</Typography>
              <div>
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Sell Volume
                </Typography>
                <div className="mt-2 flex w-full flex-row items-center gap-2">
                  <Typography className="text-left font-medium" size="lg">
                    5.463 ₳
                  </Typography>
                  <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                    +225,53%
                  </Typography>
                </div>
              </div>
            </div>

            <Typography className="text-left font-light text-black7f" size="small">
              01.02.2022
            </Typography>
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
      <div className="grid !grid-cols-1 gap-[22px] rounded-[24px] bg-[#1e1c26] p-[22px] md:!grid-cols-2">
        <div className="space-y-7">
          <div className="flex flex-row items-center gap-2">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Unique Buyer / Seller
            </Typography>
            <InfoIcon />
          </div>
          <div className="flex items-center justify-between gap-12">
            <div className="flex h-full flex-1 flex-col items-center justify-between gap-12 md:flex-row">
              <div className="flex-1">
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                  Wallets
                </Typography>
                <ul className="flex flex-col gap-y-2">
                  {Array(6)
                    .fill('')
                    .map((item, index) => {
                      return (
                        <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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

              <div className="">
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
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">Net</Typography>
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

            <div className="flex h-[200px] items-center  justify-end overflow-hidden">
              <Speedometer
                bgColor="bg-[#1e1c26]"
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
        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-wrap justify-between gap-[22px]">
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-[30px]">
                <div>
                  <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                    Buyer
                  </Typography>
                  <div className="mt-2 flex w-full flex-row items-center gap-2">
                    <Typography className="text-left font-medium" size="lg">
                      5.463 ₳
                    </Typography>
                    <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                      +225,53%
                    </Typography>
                  </div>
                </div>
                <div>
                  <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                    Seller
                  </Typography>
                  <div className="mt-2 flex w-full flex-row items-center gap-2">
                    <Typography className="text-left font-medium" size="lg">
                      5.463 ₳
                    </Typography>
                    <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                      +225,53%
                    </Typography>
                  </div>
                </div>
              </div>

              <Typography className="text-left font-light text-black7f" size="small">
                01.02.2022
              </Typography>
            </div>
            <div className="h-fit">
              <NavTabsMolecule activeTab={activeTab} tabs={['D', 'W', 'M']} onTabChange={handleTabChange} />
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
      <div className=" grid !grid-cols-1 gap-[22px] rounded-[24px] bg-[#1e1c26] p-[22px] md:!grid-cols-2">
        <div className="space-y-7">
          <div className="flex flex-row items-center gap-2">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Buys / Sells
            </Typography>
            <InfoIcon />
          </div>
          <div className="flex items-center justify-between gap-12">
            <div className="flex h-full flex-1 flex-col items-center justify-between gap-12 md:flex-row">
              <div className="flex-1">
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                  Wallets
                </Typography>
                <ul className="flex flex-col gap-y-2">
                  {Array(6)
                    .fill('')
                    .map((item, index) => {
                      return (
                        <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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

              <div className="">
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
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">Net</Typography>
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

            <div className="flex h-[200px] items-center  justify-end overflow-hidden">
              <Speedometer
                bgColor="bg-[#1e1c26]"
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
        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-wrap justify-between gap-[22px]">
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-[30px]">
                <div>
                  <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                    Buys
                  </Typography>
                  <div className="mt-2 flex w-full flex-row items-center gap-2">
                    <Typography className="text-left font-medium" size="lg">
                      5.463 ₳
                    </Typography>
                    <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                      +225,53%
                    </Typography>
                  </div>
                </div>
                <div>
                  <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                    Sells
                  </Typography>
                  <div className="mt-2 flex w-full flex-row items-center gap-2">
                    <Typography className="text-left font-medium" size="lg">
                      5.463 ₳
                    </Typography>
                    <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                      +225,53%
                    </Typography>
                  </div>
                </div>
              </div>

              <Typography className="text-left font-light text-black7f" size="small">
                01.02.2022
              </Typography>
            </div>
            <div className="h-fit">
              <NavTabsMolecule activeTab={activeTab} tabs={['D', 'W', 'M']} onTabChange={handleTabChange} />
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
    </div>
  )
}
