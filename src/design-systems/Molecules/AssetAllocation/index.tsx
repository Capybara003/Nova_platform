import { useState } from 'react'

import { AssetsTypeTable } from '../AssetsTypeTable'
import NavTabsMolecule from '../NavTabs/NavTabsMolecule'
import DynamicDonutChart from '../DynamicDonutChart'

import Typography from 'design-systems/Atoms/Typography'
import { AssetsAllocationData } from 'design-systems/data/data'

export const AssetAllocation = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="grid gap-4 rounded-lg bg-blackCardBg p-5 font-Lexend ">
      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
        Amount Buys / Sells
      </Typography>
      <div className="xsm:w-fit">
        <NavTabsMolecule
          activeTab={activeTab}
          className="whitespace-nowrap"
          tabs={['Type', 'Category', 'Market Cap']}
          onTabChange={handleTabChange}
        />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <DynamicDonutChart
            centerContent={
              <>
                <p>Total Trader</p>
                <p className="text-2xl text-white font-medium">550.000</p>
              </>
            }
            colors={['#5A3FFF', '#2592D9', '#1ED6FF', '#F466FE', '#C517D1', '#6B0090']}
            height={400}
            labels={['0-5K ', '5K-25k', '25K-100K', '100K-250K', '250K-1M', '1M+']}
            series={[22, 20, 20, 22, 32, 51]}
            width={400}
          />
        </div>
        <div>
          <AssetsTypeTable
            data={AssetsAllocationData}
            headData={[
              { name: 'Collection', key: 'Collection', isInfo: false, isSort: true },
              { name: 'Market Cap', key: 'MarketCap', isInfo: false, isSort: true },
              { name: 'Weight', key: 'Weight', isInfo: false, isSort: true },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
