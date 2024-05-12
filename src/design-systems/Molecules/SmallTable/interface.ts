/* eslint-disable @typescript-eslint/no-explicit-any */
// TableProps.ts

import { StaticImageData } from 'next/image'

interface TableProps {
  data: {
    id: number
    name: string
    icon: string | StaticImageData
    price: string
    priceChange: string
    volume: string
    volumeChange: string
    seller: string
    sellerChange: string
    buyer: string
    buyerChange: string
    // Add other data properties here
  }[]
}

export default TableProps
