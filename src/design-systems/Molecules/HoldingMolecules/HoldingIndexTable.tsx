/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react' // Import the props interface
import { TECollapse, TETooltip } from 'tw-elements-react'
import { FiInfo } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'

import { TableSkeletan } from '../Skeletan/TableSkeletan'
import BookMarkButton from '../Table/BookMarkButton'

import { Checkbox } from 'design-systems/Atoms/CheckBox'
import { BookMarkEmpty, InfoIcons, LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { cryptoProps } from 'lib/redux/slices/navToggleSlice/interface'
import { NoData } from 'design-systems/Atoms/NoData'
import { formatUSei } from 'utils/formatUnit'
import { IMG } from 'assets/images'

interface HoldingIndexTableProps {
  data: NFTData['collection']
  headData: any[]
  loading?: boolean
  footerData?: any
  crypto: cryptoProps
  totalValue: number
}

const HoldingIndexTable: React.FC<HoldingIndexTableProps> = ({
  data,
  headData,
  footerData,
  crypto,
  loading,
  totalValue,
}) => {
  const [activeElement, setActiveElement] = useState<number>(-1)
  const [checkboxes, setCheckboxes] = useState<any>([])
  const SEI = crypto.value
  const TotalBuyPrice = footerData && footerData?.totalBuyPrice / SEI
  const TotalFee = footerData && footerData?.totalFee / SEI
  const TotalIncome = footerData && footerData?.totalIncome / SEI
  const TotalUnRealizedGains = footerData && footerData?.totalUnRealizedGains / SEI
  const TotalSinceTrade = footerData && footerData?.totalSinceTrade / SEI
  const TotalWeight = footerData && footerData?.totalWeight / SEI

  const handleClick = (value: number) => {
    if (value === activeElement) {
      setActiveElement(-1)
    } else {
      setActiveElement(value)
    }
  }

  const handleCheckboxChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCheckboxes: any = [...checkboxes]

    const index = updatedCheckboxes.indexOf(id)

    if (index !== -1) {
      updatedCheckboxes.splice(index, 1)
    } else {
      updatedCheckboxes.push(id)
    }

    setCheckboxes(updatedCheckboxes)
  }

  const handleSelectAllChange = (checked: boolean) => {
    if (checked) {
      const allIds = data.map((item: any) => item.id)
      setCheckboxes(allIds)
    } else {
      setCheckboxes([])
    }
  }

  return (
    <>
      <table className="rounded-corners w-full rounded-sm    font-Lexend" id="holding-table">
        <thead>
          <tr>
            {headData?.map((item: any, key: number) => {
              return (
                <th key={key} style={{ width: item.width }}>
                  <div className={`flex !w-full items-center ${key === 0 ? 'justify-start' : 'justify-center'} gap-2`}>
                    {key === 0 && (
                      <div className="mr-12">
                        <BookMarkButton isActive={true} />
                      </div>
                    )}
                    {item.isInfo && <FiInfo className="text-lg" />}

                    <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                      {item.name}
                    </Typography>

                    {item.isSort && <RxCaretSort className="text-lg" />}
                  </div>
                </th>
              )
            })}
            <th style={{ width: '70px' }}>
              <div className="flex !w-full justify-end">
                <div className="!flex items-center !justify-end gap-2">
                  <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                    All
                  </Typography>
                  <Checkbox
                    checked={checkboxes?.length === data?.length}
                    name="All"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectAllChange(e.target.checked)}
                  />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            data?.map((collection: any, index: number) => {
              const info =
                collection?.incomeNfts &&
                collection?.incomeNfts?.reduce((acc: any, nft: any) => {
                  // acc.rank = (acc.rank || 0) + (nft?.rarity?.rank || 0) / collection.userHoldingAmount
                  acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
                  acc.sellPrice = (acc.sellPrice || 0) + formatUSei(nft?.sellPrice) || 0
                  acc.paidFee = (acc.paidFee || 0) + formatUSei(nft?.paidFee) || 0
                  acc.realizedGains = (acc.realizedGains || 0) + formatUSei(nft?.realizedGains) || 0
                  acc.holdingTime = (acc.holdingTime || 0) + Number(nft?.holdingTime) / (24 * 60 * 60) || 0
                  return acc
                }, {})
              info.holdingTime = info.holdingTime / collection?.incomeNfts?.length || 0
              info.weight = ((formatUSei(collection?.floorPrice) || 0) * 100) / totalValue
              return (
                <React.Fragment key={collection.collection}>
                  <tr className="cursor-pointer bg-[#181620]">
                    {/* <td className="">
                    <div className="flex">
                      <BookMarkEmpty />
                      <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
                        <RightArrowIcons />
                      </div>
                    </div>
                  </td> */}
                    <td className="min-w-[230px]">
                      <div className="flex items-center justify-center gap-2">
                        <BookMarkButton isActive={false} />
                        <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
                          <RightArrowIcons />
                        </div>
                        <Link
                          className="flex items-center gap-3 text-ellipsis"
                          href={{
                            pathname: '/single-collection-trades',
                            // query: {
                            //   asset_name: item && item.assetNameAscii,
                            //   policy: item.encodedPolicy,
                            //   current_value: item.blockId,
                            // }, // Add your custom props as query parameters
                          }}
                        >
                          {collection?.pfp && collection?.pfp !== null ? (
                            <Image
                              alt={'IMG'}
                              className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                              height={48}
                              src={collection.pfp}
                              width={48}
                            />
                          ) : (
                            <Image
                              alt={'IMG'}
                              className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                              height={48}
                              src={IMG.webump}
                              width={48}
                            />
                          )}
                          <Typography className="w-max">{collection?.name ? collection.name : '--'}</Typography>
                        </Link>
                      </div>
                    </td>
                    <td className="!w-[20px] !overflow-hidden !overflow-ellipsis">
                      {collection?.incomeNfts && collection.incomeNfts !== null ? collection.incomeNfts.length : '--'}
                    </td>
                    <td className="w-[40px] overflow-hidden overflow-ellipsis">
                      <TETooltip title={`${info.weight.toFixed(2)}%`}>
                        {info?.weight !== undefined && totalValue !== 0 ? `${info.weight.toFixed(2)}%` : '--'}
                      </TETooltip>
                    </td>
                    <td className="w-[100px] overflow-hidden overflow-ellipsis">
                      <TETooltip title={`${collection?.floorPrice} SEI`}>
                        <Typography className="w-max">
                          {collection?.floorPrice
                            ? `${(formatUSei(collection.floorPrice) || 0).toFixed(2)} ${crypto.symbol}`
                            : '--'}
                        </Typography>
                      </TETooltip>
                    </td>
                    <td>{info?.rank ? info.rank.toFixed(2) : '--'}</td>
                    <td>
                      <TETooltip title={`${info?.buyPrice} ${crypto.symbol}`}>
                        <Typography className="w-max">
                          {info?.buyPrice ? `${info.buyPrice.toFixed(2)} ${crypto.symbol}` : '--'}
                        </Typography>
                      </TETooltip>
                    </td>
                    <td>
                      <Typography>{info?.paidFee ? `${info.paidFee.toFixed(2)} ${crypto.symbol}` : '--'}</Typography>{' '}
                    </td>
                    <td className="w-[100px] overflow-hidden overflow-ellipsis">
                      <Typography>
                        {info?.sellPrice ? `${info.sellPrice.toFixed(2)} ${crypto.symbol}` : '--'}
                      </Typography>
                    </td>
                    <td>
                      <div className="flex flex-col gap-[4px]">
                        <Typography>
                          {info?.realizedGains ? `${info.realizedGains.toFixed(2)} ${crypto.symbol}` : '--'}
                        </Typography>
                        {/* {collection?.sinceTradePercent ? (
                          <Typography className={collection?.sinceTradePercent < 0 ? 'text-warning-300' : 'text-green'}>
                            {collection?.sinceTradePercent.toFixed(2) + '%'}
                          </Typography>
                        ) : (
                          '--'
                        )} */}
                      </div>
                    </td>
                    <td>
                      <TETooltip title={`${collection?.sinceTrade}%`}>
                        <Typography className={collection?.sinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                          {collection?.sinceTrade ? collection?.sinceTrade?.toFixed(2) + '%' : '--'}
                        </Typography>
                      </TETooltip>
                    </td>
                    <td>{info?.holdingTime !== undefined ? `${info.holdingTime.toFixed(2)} d` : '--'}</td>
                    <td>
                      <Link
                        className="flex flex-col items-center justify-center"
                        href={collection.link ? collection.link : ''}
                      >
                        <div className="rounded-[8px] bg-black225_05 p-1">
                          <LinkIcon />
                        </div>
                      </Link>
                    </td>
                    <td>
                      <div
                        className="flex !w-full justify-end"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(collection.id, e)}
                      >
                        <Checkbox checked={checkboxes.includes(collection.id)} />
                      </div>{' '}
                    </td>
                  </tr>
                  {collection?.incomeNfts &&
                    collection?.incomeNfts?.map((nft: any) => (
                      <tr
                        className={`${activeElement === index ? 'table-row' : 'hidden'} cursor-pointer`}
                        key={nft.tokenId}
                      >
                        {/* avatar, name */}
                        <td className="!p-0">
                          <div className="flex w-full items-center">
                            <div className="w-[100px] !pl-0 text-center text-[14px] text-black7f">
                              {nft?.status?.status}
                            </div>
                            <div className="w-[40px] !px-0">
                              <Image alt={'IMG'} height={40} src={nft?.image} width={40} />
                            </div>
                            <div className="w-[90px] !px-0 text-center">{nft?.name}</div>
                          </div>
                        </td>
                        {/* Amount, Weight */}
                        <td></td>
                        <td>
                          <Typography>
                            {info?.weight !== undefined &&
                            totalValue !== 0 &&
                            collection?.incomeNfts &&
                            collection.incomeNfts.length > 0
                              ? `${(info.weight / collection.incomeNfts.length).toFixed(2)}%`
                              : '--'}
                          </Typography>
                        </td>
                        {/* Floor */}
                        <td className="overflow-hidden overflow-ellipsis">
                          <div>
                            {collection?.floorPrice !== undefined && collection?.floorPrice !== null
                              ? `${formatUSei(collection.floorPrice)?.toFixed(2)} ${crypto?.symbol}`
                              : '--'}
                          </div>
                        </td>
                        {/* Rarity */}
                        <td>{nft?.rarity?.rank && nft?.rarity?.rank !== null ? nft?.rarity?.rank.toFixed(2) : '--'}</td>
                        {/* Buy Price */}
                        <td>
                          <div>
                            <TETooltip title={formatUSei(nft?.buyPrice)}>
                              {nft?.buyPrice ? `${formatUSei(nft.buyPrice)?.toFixed(2)} ${crypto?.symbol}` : '--'}
                            </TETooltip>
                          </div>
                        </td>
                        {/* Paid Fees */}
                        <td>
                          {nft?.paidFee && nft?.paidFee !== null
                            ? `${formatUSei(nft.paidFee)?.toFixed(2)} ${crypto?.symbol}`
                            : '--'}
                        </td>
                        {/* Income */}
                        <td className="w-[100px] overflow-hidden overflow-ellipsis">
                          <div>
                            {nft?.sellPrice && nft?.sellPrice !== null
                              ? `${formatUSei(nft.sellPrice)?.toFixed(2)} ${crypto?.symbol}`
                              : '--'}
                          </div>
                        </td>
                        {/* Unrealized Gains */}
                        <td>
                          <div className="flex flex-col gap-[4px]">
                            <div>
                              <Typography>
                                {nft?.realizedGains && nft?.realizedGains !== null
                                  ? `${formatUSei(nft.realizedGains).toFixed(2)} ${crypto?.symbol}`
                                  : '--'}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td>{/* Since Trade */}</td>
                        {/* <td className={percentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                          <TETooltip title={formattedPercentageChange}>
                            <Typography>
                              {item?.sinceTrade && item?.sinceTrade !== null
                                ? `${formattedPercentageChange}`
                                : '--'}
                            </Typography>
                          </TETooltip>
                        </td> */}
                        {/* Holding Time */}
                        <td>
                          {nft && nft?.holdingTime && nft.holdingTime !== null
                            ? `${(Number(nft.holdingTime) / (24 * 60 * 60)).toFixed(2)} d`
                            : '--'}
                        </td>
                        <td>
                          <Link
                            className="flex flex-col items-center justify-center"
                            href={collection.link ? collection.link : ''}
                          >
                            <div className="rounded-[8px] bg-black225_05 p-1">
                              <LinkIcon />
                            </div>
                          </Link>
                          {/* {collection?.link && collection?.link !== null ? (
                            <Link
                              className="flex flex-col items-center justify-center"
                              href={collection && collection?.link}
                              target={`${collection ? (collection?.link !== '' && collection?.link !== null ? '_blank' : '') : ''}`}
                            >
                              <div className="rounded-[8px] bg-black225_05 p-1">
                                <LinkIcon />
                              </div>
                            </Link>
                          ) : (
                            '--'
                          )} */}
                        </td>
                        <td>
                          <div
                            className="flex !w-full justify-end"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              handleCheckboxChange(collection.id, e)
                            }
                          >
                            <Checkbox checked={checkboxes.includes(collection.id)} />
                          </div>{' '}
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              )
            })}
          {data && data?.length === 0 && (
            <tr>
              <td colSpan={headData.length + 1}>
                <NoData />
              </td>
            </tr>
          )}
          {loading &&
            Array(8)
              .fill('')
              .map((_, key) => (
                <tr key={key}>
                  <td colSpan={headData.length + 1}>
                    <TableSkeletan limit={1} />
                  </td>
                </tr>
              ))}
        </tbody>
        {!loading && data?.length > 0 && (
          <tfoot>
            <tr>
              {/* <td>Total</td>
            <td>
              <Typography>
                <span className="flex items-center justify-center gap-1">
                  <InfoIcons /> Tokens: {footerData?.nftTotal}
                </span>
                <Typography className={TotalSinceTrade && TotalSinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                  {TotalSinceTrade?.toFixed(2) + '%'}
                </Typography>
              </Typography>
            </td>
            <td>
              <Typography>
                NFT: {footerData?.nftTotal}
                <Typography className={TotalSinceTrade && TotalSinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                  {TotalSinceTrade?.toFixed(3) + '%'}
                </Typography>
              </Typography>
            </td> */}
              <td colSpan={2}>
                <div className="flex !w-full items-center justify-between">
                  <Typography>Total</Typography>
                  <div className="flex items-center justify-center gap-4">
                    <Typography>
                      <span className="flex items-center justify-center gap-1">
                        <InfoIcons /> Tokens: {footerData?.nftTotal}
                      </span>
                      <Typography
                        className={TotalSinceTrade && TotalSinceTrade < 0 ? 'text-warning-300' : 'text-green'}
                      >
                        {TotalSinceTrade?.toFixed(2) + '%'}
                      </Typography>
                    </Typography>
                    <Typography>
                      NFT: {footerData?.nftTotal}
                      <Typography
                        className={TotalSinceTrade && TotalSinceTrade < 0 ? 'text-warning-300' : 'text-green'}
                      >
                        {TotalSinceTrade?.toFixed(2) + '%'}
                      </Typography>
                    </Typography>
                  </div>
                </div>
              </td>
              <td>
                {/* {TotalWeight.toFixed(5)} */}
                <div className=" !w-[60px]">
                  <TETooltip title={TotalWeight}>{TotalWeight?.toFixed(3) + '%'}</TETooltip>
                  {/* <div className=" overflow-hidden text-ellipsis whitespace-nowrap">
                </div>
                <span className="tooltiptext">
                  {TotalWeight !== undefined && TotalWeight !== null ? TotalWeight.toFixed(6) : '--'}
                </span> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td>
                <Typography>
                  {TotalBuyPrice?.toFixed(3)} {crypto.symbol}
                </Typography>
              </td>
              <td>
                <Typography>
                  {TotalFee?.toFixed(3)} {crypto.symbol}
                </Typography>
              </td>
              <td>
                <Typography>
                  {TotalIncome?.toFixed(3)} {crypto.symbol}
                </Typography>
              </td>
              <td>
                <Typography className="">
                  <Typography>
                    {TotalUnRealizedGains?.toFixed(3)} {crypto.symbol}
                  </Typography>
                  <Typography className={TotalSinceTrade && TotalSinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                    {TotalSinceTrade?.toFixed(3) + '%'}
                  </Typography>
                </Typography>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        )}
      </table>
    </>
  )
}

export default HoldingIndexTable
