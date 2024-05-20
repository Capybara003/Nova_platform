import { PayloadAction, createSlice } from '@reduxjs/toolkit'
interface Wallet {
  id?: number
  walletName: string
  walletAddress: string
  isActive: boolean
}

const initialState = {
  wallets: [] as Wallet[],
}

export const walletSlice = createSlice({
  initialState: initialState,
  name: 'Wallet Slice',
  reducers: {
    walletData: (state, action: PayloadAction<Wallet[]>) => {
      state.wallets = action.payload
    },
  },
})

export const { walletData } = walletSlice.actions
