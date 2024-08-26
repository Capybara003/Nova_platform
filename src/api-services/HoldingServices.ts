/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CoreAPIService from './CoreAPIService'
import CoreNextAPIService from './CoreNextAPIService'

import { AssetsDetailsBlock } from 'design-systems/Templates/HoldingPageTemplate/interface'
import { API_ENDPOINTS } from 'utils/api-integration'
class HoldingServices {
  getHoldingNfts = async (data: { wallet_addresses: string[] }) => {
    return await Promise.all(data.wallet_addresses.map(address => {
      return CoreAPIService.get<any>(
        `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_HOLDING_NFTS}/${address}`
      )
    }))
  }

  getIncomeNfts = async (data: { wallet_addresses: string[] }) => {
    return await Promise.all(data.wallet_addresses.map(address => {
      return CoreAPIService.get<any>(
        `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_INCOME_NFTS}/${address}`
      )
    }))
  }

  getNftsTopGainers = async (data: { wallet_addresses: string[] }) => {
    return await Promise.all(data.wallet_addresses.map(address => {
      return CoreAPIService.get<any>(
        `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_USER_HOLDING_NFTS_TOP}/${address}`
      )
    }))
  }

  getNftsTradeInfo = async (data: { wallet_addresses: string[] }) => {
    return await Promise.all(data.wallet_addresses.map(address => {
      return CoreAPIService.get<any>(
        `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_NFTS_TRADE_INFO}/${address}`
      )
    }))
  }

  getHoldingTokens = async (data: { wallet_addresses: string[] }) => {
    return await Promise.all(data.wallet_addresses.map(address => {
      return CoreAPIService.get<any>(
        `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_HOLDING_TOKENS}/${address}`
      )
    }))
  }

  getTokensTopGainers = async (data: { wallet_addresses: string[] }) => {
    return await Promise.all(data.wallet_addresses.map(address => {
      return CoreAPIService.get<any>(
        `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_USER_HOLDING_TOKENS_TOP}/${address}`
      )
    }))
  }

  getTokensTradeInfo = async (data: { wallet_addresses: string[] }) => {
    return await Promise.all(data.wallet_addresses.map(address => {
      return CoreAPIService.get<any>(
        `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_TOKENS_TRADE_INFO}/${address}`
      )
    }))
  }

  postAssetDetails = async (AssetsDetails: AssetsDetailsBlock) => {
    return CoreAPIService.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.POST_ASSETS_DETAILS}`,
      AssetsDetails
    )
  }
  getPortFolio = async () => {
    return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_PORTFOLIO}`)
  }

  getWalletList = async (userId: string) => {
    // return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_INCOME}`)
    return CoreNextAPIService.get<any>(`${process.env.NEXT_PUBLIC_NEXT_API_URL}${API_ENDPOINTS.PRIVATE.LIST}/${userId}`)
  }
  getUserPortfolio = async () => {
    return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GET_USER_PORFOLIO}`)
  }
  getHoldingsAndGrains = async () => {
    return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GET_HOLDING_AND_GRAIN}`)
  }
  getholdingGraph = async () => {
    return CoreAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVATE.GET_HOLDING_GRAPH}`)
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new HoldingServices()
