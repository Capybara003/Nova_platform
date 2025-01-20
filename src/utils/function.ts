/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios'

type objType = { [key: string]: any }
export function getNestedValue(obj: any, path: string) {
  const keys: string[] = path.split('.')
  let result: any = obj

  for (const key of keys) {
    if (result && Object.prototype.hasOwnProperty.call(result, key)) {
      result = result[key]
    } else {
      return undefined
    }
  }
  return result
}

export const removeEmptyKey = (data: objType): objType => {
  const params = { ...data }
  Object.keys(params).forEach(
    key => (params[key] === undefined || params[key] === '' || params[key] === 0) && delete params[key]
  )
  return params
}

export const formatAddress = (address: string): string => {
  const firstPart = address.slice(0, 6)
  const lastPart = address.slice(-4)

  // Return the formatted address
  return `${firstPart}...${lastPart}`
}

export const getCollectionDetail = async (collectionAddress: string) => {
  if (!collectionAddress) {
    return
  }
  const collectionDetail = await axios.get(`https://api.pallet.exchange/api/v2/nfts/${collectionAddress}/details`)
  if (collectionDetail.status === 200) {
    return collectionDetail.data
  }
  return
}
