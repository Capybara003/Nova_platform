import { createSlice } from '@reduxjs/toolkit'

export interface CounterSliceState {
  count: number
}

const initialState: CounterSliceState = {
  count: 0,
}

export const counterSlice = createSlice({
  initialState: initialState,
  name: 'Counter Slice',
  reducers: {
    increment: state => {
      state.count += 1
    },
  },
})
