/* eslint-disable @typescript-eslint/no-explicit-any */
interface HoldingResponse {
  data: any
}
interface HoldingAssetsDetailsProps {
  assetValue: string
  data: AssetsData
  profitAndLoss: string
}

interface AssetsData {
  assetName: string
  assetNameAscii: string
  burnCnt: number
  cip68Metadata: string | number | null
  creationTime: number
  fingerprint: string
  mintCnt: number
  mintingTxHash: string
  mintingTxMetadata: any
  policyId: string
  tokenRegistryMetadata: string | number | null
  totalSupply: string
}

// Income

interface NFTData {
  data: NFTItem[]
  message: string
  nftTotal: number
  success: boolean
  totalAmount: number
  totalBuyPrice: number
  totalFee: number
  totalFloorPrice: number
  totalFloorValue: number
  totalRarity: number
  totalSinceTrade: number
  totalUnRealizedGains: number
  totalWeight: number
  totalIncome: number
}

interface NFTItem {
  id: number
  walletAddress: string
  thumbnail: string
  policy: string
  name: string
  amount: string
  weight: number
  floor: null | any
  rarity: null | any
  buyPrice: string | any
  sellPrice: string
  royality: null | any
  fee: null | any
  floorValue: null | any
  sinceTrade: null | any
  holdingTime: null | any
  link: string
  assetType: null | any
  fingerprint: null | any
  assetId: string
  unrealizedGains: string | any
  confirmed_at: string
  tx_hash: string
  income: number
  realizedGains: number | undefined | any
  sinceTradePercent: number | undefined
}
