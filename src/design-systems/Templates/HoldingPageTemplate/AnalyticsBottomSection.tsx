/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import { RxCaretSort } from 'react-icons/rx'

import { GraphData2 } from '../MarketAnaliticsTemplate/utils'
import DonutWithTableChart from '../SingleCollectionTradesTemplate/NftTabSection/AnalyticsTab/DonutWithTableChart'
import { portfolioProfitTableData, portfolioProfitTableKey } from '../SingleTokenTemplate/utils'

import DynamicDonutChart from 'design-systems/Molecules/DynamicDonutChart'
import { IMG } from 'assets/images'
import CustomBarChart from 'design-systems/Molecules/BarChart'
import NegativeChart from 'design-systems/Molecules/NegativeChart'
import RealTimeNftTable from 'design-systems/Molecules/Table/RealTimeNftTable'
import Typography from 'design-systems/Atoms/Typography'
import { ArrowRightCircleIcon, BookMarkEmpty, InfoIcons, RightArrowIcons } from 'design-systems/Atoms/Icons'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import Table from 'design-systems/Atoms/Table'

const AnalyticsBottomSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const realTimeNftTableData = useMemo(() => {
    return portfolioProfitTableData.map(item => ({
      ...item,
      wallet: (
        <div className="flex items-center justify-start gap-3">
          <Image alt="assets data" className="h-10 w-10" height={200} src={item.thumbnail} width={200} />
          <Typography>{item.title}</Typography>
        </div>
      ),

      amount: item.amount ? <Typography>{item.amount}</Typography> : '',

      asset: (
        <div className="flex items-center justify-start gap-3">
          <Image alt="assets data" className="h-10 w-10" height={200} src={item.thumbnail} width={200} />
          <Typography>{item.title}</Typography>
        </div>
      ),

      floor: item.floor ? <Typography>{item.floor}</Typography> : '',

      rarity: item.rarity ? <Typography>{item.rarity}</Typography> : '',

      buyPrice: item.buyPrice ? <Typography>{item.buyPrice}</Typography> : '',

      paidFees: item.paidFees ? <Typography>{item.paidFees}</Typography> : '',

      floorValue: item.floorValue ? <Typography>{item.floorValue}</Typography> : '',

      gains: item.gains ? <Typography>{item.gains}</Typography> : '',

      sinceTrade: (
        <div>
          <Typography>{item.sinceTrade.value}</Typography>
          {item.sinceTrade.gainOrLoss > 0 ? (
            <Typography className="text-md text-green">+{item.sinceTrade.gainOrLoss}%</Typography>
          ) : (
            <Typography className="text-md text-red">{item.sinceTrade.gainOrLoss}%</Typography>
          )}
        </div>
      ),

      buyer: (
        <div className="flex items-center justify-start gap-2 rounded-lg bg-blackCardBg p-2">
          <Image alt={item.buyer.name} className="h-6 w-6" height={100} src={item.buyer.thumbnail} width={100} />
          <Typography className="overflow-hidden text-ellipsis">{item.buyer.name}</Typography>
        </div>
      ),

      holdingTime: item.holdingTime ? <Typography>{item.holdingTime}d</Typography> : '',
    }))
  }, [portfolioProfitTableData])
  return (
    <div>
      <div className="mt-4 !rounded-md bg-[#181620] p-4">
        <div className="flex flex-row flex-wrap items-center gap-2">
          <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
            Asset Allocation
          </Typography>
          <div>
            <InfoIcons />
          </div>
        </div>

        <div className="mt-4 w-fit">
          <NavTabsMolecule
            activeTab={activeTab}
            className="whitespace-nowrap"
            tabs={['Collection', 'Project', 'Type', 'Category', 'Market Cap']}
            onTabChange={tab => {
              setActiveTab(tab)
            }}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <DynamicDonutChart
              centerContent={
                <>
                  <p>Total</p>
                  <p className="text-xl text-white font-medium">115.000.000 ₳</p>
                </>
              }
              colors={['#5A3FFF', '#2592D9', '#1ED6FF', '#F466FE', '#C517D1', '#6B0090']}
              height={550}
              labels={['0-5K ', '5K-25k', '25K-100K', '100K-250K', '250K-1M', '1M+']}
              series={[22, 20, 20, 22, 32, 51]}
              width={550}
            />
          </div>

          <div className="relative h-auto items-center justify-center overflow-y-scroll pe-[12px] md:!flex md:!h-[630px]">
            <table className="h-full w-[1000px] rounded-md font-Lexend">
              <thead className="sticky top-0 bg-[#24222b]">
                <tr>
                  <th className="text-left font-medium text-[#DBDBDB]" style={{ width: '40%' }}>
                    <div className="flex items-center justify-center gap-2">
                      Collection <RxCaretSort className="text-paragraph" />
                    </div>
                  </th>
                  <th className="text-left font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                    <div className="flex items-center justify-center gap-2">
                      Amount <RxCaretSort className="text-paragraph" />
                    </div>
                  </th>
                  <th className="text-left font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                    <div className="flex items-center justify-center gap-2">
                      Weight <RxCaretSort className="text-paragraph" />
                    </div>
                  </th>
                  <th className="text-left font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                    <div className="flex items-center justify-center gap-2">
                      Value <RxCaretSort className="text-paragraph" />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="mt-5 [&>*>td:first-child]:border-s-0 [&>*>td:last-child]:border-e-0">
                <tr>
                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">
                      <div className="h-5 w-5 rounded bg-red"></div>
                      <Image alt="Image" src={IMG.monkey} />
                      <Typography>The Ape Society</Typography>
                    </div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">97</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">96.7%</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">165.87.7₳</div>
                  </td>
                </tr>

                <tr>
                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">
                      <div className="h-5 w-5 rounded bg-red"></div>
                      <Image alt="Image" src={IMG.monkey} />
                      <Typography>The Ape Society</Typography>
                    </div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">97</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">96.7%</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">165.87.7₳</div>
                  </td>
                </tr>

                <tr>
                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">
                      <div className="h-5 w-5 rounded bg-red"></div>
                      <Image alt="Image" src={IMG.monkey} />
                      <Typography>The Ape Society</Typography>
                    </div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">97</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">96.7%</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">165.87.7₳</div>
                  </td>
                </tr>

                <tr>
                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">
                      <div className="h-5 w-5 rounded bg-red"></div>
                      <Image alt="Image" src={IMG.monkey} />
                      <Typography>The Ape Society</Typography>
                    </div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">97</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">96.7%</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">165.87.7₳</div>
                  </td>
                </tr>

                <tr>
                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">
                      <div className="h-5 w-5 rounded bg-red"></div>
                      <Image alt="Image" src={IMG.monkey} />
                      <Typography>The Ape Society</Typography>
                    </div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">97</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">96.7%</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">165.87.7₳</div>
                  </td>
                </tr>

                <tr>
                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">
                      <div className="h-5 w-5 rounded bg-red"></div>
                      <Image alt="Image" src={IMG.monkey} />
                      <Typography>The Ape Society</Typography>
                    </div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">97</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">96.7%</div>
                  </td>

                  <td className="text-white text-left font-medium">
                    <div className="flex items-center justify-start gap-2">165.87.7₳</div>
                  </td>
                </tr>
              </tbody>

              <tfoot className="[&>*>*]:py-5">
                <tr>
                  <td>Total</td>
                  <td>
                    <div className="flex gap-2">
                      <p>Tokens: 4.000</p> <p>NFT: 4.000</p>
                    </div>
                  </td>
                  <td>NFT: 4.000</td>
                  <td>100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="overflow-scroll !rounded-md bg-[#181620] p-[22px]">
          <table className="rounded-corners h-full w-full min-w-[500px] overflow-hidden rounded-md font-Lexend">
            <thead className=" sticky top-0 bg-[#24222b]">
              <tr>
                <th className="font-medium text-[#DBDBDB]" style={{ width: '34%' }}>
                  <div className="md:!text-3xl text-xl flex !w-full items-center justify-center">Top Gainers</div>
                </th>
                <th className="font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                  <div className="flex !w-full items-center justify-center gap-2">Price</div>
                </th>
                <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                  <div className="flex !w-full items-center justify-center gap-2">Total Value</div>
                </th>
                <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                  <div className="flex !w-full items-center justify-center gap-2">Value Imapact</div>
                </th>
              </tr>
            </thead>

            <tbody className="mt-5">
              {Array(6)
                .fill('')
                .map((_, key) => {
                  return (
                    <tr key={key}>
                      <td className="text-white text-left font-medium">
                        <div className="flex items-center justify-center gap-2">
                          <div className="flex items-center gap-1">
                            <BookMarkEmpty /> {key + 1}
                          </div>
                          <Image alt="Image" src={IMG.monkey} />
                          <Typography>The Ape Society</Typography>
                        </div>
                      </td>

                      <td className="text-white text-left font-medium">
                        <div className="flex items-center justify-center gap-2">97</div>
                      </td>

                      <td className="text-white text-left font-medium">
                        <div className="flex items-center justify-center gap-2">96.7%</div>
                      </td>

                      <td className="text-white text-left font-medium">
                        <div className="flex items-center justify-center gap-2">165.87.7₳</div>
                      </td>
                    </tr>
                  )
                })}
            </tbody>

            <tfoot className="transparent-footer-bg">
              <tr>
                <td colSpan={4}></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="overflow-scroll !rounded-md bg-[#181620] p-[22px]">
          <table className="rounded-corners h-full w-full min-w-[500px] overflow-scroll rounded-md font-Lexend">
            <thead className=" sticky top-0 bg-[#24222b]">
              <tr>
                <th className="font-medium text-[#DBDBDB]" style={{ width: '34%' }}>
                  <div className="md:!text-3xl text-xl flex !w-full items-center justify-center">Top Looser</div>
                </th>
                <th className="font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                  <div className="flex !w-full items-center justify-center">Price</div>
                </th>
                <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                  <div className="flex !w-full items-center justify-center">Volume</div>
                </th>
                <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                  <div className="flex !w-full items-center justify-center">Seller</div>
                </th>
              </tr>
            </thead>

            <tbody className="mt-5">
              {Array(6)
                .fill('')
                .map((_, key) => {
                  return (
                    <tr key={key}>
                      <td className="text-white text-left font-medium">
                        <div className="flex items-center justify-center gap-2">
                          <div className="flex items-center gap-1">
                            <BookMarkEmpty />
                            {key + 1}
                          </div>
                          <Image alt="Image" src={IMG.monkey} />
                          <Typography>The Ape Society</Typography>
                        </div>
                      </td>

                      <td className="text-white text-left font-medium">
                        <div className="flex items-center justify-center gap-2">97</div>
                      </td>

                      <td className="text-white text-left font-medium">
                        <div className="flex items-center justify-center gap-2">96.7%</div>
                      </td>

                      <td className="text-white text-left font-medium">
                        <div className="flex items-center justify-center gap-2">165.87.7₳</div>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
            <tfoot className="transparent-footer-bg">
              <tr>
                <td colSpan={4}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="!rounded-md bg-blackCardBg p-4">
          <div className="flex flex-row flex-wrap justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                  Age of Assets
                </Typography>
                <div>
                  <InfoIcons />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <DonutWithTableChart
              chartCenterContent={
                <>
                  <p>Avg. Age</p>
                  <p className="text-2xl text-white font-medium">379 Days</p>
                </>
              }
              columnHeadingFirst="Amount"
              columnHeadingSecond="Assets"
              isBg={false}
              tableLeftList={[
                {
                  icon: (
                    <>
                      <div className="h-3 w-3 rounded-full bg-red"></div>
                    </>
                  ),
                  title: '< 1 Week',
                },
                {
                  icon: (
                    <>
                      <div className="h-3 w-3 rounded-full bg-red"></div>
                    </>
                  ),
                  title: '1-4 Weeks',
                },
                {
                  icon: (
                    <>
                      <div className="h-3 w-3 rounded-full bg-red"></div>
                    </>
                  ),
                  title: '1 - 3 Month',
                },
                {
                  icon: (
                    <>
                      <div className="h-3 w-3 rounded-full bg-red"></div>
                    </>
                  ),
                  title: '3 - 6 Month',
                },
                {
                  icon: (
                    <>
                      <div className="h-3 w-3 rounded-full bg-red"></div>
                    </>
                  ),
                  title: '6 - 12 Month',
                },
                {
                  icon: (
                    <>
                      <div className="h-3 w-3 rounded-full bg-red"></div>
                    </>
                  ),
                  title: '1 Year +',
                },
              ]}
              totalHeading="Total Average"
              totalValue="379 Days"
            />
          </div>
        </div>
        <div className="!rounded-md bg-blackCardBg p-4">
          <div className="flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col">
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                    Transaction
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
                <NavTabsMolecule
                  activeTab={0}
                  tabs={['D', 'W', 'M']}
                  onTabChange={() => {
                    return
                  }}
                />
              </div>
            </div>

            <div className="flex-1">
              <CustomBarChart
                data={GraphData2}
                height={300}
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

      <div className="mt-4 !rounded-md bg-[#181620] p-4">
        <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
          Volume
        </Typography>

        <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="!rounded-md bg-[#1d1b25] p-4">
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
                <div className="mb-1 flex items-center justify-center">
                  <div className="mt-1 flex w-full flex-col items-start gap-1">
                    <Typography className="text-left font-medium" size="lg">
                      5.463 ₳
                    </Typography>
                    <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                      +225,53%
                    </Typography>
                  </div>
                  <div className="mt-2 flex w-full flex-col items-start gap-1">
                    <Typography className="text-left font-medium" size="lg">
                      5.463 ₳
                    </Typography>
                    <Typography className="text-left font-Inter font-medium text-[#F32A5A]" size="sm">
                      -225,53%
                    </Typography>
                  </div>
                </div>
                <Typography className="text-left font-light text-black7f" size="small">
                  01.02.2022
                </Typography>
              </div>
              <div className="h-fit !w-full xsm:!w-auto">
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
                    data: [44, 55, 41, 64, 22, 43, 21, 43, 54, 76, 98, 83],
                  },
                  {
                    name: 'Series B',
                    data: [0, -23, -20, -8, -13, -27, -33, -89, -98, -87, -56, -33],
                  },
                ]}
                width={800}
                xAxisCategory={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
              />
            </div>
          </div>
          <div className="!rounded-md bg-[#1d1b25] p-4">
            <div className="flex flex-col justify-between gap-3">
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

              <div className="h-[200px]">
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

        <div className="mt-4 !rounded-md bg-[#1d1b25] p-6">
          <Typography className="mb-[22px] text-left text-[20px] font-medium">Volume Flow Overview</Typography>
          <Table
            className="[&>tbody>tr:last-child]:!border-b [&>tbody>tr:last-child]:!border-b-[#E8E1E180] [&>tbody>tr>td]:!border [&>tbody>tr>td]:!border-[#E8E1E180] [&>thead::after]:hidden [&>thead::before]:hidden [&>thead>tr>th:first-child]:w-auto [&>thead>tr>th]:border-b-0 [&>thead>tr>th]:border-b-[#E8E1E180] [&>thead>tr>th]:bg-transparent [&>thead]:border-b-0"
            columns={[
              {
                name: '',
                selector: val => val.year,
              },

              {
                name: 'Total',
                selector: val => val.total,
              },

              {
                name: 'Avg.',
                selector: val => val.avg,
              },

              {
                name: 'Jan.',
                selector: val => (val.jan ? val.jan : ''),
                itemClassName: item => (item.jan ? (item.jan > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Feb.',
                selector: val => (val.feb ? val.feb : ''),
                itemClassName: item => (item.feb ? (item.feb > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Mar.',
                selector: val => (val.mar ? val.mar : ''),
                itemClassName: item => (item.mar ? (item.mar > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Apr.',
                selector: val => (val.apr ? val.apr : ''),
                itemClassName: item => (item.apr ? (item.apr > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'May',
                selector: val => (val.may ? val.may : ''),
                itemClassName: item => (item.may ? (item.may > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Jun.',
                selector: val => (val.jun ? val.jun : ''),
                itemClassName: item => (item.jun ? (item.jun > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Jul.',
                selector: val => (val.jul ? val.jul : ''),
                itemClassName: item => (item.jul ? (item.jul > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Aug.',
                selector: val => (val.aug ? val.aug : ''),
                itemClassName: item => (item.aug ? (item.aug > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Sep.',
                selector: val => (val.sep ? val.sep : ''),
                itemClassName: item => (item.sep ? (item.sep > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Oct.',
                selector: val => (val.oct ? val.oct : ''),
                itemClassName: item => (item.oct ? (item.oct > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Nov.',
                selector: val => (val.nov ? val.nov : ''),
                itemClassName: item => (item.nov ? (item.nov > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Dec.',
                selector: val => (val.dec ? val.dec : ''),
                itemClassName: item => (item.dec ? (item.dec > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
            ]}
            data={[
              {
                year: 2013,
                total: 4500000,
                avg: 1000,
                jan: 1500000,
                feb: 1500000,
                mar: 1500000,
                apr: -350000,
                may: 1500000,
                jun: 1500000,
                jul: 1500000,
                aug: -15000,
                sep: 1500000,
                oct: 1500000,
                nov: 0,
                dec: 0,
              },

              {
                year: 2013,
                total: 4500000,
                avg: 1000,
                jan: 1500000,
                feb: -150000,
                mar: 1500000,
                apr: 1500000,
                may: 1500000,
                jun: -3200000,
                jul: 1500000,
                aug: 150000,
                sep: 1500000,
                oct: 1500000,
                nov: -150000,
                dec: 1500000,
              },
            ]}
            headingClassName="text-[#dbdbdb] font-normal"
            headingWrapperClassName="bg-transparent"
            itemClassName="p-[10px]"
            itemWrapperClassName="p-0 bg-[#292731] hover:bg-[#292731]"
          />
        </div>
      </div>

      <div className="mt-4 !rounded-md bg-[#181620] p-4">
        <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
          Realized Gains
        </Typography>

        <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="!rounded-md bg-[#1d1b25] p-4">
            <div className="flex flex-row flex-wrap justify-between gap-3">
              <div className="flex flex-col">
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                    Trades
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
          <div className="!rounded-md bg-[#1d1b25] p-4">
            <div className="flex flex-col justify-between gap-3">
              <div className="flex flex-col">
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                    Staking
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

        <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="!rounded-md bg-[#1d1b25] p-4">
            <div className="flex flex-col justify-between gap-3">
              <div className="flex flex-col">
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                    Lending
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
          <div className="!rounded-md bg-[#1d1b25] p-4">
            <div className="flex flex-row flex-wrap justify-between gap-3">
              <div className="flex flex-col">
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                    Yield Farming
                  </Typography>
                  <div>
                    <InfoIcons />
                  </div>
                </div>
                <div className="mt-2 flex w-full flex-row items-center gap-2">
                  <div className="item-center flex flex-row gap-2">
                    <Typography className="text-left font-medium" size="lg">
                      5.463 ₳
                    </Typography>
                    <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                      +225,53%
                    </Typography>
                  </div>

                  <div className="item-center flex flex-row gap-2">
                    <Typography className="text-left font-medium" size="lg">
                      5.463 ₳
                    </Typography>
                    <Typography className="text-left font-Inter font-medium text-red" size="sm">
                      -225,53%
                    </Typography>
                  </div>
                </div>
                <Typography className="text-left font-light text-black7f" size="small">
                  01.02.2022
                </Typography>
              </div>
              <div className="h-fit !w-full xsm:!w-auto">
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

        <div className="mt-4 !rounded-md bg-[#1d1b25] p-6">
          <Typography className="mb-[22px] text-left text-[20px] font-medium">Volume Flow Overview</Typography>
          <Table
            className="[&>tbody>tr:last-child]:!border-b [&>tbody>tr:last-child]:!border-b-[#E8E1E180] [&>tbody>tr>td]:!border [&>tbody>tr>td]:!border-[#E8E1E180] [&>thead::after]:hidden [&>thead::before]:hidden [&>thead>tr>th:first-child]:w-auto [&>thead>tr>th]:border-b-0 [&>thead>tr>th]:border-b-[#E8E1E180] [&>thead>tr>th]:bg-transparent [&>thead]:border-b-0"
            columns={[
              {
                name: '',
                selector: val => val.year,
              },

              {
                name: 'Total',
                selector: val => val.total,
              },

              {
                name: 'Avg.',
                selector: val => val.avg,
              },

              {
                name: 'Jan.',
                selector: val => (val.jan ? val.jan : ''),
                itemClassName: item => (item.jan ? (item.jan > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Feb.',
                selector: val => (val.feb ? val.feb : ''),
                itemClassName: item => (item.feb ? (item.feb > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Mar.',
                selector: val => (val.mar ? val.mar : ''),
                itemClassName: item => (item.mar ? (item.mar > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Apr.',
                selector: val => (val.apr ? val.apr : ''),
                itemClassName: item => (item.apr ? (item.apr > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'May',
                selector: val => (val.may ? val.may : ''),
                itemClassName: item => (item.may ? (item.may > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Jun.',
                selector: val => (val.jun ? val.jun : ''),
                itemClassName: item => (item.jun ? (item.jun > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Jul.',
                selector: val => (val.jul ? val.jul : ''),
                itemClassName: item => (item.jul ? (item.jul > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },

              {
                name: 'Aug.',
                selector: val => (val.aug ? val.aug : ''),
                itemClassName: item => (item.aug ? (item.aug > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Sep.',
                selector: val => (val.sep ? val.sep : ''),
                itemClassName: item => (item.sep ? (item.sep > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Oct.',
                selector: val => (val.oct ? val.oct : ''),
                itemClassName: item => (item.oct ? (item.oct > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Nov.',
                selector: val => (val.nov ? val.nov : ''),
                itemClassName: item => (item.nov ? (item.nov > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
              {
                name: 'Dec.',
                selector: val => (val.dec ? val.dec : ''),
                itemClassName: item => (item.dec ? (item.dec > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
              },
            ]}
            data={[
              {
                year: 2013,
                total: 4500000,
                avg: 1000,
                jan: 1500000,
                feb: 1500000,
                mar: 1500000,
                apr: -350000,
                may: 1500000,
                jun: 1500000,
                jul: 1500000,
                aug: -15000,
                sep: 1500000,
                oct: 1500000,
                nov: 0,
                dec: 0,
              },

              {
                year: 2013,
                total: 4500000,
                avg: 1000,
                jan: 1500000,
                feb: -150000,
                mar: 1500000,
                apr: 1500000,
                may: 1500000,
                jun: -3200000,
                jul: 1500000,
                aug: 150000,
                sep: 1500000,
                oct: 1500000,
                nov: -150000,
                dec: 1500000,
              },
            ]}
            headingClassName="text-[#dbdbdb] font-normal"
            headingWrapperClassName="bg-transparent"
            itemClassName="p-[10px]"
            itemWrapperClassName="p-0 bg-[#292731] hover:bg-[#292731]"
          />
        </div>
      </div>

      <div className="my-4 !rounded-md bg-[#181620] p-4">
        <div className="w-fit">
          <NavTabsMolecule
            activeTab={activeTab}
            className="whitespace-nowrap"
            tabs={['Biggest Profits', 'Biggest Loss']}
            onTabChange={val => {
              setActiveTab(val)
            }}
          />
        </div>

        <div>
          <RealTimeNftTable data={realTimeNftTableData} headData={portfolioProfitTableKey} isShowCheckBox />
        </div>
      </div>
    </div>
  )
}

export default AnalyticsBottomSection
