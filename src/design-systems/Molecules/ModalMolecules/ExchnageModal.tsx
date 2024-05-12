/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { SiBinance } from 'react-icons/si'
import { TbBrandCoinbase } from 'react-icons/tb'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ExchangeSettingType } from '../HoldingMolecules/interface'

import exchangeApiInstance from 'api-services/ExchangeApiService'
import Button from 'design-systems/Atoms/Button'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'
import { Model } from 'design-systems/Atoms/Model'
import Typography from 'design-systems/Atoms/Typography'
import {
  connectToBinance,
  connectToCoinbase,
  disConnectToBinance,
  disConnectToCoinbase,
  updateBinanceData,
  updateCoinbaseData,
} from 'lib/redux/slices/exchangeSlice'
import { useDataSelector } from 'lib/redux/store'

interface ExchangeModalProps {
  setShow: () => void
  showModal: boolean
  exchangeSetting: ExchangeSettingType
}
const ExchangeModal: React.FC<ExchangeModalProps> = ({ showModal, setShow, exchangeSetting }) => {
  const dispatch = useDispatch()
  const { binance, coinbase } = useDataSelector('exchange')

  const binanceGetTokenMutation = useMutation({
    mutationFn: ({ api_key, api_secret }: { api_key: string; api_secret: string }) =>
      exchangeApiInstance.getBinanceToken(api_key, api_secret),

    onError: error => {
      console.error(error)
      toast.error('Something went wrong')
    },
  })

  const coinbaseGetTokenMutation = useMutation({
    mutationFn: ({ api_key, api_secret }: { api_key: string; api_secret: string }) =>
      exchangeApiInstance.getCoinbaseToken(api_key, api_secret),

    onError: error => {
      console.error(error)
      toast.error('Something went wrong')
    },
  })

  const exchangeDataFormik = useFormik({
    initialValues: {
      binance_api_key: '',
      binance_api_secret: '',
    },

    validationSchema: Yup.object({
      binance_api_key: Yup.string().when('is not required', {
        is: () => exchangeSetting.isBinance,
        then: schema => schema.required(),
        otherwise: schema => schema.notRequired(),
      }),
      binance_api_secret: Yup.string().when('is not required', {
        is: () => exchangeSetting.isBinance,
        then: schema => schema.required(),
        otherwise: schema => schema.notRequired(),
      }),
    }),

    onSubmit: values => {
      binanceGetTokenMutation.mutate(
        {
          api_key: values.binance_api_key,
          api_secret: values.binance_api_secret,
        },
        {
          onSuccess: (data: any) => {
            dispatch(
              connectToBinance({
                api_key: values.binance_api_key,
                api_secret: values.binance_api_secret,
                data: data.data,
              })
            )

            toast.success('Connected successfully')
            setShow()
          },
        }
      )
    },
  })

  const exchangeCoinbaseFormik = useFormik({
    initialValues: {
      coinbase_api_key: '',
      coinbase_api_secret: '',
    },

    validationSchema: Yup.object({
      coinbase_api_key: Yup.string().when('is not required', {
        is: () => exchangeSetting.isCoinbase,
        then: schema => schema.required(),
        otherwise: schema => schema.notRequired(),
      }),
      coinbase_api_secret: Yup.string().when('is not required', {
        is: () => exchangeSetting.isCoinbase,
        then: schema => schema.required(),
        otherwise: schema => schema.notRequired(),
      }),
    }),

    onSubmit: values => {
      coinbaseGetTokenMutation.mutate(
        {
          api_key: values.coinbase_api_key,
          api_secret: values.coinbase_api_secret,
        },
        {
          onSuccess: (data: any) => {
            dispatch(
              connectToCoinbase({
                api_key: values.coinbase_api_key,
                api_secret: values.coinbase_api_secret,
                data: data.data,
              })
            )

            toast.success('Connected successfully')
            setShow()
          },
        }
      )
    },
  })

  useEffect(() => {
    if (binance.is_connected) {
      binanceGetTokenMutation.mutate(
        {
          api_key: binance.api_key,
          api_secret: binance.api_secret,
        },
        {
          onSuccess: (data: any) => {
            dispatch(updateBinanceData(data.data))
          },
        }
      )
    }

    if (coinbase.is_connected) {
      coinbaseGetTokenMutation.mutate(
        {
          api_key: coinbase.api_key,
          api_secret: coinbase.api_secret,
        },
        {
          onSuccess: (data: any) => {
            dispatch(updateCoinbaseData(data.data))
          },
        }
      )
    }
  }, [])

  return (
    <Model heading="Connect Exchange" setShow={setShow} showModal={showModal}>
      <div className="flex min-w-[457px] flex-col gap-4">
        {exchangeSetting.isBinance && (
          <div className="mt-4">
            <Typography className="flex items-center justify-start gap-2 font-normal" size="body">
              <SiBinance /> Binance Exchange
            </Typography>

            {!binance.is_connected && (
              <>
                <div className="mt-2">
                  <InputAtom
                    className="w-full rounded bg-[#131320] px-2 py-2 focus:outline-none"
                    name="binance_api_key"
                    placeholder="Api Key"
                    value={exchangeDataFormik.values.binance_api_key}
                    onBlur={exchangeDataFormik.handleBlur}
                    onChange={exchangeDataFormik.handleChange}
                  />
                </div>

                <div className="mt-2">
                  <InputAtom
                    className="w-full rounded bg-[#131320] px-2 py-2 focus:outline-none"
                    name="binance_api_secret"
                    placeholder="Api Secret"
                    value={exchangeDataFormik.values.binance_api_secret}
                    onBlur={exchangeDataFormik.handleBlur}
                    onChange={exchangeDataFormik.handleChange}
                  />
                </div>
              </>
            )}

            <div>
              {binance.is_connected ? (
                <Button
                  className="mt-3 w-full rounded-[6px] bg-gradient-pink px-[3px] pb-[2px] pt-[3px]"
                  onClick={() => dispatch(disConnectToBinance())}
                >
                  <div className="w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[10px] font-Lexend">
                    <Typography size="md">Disconnect</Typography>
                  </div>
                </Button>
              ) : (
                <Button
                  className="mt-3 w-full rounded-[6px] bg-gradient-pink px-[3px] pb-[2px] pt-[3px]"
                  disabled={binanceGetTokenMutation.isLoading}
                  onClick={exchangeDataFormik.handleSubmit}
                >
                  <div className="w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[10px] font-Lexend">
                    <Typography size="md">
                      {binanceGetTokenMutation.isLoading ? 'Connecting...' : 'Connect Binance'}
                    </Typography>
                  </div>
                </Button>
              )}
            </div>
          </div>
        )}

        {exchangeSetting.isCoinbase && (
          <div className="mt-4">
            <Typography className="flex items-center justify-start gap-2 font-normal" size="body">
              <TbBrandCoinbase /> Coinbase Exchange
            </Typography>

            {!coinbase.is_connected && (
              <>
                <div className="mt-2">
                  <InputAtom
                    className="w-full rounded bg-[#131320] px-2 py-2 focus:outline-none"
                    name="coinbase_api_key"
                    placeholder="Api Key"
                    value={exchangeCoinbaseFormik.values.coinbase_api_key}
                    onBlur={exchangeCoinbaseFormik.handleBlur}
                    onChange={exchangeCoinbaseFormik.handleChange}
                  />
                </div>

                <div className="mt-2">
                  <InputAtom
                    className="w-full rounded bg-[#131320] px-2 py-2 focus:outline-none"
                    name="coinbase_api_secret"
                    placeholder="Api Secret"
                    value={exchangeCoinbaseFormik.values.coinbase_api_secret}
                    onBlur={exchangeCoinbaseFormik.handleBlur}
                    onChange={exchangeCoinbaseFormik.handleChange}
                  />
                </div>
              </>
            )}

            <div>
              {coinbase.is_connected ? (
                <Button
                  className="mt-3 w-full rounded-[6px] bg-gradient-pink px-[3px] pb-[2px] pt-[3px]"
                  onClick={() => dispatch(disConnectToCoinbase())}
                >
                  <div className="w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[10px] font-Lexend">
                    <Typography size="md">Disconnect</Typography>
                  </div>
                </Button>
              ) : (
                <Button
                  className="mt-3 w-full rounded-[6px] bg-gradient-pink px-[3px] pb-[2px] pt-[3px]"
                  disabled={coinbaseGetTokenMutation.isLoading}
                  onClick={exchangeCoinbaseFormik.handleSubmit}
                >
                  <div className="w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[10px] font-Lexend">
                    <Typography size="md">
                      {coinbaseGetTokenMutation.isLoading ? 'Connecting...' : 'Connect Coinbase'}
                    </Typography>
                  </div>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </Model>
  )
}

export default ExchangeModal
