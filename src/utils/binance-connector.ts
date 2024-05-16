/* eslint-disable no-console */
import { Spot } from '@binance/connector-typescript'

const binanceData = async (api_key: string, api_secret: string) => {
  const API_KEY = api_key
  const API_SECRET = api_secret
  // const BASE_URL = 'https://api.binance.com'
  const BASE_URL = `https://api.binance.com`
  try {
    const client = new Spot(API_KEY, API_SECRET, { baseURL: BASE_URL, proxy: false })
    const res = await client.recentTradesList('SEIUSDT', {
      limit: 10,
    })
    return res
  } catch (error) {
    console.error(error)
  }
}

export default binanceData
