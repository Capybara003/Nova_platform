interface MarketIndexDataType {
  buyer: number
  changeBuyer: number
  changeVolume: number
  holder: number
  marketCap: number
  name: string
  seller: number
  volume: number
}

interface MarketTrendingData {
  name: string
  price: number
  priceChange: number
  volume: number
  volumeChange: number
  seller: number
  sellerChange: number
  buyer: number
  changeBuyer: number
}

interface MarketAnalyticsData {
  adaMarketCap: number
  totalAdaStaked: number
  totalStakePools: number
  rewardsDistributed: string
}

interface MarketWalletAnalyticsData {
  pieChart: {
    labels: string
    value: number
  }[]
  graphChart: {
    name: string
    value1: number
    value2: number
    value3: number
  }[]
  totalTrader: number
  total: number
}
