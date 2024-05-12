/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
import { useMutation, useQuery } from 'react-query'
import { useMemo, useState } from 'react'

import HoldingServices from 'api-services/HoldingServices'
import { API_ENDPOINTS } from 'utils/api-integration'
import { AssetsDetailsBlock } from 'design-systems/Templates/HoldingPageTemplate/interface'
import { useDataSelector } from 'lib/redux/store'
import { removeEmptyKey } from 'utils/function'
type tabType = { [key: number]: string }
const tabs: tabType = {
  0: 'all',
  1: 'nft',
  2: 'token',
}
export const useHolding = () => {
  const { binance, coinbase } = useDataSelector('exchange')
  const { data: globalData } = useDataSelector('globalData')
  const { wallets } = useDataSelector('walletSlice')
  const [walletUpdate, setWalletUpdate] = useState<string[]>([])
  useMemo(() => {
    const activeWallets = wallets?.filter(item => item.isActive)
    setWalletUpdate(activeWallets?.map(item => item?.walletAddress) || [])
  }, [wallets])

  const { tabName } = useDataSelector('toggle')

  const Local = localStorage.getItem('id')
  const [token, setToken] = useState(Local)

  const postAssetDetailsMutation = useMutation((AssetsDetails: AssetsDetailsBlock) => {
    return HoldingServices.postAssetDetails(AssetsDetails)
  })
  const postAssetDetails = async (AssetsDetails: any) => {
    try {
      const response = await postAssetDetailsMutation.mutateAsync(AssetsDetails)
      return response
    } catch (error) {
      throw error
    }
  }

  const data = removeEmptyKey({
    BINANCE_API_KEY: binance.api_key,
    BINANCE_SECRET_KEY: binance.api_secret,
    COINBASE_API_KEY: coinbase.api_key,
    COINBASE_SECRET_KEY: coinbase.api_secret,
    marketplace: coinbase.api_key ? 'coinbase' : binance.api_key ? 'binance' : '',
    userId: token,
    walletAddress: walletUpdate,
    search: globalData.search,
    tab: tabs[tabName],
    // wallets?.filter(walletItem => walletItem.isActive)?.map(walletItem => walletItem.walletAddress) || [],
    type:
      tabName !== 2
        ? tabs[tabName]
        : binance.api_key && coinbase.api_key
        ? 'allToken'
        : binance.api_key
        ? 'binanceToken'
        : coinbase.api_key
        ? 'coinbaseToken'
        : 'allToken',
  })

  const {
    isLoading: isLoadingHolding,
    data: Holding,
    refetch: refetchHolding,
    isFetching: isFetchingHolding,
  } = useQuery(
    [data],
    () => HoldingServices.getHolding(data),

    {
      // select: res => res,
      refetchOnWindowFocus: false,
      // enabled: coinbase.is_connected || binance.is_connected || data.walletAddress.length > 0,
    }
  )

  const { isLoading: isLoadingIncome, data: Income } = useQuery([API_ENDPOINTS.PUBLIC.GET_PORTFOLIO_V2], () =>
    HoldingServices.getIncome({ type: 'nft' })
  )
  const { isLoading: isLoadingWallet, data: walletConnect } = useQuery(
    [API_ENDPOINTS.PRIVATE.LIST],
    () => HoldingServices.getWalletList(),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )
  const { isLoading: isLoadingHoldingDetails, data: holdingDetails } = useQuery(
    [API_ENDPOINTS.PRIVATE.GET_USER_PORFOLIO],
    () => HoldingServices.getUserPortfolio(),
    {
      select: res => res,
      refetchOnWindowFocus: false,
    }
  )
  const { isLoading: isLoadingSoldDetails, data: soldDetails } = useQuery(
    [API_ENDPOINTS.PRIVATE.GET_HOLDING_AND_GRAIN],
    () => HoldingServices.getHoldingsAndGrains(),
    {
      select: res => res,
      refetchOnWindowFocus: false,
    }
  )

  const { isLoading: isLoadingHoldingGraph, data: HoldingGraph } = useQuery(
    [API_ENDPOINTS.PRIVATE.GET_HOLDING_GRAPH],
    () => HoldingServices.getholdingGraph(),
    {
      select: res => res.holdingDetails,
      refetchOnWindowFocus: false,
    }
  )

  return {
    isLoadingAssetDetails: postAssetDetailsMutation.isLoading,
    isLoadingHolding,
    Holding,
    postAssetDetails,
    isLoadingIncome,
    Income,
    refetchHolding,
    walletConnect,
    isLoadingWallet,
    isFetchingHolding,
    isLoadingHoldingDetails,
    holdingDetails,
    isLoadingSoldDetails,
    soldDetails,
    HoldingGraph,
    isLoadingHoldingGraph,
  }
}
