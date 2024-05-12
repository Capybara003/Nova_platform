/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react'

import { LineBreakSkeleton } from '../Skeletan/LineBreakSkeleton'
import { TableSkeletan } from '../Skeletan/TableSkeletan'
import Speedometer from '../Speedometer'

import { SmallArrowUp, SmallDownArrow } from 'design-systems/Atoms/Icons'
import ProgressBar from 'design-systems/Atoms/ProgressBar'
import Typography from 'design-systems/Atoms/Typography'
import Graph from 'design-systems/Molecules/Graph'
import SmallDataTable from 'design-systems/Molecules/SmallTable'
import { useMarket } from 'hooks/apis/useMarket'
import { cryptoProps } from 'lib/redux/slices/navToggleSlice/interface'

interface AnalyticsUpperProps {
  crypto: cryptoProps
}

const AnalyticsUpperHeader: React.FC<AnalyticsUpperProps> = ({ crypto }) => {
  const { isLoadingMarket, Market } = useMarket()
  const [market, setMarket] = useState<any>(null)
  useMemo(() => {
    if (Market != undefined) {
      setMarket(Market)
    }
  }, [Market, isLoadingMarket])

  return (
    <div className=" grid !grid-cols-1 justify-center gap-[20px] font-Lexend lg:!grid-cols-2">
      <div className="mt-0 flex gap-2">
        <div className="flex h-full w-full flex-col gap-[22px] md:w-auto">
          <div className="grid !grid-cols-1 gap-[20px] xsm:!grid-cols-2 xxsm:!grid-cols-3">
            {[
              {
                label: 'ADA Price',
                per: market?.adaData?.changes,
                price: `${market?.adaData?.adaPrice}$`,
                graph: 'LineChart',
                GraphData: market?.adaData?.lineChart,
              },
              {
                label: 'Market Volume',
                per: market?.marketData?.changes,
                price: `${market?.marketData?.marketValue} ${crypto.symbol}`,
                net: market?.marketData?.net,
                GraphData: market?.marketData?.chartData,
              },
              {
                label: 'Market Active Trader',
                per: market?.marketActive?.changes,
                price: market?.marketActive?.activeTrader,
                net: market?.marketActive?.net,
                GraphData: market?.marketActive?.chartData,
              },
            ].map((item, key) => {
              return (
                <>
                  <div
                    className="grid min-h-[294px] content-between gap-y-2 rounded-[12px] bg-blackCardBg p-2 md:!rounded-[24px] md:!p-[22px]"
                    key={key}
                  >
                    <div className=" grid min-h-[121px] w-full content-between gap-y-2 rounded-xs bg-blackCardBg p-3  ">
                      <Typography className="text-left font-medium" size="subtitle">
                        {item.label}
                      </Typography>
                      {!isLoadingMarket ? (
                        <div className=" flex flex-row flex-wrap items-center gap-x-6 xm:gap-3">
                          <Typography className="font-medium" size="lg">
                            {item.price}
                          </Typography>
                          <div className="flex flex-row items-center justify-center gap-1 rounded bg-green px-3">
                            <Typography className="font-medium !text-neutral-100">{item.per}%</Typography>
                            <SmallArrowUp />
                          </div>
                        </div>
                      ) : (
                        <TableSkeletan limit={1} />
                      )}
                    </div>
                    {!isLoadingMarket ? (
                      <>
                        {item.graph === 'LineChart' ? (
                          <Graph
                            data={item.GraphData}
                            height={100}
                            hideXAxis={true}
                            lineColor="#17D178"
                            lineWidth={2}
                            width="100%"
                            xKey="date"
                            yKey="value"
                          />
                        ) : (
                          <Speedometer
                            // bgColor="bg-[#24222b]"
                            content={
                              <div className="mt-4 text-sm">
                                <div className="value text-xs text-[#d3d3d3]">NET</div>
                                <div className="label text-lg">{item.net}</div>
                              </div>
                            }
                            endVal="250"
                            isShowStartEndValue
                            percentageValue={item?.GraphData}
                            startVal="200"
                            width="200px"
                          />
                        )}
                      </>
                    ) : (
                      <TableSkeletan limit={3} />
                    )}
                  </div>
                </>
              )
            })}
          </div>
          <div className="grid w-full !grid-cols-1 flex-row gap-[22px] xsm:!grid-cols-2">
            <div className="grid w-full content-between rounded-[12px] bg-blackCardBg p-2 md:!rounded-[24px] md:!p-4">
              {!isLoadingMarket ? (
                <>
                  <div className="mb-1 flex flex-row flex-wrap content-between items-center justify-between gap-y-2">
                    <Typography className="text-left font-medium" size="subtitle">
                      Blockchain Load: {`${Market?.blockchainLoad}%`}
                    </Typography>
                    <div className="flex flex-row items-center justify-center rounded bg-red p-1 px-2">
                      <Typography size="md">20%</Typography>
                      <SmallDownArrow />
                    </div>
                  </div>
                  <ProgressBar progress={Market?.blockchainLoad} />
                </>
              ) : (
                <>
                  <LineBreakSkeleton limit={1} />
                  <TableSkeletan limit={1} />
                </>
              )}
            </div>
            <div className="grid min-h-[94px] w-full content-between rounded-[12px] bg-blackCardBg p-2 md:!rounded-[24px] md:!p-4">
              {!isLoadingMarket ? (
                <>
                  <div className="mb-1 flex flex-row flex-wrap content-between items-center justify-between gap-y-2">
                    <Typography className="text-left font-medium" size="subtitle">
                      Current Epoch: {Market?.changeInLoad}
                    </Typography>
                    <div className="flex flex-row items-center justify-center rounded p-1 px-2">
                      <Typography className="text-[18px]">1d 12h 55m 10s</Typography>
                    </div>
                  </div>
                  <ProgressBar gradiant={true} progress={Market?.changeInLoad} />
                </>
              ) : (
                <>
                  <LineBreakSkeleton limit={1} />
                  <TableSkeletan limit={1} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[12px] bg-blackCardBg p-2  md:!rounded-[24px] md:!px-[22px] md:!py-[24px]">
        <SmallDataTable />
      </div>
    </div>
  )
}

export default AnalyticsUpperHeader
