/* eslint-disable @typescript-eslint/no-explicit-any */

import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS } from 'utils/api-integration'

class TaxesServices {
  getTaxesCapital = async () => {
    // return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_INCOME}`)
    // return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_PORTFOLIO_V2}`)
    return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GET_TAXIABLE_DETAILS}`)
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new TaxesServices()
