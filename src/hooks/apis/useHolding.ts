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
    const activeWallets = wallets?.filter(item => item?.isActive)
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
    userAddress: walletUpdate,
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

  // ===================== NFT Data =====================

  const {
    isLoading: isLoadingHoldingNfts,
    data: HoldingNfts,
    refetch: refetchHoldingNfts,
    isFetching: isFetchingHoldingNfts,
  } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_HOLDING_NFTS],
    () => HoldingServices.getHoldingNfts({ wallet_address: 'sei16zjp47vwu48uvjdetc3rn477d8td5dlwnsd0n4' }),
    {
      select: res => res.collections,
      refetchOnWindowFocus: false,
      // enabled: coinbase.is_connected || binance.is_connected || data.walletAddress.length > 0,
    }
  )

  const { isLoading: isLoadingIncomeNfts, data: IncomeNfts } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_INCOME_NFTS],
    () => HoldingServices.getIncomeNfts({ wallet_address: 'sei16zjp47vwu48uvjdetc3rn477d8td5dlwnsd0n4' }),
    {
      select: res => res,
      refetchOnWindowFocus: false,
    }
  )

  const { isLoading: isLoadingNftsTopGainer, data: NftsTopGainer } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_USER_HOLDING_NFTS_TOP],
    () => HoldingServices.getNftsTopGainers({ wallet_address: 'sei16zjp47vwu48uvjdetc3rn477d8td5dlwnsd0n4' }),
    {
      select: res => res,
      refetchOnWindowFocus: false,
    }
  )

  const { isLoading: isLoadingNftTradeInfo, data: NftTradeInfo } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_NFTS_TRADE_INFO],
    () => HoldingServices.getNftsTradeInfo({ wallet_address: 'sei16zjp47vwu48uvjdetc3rn477d8td5dlwnsd0n4' }),
    {
      select: res => res,
      refetchOnWindowFocus: false,
    }
  )

  // ===================== Token Data =====================

  const {
    isLoading: isLoadingHoldingTokens,
    data: HoldingTokens,
    refetch: refetchHoldingTokens,
    isFetching: isFetchingHoldingTokens,
  } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_HOLDING_TOKENS],
    () => HoldingServices.getHoldingTokens({ wallet_address: 'sei1d649tnttdphknafag5xwz69fd55v9rllrnrt4h' }),
    {
      select: res => res,
      refetchOnWindowFocus: false,
    }
  )

  const {
    isLoading: isLoadingWallet,
    data: walletConnect,
    refetch: refetchWallet,
  } = useQuery([API_ENDPOINTS.PRIVATE.LIST], () => HoldingServices.getWalletList(token || ''), {
    select: res => res.wallet,
    refetchOnWindowFocus: false,
  })
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
    isLoadingHoldingNfts,
    HoldingNfts,
    postAssetDetails,
    isLoadingIncomeNfts,
    IncomeNfts,
    refetchHoldingNfts,
    refetchWallet,
    walletConnect,
    isLoadingWallet,
    isFetchingHoldingNfts,
    isLoadingHoldingDetails,
    holdingDetails,
    isLoadingSoldDetails,
    soldDetails,
    HoldingGraph,
    isLoadingHoldingGraph,
    isLoadingNftsTopGainer,
    NftsTopGainer,
    isLoadingNftTradeInfo,
    NftTradeInfo,
    isLoadingHoldingTokens,
    HoldingTokens,
    refetchHoldingTokens,
    isFetchingHoldingTokens,
  }
}
