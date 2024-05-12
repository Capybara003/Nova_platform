import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS } from 'utils/api-integration'

class ExchangeApiService {
  getBinanceToken = async (api_key: string, api_secret: string) => {
    return CoreAPIService.post<BinanceApiResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.BINANCE_TOKEN}`,
      {
        BINANCE_API_KEY: api_key,
        BINANCE_SECRET_KEY: api_secret,
        marketplace: 'binance',
        type: 'binanceToken',
      }
    )
  }

  getCoinbaseToken = async (api_key: string, api_secret: string) => {
    return CoreAPIService.post<CoinbaseTokenApiResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.COINBASE_TOKEN}`,
      {
        COINBASE_API_KEY: api_key,
        COINBASE_SECRET_KEY: api_secret,
        marketplace: 'coinbase',
        type: 'coinbaseToken',
      }
    )
  }
}

const exchangeApiInstance = new ExchangeApiService()

export default exchangeApiInstance
