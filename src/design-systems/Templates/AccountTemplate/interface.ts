/* eslint-disable @typescript-eslint/no-explicit-any */
export interface profileBlock {
  email?: string
  userName?: string
  profilePic?: any
  emailVerified?: boolean
  token?: string
  id?: number
}
export interface AccountTempProps {
  setLoading: (value: boolean) => void
  loading: boolean
}

export interface UserBlock {
  userData: profileBlock
}
