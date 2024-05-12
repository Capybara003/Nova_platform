'use client'
import React from 'react'

import ActiveTrader from './ActiveTrader'
import ActiveWalletSection from './ActiveWalletsection'
import { AmountBuy } from './AmountBuy'
import MarketAnalyticsUpperHead from './MarketAnalyticsUpperHead'
import TotalValueLocked from './TotalValueLocked'
import TotalVolume from './TotalVolume'
import { UniqueBuyer } from './UniqueBuyer'
import UniqueHolderMarket from './UniqueHolderMarket'
import UniqueHolderMarketNft from './UniqueHolderNft'
import { VolumeBuy } from './VolumeBuy'

import { useMarket } from 'hooks/apis/useMarket'

const MarketAnalytics: React.FC = () => {
  const {
    marketAnalyticsDataQuery,
    marketAnalyticsActiveWalletQuery,
    marketAnalyticsActiveTraderQuery,
    marketAnalyticsUniqueNftHolder,
  } = useMarket()

  return (
    <div className="flex w-full flex-col gap-4">
      <MarketAnalyticsUpperHead
        data={marketAnalyticsDataQuery.data?.data}
        isLoading={marketAnalyticsDataQuery.isLoading}
      />
      <ActiveWalletSection
        data={marketAnalyticsActiveWalletQuery.data?.data}
        isLoading={marketAnalyticsActiveWalletQuery.isLoading}
      />
      <ActiveTrader
        data={marketAnalyticsActiveTraderQuery.data?.data}
        isLoading={marketAnalyticsActiveTraderQuery.isLoading}
      />
      <TotalVolume />
      <UniqueHolderMarketNft
        data={marketAnalyticsUniqueNftHolder.data?.data}
        isLoading={marketAnalyticsUniqueNftHolder.isLoading}
      />
      <UniqueHolderMarket />
      <TotalValueLocked />
      <VolumeBuy />
      <UniqueBuyer />
      <AmountBuy />
    </div>
  )
}

export default MarketAnalytics
