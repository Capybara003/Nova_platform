import { useQuery } from 'react-query'

import TaxesServices from 'api-services/TaxesServices'
import { API_ENDPOINTS } from 'utils/api-integration'

export const useTaxes = () => {
  const {
    isLoading: isLoadingTaxesCapital,
    data: TaxesCapital,
    refetch: refetchTaxes,
  } = useQuery(
    // [API_ENDPOINTS.PUBLIC.GET_INCOME],
    // [API_ENDPOINTS.PUBLIC.GET_PORTFOLIO_V2],
    // [API_ENDPOINTS.PUBLIC.GET_TAXIABLE_GAIN],
    [API_ENDPOINTS.PRIVATE.GET_TAXIABLE_DETAILS],
    () => TaxesServices.getTaxesCapital(),
    {
      select: res => res,
      refetchOnWindowFocus: false,
      refetchInterval: 60000,
    }
  )

  return {
    isLoadingTaxesCapital,
    TaxesCapital,
    refetchTaxes,
  }
}
