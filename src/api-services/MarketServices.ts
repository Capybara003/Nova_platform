/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS } from 'utils/api-integration'

class MarketServices {
  getMarket = async () => {
    return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GET_MARKET}`)
  }
  getTree = async () => {
    return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GET_TREE_MAP}`)
  }
}
export default new MarketServices()
