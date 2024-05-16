/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react'
import { TETooltip } from 'tw-elements-react'

import { TableSkeletan } from '../Skeletan/TableSkeletan'

import { HoldingDetails } from './interface'
import HoldingDetailsSection from './HoldingDetailsSection'

import Line from 'design-systems/Atoms/Line'
import Typography from 'design-systems/Atoms/Typography'
import { useHolding } from 'hooks/apis/useHolding'
import { useDataSelector } from 'lib/redux/store'

export const convertToSEI = (value?: number, SEI?: number): number | undefined =>
  value !== undefined && SEI !== undefined ? value / SEI : undefined

const HoldingDataGroup: React.FC = () => {
  const { holdingDetails, isLoadingHoldingDetails } = useHolding()
  const [holdingDetail, setHoldingDetails] = useState<any>([])
  const { crypto } = useDataSelector('toggle')
  const SEI = crypto.value

  const holdingData: HoldingDetails | undefined = holdingDetail?.holdingDetails
  const soldDetails = holdingDetail?.soldDetails
  const BuyPrice = convertToSEI(holdingData?.buyPrice, SEI)
  const EstFees = convertToSEI(holdingData?.estFees, SEI)
  const EstValue = convertToSEI(holdingData?.estValue, SEI)
  const UnrealizedGains = convertToSEI(holdingData?.unrealizedGains, SEI)
  const Percentage = convertToSEI(holdingData?.percentage, SEI)
  const SolidBuyPrice = convertToSEI(soldDetails?.buyPrice, SEI)
  const SolidEstFees = convertToSEI(soldDetails?.estFees, SEI)
  const SellPrice = convertToSEI(soldDetails?.sellPrice, SEI)
  const SolidRealizedGains = convertToSEI(soldDetails?.realizedGains, SEI)
  const SolidPercentage = convertToSEI(soldDetails?.percentage, SEI)

  useMemo(() => holdingDetails && setHoldingDetails(holdingDetails), [holdingDetails, isLoadingHoldingDetails])

  return (
    <div className="flex h-full w-full flex-col content-between rounded-[12px] bg-blackCardBg p-2 text-[#DBDBDB] md:!rounded-md md:!p-[22px] lg:col-span-2 ">
      {!isLoadingHoldingDetails ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-Lexend !font-medium">
            <Typography className="!font-medium" size="lg">
              Holding Assets:
            </Typography>
            <Typography className="!font-medium" size="lg">
              {holdingDetail?.holdingDetails ? holdingDetail?.holdingDetails?.holdingAsset : '--'}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 font-Inter font-normal">
            <HoldingDetailsSection
              crypto={crypto}
              title="Buy Price"
              tooltipTitle={`${BuyPrice} ${crypto.symbol}`}
              value={BuyPrice}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Est. Fees"
              tooltipTitle={`${EstFees} ${crypto.symbol}`}
              value={EstFees}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Est. Value:"
              tooltipTitle={`${EstValue} ${crypto.symbol}`}
              value={EstValue}
            />
            <div className="flex justify-between">
              <Typography size="body">Unrealized Gains:</Typography>
              <Typography
                className={`text-right ${
                  holdingDetail?.holdingDetails?.percentage < 0 ? ' text-warning-300' : 'text-green'
                } `}
                size="body"
              >
                <TETooltip title={`${UnrealizedGains} ${crypto.symbol}`}>
                  <Typography>
                    {holdingDetail?.holdingDetails ? (
                      <>
                        {UnrealizedGains?.toFixed(3)} {crypto.symbol}
                      </>
                    ) : (
                      '--'
                    )}
                  </Typography>
                </TETooltip>
                <Typography className="text-[11px]">
                  <TETooltip title={`${Percentage}%`}>
                    {holdingDetail?.holdingDetails ? (
                      <>
                        {' '}
                        {holdingDetail?.holdingDetails?.percentage === null ? '0.00%' : `${Percentage?.toFixed(2)}%`}
                      </>
                    ) : (
                      '--'
                    )}
                  </TETooltip>
                </Typography>
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <TableSkeletan limit={5} />
      )}
      <Line />
      {!isLoadingHoldingDetails ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-Lexend font-medium">
            <Typography className="!font-medium" size="lg">
              Sold Assets:
            </Typography>
            <Typography className="!font-medium" size="lg">
              {holdingDetail?.soldDetails ? <>{holdingDetail?.soldDetails?.soldAsset}</> : '--'}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 font-Inter font-normal">
            <HoldingDetailsSection
              crypto={crypto}
              title="Buy Price"
              tooltipTitle={`${SolidBuyPrice} ${crypto.symbol}`}
              value={SolidBuyPrice}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Paid Fees"
              tooltipTitle={`${SolidEstFees} ${crypto.symbol}`}
              value={SolidEstFees}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Sold Price"
              tooltipTitle={`${SellPrice} ${crypto.symbol}`}
              value={SellPrice}
            />

            <div className="flex justify-between">
              <Typography size="body">Realized Gains:</Typography>
              <Typography
                className={`text-right ${
                  holdingDetail?.soldDetails?.percentage < 0 ? ' text-warning-300' : 'text-green'
                } `}
                size="body"
              >
                <TETooltip title={`${SolidRealizedGains} ${crypto.symbol}`}>
                  <Typography>
                    {holdingDetail?.soldDetails ? (
                      <>
                        {SolidRealizedGains?.toFixed(3)} {crypto.symbol}
                      </>
                    ) : (
                      '--'
                    )}{' '}
                  </Typography>
                </TETooltip>
                <Typography className="text-[11px]">
                  <TETooltip title={`${SolidPercentage}%`}>
                    {holdingDetail?.soldDetails ? (
                      <>
                        {holdingDetail?.soldDetails?.percentage === null ? '0.00%' : `${SolidPercentage?.toFixed(2)}%`}
                      </>
                    ) : (
                      '--'
                    )}
                  </TETooltip>
                </Typography>
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <TableSkeletan limit={5} />
      )}
      <Line />
      {!isLoadingHoldingDetails ? (
        <div className="flex flex-col gap-4 text-left">
          <div className="flex justify-between font-Lexend font-medium">
            <Typography className="!font-medium" size="lg">
              Total Assets:
            </Typography>
            <Typography className="!font-medium" size="lg">
              {holdingDetail?.holdingDetails ? <>{holdingDetail?.holdingDetails?.holdingAsset}</> : '--'}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 font-Inter font-normal">
            <HoldingDetailsSection
              crypto={crypto}
              title="Buy Price"
              tooltipTitle={`${BuyPrice} ${crypto.symbol}`}
              value={BuyPrice}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Paid Fees + Est. Fees"
              tooltipTitle={`${EstFees} ${crypto.symbol}`}
              value={EstFees}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Income + Est. Value:"
              tooltipTitle={`${EstValue} ${crypto.symbol}`}
              value={EstValue}
            />
            <div className="flex justify-between">
              <Typography size="body">Total Profit:</Typography>
              <Typography
                className={`text-right ${
                  holdingDetail?.holdingDetails?.percentage < 0 ? ' text-warning-300' : 'text-green'
                } `}
                size="body"
              >
                <TETooltip title={`${UnrealizedGains} ${crypto.symbol}`}>
                  <Typography>
                    {holdingDetail?.holdingDetails ? (
                      <>
                        {UnrealizedGains?.toFixed(2)} {crypto.symbol}
                      </>
                    ) : (
                      '--'
                    )}
                  </Typography>
                </TETooltip>
                <Typography className="text-[11px]">
                  <TETooltip title={`${Percentage}%`}>
                    {holdingDetail?.holdingDetails ? (
                      <>
                        {' '}
                        {holdingDetail?.holdingDetails?.percentage === null ? '0.00%' : `${Percentage?.toFixed(3)}%`}
                      </>
                    ) : (
                      '--'
                    )}
                  </TETooltip>
                </Typography>
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <TableSkeletan limit={5} />
      )}
    </div>
  )
}

export default HoldingDataGroup
