/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
import { useMutation } from 'react-query'

import WalletServices from 'api-services/WalletServices'

export const useWallet = () => {
  const postWalletCreateMutation = useMutation((WalletDetails: any) => {
    return WalletServices.postWalletConnect(WalletDetails)
  })
  const deleteWalletCreateMutation = useMutation((WalletId: any) => {
    return WalletServices.deleteWalletConnect(WalletId)
  })
  const postGenerateNonce = useMutation((WalletDetails: any) => {
    return WalletServices.postNonce(WalletDetails)
  })
  const postVerify = useMutation((verifyDetails: any) => {
    return WalletServices.postVerifySignature(verifyDetails)
  })
  const postWalletConnect = async (Details: any) => {
    try {
      const response = await postWalletCreateMutation.mutateAsync(Details)
      return response
    } catch (error) {
      throw error
    }
  }
  const deleteWalletConnect = async (id: any) => {
    try {
      const response = await deleteWalletCreateMutation.mutateAsync(id)
      return response
    } catch (error) {
      throw error
    }
  }
  const postNonceWallet = async (Details: any) => {
    try {
      const response = await postGenerateNonce.mutateAsync(Details)
      return response
    } catch (error) {
      throw error
    }
  }
  const postVerifySignature = async (Details: any) => {
    try {
      const response = await postVerify.mutateAsync(Details)
      return response
    } catch (error) {
      throw error
    }
  }
  return {
    isLoadingWalletConnect: postWalletCreateMutation.isLoading,
    postWalletConnect,
    deleteWalletConnect,
    postNonceWallet,
    postVerifySignature,
    isLoadingNounce: postGenerateNonce.isLoading,
    isLoadingVerify: postVerify.isLoading,
  }
}
