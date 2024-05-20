/* eslint-disable @typescript-eslint/no-explicit-any */
import CoreNextAPIService from './CoreNextAPIService'

import { profileBlock } from 'design-systems/Templates/AccountTemplate/interface'
import { API_ENDPOINTS } from 'utils/api-integration'
class UserServices {
  getUser = async (ID: string | null) => {
    return CoreNextAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GET_USER}${ID}`)
  }
  postUserName = async (userDetails: profileBlock) => {
    return CoreNextAPIService.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.POST_USER_NAME}`,
      userDetails
    )
  }
  passwordReset = async (emailData: profileBlock) => {
    return CoreNextAPIService.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.RESET_PASSWORD}`,
      emailData
    )
  }
  profilePicUpdate = async (Details: FormData) => {
    return CoreNextAPIService.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.UPDATE_PROFILE}`,
      Details
    )
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserServices()
