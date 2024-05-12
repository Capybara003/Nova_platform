'use client'
import Image from 'next/image'
import { useState } from 'react'

import { Graphdata } from '../MarketAnaliticsTemplate/utils'
import NftChatBox from '../SingleCollectionTradesTemplate/NftChatBox'

import { IMG } from 'assets/images'
import Button from 'design-systems/Atoms/Button'
import { DownArrow, FilterIcon, YellowDot } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import { ProjectMC } from 'design-systems/Molecules/SingleProjectMolecules/ProjectMC'
import { SingleProject } from 'design-systems/Molecules/SingleProjectMolecules/SingleProject'
import TwoLineGraph from 'design-systems/Molecules/TwoLineGraph'
import { ProjectTopWhalesTables } from 'design-systems/Molecules/SingleProjectMolecules/ProjectTopWhalesTables'
import { ProjectTopWhalesData } from 'design-systems/data/data'

const SingleProjectAnalyticsTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="flex flex-col gap-[22px] font-Lexend">
      <div className="grid w-full !grid-cols-1 gap-[22px] text-start md:w-[95%] xm:w-full xm:!grid-cols-3 ">
        <div className="flex flex-col gap-[28px] rounded-[24px] bg-black225_05 px-[22px] py-[24px] xm:col-span-2">
          <div className="flex flex-wrap justify-between gap-[22px]">
            <div className="flex flex-wrap gap-[62px] font-Inter">
              <Typography className="flex items-center gap-[10px]">
                <div>
                  <Image
                    alt="IMG"
                    className="rounded-[4px] rounded-br-[10px] rounded-tl-[10px]"
                    height={75}
                    src={IMG.monkey}
                    width={75}
                  />
                </div>
                <Typography className="text-[20px] text-whiteE8">
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
      <div className="flex flex-col gap-[22px] rounded-[24px] bg-black225_05 px-[22px] py-[23px] ">
        <div className="flex w-full !flex-wrap items-center justify-between gap-[22px]">
          <div className="!w-full xsm:overflow-y-auto md:!w-auto">
            <NavTabsMolecule
              activeTab={activeTab}
              tabs={['Trades', 'Analytics', 'Assets', 'Top Whales']}
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
        {activeTab === 1 && (
          <div>
            <SingleProject />
          </div>
        )}
        {activeTab === 3 && (
          <>
            <ProjectTopWhalesTables
              data={ProjectTopWhalesData}
              headData={[
                { name: 'Top Whales', key: 'TopWhales', isInfo: false, isSort: true },
                { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true },
                { name: 'Buy Volume', key: 'BuyVolume', isInfo: false, isSort: true },
                { name: 'Paid Fees + Est. Fees', key: 'PaidFeesEstFees', isInfo: true, isSort: true },
                { name: 'Income + Floor Value', key: 'IncomeFloorValue', isInfo: true, isSort: true },
                { name: 'Gains', key: 'Gains', isInfo: false, isSort: true },
                { name: 'Volume', key: 'Volume', isInfo: false, isSort: true },
                { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: true },
              ]}
            />
          </>
        )}
      </div>
      {activeTab === 1 && (
        <>
          <ProjectMC />
        </>
      )}
    </div>
  )
}
export default SingleProjectAnalyticsTemplate
