/* eslint-disable @typescript-eslint/no-explicit-any */
export interface navToggleSliceState {
  tabName: number
  moduleName: string
  walletLoading: boolean
  crypto: cryptoProps
}

export interface cryptoProps {
  [x: string]: any
  img: any
  label: string
  symbol: string
  value: number
}
