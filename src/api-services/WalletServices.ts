/* eslint-disable @typescript-eslint/no-explicit-any */
import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS } from 'utils/api-integration'
class WalletServices {
  postWalletConnect = async (Details: any) => {
    return CoreAPIService.post<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.POST_WALLET}`, Details)
  }
  postNonce = async (Details: any) => {
    return CoreAPIService.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GENERATE_NONCE}`,
      Details
    )
  }
  postVerifySignature = async (verifyDetails: any) => {
    return CoreAPIService.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.VERIFY_SIGNATURE}`,
      verifyDetails
    )
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new WalletServices()
