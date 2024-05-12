import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { useSelector } from 'react-redux'

import { reducer } from './rootReducer'

const persistConfig = {
  key: 'nova',
  storage,
  blacklist: ['globalData'], // add reducer if you don't want to persist that slice.
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useDataSelector = <T extends keyof RootState>(type: T): RootState[T] => {
  return useSelector((state: RootState) => state[type])
}
