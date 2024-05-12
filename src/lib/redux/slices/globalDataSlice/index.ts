/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface GlobalDataProps {
  data: Record<string, any>
}

const initialState: GlobalDataProps = {
  data: {},
}

export const globalDataSlice = createSlice({
  initialState: initialState,
  name: 'Global Data Slice',
  reducers: {
    setData: (state, action: PayloadAction<Record<string, any>>) => {
      state.data = { ...state.data, ...action.payload }
    },

    // remove data by key
    removeData: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload]
    },
  },
})

export const { setData, removeData } = globalDataSlice.actions
