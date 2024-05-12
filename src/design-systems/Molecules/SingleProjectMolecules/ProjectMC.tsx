import { useState } from 'react'
import Image from 'next/image'

import NavTabsMolecule from '../NavTabs/NavTabsMolecule'
import CustomSingleBar from '../CustomSingleBar'
import Speedometer from '../Speedometer'

import { IMG } from 'assets/images'
import { InfoIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import DonutWithTableChart from 'design-systems/Templates/SingleCollectionTradesTemplate/NftTabSection/AnalyticsTab/DonutWithTableChart'

export const ProjectMC = () => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="flex flex-col gap-[22px] rounded-[24px] bg-black225_05 px-[22px] py-[23px] ">
      <div className="flex !w-full justify-start xsm:!w-auto xsm:overflow-y-auto">
        <NavTabsMolecule activeTab={activeTab} tabs={['Holding', 'Sales', 'Listings']} onTabChange={handleTabChange} />
      </div>
      <div className="grid grid-cols-1 gap-[22px] lg:!grid-cols-2">
        <div className="flex flex-col gap-5 rounded-[24px] bg-[#1e1c26] p-[22px]">
          <div className="flex flex-row items-center gap-2">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Project MC Distribution
            </Typography>
            <InfoIcon />
          </div>
          <div>
            <div>
              <DonutWithTableChart
                chartCenterContent={
                  <>
                    <p>Avg. Age</p>
                    <p className="text-2xl text-white font-medium">379 Days</p>
                  </>
                }
                className={'!p-0'}
                isBg={false}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 rounded-[24px] bg-[#1e1c26] p-[22px]">
          <div className="flex flex-row items-center gap-2">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Asset Profit / Loss: ₳
            </Typography>
            <InfoIcon />
          </div>
          <div className="grid h-full grid-cols-1 flex-col items-center justify-between gap-6 md:!grid-cols-2 md:flex-row">
            <div className=" flex h-full flex-col items-center justify-between gap-6 md:flex-row">
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
                          <Image className="h-5 w-5" alt="marker" src={IMG.clm1} />
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

            <div className="flex h-[200px]  w-full items-center  justify-end overflow-hidden">
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
      </div>
    </div>
  )
}
