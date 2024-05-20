/* eslint-disable @typescript-eslint/no-explicit-any */
interface ConnectedTableProps {
  data: {
    id?: number
    walletAddress: string
    walletName: string
    // floorValue: string
    // tradeValue: string
    // nft: string
    // token: string
  }[]
  header?: {
    name: string
    key: string
    isInfo: boolean
    isSort: boolean
    width: string
  }[]
}

export default ConnectedTableProps
