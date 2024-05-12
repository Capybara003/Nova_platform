import React from 'react'
import Image from 'next/image'

import DonutWithTableChart from './DonutWithTableChart'

import { InfoIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import DynamicLineGraph from 'design-systems/Molecules/DynamicLineGraph'
import CustomBarChart from 'design-systems/Molecules/BarChart'
import { GraphData2 } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'
import { IMG } from 'assets/images'
import CustomSingleBar from 'design-systems/Molecules/CustomSingleBar'
import NegativeChart from 'design-systems/Molecules/NegativeChart'
import Speedometer from 'design-systems/Molecules/Speedometer'

const graphData = [
  {
    month: 'Jan',
    listings: 4000,
    floor: 2400,
  },
  {
    month: 'Feb',
    listings: 3000,
    floor: 1398,
  },
  {
    month: 'Mar',
    listings: 2000,
    floor: 9800,
  },
  {
    month: 'Apr',
    listings: 2780,
    floor: 3908,
  },
  {
    month: 'May',
    listings: 1890,
    floor: 4800,
  },
  {
    month: 'Jun',
    listings: 3900,
    floor: 3600,
  },
  {
    month: 'Jul',
    listings: 2390,
    floor: 3800,
  },
  {
    month: 'Aug',
    listings: 3490,
    floor: 4300,
  },
  {
    month: 'Sep',
    listings: 4200,
    floor: 3200,
  },
  {
    month: 'Oct',
    listings: 3100,
    floor: 2200,
  },
  {
    month: 'Nov',
    listings: 2500,
    floor: 4200,
  },
  {
    month: 'Dec',
    listings: 3200,
    floor: 2900,
  },
]

const AnalyticsTab: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-blackCardBg p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
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
            <div className="!w-full xsm:!w-auto">
              <NavTabsMolecule
                activeTab={0}
                tabs={['D', 'W', 'M']}
                onTabChange={() => {
                  return
                }}
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
        <div className="rounded-lg bg-blackCardBg p-4">
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

      {/* <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <DonutWithTableChart
          chartCenterContent={
            <>
              <p>Avg. Age</p>
              <p className="text-2xl text-white font-medium">379 Days</p>
            </>
          }
          heading="Age of Assets"
          isBg
        />

        <div className="rounded-lg bg-blackCardBg p-4">
          <div className="flex flex-col justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Floor Wall
                </Typography>
                <div>
                  <InfoIcons />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:!flex-row">
              <div className="flex justify-between gap-7 md:!justify-start">
                <div>
                  <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                    Floor
                  </Typography>
                  <ul>
                    {Array(6)
                      .fill('12% / 600')
                      .map((item, index) => {
                        return (
                          <li className="my-4 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                            <Typography>{item}</Typography>
                          </li>
                        )
                      })}
                  </ul>
                </div>

                <div>
                  <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                    Sales
                  </Typography>
                  <ul>
                    {Array(6)
                      .fill('12')
                      .map((item, index) => {
                        return (
                          <li className="my-4 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                            <Typography>{item}</Typography>
                          </li>
                        )
                      })}
                  </ul>
                </div>

                <div>
                  <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                    Buy Volume
                  </Typography>
                  <ul>
                    {Array(6)
                      .fill('7600.00')
                      .map((item, index) => {
                        return (
                          <li className="my-4 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                            <Typography>{item}₳</Typography>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>

              <div className="h-[250px] flex-1">
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
      </div> */}

      <div className="mt-5 grid grid-cols-1 gap-5 rounded-lg bg-blackCardBg lg:grid-cols-2">
        <div className="rounded-lg p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
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
            <div className="!w-full xsm:!w-auto">
              <NavTabsMolecule
                activeTab={0}
                tabs={['D', 'W', 'M']}
                onTabChange={() => {
                  return
                }}
              />
            </div>
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

      <div className="mt-5 grid grid-cols-1 gap-5 rounded-lg bg-blackCardBg lg:grid-cols-2">
        <div className="rounded-lg p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
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
            <div className="!w-full xsm:!w-auto">
              <NavTabsMolecule
                activeTab={0}
                tabs={['D', 'W', 'M']}
                onTabChange={() => {
                  return
                }}
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

      <div className="mt-5 grid grid-cols-1 gap-5 rounded-lg bg-blackCardBg lg:grid-cols-2">
        <div className="rounded-lg p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Volume / Buy Sell
                </Typography>
                <div>
                  <InfoIcons />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="mt-4 flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              <div className="w-full">
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                  Wallets
                </Typography>
                <ul>
                  {Array(6)
                    .fill('')
                    .map((item, index) => {
                      return (
                        <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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

              <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
                <div>
                  <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                    Buy Volume
                  </Typography>
                  <ul>
                    {Array(6)
                      .fill('12.000.000 ₳')
                      .map((item, index) => {
                        return (
                          <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                            <Typography>{item}</Typography>
                          </li>
                        )
                      })}
                  </ul>
                </div>

                <div>
                  <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                    Sell Volume
                  </Typography>
                  <ul>
                    {Array(6)
                      .fill('12.000.000 ₳')
                      .map((item, index) => {
                        return (
                          <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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
                      .fill('12.000.000 ₳')
                      .map((item, index) => {
                        return (
                          <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                            <Typography>{item}</Typography>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Buy Volume / Sell Volume
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
            <div className="!w-full xsm:!w-auto">
              <NavTabsMolecule
                activeTab={0}
                tabs={['D', 'W', 'M']}
                onTabChange={() => {
                  return
                }}
              />
            </div>
          </div>

          <div>
            <NegativeChart
              height={200}
              series={[
                {
                  name: 'Series A',
                  data: [44, 55, 41, 64, 22, 43, 21],
                },
                {
                  name: 'Series B',
                  data: [0, -23, -20, -8, -13, -27, -33],
                },
              ]}
              width={800}
              xAxisCategory={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 rounded-lg bg-blackCardBg lg:grid-cols-2">
        <div className="rounded-lg p-4">
          <div className="flex flex-row flex-wrap items-center gap-2">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Unique Buyer / Seller
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
                        <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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
                          <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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
                          <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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
                bgColor="bg-[#24222b]"
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

        <div className="rounded-lg p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Buyer
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
            <div className="!w-full xsm:!w-auto">
              <NavTabsMolecule
                activeTab={0}
                tabs={['D', 'W', 'M']}
                onTabChange={() => {
                  return
                }}
              />
            </div>
          </div>

          <div>
            <NegativeChart
              height={200}
              series={[
                {
                  name: 'Series A',
                  data: [44, 55, 41, 64, 22, 43, 21],
                },
                {
                  name: 'Series B',
                  data: [0, -23, -20, -8, -13, -27, -33],
                },
              ]}
              width={800}
              xAxisCategory={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 rounded-lg bg-blackCardBg lg:grid-cols-2">
        <div className="rounded-lg p-4">
          <div className="flex flex-row flex-wrap items-center gap-2">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Buys / Sells
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
                        <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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
                          <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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
                          <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
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
                bgColor="bg-[#24222b]"
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

        <div className="rounded-lg p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Buyer
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
            <div className="!w-full xsm:!w-auto">
              <NavTabsMolecule
                activeTab={0}
                tabs={['D', 'W', 'M']}
                onTabChange={() => {
                  return
                }}
              />
            </div>
          </div>

          <div>
            <NegativeChart
              height={200}
              series={[
                {
                  name: 'Series A',
                  data: [44, 55, 41, 64, 22, 43, 21],
                },
                {
                  name: 'Series B',
                  data: [0, -23, -20, -8, -13, -27, -33],
                },
              ]}
              xAxisCategory={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <DonutWithTableChart
          chartCenterContent={
            <>
              <p>Avg. Age</p>
              <p className="text-2xl text-white font-medium">379 Days</p>
            </>
          }
          columnHeadingFirst="Holding Time"
          columnHeadingSecond="Holder"
          heading="Age of Holder"
          totalHeading="Total Holder"
        />

        <DonutWithTableChart
          chartCenterContent={
            <>
              <p>Avg. Distribution</p>
              <p className="text-2xl text-white font-medium">379 ₳</p>
            </>
          }
          columnHeadingFirst="Amount"
          columnHeadingSecond="Holder"
          heading="Assets Holder Distribution"
          totalHeading="Total Average"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <DonutWithTableChart
          chartCenterContent={
            <>
              <p>Median Balance</p>
              <p className="text-2xl text-white font-medium">379 ₳</p>
            </>
          }
          columnHeadingFirst="Wallet"
          columnHeadingSecond="Median"
          heading="Median Holder Balance"
        />

        <DonutWithTableChart
          chartCenterContent={
            <>
              <p>Total Balance</p>
              <p className="text-2xl text-white font-medium">379 ₳</p>
            </>
          }
          columnHeadingFirst="Wallet"
          columnHeadingSecond="Amount"
          heading="Total Holder Balance"
          totalHeading="Total"
        />
      </div>
    </div>
  )
}

export default AnalyticsTab
