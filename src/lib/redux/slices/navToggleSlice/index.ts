import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { cryptoProps, navToggleSliceState } from './interface'

import { ADAdata } from 'design-systems/data/data'

const initialState: navToggleSliceState = {
  tabName: 0,
  moduleName: '',
  walletLoading: false,
  crypto: {
    img: Array.isArray(crypto) && crypto.length ? crypto[0].img : ADAdata[0].img,
    label: Array.isArray(crypto) && crypto.length ? crypto[0].label : ADAdata[0].label,
    symbol: Array.isArray(crypto) && crypto.length ? crypto[0].symbol : ADAdata[0].symbol,
    value: Array.isArray(crypto) && crypto.length ? crypto[0].value : ADAdata[0].value,
  },
}

const navToggleSlice = createSlice({
  initialState: initialState,
  name: 'Nav Toggle Slice',
  reducers: {
    tabs: (state, action: PayloadAction<number>) => {
      state.tabName = action.payload
    },
    ModuleName: (state, action: PayloadAction<string>) => {
      state.moduleName = action.payload
    },
    WalletLoading: (state, action: PayloadAction<boolean>) => {
      state.walletLoading = action.payload
    },
    setCrypto: (state, action: PayloadAction<cryptoProps>) => {
      state.crypto = { ...state.crypto, ...action.payload }
    },
  },
})
export const { tabs, ModuleName, WalletLoading, setCrypto } = navToggleSlice.actions
export default navToggleSlice
