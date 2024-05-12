import { useState } from 'react'

import CustomBarChart from '../BarChart'
import DynamicLineGraph from '../DynamicLineGraph'
import NavTabsMolecule from '../NavTabs/NavTabsMolecule'

import { ProjectSingle } from './ProjectSingle'
import { ProjectHolder } from './ProjectHolder'

import { InfoIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { GraphData2 } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'
import { graphData } from 'design-systems/Templates/SingleCollectionTradesTemplate/NftTabSection/AnalyticsTab'
import DonutWithTableChart from 'design-systems/Templates/SingleCollectionTradesTemplate/NftTabSection/AnalyticsTab/DonutWithTableChart'

export const SingleProject = () => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="font-Lexend ">
      <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-[24px] bg-[#1e1c26] p-[22px]">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle-25">
                  Total Volume
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
            <div className="h-fit !w-full xsm:!w-auto">
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
        <div className="rounded-[24px] bg-[#1e1c26] p-[22px]">
          <div className="flex flex-col justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Holder Distribution Over Time
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

            <div className="h-[200px]">
              <DynamicLineGraph
                data={graphData}
                height={'100%'}
                lineKeys={[
                  {
                    key: 'floor',
                    strokeColor: '#00C68A',
                  },
                ]}
                lineWidth={2}
                width="100%"
                xAxisLabelKey="month"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid !grid-cols-1 gap-5 rounded-[24px] bg-[#1e1c26] lg:!grid-cols-2">
        <div className="rounded-[24px] p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle-25">
                  Total Value Locked
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
            <div className="h-fit !w-full xsm:!w-auto">
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

        <DonutWithTableChart
          chartCenterContent={
            <>
              <p>Avg. Age</p>
              <p className="text-2xl text-white font-medium">379 Days</p>
            </>
          }
          isBg={false}
        />
      </div>
      <div className="mt-5 grid !grid-cols-1 gap-5 rounded-[24px] bg-[#1e1c26] lg:!grid-cols-2">
        <div className="rounded-lg p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle-25">
                  Active Trader
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
            <div className="h-fit !w-full xsm:!w-auto">
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

        <DonutWithTableChart
          chartCenterContent={
            <>
              <p>Avg. Age</p>
              <p className="text-2xl text-white font-medium">379 Days</p>
            </>
          }
          isBg={false}
        />
      </div>
      <ProjectSingle />
      <ProjectHolder />
    </div>
  )
}
