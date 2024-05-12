import { IMG } from 'assets/images'

export const tradesTableDataKey = (type: string) => {
  return [
    {
      title: 'Asset',
      isSortable: false,
      isInfo: false,
      key: 'asset',
      width: '15%',
    },
    {
      title: 'Rarity',
      isSortable: true,
      isInfo: false,
      key: 'rarity',
      width: '5%',
    },
    {
      title: 'Listed Price',
      isSortable: true,
      isInfo: false,
      key: 'listedPrice',
      width: '10%',
    },
    {
      title: 'Above Floor',
      isSortable: true,
      isInfo: true,
      key: 'aboveFloor',
      width: '10%',
    },
    {
      title: 'Trait Floor',
      isSortable: true,
      isInfo: true,
      key: 'traitFloor',
      width: '5%',
    },
    {
      title: 'Buyer Potential Gains',
      isSortable: true,
      isInfo: true,
      key: 'buyerPotentialGains',
      width: '10%',
    },
    {
      title: 'Seller Buy Price',
      isSortable: true,
      isInfo: false,
      key: 'sellerBuyPrice',
      width: '10%',
    },
    {
      title: type === 'listings' ? 'Est. Fees' : 'Paid Fees',
      isSortable: true,
      isInfo: false,
      key: 'estOrPaidFees',
      width: '10%',
    },
    {
      title: 'Seller Unrealized Gains',
      isSortable: true,
      isInfo: false,
      key: 'sellerUnrealizedGains',
      width: '10%',
    },
    {
      title: 'Holding Time',
      isSortable: true,
      isInfo: false,
      key: 'holdingTime',
      width: '5%',
    },
    {
      title: 'Seller',
      isSortable: true,
      isInfo: false,
      key: 'seller',
      width: '5%',
    },
    {
      title: 'Link',
      isSortable: true,
      isInfo: false,
      key: 'link',
      width: '5%',
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
    asset: 'Alvin Wilson',
    rarity: 4.656,
    listedPrice: 4.656,
    price: 4.656,
    aboveFloor: 10,
    traitFloor: 4.656,
    buyerPotentialGains: {
      value: 4.656,
      gainOrLoss: -38.5,
    },
    sellerBuyPrice: 245,
    estOrPaidFees: 24.12,
    sellerUnrealizedGains: {
      value: 4.656,
      gainOrLoss: 18.5,
    },
    holdingTime: 350,
    seller: {
      name: '$Pilzkopf',
      thumbnail: IMG.sellerImage,
    },
    link: 'Link 1',
    thumbnail: IMG.monkey,
  },
  {
    asset: 'Ella Torres',
    rarity: 3.245,
    listedPrice: 3.245,
    price: 3.245,
    aboveFloor: 5,
    traitFloor: 3.245,
    buyerPotentialGains: {
      value: 3.245,
      gainOrLoss: +20.2,
    },
    sellerBuyPrice: 180,
    estOrPaidFees: 18.5,
    sellerUnrealizedGains: {
      value: 3.245,
      gainOrLoss: -10.8,
    },
    holdingTime: 280,
    seller: {
      name: '$ArtLover123',
      thumbnail: IMG.sellerImage,
    },
    link: 'Link 2',
    thumbnail: IMG.monkey,
  },
  {
    asset: 'John Doe',
    rarity: 2.987,
    listedPrice: 2.987,
    price: 2.987,
    aboveFloor: -8,
    traitFloor: 2.987,
    buyerPotentialGains: {
      value: 2.987,
      gainOrLoss: +15.0,
    },
    sellerBuyPrice: 200,
    estOrPaidFees: 20.0,
    sellerUnrealizedGains: {
      value: 2.987,
      gainOrLoss: -8.2,
    },
    holdingTime: 300,
    seller: {
      name: '$CryptoArtFan',
      thumbnail: IMG.sellerImage,
    },
    link: 'Link 3',
    thumbnail: IMG.monkey,
  },
  {
    asset: 'Sophia Garcia',
    rarity: 5.123,
    listedPrice: 5.123,
    price: 5.123,
    aboveFloor: 12,
    traitFloor: 5.123,
    buyerPotentialGains: {
      value: 5.123,
      gainOrLoss: +42.1,
    },
    sellerBuyPrice: 280,
    estOrPaidFees: 28.5,
    sellerUnrealizedGains: {
      value: 5.123,
      gainOrLoss: -20.5,
    },
    holdingTime: 400,
    seller: {
      name: '$ArtEnthusiast22',
      thumbnail: IMG.sellerImage,
    },
    link: 'Link 4',
    thumbnail: IMG.monkey,
  },
  {
    asset: 'Olivia Smith',
    rarity: 3.987,
    listedPrice: 3.987,
    price: 3.987,
    aboveFloor: 6,
    traitFloor: 3.987,
    buyerPotentialGains: {
      value: 3.987,
      gainOrLoss: +23.8,
    },
    sellerBuyPrice: 220,
    estOrPaidFees: 22.8,
    sellerUnrealizedGains: {
      value: 3.987,
      gainOrLoss: -12.0,
    },
    holdingTime: 320,
    seller: {
      name: '$ArtInvestor1',
      thumbnail: IMG.sellerImage,
    },
    link: 'Link 5',
    thumbnail: IMG.monkey,
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
