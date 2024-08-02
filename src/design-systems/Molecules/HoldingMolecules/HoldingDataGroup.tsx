/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { TETooltip } from 'tw-elements-react'

import { TableSkeletan } from '../Skeletan/TableSkeletan'

import HoldingDetailsSection from './HoldingDetailsSection'

import Line from 'design-systems/Atoms/Line'
import Typography from 'design-systems/Atoms/Typography'
import { useHolding } from 'hooks/apis/useHolding'
import { useDataSelector } from 'lib/redux/store'
import { formatUSei } from 'utils/formatUnit'

export const convertToSEI = (value?: number, SEI?: number): number | undefined =>
  value !== undefined && SEI !== undefined ? value / SEI : undefined

const HoldingDataGroup: React.FC = () => {
  const { Holding, isLoadingHolding, Income, isLoadingIncome } = useHolding()
  const { crypto } = useDataSelector('toggle')
  const holdingData = {
    amount: 0,
    buyPrice: 0,
    estFee: 0,
    estValue: 0,
    unrealizedGains: 0,
  }
  const incomeData = {
    amount: 0,
    buyPrice: 0,
    paidFee: 0,
    sellPrice: 0,
    realizedGains: 0,
  }

  Holding?.map((collection: any) => {
    const info =
      collection?.nftsHolding &&
      collection?.nftsHolding?.reduce((acc: any, nft: any) => {
        acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
        acc.estFee = (acc.estFee || 0) + formatUSei(nft?.floorPrice) * nft?.royaltyPercentage * 0.01 || 0
        acc.unrealizedGains = (acc.unrealizedGains || 0) + formatUSei(nft?.unrealizedGains) || 0
        acc.estValue = (acc.estValue || 0) + formatUSei(nft?.floorPrice) || 0
        return acc
      }, {})
    holdingData.amount += Number(collection?.nftsHolding?.length) || 0
    holdingData.buyPrice += Number(info?.buyPrice) || 0
    holdingData.estFee += Number(info?.estFee) || 0
    holdingData.estValue += Number(info?.estValue) || 0
    holdingData.unrealizedGains += Number(info?.unrealizedGains) || 0
  }, {})

  Income?.map((collection: any) => {
    const info =
      collection?.incomeNfts &&
      collection?.incomeNfts?.reduce((acc: any, nft: any) => {
        acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
        acc.paidFee = (acc.paidFee || 0) + formatUSei(nft?.paidFee) || 0
        acc.realizedGains = (acc.realizedGains || 0) + formatUSei(nft?.realizedGains) || 0
        acc.sellPrice = (acc.sellPrice || 0) + formatUSei(nft?.sellPrice) || 0
        return acc
      }, {})

    incomeData.amount += Number(collection?.incomeNfts?.length) || 0
    incomeData.buyPrice += Number(info?.buyPrice) || 0
    incomeData.paidFee += Number(info?.paidFee) || 0
    incomeData.sellPrice += Number(info?.sellPrice) || 0
    incomeData.realizedGains += Number(info?.realizedGains) || 0
  }, {})

  return (
    <div className="flex h-full w-full flex-col content-between rounded-[12px] bg-blackCardBg p-2 text-[#DBDBDB] md:!rounded-md md:!p-[22px] lg:col-span-2 ">
      {!isLoadingHolding ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-Lexend !font-medium">
            <Typography className="!font-medium" size="lg">
              Holding Assets:
            </Typography>
            <Typography className="!font-medium" size="lg">
              {holdingData?.amount ? holdingData.amount : '--'}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 font-Inter font-normal">
            <HoldingDetailsSection
              crypto={crypto}
              title="Buy Price"
              tooltipTitle={`${holdingData.buyPrice} ${crypto.symbol}`}
              value={holdingData.buyPrice}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Est. Fees"
              tooltipTitle={`${holdingData.estFee} ${crypto.symbol}`}
              value={holdingData.estFee}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Est. Value"
              tooltipTitle={`${holdingData.estValue} ${crypto.symbol}`}
              value={holdingData.estValue}
            />
            <div className="flex justify-between">
              <Typography size="body">Unrealized Gains:</Typography>
              <Typography
                className={`text-right ${holdingData?.unrealizedGains < 0 ? ' text-warning-300' : 'text-green'} `}
                size="body"
              >
                <TETooltip title={`${holdingData.unrealizedGains} ${crypto.symbol}`}>
                  <Typography>
                    {holdingData.unrealizedGains ? (
                      <>
                        {holdingData.unrealizedGains?.toFixed(3)} {crypto.symbol}
                      </>
                    ) : (
                      '--'
                    )}
                  </Typography>
                </TETooltip>
                <Typography className="text-md">
                  <TETooltip title={`${(holdingData.unrealizedGains / holdingData.buyPrice) * 100}%`}>
                    {holdingData?.unrealizedGains ? (
                      <>
                        {' '}
                        {holdingData?.unrealizedGains === null
                          ? '0.00%'
                          : holdingData?.buyPrice === 0
                          ? '100.00%'
                          : `${((holdingData.unrealizedGains / holdingData.buyPrice) * 100).toFixed(2)}%`}
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
      {!isLoadingIncome ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-Lexend font-medium">
            <Typography className="!font-medium" size="lg">
              Sold Assets:
            </Typography>
            <Typography className="!font-medium" size="lg">
              {incomeData?.amount ? incomeData.amount : '--'}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 font-Inter font-normal">
            <HoldingDetailsSection
              crypto={crypto}
              title="Buy Price"
              tooltipTitle={`${incomeData.buyPrice} ${crypto.symbol}`}
              value={incomeData.buyPrice}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Paid Fees"
              tooltipTitle={`${incomeData.paidFee} ${crypto.symbol}`}
              value={incomeData.paidFee}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Sold Price"
              tooltipTitle={`${incomeData.sellPrice} ${crypto.symbol}`}
              value={incomeData.sellPrice}
            />

            <div className="flex justify-between">
              <Typography size="body">Realized Gains:</Typography>
              <Typography
                className={`text-right ${incomeData?.realizedGains < 0 ? ' text-warning-300' : 'text-green'} `}
                size="body"
              >
                <TETooltip title={`${incomeData.realizedGains} ${crypto.symbol}`}>
                  <Typography>
                    {incomeData?.realizedGains ? (
                      <>
                        {incomeData.realizedGains?.toFixed(3)} {crypto.symbol}
                      </>
                    ) : (
                      '--'
                    )}{' '}
                  </Typography>
                </TETooltip>
                <Typography className="text-md">
                  <TETooltip title={`${(incomeData.realizedGains / incomeData.buyPrice) * 100}%`}>
                    {incomeData?.realizedGains ? (
                      <>
                        {' '}
                        {incomeData?.realizedGains === null
                          ? '0.00%'
                          : incomeData?.buyPrice === 0
                          ? '100.00%'
                          : `${((incomeData.realizedGains / incomeData.buyPrice) * 100).toFixed(2)}%`}
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
      {!isLoadingIncome && !isLoadingHolding ? (
        <div className="flex flex-col gap-4 text-left">
          <div className="flex justify-between font-Lexend font-medium">
            <Typography className="!font-medium" size="lg">
              Total Assets:
            </Typography>
            <Typography className="!font-medium" size="lg">
              {holdingData?.amount && incomeData?.amount ? holdingData.amount + incomeData.amount : '--'}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 font-Inter font-normal">
            <HoldingDetailsSection
              crypto={crypto}
              title="Buy Price"
              tooltipTitle={`${holdingData.buyPrice + incomeData.buyPrice} ${crypto.symbol}`}
              value={holdingData.buyPrice + incomeData.buyPrice}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Paid Fees + Est. Fees"
              tooltipTitle={`${holdingData.estFee + incomeData.paidFee} ${crypto.symbol}`}
              value={holdingData.estFee + incomeData.paidFee}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Income + Est. Value"
              tooltipTitle={`${holdingData.estValue + incomeData.sellPrice} ${crypto.symbol}`}
              value={holdingData.estValue + incomeData.sellPrice}
            />
            <div className="flex justify-between">
              <Typography size="body">Total Profit:</Typography>
              <Typography
                className={`text-right ${
                  holdingData.unrealizedGains + incomeData.realizedGains < 0 ? ' text-warning-300' : 'text-green'
                } `}
                size="body"
              >
                <TETooltip title={`${holdingData.unrealizedGains + incomeData.realizedGains} ${crypto.symbol}`}>
                  <Typography>
                    {holdingData?.unrealizedGains && incomeData?.realizedGains ? (
                      <>
                        {(holdingData.unrealizedGains + incomeData.realizedGains).toFixed(2)} {crypto.symbol}
                      </>
                    ) : (
                      '--'
                    )}
                  </Typography>
                </TETooltip>
                <Typography className="text-md">
                  <TETooltip
                    title={`${
                      ((holdingData.unrealizedGains + incomeData.realizedGains) /
                        (holdingData.buyPrice + incomeData.buyPrice)) *
                      100
                    }%`}
                  >
                    {holdingData.unrealizedGains && incomeData?.realizedGains ? (
                      <>
                        {' '}
                        {holdingData?.unrealizedGains === null || incomeData?.realizedGains === null
                          ? '0.00%'
                          : holdingData.buyPrice + incomeData.buyPrice === 0
                          ? '100.00%'
                          : `${(
                              ((holdingData.unrealizedGains + incomeData.realizedGains) /
                                (holdingData.buyPrice + incomeData.buyPrice)) *
                              100
                            ).toFixed(2)}%`}
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
