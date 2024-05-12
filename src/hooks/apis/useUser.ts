import { useQuery } from 'react-query'

import UserServices from 'api-services/UserServices'
import { API_ENDPOINTS } from 'utils/api-integration'

export const useUser = (ID: string | null, hasToken: string | null) => {
  const { isLoading: isLoadingUser, data: User } = useQuery(
    [API_ENDPOINTS.PRIVATE.GET_USER],
    () => UserServices.getUser(ID),
    {
      select: res => res.user,
      enabled: Boolean(hasToken),
      refetchOnWindowFocus: false,
    }
  )
  return {
    isLoadingUser,
    User,
  }
}
