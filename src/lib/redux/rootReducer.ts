/* Instruments */

import { combineReducers } from '@reduxjs/toolkit'

import { counterSlice, exchangeSlice, globalDataSlice, walletSlice } from './slices'
import navToggleSlice from './slices/navToggleSlice'

export const reducer = combineReducers({
  counter: counterSlice.reducer,
  exchange: exchangeSlice.reducer,
  toggle: navToggleSlice.reducer,
  walletSlice: walletSlice.reducer,
  globalData: globalDataSlice.reducer,
})
