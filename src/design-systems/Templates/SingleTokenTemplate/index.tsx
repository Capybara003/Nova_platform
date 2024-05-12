import React from 'react'

import TokenInfoCard from './TokenInfoCard'
import TokenChart from './TokenChart'
import NftChatBox from './NftChatBox'
import NftTabSection from './NftTabSection'

const SingleCollectionTradesTemplate: React.FC = () => {
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="grid w-full grid-cols-12 justify-center gap-[20px]">
        <div className="col-span-12 xm:col-span-4 xlg:col-span-3">
          <TokenInfoCard />
        </div>
        <div className="col-span-12 hidden h-full xm:col-span-4 xm:!block xlg:col-span-6">
          <TokenChart />
        </div>
        <div className="col-span-12 hidden xm:col-span-4 xm:!block xlg:col-span-3">
          <NftChatBox />
        </div>
      </div>

      <NftTabSection />
    </div>
  )
}

export default SingleCollectionTradesTemplate
