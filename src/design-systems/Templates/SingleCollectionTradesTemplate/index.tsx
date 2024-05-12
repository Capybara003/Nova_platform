/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useSearchParams } from 'next/navigation'
import React, { useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import NftChart from './NftChart'
import NftChatBox from './NftChatBox'
import NftInfoCard from './NftInfoCard'
import NftTabSection from './NftTabSection'

import { useHolding } from 'hooks/apis/useHolding'

const SingleCollectionTradesTemplate: React.FC = () => {
  const { isLoadingAssetDetails, postAssetDetails } = useHolding()
  const [holdingData, setHoldingData] = useState<any>(null)
  const searchParams = useSearchParams()
  const asset_name = searchParams.get('asset_name')
  const policy = searchParams.get('policy')
  const current_value = searchParams.get('current_value')

  const handleAssetDetails = async () => {
    try {
      const result = await postAssetDetails({ asset_name, policy, current_value })
      if (result) {
        setHoldingData(result)
      }
      // Handle success
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred', {
        position: toast.POSITION.TOP_RIGHT,
      })
      console.error(error.response?.data?.message)
    }
  }

  useMemo(() => {
    handleAssetDetails()
  }, [asset_name, policy, current_value])

  return (
    <>
      {/* {!isLoadingAssetDetails ? ( */}
      <div className="flex flex-col gap-[22px]">
        <div className="grid w-full grid-cols-12 justify-center gap-[20px]">
          <div className="col-span-12 h-full xm:col-span-4 xlg:col-span-3">
            <NftInfoCard holdingData={holdingData} isLoadingAssetDetails={isLoadingAssetDetails} />
          </div>
          <div className="col-span-12 hidden h-full xm:col-span-4 xm:!block xlg:col-span-6">
            <NftChart />
          </div>
          <div className="col-span-12 hidden xm:col-span-4 xm:!block xlg:col-span-3">
            <NftChatBox innerdiv={'!max-h-[480px]'} />
          </div>
        </div>

        <NftTabSection />
      </div>
      {/* ) : (
        <Spinner />
      )} */}
    </>
  )
}

export default SingleCollectionTradesTemplate
