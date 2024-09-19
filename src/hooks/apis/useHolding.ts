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
  // const { binance, coinbase } = useDataSelector('exchange')
  // const { data: globalData } = useDataSelector('globalData')
  const { wallets } = useDataSelector('walletSlice')
  const [activeAddresses, setActiveAddresses] = useState<string[]>([
    'sei16nsqp4myn0ary0yuckhl7mwptvedqyvfu0u8ny',
    'sei1yxrgsh2fq4vkx5qp9r9fd9w22tt7avl0f2j95a',
  ])
  // useMemo(() => {
  //   const activeWallets = wallets?.filter(item => item?.isActive)
  //   setActiveAddresses(activeWallets?.map(item => item?.walletAddress) || [])
  // }, [wallets])

  // const { tabName } = useDataSelector('toggle')

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

  // const data = removeEmptyKey({
  //   BINANCE_API_KEY: binance.api_key,
  //   BINANCE_SECRET_KEY: binance.api_secret,
  //   COINBASE_API_KEY: coinbase.api_key,
  //   COINBASE_SECRET_KEY: coinbase.api_secret,
  //   marketplace: coinbase.api_key ? 'coinbase' : binance.api_key ? 'binance' : '',
  //   userId: token,
  //   userAddress: walletUpdate,
  //   search: globalData.search,
  //   tab: tabs[tabName],
  //   wallets: wallets?.filter(walletItem => walletItem.isActive)?.map(walletItem => walletItem.walletAddress) || [],
  //   type:
  //     tabName !== 2
  //       ? tabs[tabName]
  //       : binance.api_key && coinbase.api_key
  //       ? 'allToken'
  //       : binance.api_key
  //       ? 'binanceToken'
  //       : coinbase.api_key
  //       ? 'coinbaseToken'
  //       : 'allToken',
  // })

  // ===================== NFT Data =====================

  const {
    isLoading: isLoadingHoldingNfts,
    data: HoldingNfts,
    refetch: refetchHoldingNfts,
    isFetching: isFetchingHoldingNfts,
  } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_HOLDING_NFTS],
    () => HoldingServices.getHoldingNfts({ wallet_addresses: activeAddresses }),
    {
      select: res => res.flatMap(one => (one?.result === null ? [] : one)),
      refetchOnWindowFocus: false,
      enabled: activeAddresses.length > 0,
    }
  )

  const { isLoading: isLoadingIncomeNfts, data: IncomeNfts } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_INCOME_NFTS],
    () => HoldingServices.getIncomeNfts({ wallet_addresses: activeAddresses }),
    {
      select: res => res.flatMap(one => (one?.result === null ? [] : one)),
      refetchOnWindowFocus: false,
      enabled: activeAddresses.length > 0,
    }
  )

  const { isLoading: isLoadingNftsTopGainer, data: NftsTopGainer } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_USER_HOLDING_NFTS_TOP],
    () => HoldingServices.getNftsTopGainers({ wallet_addresses: activeAddresses }),
    {
      select: res =>
        res.reduce(
          (total, one) => {
            total.topGainers = [...(total?.topGainers || []), ...(one?.topGainers || [])]
            total.topLooser = [...(total?.topLooser || []), ...(one?.topLooser || [])]
            return total
          },
          { topGainers: [], topLosser: [] }
        ),
      refetchOnWindowFocus: false,
      enabled: activeAddresses.length > 0,
    }
  )

  const { isLoading: isLoadingNftTradeInfo, data: NftTradeInfo } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_NFTS_TRADE_INFO],
    () => HoldingServices.getNftsTradeInfo({ wallet_addresses: activeAddresses }),
    {
      select: res => res,
      refetchOnWindowFocus: false,
      enabled: activeAddresses.length > 0,
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
    () => HoldingServices.getHoldingTokens({ wallet_addresses: activeAddresses }),
    {
      select: res => res.flatMap(one => (!one || one?.result === null ? [] : one)),
      refetchOnWindowFocus: false,
      enabled: activeAddresses.length > 0,
    }
  )

  const { isLoading: isLoadingTokensTopGainer, data: TokensTopGainer } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_USER_HOLDING_TOKENS_TOP],
    () => HoldingServices.getTokensTopGainers({ wallet_addresses: activeAddresses }),
    {
      select: res =>
        res.reduce(
          (total, one) => {
            total.topGainers = [...(total?.topGainers || []), ...(one?.topGainers || [])]
            total.topLooser = [...(total?.topLooser || []), ...(one?.topLooser || [])]
            return total
          },
          { topGainers: [], topLosser: [] }
        ),
      refetchOnWindowFocus: false,
      enabled: activeAddresses.length > 0,
    }
  )

  const { isLoading: isLoadingTokenTradeInfo, data: TokenTradeInfo } = useQuery(
    [API_ENDPOINTS.PUBLIC.GET_TOKENS_TRADE_INFO],
    () => HoldingServices.getTokensTradeInfo({ wallet_addresses: activeAddresses }),
    {
      select: res => res,
      refetchOnWindowFocus: false,
      enabled: activeAddresses.length > 0,
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
    isLoadingNftsTopGainer,
    NftsTopGainer,
    isLoadingNftTradeInfo,
    NftTradeInfo,
    isLoadingHoldingTokens,
    HoldingTokens,
    refetchHoldingTokens,
    isFetchingHoldingTokens,
    isLoadingTokensTopGainer,
    TokensTopGainer,
    isLoadingTokenTradeInfo,
    TokenTradeInfo,
  }
}
