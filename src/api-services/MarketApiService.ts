/* eslint-disable @typescript-eslint/no-explicit-any */
import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS } from 'utils/api-integration'

class MarketServices {
  getMarketIndex = async () => {
    return CoreAPIService.get<ApiResponseType<MarketIndexDataType[]>>(`${process.env.NEXT_PUBLIC_API_URL}graph/index`)
  }

  getMarketTrending = async () => {
    return CoreAPIService.get<ApiResponseType<MarketTrendingData[]>>(
      `${process.env.NEXT_PUBLIC_API_URL}market/trending`
    )
  }

  getMarketAnalytics = async () => {
    return CoreAPIService.get<ApiResponseType<MarketAnalyticsData>>(
      `${process.env.NEXT_PUBLIC_API_URL}market/analytics`
    )
  }

  getMarket = async () => {
    return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GET_MARKET}`)
  }

  getMarketAnalyticsActiveWallet = async () => {
    return CoreAPIService.get<ApiResponseType<MarketWalletAnalyticsData>>(
      `${process.env.NEXT_PUBLIC_API_URL}market/active-wallet`
    )
  }

  getMarketAnalyticsActiveTrader = async () => {
    return CoreAPIService.get<ApiResponseType<MarketWalletAnalyticsData>>(
      `${process.env.NEXT_PUBLIC_API_URL}market/active-traders`
    )
  }

  getMarketAnalyticsUniqueNftHolder = async () => {
    return CoreAPIService.get<ApiResponseType<MarketWalletAnalyticsData>>(
      `${process.env.NEXT_PUBLIC_API_URL}market/unique-holders-market`
    )
  }
}

const marketServiceInstance = new MarketServices()
export default marketServiceInstance
