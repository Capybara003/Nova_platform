/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Currency {
  id: string
  display_name: string
  base_currency: string
  quote_currency: string
  // Add other properties if needed
}

export interface TickerData {
  type: string
  product_id: string
  price: string
  // Add other properties if needed
}

export interface HistoricalData {
  // Define your historical data structure here
  // Adjust this interface based on the actual structure of your historical data
}

interface seiData {
  seiPrice: number
  changes: number
  lineChart: number[] | any
}
interface marketData {
  marketValue: number
  changes: number
  chartData: number
  net: number
}
interface marketActive {
  activeTrader: number
  changes: number
  chartData: number
  net: number
}
export interface MarketProps {
  data: {
    seiData: seiData
    marketData: marketData
    marketActive: marketActive
    blockchainLoad: number
    changeInLoad: number
  }
}
export interface MarketDataProps {
  seiData: seiData
  marketData: marketData
  marketActive: marketActive
}
