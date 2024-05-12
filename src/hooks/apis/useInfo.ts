/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
import { useMutation } from 'react-query'

import UserServices from 'api-services/UserServices'
import { profileBlock } from 'design-systems/Templates/AccountTemplate/interface'

export const useInfo = () => {
  const postUserNameMutation = useMutation((userDetails: profileBlock) => {
    return UserServices.postUserName(userDetails)
  })
  const passwordMutation = useMutation((emailData: profileBlock) => {
    return UserServices.passwordReset(emailData)
  })
  const profilePicMutation = useMutation((Details: FormData) => {
    return UserServices.profilePicUpdate(Details)
  })
  const postUserName = async (userDetails: any) => {
    try {
      const response = await postUserNameMutation.mutateAsync(userDetails)
      return response
    } catch (error) {
      throw error
    }
  }
  const password = async (emailData: any) => {
    try {
      const response = await passwordMutation.mutateAsync(emailData)
      return response
    } catch (error) {
      throw error
    }
  }
  const profilePic = async (Details: any) => {
    try {
      const response = await profilePicMutation.mutateAsync(Details)
      return response
    } catch (error) {
      throw error
    }
  }

  return {
    isLoadingUserName: postUserNameMutation.isLoading,
    postUserName,
    password,
    profilePic,
    error: postUserNameMutation.error,
  }
}
