import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ExchangeSliceProps {
  binance: {
    api_key: string
    api_secret: string
    is_connected: boolean
    data?: BinanceApiResponse['data']
  }

  coinbase: {
    api_key: string
    api_secret: string
    is_connected: boolean
    data?: CoinbaseTokenApiResponse['data']
  }
}

const initialState: ExchangeSliceProps = {
  binance: {
    api_key: '',
    api_secret: '',
    is_connected: false,
    data: {} as BinanceApiResponse['data'],
  },
  coinbase: {
    api_key: '',
    api_secret: '',
    is_connected: false,
    data: {} as CoinbaseTokenApiResponse['data'],
  },
}

export const exchangeSlice = createSlice({
  initialState: initialState,
  name: 'Exchange Slice',
  reducers: {
    connectToBinance: (
      state,
      action: PayloadAction<{ api_key: string; api_secret: string; data: BinanceApiResponse['data'] }>
    ) => {
      state.binance.is_connected = true
      state.binance.api_key = action.payload.api_key
      state.binance.api_secret = action.payload.api_secret
      state.binance.data = action.payload.data
    },

    connectToCoinbase: (
      state,
      action: PayloadAction<{ api_key: string; api_secret: string; data: CoinbaseTokenApiResponse['data'] }>
    ) => {
      state.coinbase.is_connected = true
      state.coinbase.api_key = action.payload.api_key
      state.coinbase.api_secret = action.payload.api_secret
      state.coinbase.data = action.payload.data
    },

    disConnectToBinance: state => {
      state.binance.is_connected = false
      state.binance.api_key = ''
      state.binance.api_secret = ''
      state.binance.data = undefined
    },

    disConnectToCoinbase: state => {
      state.coinbase.is_connected = false
      state.coinbase.api_key = ''
      state.coinbase.api_secret = ''
      state.coinbase.data = undefined
    },

    updateCoinbaseData: (state, action: PayloadAction<CoinbaseTokenApiResponse['data']>) => {
      state.coinbase.data = action.payload
    },

    updateBinanceData: (state, action: PayloadAction<BinanceApiResponse['data']>) => {
      state.binance.data = action.payload
    },
  },
})

export const {
  connectToBinance,
  connectToCoinbase,
  disConnectToBinance,
  disConnectToCoinbase,
  updateCoinbaseData,
  updateBinanceData,
} = exchangeSlice.actions
