/* eslint-disable @typescript-eslint/no-explicit-any */
import CoreAPIService from './CoreAPIService'

import { profileBlock } from 'design-systems/Templates/AccountTemplate/interface'
import { API_ENDPOINTS } from 'utils/api-integration'
class UserServices {
  getUser = async (ID: string | null) => {
    return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GET_USER}${ID}`)
  }
  postUserName = async (userDetails: profileBlock) => {
    return CoreAPIService.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.POST_USER_NAME}`,
      userDetails
    )
  }
  passwordReset = async (emailData: profileBlock) => {
    return CoreAPIService.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.RESET_PASSWORD}`,
      emailData
    )
  }
  profilePicUpdate = async (Details: FormData) => {
    return CoreAPIService.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.UPDATE_PROFILE}`,
      Details
    )
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserServices()
