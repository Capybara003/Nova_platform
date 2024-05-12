'use client'
import Image from 'next/image'
import { useState } from 'react'

import { Graphdata } from '../MarketAnaliticsTemplate/utils'
import NftChatBox from '../SingleCollectionTradesTemplate/NftChatBox'

import { IMG } from 'assets/images'
import Button from 'design-systems/Atoms/Button'
import { DownArrow, FilterIcon, YellowDot } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import CustomSingleBar from 'design-systems/Molecules/CustomSingleBar'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import ProjectOverviewTables from 'design-systems/Molecules/ProjectMolecules/ProjectOverviewTables'
import Speedometer from 'design-systems/Molecules/Speedometer'
import TwoLineGraph from 'design-systems/Molecules/TwoLineGraph'
import { ProjectData } from 'design-systems/data/data'

const ProjectTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="grid w-full !grid-cols-1 gap-[22px] text-start  xm:!grid-cols-3 ">
        <div className="flex flex-col gap-[28px] rounded-[24px] bg-black225_05 px-[22px] py-[24px] xm:col-span-2">
          <div className="flex flex-wrap justify-between gap-[22px]">
            <div className="flex flex-wrap gap-[62px] font-Inter">
              <Typography className="flex items-center gap-[10px]">
                <div className="max-h-[75px]">
                  <Image
                    alt="IMG"
                    className="rounded-[4px] rounded-br-[10px] rounded-tl-[10px]"
                    height={75}
                    src={IMG.monkey}
                    width={75}
                  />
                </div>
                <Typography className="w-[80px] text-[20px] text-whiteE8">
                  <Typography className="text-[16px]">Project:</Typography>
                  <Typography>The Ape Society</Typography>
                </Typography>
              </Typography>
              <div className="flex gap-2 ">
                <div className="mt-[6px]">
                  <YellowDot />
                </div>

                <div>
                  <Typography className="font-Poppins" size="paragraph">
                    Market Cap
                  </Typography>
                  <Typography className="font-Poppins font-normal" size="h3">
                    5.463,56 ₳
                  </Typography>
                  <Typography className="font-Poppins text-success-500" size="paragraph">
                    +225,53%
                  </Typography>
                </div>
              </div>
            </div>

            <div className="text-grayDB">
              <Typography className="font-Lexend opacity-50" size="paragraph">
                Your Position
              </Typography>
              <Typography className="font-Lexend font-normal" size="h3">
                5.463,56 ₳
              </Typography>
              <Typography className="font-Lexend text-success-500" size="paragraph">
                +225,53%
              </Typography>
            </div>
          </div>
          <div>
            <TwoLineGraph
              data={Graphdata}
              height={500}
              hideXAxis={false}
              lineColor="#6F1ED7"
              lineColor2="#CE9136"
              lineWidth={2}
              width="100%"
              xKey="month"
              yKey="value"
            />
          </div>
        </div>
        <NftChatBox innerdiv={'max-h-[461px]'} />
      </div>
      <div className="flex flex-col gap-[41px] rounded-[24px] bg-black225_05 px-[22px] py-[23px] ">
        <div className="flex w-full !flex-wrap items-center justify-between gap-[22px]">
          <div className="!w-full xsm:overflow-y-auto md:!w-auto">
            <NavTabsMolecule
              activeTab={activeTab}
              tabs={['Overview', 'Analytics', 'Top Whales']}
              onTabChange={handleTabChange}
            />
          </div>
          <div className="flex h-fit w-full flex-row gap-[16px] md:!w-auto">
            <Button
              className="flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2 md:w-auto"
              //   onClick={openModal}
            >
              <FilterIcon />
              <DownArrow />
            </Button>
          </div>
        </div>
        <div>
          <ProjectOverviewTables
            data={ProjectData}
            headData={[
              { name: 'Name', key: 'Name', isInfo: false, isSort: true },
              { name: 'Price', key: 'Price', isInfo: false, isSort: true },
              { name: 'Chart', key: 'Chart', isInfo: false, isSort: true },
              { name: 'Market Cap (MC)', key: 'MarketCap(MC)', isInfo: true, isSort: true },
              { name: 'Weight', key: 'Weight', isInfo: true, isSort: true },
              { name: 'Fully Diluted MC', key: 'FullyDilutedMC', isInfo: true, isSort: true },
              { name: 'Volume', key: 'Volume', isInfo: true, isSort: true },
              { name: 'Liquidity', key: 'Liquidity', isInfo: true, isSort: true },
              { name: 'Holder', key: 'Holder', isInfo: true, isSort: true },
              { name: 'Buyers', key: 'Buyers', isInfo: true, isSort: true },
              { name: 'Sellers', key: 'Sellers', isInfo: true, isSort: true },
            ]}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
        <div className="flex h-full w-full flex-1 flex-col-reverse items-center gap-16 rounded-xl bg-blackCardBg p-6 md:!h-[300px] md:flex-row md:items-start">
          <div className="w-full flex-1">
            <Typography className="text-left font-Lexend font-normal text-[#ffffffcc]" size="h4" variant="regular">
              Buyer / Seller
            </Typography>
            <div className="grid grid-cols-1 flex-col justify-between gap-6 md:!grid-cols-2 md:flex-row">
              <div className="flex flex-row items-center justify-between gap-6">
                <div className="flex-1">
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
                </div>
              </div>

              <div className="flex h-[200px]  w-full items-center  justify-between overflow-hidden bg-[#181620] ">
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
        <div className="flex h-full w-full flex-1 flex-col-reverse items-center gap-16 rounded-xl bg-blackCardBg p-6 md:!h-[300px] md:flex-row md:items-start">
          <div className="w-full flex-1">
            <Typography className="text-left font-Lexend font-normal text-[#ffffffcc]" size="h4" variant="regular">
              Buyer / Seller
            </Typography>
            <div className="grid grid-cols-1 flex-col justify-between gap-6 md:!grid-cols-2 md:flex-row">
              <div className="flex flex-row items-center justify-between gap-6">
                <div className="flex-1">
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
                </div>
              </div>

              <div className="flex h-[200px]  w-full items-center  justify-between overflow-hidden bg-[#181620] ">
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
      </div>
    </div>
  )
}

export default ProjectTemplate
