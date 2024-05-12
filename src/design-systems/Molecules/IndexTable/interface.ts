/* eslint-disable @typescript-eslint/no-explicit-any */

import { cryptoProps } from 'lib/redux/slices/navToggleSlice/interface'

// TableProps.ts
export interface HoldingData {
  id: number
  walletAddress: string
  thumbnail: string
  policy: string
  name: string
  amount: string
  weight: number
  floor: string
  rarity: number | null
  buyPrice: string
  fee: number
  floorValue: string
  sinceTrade: string
  holdingTime: string
  link: string
  assetType: string | null
  fingerPrint: string
  unrealizedGains: number
  assetId: string
  confirmed_at: string
  tx_hash: string
  royalties: string
  innerData: InnerData[]
}

export interface TableProps {
  data: any
  headData: any
  loading?: boolean
  footerData?: any
  crypto?: cryptoProps
}

export interface InnerData {
  airdrop: { StakeIMG: string; StakeName: string }
  mint: { StakeIMG: string; StakeName: string }
  yieldFarming: { StakeIMG: string; StakeName: string }
}

export default TableProps
