/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMG } from 'assets/images'

export const tradesTableDataKey = (type: string) => {
  return [
    {
      title: 'Type',
      isSortable: false,
      isInfo: false,
      key: 'type',
      width: 100,
    },
    {
      title: 'Amount',
      isSortable: true,
      isInfo: false,
      key: 'rarity',
      width: 70,
    },
    {
      title: 'Floor',
      isSortable: true,
      isInfo: false,
      key: 'floor',
      width: 70,
    },
    {
      title: 'Buy Price',
      isSortable: true,
      isInfo: true,
      key: 'buyPrice',
      width: 70,
    },
    {
      title: 'Est. Fees/ Paid Fees',
      isSortable: true,
      isInfo: true,
      key: 'estFeesOrPaidFees',
      width: 70,
    },
    {
      title: 'Floor Volume/ Income',
      isSortable: true,
      isInfo: true,
      key: 'floorVolumeIncome',
      width: 70,
    },
    {
      title: 'Gains',
      isSortable: true,
      isInfo: false,
      key: 'gains',
      width: 70,
    },
    {
      title: 'Since Trade',
      isSortable: true,
      isInfo: false,
      key: 'sinceTrade',
      width: 100,
    },
    {
      title: 'Holding Time',
      isSortable: true,
      isInfo: false,
      key: 'holdingTime',
      width: 70,
    },
    {
      title: 'Date',
      isSortable: true,
      isInfo: false,
      key: 'date',
      width: 130,
    },
    {
      title: 'Seller',
      isSortable: true,
      isInfo: false,
      key: 'seller',
      width: 100,
    },
    {
      title: 'Link',
      isSortable: true,
      isInfo: false,
      key: 'link',
      width: 30,
    },
  ]
}

export const assetsTableDataKey = [
  {
    title: 'Asset',
    isSortable: false,
    isInfo: false,
    key: 'asset',
    // width: 170,
  },
  {
    title: 'Rarity',
    isSortable: true,
    isInfo: false,
    key: 'rarity',
    // width: 70,
  },
  {
    title: 'Buy Price',
    isSortable: true,
    isInfo: false,
    key: 'buyPrice',
    // width: 70,
  },
  {
    title: 'Est. Fees',
    isSortable: true,
    isInfo: false,
    key: 'estFees',
    // width: 100,
  },
  {
    title: 'Trait Floor',
    isSortable: true,
    isInfo: true,
    key: 'traitFloor',
    // width: 70,
  },
  {
    title: 'Unrealized Profit / Loss',
    isSortable: true,
    isInfo: false,
    key: 'unrealizedProfitOrLoss',
    // width: 130,
  },
  {
    title: 'Holding Time',
    isSortable: true,
    isInfo: false,
    key: 'holdingTime',
    // width: 70,
  },
  {
    title: 'Holder',
    isSortable: true,
    isInfo: false,
    key: 'holder',
    // width: 100,
  },
  {
    title: 'Link',
    isSortable: true,
    isInfo: false,
    key: 'link',
    // width: 30,
  },
]

export const topWhalesTotalDataKey = [
  {
    title: 'Top Whales',
    isSortable: true,
    isInfo: false,
    key: 'topWhales',
    // width: 0
  },
  {
    title: 'Value',
    isSortable: true,
    isInfo: false,
    key: 'value',
    // width: 0
  },
  {
    title: 'Holding',
    isSortable: true,
    isInfo: false,
    key: 'holding',
    // width: 0
  },
  {
    title: 'Sold',
    isSortable: true,
    isInfo: false,
    key: 'sold',
    // width: 0
  },
  {
    title: 'Buy Volume',
    isSortable: true,
    isInfo: false,
    key: 'buyVolume',
    // width: 0
  },
  {
    title: 'Paid Fees + Est. Fees',
    isSortable: true,
    isInfo: false,
    key: 'paidEstFees',
    // width: 0
  },
  {
    title: 'Income + Floor Value',
    isSortable: true,
    isInfo: false,
    key: 'incomeFloorValue',
    // width: 0
  },
  {
    title: 'Gains',
    isSortable: true,
    isInfo: false,
    key: 'gains',
    // width: 0
  },
  {
    title: 'Volume',
    isSortable: true,
    isInfo: false,
    key: 'volume',
    // width: 0
  },
  {
    title: 'Holding Time',
    isSortable: true,
    isInfo: false,
    key: 'holdingTime',
    // width: 0
  },
]

export const topWhalesHoldingAndIncomeDataKey = (type: string) => {
  return [
    {
      title: 'Top Whales',
      isSortable: true,
      isInfo: false,
      key: 'topWhales',
      // width: 0
    },
    {
      title: 'Floor Value',
      isSortable: true,
      isInfo: false,
      key: 'floorValue',
      // width: 0
    },
    {
      title: type === 'holding' ? 'Holding' : 'Sold',
      isSortable: true,
      isInfo: false,
      key: 'holdingOrSold',
      // width: 0
    },
    {
      title: 'Buy Volume',
      isSortable: true,
      isInfo: false,
      key: 'buyVolume',
      // width: 0
    },
    {
      title: type === 'holding' ? 'Est. Fees' : 'Paid Fees',
      isSortable: true,
      isInfo: false,
      key: 'paidOrEstFees',
      // width: 0
    },
    {
      title: type === 'holding' ? 'Floor Value' : 'Income',
      isSortable: true,
      isInfo: false,
      key: 'incomeOrFloorValue',
      // width: 0
    },
    {
      title: type === 'holding' ? 'Unrealized Gains' : 'Realized Gains',
      isSortable: true,
      isInfo: false,
      key: 'gains',
      // width: 0
    },
    {
      title: 'Volume',
      isSortable: true,
      isInfo: false,
      key: 'volume',
      // width: 0
    },
    {
      title: 'Holding Time',
      isSortable: true,
      isInfo: false,
      key: 'holdingTime',
      // width: 0
    },
  ]
}

// dummyData

export const tableData = [
  {
    type: 'Buy',
    rarity: 3.245,
    floor: 3.245,
    buyPrice: 3.245,
    estFeesOrPaidFees: 18.5,
    floorVolumeIncome: 5,
    gains: {
      value: 3.245,
      gainOrLoss: +20.2,
    },
    sinceTrade: 10.8,
    holdingTime: 280,
    date: '2023-12-27',
    seller: {
      name: '$Pilzkopf',
      thumbnail: IMG.sellerImage,
    },
    link: 'Link 2',
  },
]

export const assetsTableData = [
  {
    asset: 'Alvin Wilson',
    rarity: 4.656,
    buyPrice: 4.656,
    traitFloor: 4.656,
    estFees: 24.12,
    unrealizedProfitOrLoss: {
      value: 4.656,
      gainOrLoss: 18.5,
    },
    holdingTime: '28.05.23',
    holder: {
      name: '$Pilzkopf',
      thumbnail: IMG.sellerImage,
    },
    link: 'Link 1',
    thumbnail: IMG.monkey,
  },
  {
    asset: 'Ella Torres',
    rarity: 4.656,
    buyPrice: 4.656,
    traitFloor: 4.656,
    estFees: 24.12,
    unrealizedProfitOrLoss: {
      value: 4.656,
      gainOrLoss: 18.5,
    },
    holdingTime: '28.05.23',
    holder: {
      name: '$ArtInvestor1',
      thumbnail: IMG.sellerImage,
    },
    link: 'Link 1',
    thumbnail: IMG.monkey,
  },
  {
    asset: 'John Doe',
    rarity: 4.656,
    buyPrice: 4.656,
    traitFloor: 4.656,
    estFees: 24.12,
    unrealizedProfitOrLoss: {
      value: 4.656,
      gainOrLoss: 18.5,
    },
    holdingTime: '28.05.23',
    holder: {
      name: '$ArtEnthusiast22',
      thumbnail: IMG.sellerImage,
    },
    link: 'Link 1',
    thumbnail: IMG.monkey,
  },
]

export const topWhalesTotalTableData = [
  {
    title: '$Moon',
    thumbnail: IMG.clm3,
    value: {
      value: 4.656,
      gainOrLoss: 18.5,
    },
    holding: {
      value: 975,
      gainOrLoss: 28.5,
    },
    sold: {
      value: 975,
      gainOrLoss: -17.5,
    },
    buyVolume: 975.0,
    estFees: 932.0,
    paidFees: 787.0,
    income: 678.0,
    floorPrice: 787.0,
    gains: {
      value: 879.0,
      gainOrLoss: 28.5,
    },
    volume: 760,
    holdingTime: 750,
  },
]

export const topWhalesHoldingAndIncomeTableData = [
  {
    title: '$Moon',
    thumbnail: IMG.clm3,
    floorValue: {
      value: 4.656,
      gainOrLoss: 18.5,
    },
    holdingOrSold: {
      value: 975,
      gainOrLoss: 28.5,
    },
    buyVolume: 975.0,
    paidOrEstFees: 932.0,
    incomeOrFloorValue: 678.0,
    gains: {
      value: 879.0,
      gainOrLoss: 28.5,
    },
    volume: 760,
    holdingTime: 750,
  },
]

export const portfolioProfitTableKey = [
  {
    title: 'Wallet',
    isSortable: false,
    isInfo: false,
    key: 'wallet',
    // width: 100,
  },
  {
    title: 'Amount',
    isSortable: true,
    isInfo: false,
    key: 'amount',
    // width: 0
  },
  {
    title: 'Asset',
    isSortable: true,
    isInfo: false,
    key: 'asset',
    // width: 0
  },
  {
    title: 'Floor',
    isSortable: true,
    isInfo: false,
    key: 'floor',
    // width: 0
  },
  {
    title: 'Rarity',
    isSortable: true,
    isInfo: false,
    key: 'rarity',
    // width: 0
  },
  {
    title: 'Buy Price',
    isSortable: true,
    isInfo: false,
    key: 'buyPrice',
    // width: 0
  },
  {
    title: 'Paid Fees',
    isSortable: true,
    isInfo: false,
    key: 'paidFees',
    // width: 0
  },
  {
    title: 'Floor Value',
    isSortable: true,
    isInfo: true,
    key: 'floorValue',
    // width: 0
  },
  {
    title: 'Gains',
    isSortable: true,
    isInfo: true,
    key: 'gains',
    // width: 0
  },

  {
    title: 'Since Trade',
    isSortable: true,
    isInfo: false,
    key: 'sinceTrade',
    // width: 0
  },

  {
    title: 'Buyer',
    isSortable: true,
    isInfo: true,
    key: 'buyer',
    // width: 0
  },

  {
    title: 'Holding Time',
    isSortable: true,
    isInfo: false,
    key: 'holdingTime',
    // width: 0
  },
]

export const portfolioProfitTableData = [
  {
    title: '$Moon',
    thumbnail: IMG.clm3,
    amount: 1,
    asset: 932.0,
    paidFees: 787.0,
    buyPrice: 787.0,
    rarity: 678.0,
    floor: 787.0,
    gains: 879.0,
    floorValue: 787.0,
    holdingTime: 750,
    buyer: {
      name: '$ArtEnthusiast22',
      thumbnail: IMG.sellerImage,
    },
    sinceTrade: {
      value: 4.656,
      gainOrLoss: 18.5,
    },
  },
]
