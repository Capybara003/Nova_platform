interface Token {
  asset: string
  credentialId: number
  floor: string
  free: string
  id: number
  makerCommission: string | null
  price: string
  size: string
  takerCommission: string | null
}

interface CoinbaseTokenApiResponse {
  status: number
  message: string
  data: Token[]
}

// Binance

interface BinanceApiResponse {
  status: number
  message: string
  data: Token[]
}
