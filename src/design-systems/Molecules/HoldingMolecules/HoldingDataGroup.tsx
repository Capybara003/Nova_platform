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
  const { HoldingNfts, isLoadingHoldingNfts, IncomeNfts, isLoadingIncomeNfts } = useHolding()
  const { crypto } = useDataSelector('toggle')
  const holdingNftsData = {
    amount: 0,
    buyPrice: 0,
    estFee: 0,
    estValue: 0,
    unrealizedGains: 0,
  }
  const incomeNftsData = {
    amount: 0,
    buyPrice: 0,
    paidFee: 0,
    sellPrice: 0,
    realizedGains: 0,
  }

  HoldingNfts?.map((collection: any) => {
    const info =
      collection?.nftsHolding &&
      collection?.nftsHolding?.reduce((acc: any, nft: any) => {
        acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
        acc.estFee = (acc.estFee || 0) + formatUSei(nft?.floorPrice) * nft?.royaltyPercentage * 0.01 || 0
        acc.unrealizedGains = (acc.unrealizedGains || 0) + formatUSei(nft?.unrealizedGains) || 0
        acc.estValue = (acc.estValue || 0) + formatUSei(nft?.floorPrice) || 0
        return acc
      }, {})
    holdingNftsData.amount += Number(collection?.nftsHolding?.length) || 0
    holdingNftsData.buyPrice += Number(info?.buyPrice) || 0
    holdingNftsData.estFee += Number(info?.estFee) || 0
    holdingNftsData.estValue += Number(info?.estValue) || 0
    holdingNftsData.unrealizedGains += Number(info?.unrealizedGains) || 0
  }, {})

  IncomeNfts?.map((collection: any) => {
    const info =
      collection?.incomeNfts &&
      collection?.incomeNfts?.reduce((acc: any, nft: any) => {
        acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
        acc.paidFee = (acc.paidFee || 0) + formatUSei(nft?.paidFee) || 0
        acc.realizedGains = (acc.realizedGains || 0) + formatUSei(nft?.realizedGains) || 0
        acc.sellPrice = (acc.sellPrice || 0) + formatUSei(nft?.sellPrice) || 0
        return acc
      }, {})

    incomeNftsData.amount += Number(collection?.incomeNfts?.length) || 0
    incomeNftsData.buyPrice += Number(info?.buyPrice) || 0
    incomeNftsData.paidFee += Number(info?.paidFee) || 0
    incomeNftsData.sellPrice += Number(info?.sellPrice) || 0
    incomeNftsData.realizedGains += Number(info?.realizedGains) || 0
  }, {})

  return (
    <div className="flex h-full w-full flex-col content-between rounded-[12px] bg-blackCardBg p-2 text-[#DBDBDB] md:!rounded-md md:!p-[22px] lg:col-span-2 ">
      {!isLoadingHoldingNfts ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-Lexend !font-medium">
            <Typography className="!font-medium" size="lg">
              Holding Assets:
            </Typography>
            <Typography className="!font-medium" size="lg">
              {holdingNftsData?.amount ? holdingNftsData.amount : '--'}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 font-Inter font-normal">
            <HoldingDetailsSection
              crypto={crypto}
              title="Buy Price"
              tooltipTitle={`${holdingNftsData.buyPrice} ${crypto.symbol}`}
              value={holdingNftsData.buyPrice}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Est. Fees"
              tooltipTitle={`${holdingNftsData.estFee} ${crypto.symbol}`}
              value={holdingNftsData.estFee}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Est. Value"
              tooltipTitle={`${holdingNftsData.estValue} ${crypto.symbol}`}
              value={holdingNftsData.estValue}
            />
            <div className="flex justify-between">
              <Typography size="body">Unrealized Gains:</Typography>
              <Typography
                className={`text-right ${holdingNftsData?.unrealizedGains < 0 ? ' text-warning-300' : 'text-green'} `}
                size="body"
              >
                <TETooltip title={`${holdingNftsData.unrealizedGains} ${crypto.symbol}`}>
                  <Typography>
                    {holdingNftsData.unrealizedGains ? (
                      <>
                        {holdingNftsData.unrealizedGains?.toFixed(3)} {crypto.symbol}
                      </>
                    ) : (
                      '--'
                    )}
                  </Typography>
                </TETooltip>
                <Typography className="text-md">
                  <TETooltip title={`${(holdingNftsData.unrealizedGains / holdingNftsData.buyPrice) * 100}%`}>
                    {holdingNftsData?.unrealizedGains ? (
                      <>
                        {' '}
                        {holdingNftsData?.unrealizedGains === null
                          ? '0.00%'
                          : holdingNftsData?.buyPrice === 0
                          ? '100.00%'
                          : `${((holdingNftsData.unrealizedGains / holdingNftsData.buyPrice) * 100).toFixed(2)}%`}
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
      {!isLoadingIncomeNfts ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-Lexend font-medium">
            <Typography className="!font-medium" size="lg">
              Sold Assets:
            </Typography>
            <Typography className="!font-medium" size="lg">
              {incomeNftsData?.amount ? incomeNftsData.amount : '--'}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 font-Inter font-normal">
            <HoldingDetailsSection
              crypto={crypto}
              title="Buy Price"
              tooltipTitle={`${incomeNftsData.buyPrice} ${crypto.symbol}`}
              value={incomeNftsData.buyPrice}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Paid Fees"
              tooltipTitle={`${incomeNftsData.paidFee} ${crypto.symbol}`}
              value={incomeNftsData.paidFee}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Sold Price"
              tooltipTitle={`${incomeNftsData.sellPrice} ${crypto.symbol}`}
              value={incomeNftsData.sellPrice}
            />

            <div className="flex justify-between">
              <Typography size="body">Realized Gains:</Typography>
              <Typography
                className={`text-right ${incomeNftsData?.realizedGains < 0 ? ' text-warning-300' : 'text-green'} `}
                size="body"
              >
                <TETooltip title={`${incomeNftsData.realizedGains} ${crypto.symbol}`}>
                  <Typography>
                    {incomeNftsData?.realizedGains ? (
                      <>
                        {incomeNftsData.realizedGains?.toFixed(3)} {crypto.symbol}
                      </>
                    ) : (
                      '--'
                    )}{' '}
                  </Typography>
                </TETooltip>
                <Typography className="text-md">
                  <TETooltip title={`${(incomeNftsData.realizedGains / incomeNftsData.buyPrice) * 100}%`}>
                    {incomeNftsData?.realizedGains ? (
                      <>
                        {' '}
                        {incomeNftsData?.realizedGains === null
                          ? '0.00%'
                          : incomeNftsData?.buyPrice === 0
                          ? '100.00%'
                          : `${((incomeNftsData.realizedGains / incomeNftsData.buyPrice) * 100).toFixed(2)}%`}
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
      {!isLoadingIncomeNfts && !isLoadingHoldingNfts ? (
        <div className="flex flex-col gap-4 text-left">
          <div className="flex justify-between font-Lexend font-medium">
            <Typography className="!font-medium" size="lg">
              Total Assets:
            </Typography>
            <Typography className="!font-medium" size="lg">
              {holdingNftsData?.amount && incomeNftsData?.amount
                ? holdingNftsData.amount + incomeNftsData.amount
                : '--'}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 font-Inter font-normal">
            <HoldingDetailsSection
              crypto={crypto}
              title="Buy Price"
              tooltipTitle={`${holdingNftsData.buyPrice + incomeNftsData.buyPrice} ${crypto.symbol}`}
              value={holdingNftsData.buyPrice + incomeNftsData.buyPrice}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Paid Fees + Est. Fees"
              tooltipTitle={`${holdingNftsData.estFee + incomeNftsData.paidFee} ${crypto.symbol}`}
              value={holdingNftsData.estFee + incomeNftsData.paidFee}
            />
            <HoldingDetailsSection
              crypto={crypto}
              title="Income + Est. Value"
              tooltipTitle={`${holdingNftsData.estValue + incomeNftsData.sellPrice} ${crypto.symbol}`}
              value={holdingNftsData.estValue + incomeNftsData.sellPrice}
            />
            <div className="flex justify-between">
              <Typography size="body">Total Profit:</Typography>
              <Typography
                className={`text-right ${
                  holdingNftsData.unrealizedGains + incomeNftsData.realizedGains < 0
                    ? ' text-warning-300'
                    : 'text-green'
                } `}
                size="body"
              >
                <TETooltip title={`${holdingNftsData.unrealizedGains + incomeNftsData.realizedGains} ${crypto.symbol}`}>
                  <Typography>
                    {holdingNftsData?.unrealizedGains && incomeNftsData?.realizedGains ? (
                      <>
                        {(holdingNftsData.unrealizedGains + incomeNftsData.realizedGains).toFixed(2)} {crypto.symbol}
                      </>
                    ) : (
                      '--'
                    )}
                  </Typography>
                </TETooltip>
                <Typography className="text-md">
                  <TETooltip
                    title={`${
                      ((holdingNftsData.unrealizedGains + incomeNftsData.realizedGains) /
                        (holdingNftsData.buyPrice + incomeNftsData.buyPrice)) *
                      100
                    }%`}
                  >
                    {holdingNftsData.unrealizedGains && incomeNftsData?.realizedGains ? (
                      <>
                        {' '}
                        {holdingNftsData?.unrealizedGains === null || incomeNftsData?.realizedGains === null
                          ? '0.00%'
                          : holdingNftsData.buyPrice + incomeNftsData.buyPrice === 0
                          ? '100.00%'
                          : `${(
                              ((holdingNftsData.unrealizedGains + incomeNftsData.realizedGains) /
                                (holdingNftsData.buyPrice + incomeNftsData.buyPrice)) *
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
