import React from 'react'

import { YellowDot } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import IndexDataTable from 'design-systems/Molecules/IndexTable'
import TwoLineGraph from 'design-systems/Molecules/TwoLineGraph'
import { Graphdata } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'
import { useMarket } from 'hooks/apis/useMarket'

interface MarketOverviewIndexProps {
  activeTab: number
}
const MarketOverviewIndex: React.FC<MarketOverviewIndexProps> = ({ activeTab }) => {
  const { marketIndexQuery } = useMarket(activeTab)

  return (
    <div className="grid w-full grid-cols-1 justify-between  !gap-[22px] font-Lexend lg:grid-cols-2 lg:!gap-[84px]">
      <div className="max-h-[605px] w-full overflow-x-auto overflow-y-auto !rounded-xs border border-[#ffffff0d]">
        <IndexDataTable
          data={marketIndexQuery.data?.data}
          headData={[
            { name: 'Index', key: 'index' },
            { name: 'Market Cap (MC)', key: 'marketCapMC' },
            { name: 'Volume ', key: 'volume' },
            { name: 'Buyer', key: 'buyer' },
            { name: 'Seller', key: 'seller' },
            { name: 'Holders', key: 'holders' },
          ]}
          isLoading={marketIndexQuery.isLoading}
        />
      </div>
      {/* Graph Component on the right with background color */}
      <div className="flex w-full flex-col gap-8  !rounded-xs ">
        <div className="!rounded-xs bg-blackCardBg">
          <div className="flex justify-between gap-12 !rounded-xs p-[16px] md:!items-center">
            <div className="flex w-full flex-row justify-between gap-1 text-left md:!flex-col">
              <div className="flex items-center gap-2">
                <YellowDot />
                <Typography className="font-Lexend !text-[20px] font-normal" size="paragraph">
                  Market Cap
                </Typography>
              </div>
              <div>
                <Typography className="!text-[25px] font-medium" size="h3">
                  5.463,56 ₳
                </Typography>
                <Typography className=" text-success-500" size="paragraph">
                  +225,53%
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <TwoLineGraph
          data={Graphdata}
          height={344}
          hideXAxis={false}
          lineColor="#6F1ED7"
          lineColor2="#CE9136"
          lineKeys={[
            {
              key: 'value',
              strokeColor: '#CE9136',
            },
          ]}
          lineWidth={2}
          width="100%"
          xKey="month"
          yKey="value"
        />
      </div>
    </div>
  )
}

export default MarketOverviewIndex
