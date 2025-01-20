/* eslint-disable no-constant-condition */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react' // Import the props interface
import { TETooltip } from 'tw-elements-react'
import { FiInfo } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'

import TableProps from '../IndexTable/interface'
import BookMarkButton from '../Table/BookMarkButton'

import { BookMarkEmpty, BookMarkFill, InfoIcons, LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Checkbox } from 'design-systems/Atoms/CheckBox'
import { formatUSei } from 'utils/formatUnit'
import { IMG } from 'assets/images'

interface HoldingTotalTableProps extends TableProps {
  totalValue: number
}

const HoldingTotalTable: React.FC<HoldingTotalTableProps> = ({ crypto, data, headData, totalValue }) => {
  const [activeElement, setActiveElement] = useState<string[]>([])
  const [checkboxes, setCheckboxes] = useState<any>([])
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([])
  const [isBookmarkedAll, setIsBookmarkedAll] = useState<boolean>(false)

  const handleBookMark = (id: string) => {
    // Check if the item is already bookmarked
    if (bookmarkedItems.includes(id)) {
      // If bookmarked, remove it from the list
      setBookmarkedItems(bookmarkedItems.filter(item => item !== id))
    } else {
      // If not bookmarked, add it to the list
      setBookmarkedItems([...bookmarkedItems, id])
    }
  }

  const handleBookMarkAll = () => {
    if (!isBookmarkedAll) {
      const allIds = data.map((item: any) => item.contract)
      setBookmarkedItems(allIds)
    } else {
      setBookmarkedItems([])
    }
    setIsBookmarkedAll(prev => !prev)
  }

  const handleCheckboxChange = (id: number) => {
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
      const allIds = data.map((item: any) => item.contract)
      setCheckboxes(allIds)
    } else {
      setCheckboxes([])
    }
  }

  const handleClick = (value: string) => {
    if (activeElement.includes(value)) {
      setActiveElement(prev => prev.filter(item => item !== value))
    } else {
      setActiveElement(prev => [...prev, value])
    }
  }

  return (
    <>
      <table className="rounded-corners w-full rounded-sm font-Lexend" id="holding-table">
        <thead>
          <tr>
            {headData?.map((item: any, key: number) => {
              return (
                <th key={key} style={{ width: item.width }}>
                  <div className={`flex !w-full items-center gap-2 ${key === 0 ? 'justify-start' : 'justify-center'}`}>
                    {key === 0 && (
                      <div className="ml-4 mr-16">
                        <BookMarkButton isActive={isBookmarkedAll} onClick={handleBookMarkAll} />
                      </div>
                    )}
                    {item.isInfo && <FiInfo className="text-md" />}

                    <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                      {item.name}
                    </Typography>

                    {item.isSort && <RxCaretSort className="text-md" />}
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
          {data?.map((collection: any) => {
            const info =
              ((collection?.incomeNfts &&
                collection?.incomeNfts?.reduce((acc: any, nft: any) => {
                  // acc.rank = (acc.rank || 0) + (nft?.rarity?.rank || 0) / collection.userHoldingAmount
                  acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
                  acc.sellPrice = (acc.sellPrice || 0) + formatUSei(nft?.sellPrice) || 0
                  acc.fee = (acc.fee || 0) + formatUSei(nft?.paidFee) || 0
                  acc.gains = (acc.gains || 0) + formatUSei(nft?.realizedGains) || 0
                  acc.holdingTime = (acc.holdingTime || 0) + Number(nft?.holdingTime) / (24 * 60 * 60) || 0
                  return acc
                }, {})) ||
                (collection?.nftsHold &&
                  collection?.nftsHold?.reduce((acc: any, nft: any) => {
                    // acc.rank = (acc.rank || 0) + nft?.rarity?.rank || 0
                    acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
                    acc.fee = (acc.fee || 0) + formatUSei(nft?.floorPrice) * nft?.royaltyPercentage * 0.01 || 0
                    acc.gains = (acc.gains || 0) + formatUSei(nft?.unrealizedGains) || 0
                    acc.holdingTime =
                      (acc.holdingTime || 0) + (Date.now() - new Date(nft?.ts).getTime()) / (24 * 60 * 60 * 1000) || 0
                    acc.floorPrice = (acc.floorPrice || 0) + formatUSei(nft?.floorPrice) || 0
                    return acc
                  }, {}))) ??
              {}
            info.holdingTime = info?.holdingTime / collection?.nftsHold?.length || collection?.incomeNfts?.length || 0
            info.weight = ((formatUSei(collection?.floorPrice) || 0) * 100) / (totalValue || 0)
            info.floorPrice = formatUSei(collection?.floorPrice) * collection?.nftsHold?.length || 0
            return (
              <React.Fragment key={collection.contract}>
                <tr className="cursor-pointer">
                  <td className="min-w-[230px]">
                    <div className="flex items-center justify-center gap-2">
                      <div onClick={() => handleBookMark(collection?.contract)}>
                        {bookmarkedItems.includes(collection?.contract) ? (
                          <div>
                            <BookMarkFill />
                          </div>
                        ) : (
                          <div>
                            <BookMarkEmpty />
                          </div>
                        )}
                      </div>
                      <div
                        className={`${activeElement.includes(collection.contract) && 'rotate-90'}`}
                        onClick={() => handleClick(collection.contract)}
                      >
                        <RightArrowIcons />
                      </div>
                      <div className="flex items-center justify-center gap-[3px]">
                        {collection?.detail?.pfp && collection?.detail?.pfp !== null ? (
                          <Image
                            alt={'IMG'}
                            className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                            height={40}
                            src={collection.detail.pfp}
                            width={40}
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
                      </div>
                    </div>
                  </td>
                  <td className="!w-[20px] !overflow-hidden !overflow-ellipsis">
                    {(collection?.nftsHold && collection.nftsHold !== null) ||
                    (collection?.incomeNfts && collection.incomeNfts !== null)
                      ? collection?.nftsHold?.length || collection?.incomeNfts?.length
                      : '--'}
                  </td>
                  <td className="w-[40px] overflow-hidden overflow-ellipsis">
                    <TETooltip title={`${((collection?.floorPrice * 100) / (totalValue || 0)).toFixed(2)}%`}>
                      {collection?.floorPrice !== undefined && totalValue && totalValue !== 0
                        ? `${((collection.floorPrice * 100) / totalValue).toFixed(2)}%`
                        : '--'}
                    </TETooltip>
                  </td>
                  <td className="w-[100px] overflow-hidden overflow-ellipsis">
                    <TETooltip title={`${collection?.floorPrice} SEI`}>
                      <Typography className="w-max">
                        {collection?.floorPrice
                          ? `${(formatUSei(collection.floorPrice) || 0).toFixed(2)} ${crypto?.symbol}`
                          : '--'}
                      </Typography>
                    </TETooltip>
                  </td>
                  <td>{collection?.rarity}</td>
                  <td className="w-[100px] overflow-hidden overflow-ellipsis">
                    <TETooltip title={`${info?.buyPrice} ${crypto?.symbol}`}>
                      <Typography className="w-max">
                        {info?.buyPrice ? `${info.buyPrice.toFixed(2)} ${crypto?.symbol}` : '--'}
                      </Typography>
                    </TETooltip>
                  </td>
                  <td>
                    {info?.fee && info?.fee !== null ? `${Number(info.fee)?.toFixed(2)} ${crypto?.symbol}` : '--'}
                  </td>
                  <td>
                    {(info?.floorPrice && info?.floorPrice !== null) || (info?.sellPrice && info?.sellPrice !== null)
                      ? `${Number(info.floorPrice || info.sellPrice)?.toFixed(2)} ${crypto?.symbol}`
                      : '--'}
                  </td>
                  <td>
                    {info?.gains && info?.gains !== null ? `${Number(info.gains).toFixed(2)} ${crypto?.symbol}` : '--'}
                  </td>
                  <td>{collection?.tokenReard}</td>
                  <td>{info && info?.holdingTime !== null ? `${info.holdingTime.toFixed(2)} d` : '--'}</td>
                  <td>
                    <div className="flex flex-col items-center justify-center">
                      <div className="rounded-[8px] bg-black225_05 p-1">
                        <LinkIcon />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="flex !w-full justify-end"
                      onChange={() => handleCheckboxChange(collection?.contract)}
                    >
                      <Checkbox checked={checkboxes.includes(collection?.contract)} />
                    </div>{' '}
                  </td>
                </tr>
                {collection?.nftsHold &&
                  collection?.nftsHold?.map((nft: any) => (
                    <tr
                      className={`${
                        activeElement.includes(collection.contract) ? 'table-row' : 'hidden'
                      } cursor-pointer`}
                      key={nft.key}
                    >
                      <td className="!p-0">
                        <div>
                          <div className="flex w-full items-center">
                            <div className="w-[100px] !pl-0 text-center text-[14px] text-black7f">
                              {nft?.status?.status}
                            </div>
                            <div className="w-[40px] !px-0">
                              <Image alt={'IMG'} height={40} src={nft?.image} width={40} />
                            </div>
                            <div className="w-[90px] !px-0 text-center">{nft?.name}</div>
                          </div>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td className="overflow-hidden overflow-ellipsis">
                        <div>
                          {nft?.floorPrice !== undefined && nft?.floorPrice !== null
                            ? `${formatUSei(nft.floorPrice).toFixed(2)} ${crypto?.symbol}`
                            : '--'}
                        </div>
                      </td>
                      <td>{nft?.rarity?.rank && nft?.rarity?.rank !== null ? nft?.rarity?.rank : '--'}</td>
                      <td>
                        <div>
                          <TETooltip title={formatUSei(nft?.buyPrice)?.toFixed(2)}>
                            {nft?.buyPrice ? `${formatUSei(nft?.buyPrice).toFixed(2)} ${crypto?.symbol}` : '--'}
                          </TETooltip>
                        </div>
                      </td>
                      <td>
                        <div>
                          {nft?.royaltyPercentage && nft?.royaltyPercentage !== null
                            ? `${(formatUSei(nft?.floorPrice) * nft.royaltyPercentage * 0.01).toFixed(2)} ${
                                crypto?.symbol
                              }`
                            : '--'}
                        </div>
                      </td>
                      <td className="w-[100px] overflow-hidden overflow-ellipsis">
                        <div>
                          {nft?.floorPrice && nft?.floorPrice !== null
                            ? `${formatUSei(nft.floorPrice).toFixed(2)} ${crypto?.symbol}`
                            : '--'}
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col gap-[4px]">
                          <div>
                            <Typography>
                              {nft?.unrealizedGains && nft?.unrealizedGains !== null
                                ? `${formatUSei(nft.unrealizedGains).toFixed(2)} ${crypto?.symbol}`
                                : '--'}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td></td>
                      {/* <td className={percentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                        <TETooltip title={formattedPercentageChange}>
                          <Typography>
                            {collection?.sinceTrade && collection?.sinceTrade !== null
                              ? `${formattedPercentageChange}`
                              : '--'}
                          </Typography>
                        </TETooltip>
                      </td> */}
                      <td>
                        {nft && nft?.ts && nft.ts !== null
                          ? `${((Date.now() - new Date(nft?.ts).getTime()) / (24 * 60 * 60 * 1000)).toFixed(2)} d`
                          : '--'}
                      </td>
                      <td>
                        {collection?.link && collection?.link !== null ? (
                          <Link
                            className="flex flex-col items-center justify-center"
                            href={collection && collection?.link}
                            target={`${
                              collection ? (collection?.link !== '' && collection?.link !== null ? '_blank' : '') : ''
                            }`}
                          >
                            <div className="rounded-[8px] bg-black225_05 p-1">
                              <LinkIcon />
                            </div>
                          </Link>
                        ) : (
                          '--'
                        )}
                      </td>
                      <td>
                        <div
                          className="flex !w-full justify-end"
                          onChange={() => handleCheckboxChange(collection?.contract)}
                        >
                          <Checkbox checked={checkboxes.includes(collection?.contract)} />
                        </div>{' '}
                      </td>
                      {/* </TECollapse> */}
                    </tr>
                  ))}
                {collection?.incomeNfts &&
                  collection?.incomeNfts?.map((nft: any) => (
                    <tr
                      className={`${
                        activeElement.includes(collection.contract) ? 'table-row' : 'hidden'
                      } cursor-pointer`}
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
                          onChange={() => handleCheckboxChange(collection.contract)}
                        >
                          <Checkbox checked={checkboxes.includes(collection.contract)} />
                        </div>{' '}
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            {/* <td>Total</td>
            <td>Tokens: 4.000</td>
            <td>NFT: 4.000</td> */}
            <td colSpan={2}>
              <div className="flex !w-full items-center justify-between">
                <Typography>Total</Typography>
                <div className="flex items-center justify-center gap-4">
                  <Typography>
                    <span className="flex items-center justify-center gap-1">
                      <InfoIcons /> Tokens: 4.000
                    </span>
                    <Typography className={4 < 0 ? 'text-warning-300' : 'text-green'}>4.000</Typography>
                  </Typography>
                  <Typography>
                    NFT: 4.000
                    <Typography className={4 < 0 ? 'text-warning-300' : 'text-green'}>4.000</Typography>
                  </Typography>
                </div>
              </div>
            </td>
            <td>100%</td>
            <td></td>
            <td></td>
            <td>975.000 SEI</td>
            <td>975.000 SEI</td>
            <td>975.000 SEI</td>
            <td>975.000 SEI</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default HoldingTotalTable
