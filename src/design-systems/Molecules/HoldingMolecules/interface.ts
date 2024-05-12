import { cryptoProps } from 'lib/redux/slices/navToggleSlice/interface'

export type ExchangeSettingType = {
  selectAll: boolean
  isCoinbase: boolean
  isBinance: boolean
}

export type WalletSettingType = {
  isWallet: boolean
  selectAll: boolean
}

export interface HoldingDetails {
  buyPrice?: number
  estFees?: number
  estValue?: number
  unrealizedGains?: number
  percentage?: number
}

export interface HoldingDetailsSectionProps {
  title: string
  value?: number
  tooltipTitle: string
  crypto: cryptoProps
}
