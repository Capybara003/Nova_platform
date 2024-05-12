import { useQuery } from 'react-query'

import marketServiceInstance from 'api-services/MarketApiService'
import { API_ENDPOINTS } from 'utils/api-integration'
import MarketServices from 'api-services/MarketServices'

export const useMarket = (activeTab?: number) => {
  const { isLoading: isLoadingMarket, data: Market } = useQuery(
    [API_ENDPOINTS.PRIVATE.GET_MARKET],
    () => marketServiceInstance.getMarket(),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )
  const { isLoading: isLoadingTreeMap, data: TreeMap } = useQuery(
    [API_ENDPOINTS.PRIVATE.GET_TREE_MAP],
    () => MarketServices.getTree(),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )
  const marketIndexQuery = useQuery({
    queryKey: ['market-index'],
    queryFn: () => marketServiceInstance.getMarketIndex(),
    enabled: activeTab === 1,
  })

  const marketTrendingDataQuery = useQuery({
    queryKey: ['market-trending'],
    queryFn: () => marketServiceInstance.getMarketTrending(),
  })

  const marketAnalyticsDataQuery = useQuery({
    queryKey: ['market-analytics'],
    queryFn: () => marketServiceInstance.getMarketAnalytics(),
  })

  const marketAnalyticsActiveWalletQuery = useQuery({
    queryKey: ['market-analytics-active-wallet'],
    queryFn: () => marketServiceInstance.getMarketAnalyticsActiveWallet(),
  })

  const marketAnalyticsActiveTraderQuery = useQuery({
    queryKey: ['market-analytics-active-trader'],
    queryFn: () => marketServiceInstance.getMarketAnalyticsActiveTrader(),
  })

  const marketAnalyticsUniqueNftHolder = useQuery({
    queryKey: ['market-analytics-unique-nft-holder'],
    queryFn: () => marketServiceInstance.getMarketAnalyticsActiveTrader(),
  })

  return {
    isLoadingMarket,
    Market,
    TreeMap,
    isLoadingTreeMap,
    marketIndexQuery,
    marketTrendingDataQuery,
    marketAnalyticsDataQuery,
    marketAnalyticsActiveWalletQuery,
    marketAnalyticsActiveTraderQuery,
    marketAnalyticsUniqueNftHolder,
  }
}
