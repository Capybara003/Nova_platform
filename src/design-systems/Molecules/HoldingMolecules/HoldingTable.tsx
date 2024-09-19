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

import TableProps from '../IndexTable/interface'
import { TableSkeletan } from '../Skeletan/TableSkeletan'
import BookMarkButton from '../Table/BookMarkButton'

import { Checkbox } from 'design-systems/Atoms/CheckBox'
import { BookMarkEmpty, BookMarkFill, InfoIcons, LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { useDataSelector } from 'lib/redux/store'
import { IMG } from 'assets/images'
import { NoData } from 'design-systems/Atoms/NoData'
import { formatUnits, formatUSei } from 'utils/formatUnit'

interface HoldingTableProps extends TableProps {
  totalValue: number
}

const HoldingTable: React.FC<HoldingTableProps> = ({ data, headData, loading, footerData, crypto, totalValue }) => {
  const [activeElement, setActiveElement] = useState<string[]>([])
  const [checkboxes, setCheckboxes] = useState<any>([])
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([])
  const [isBookmarkedAll, setIsBookmarkedAll] = useState<boolean>(false)
  const SEI = crypto?.value || 0
  const baseValue = 100
  const NftTotal = footerData?.nftTotal / SEI
  const TotalAmount = footerData?.totalAmount / SEI
  const TotalWeight = footerData?.totalWeight / SEI
  const TotalFloorPrice = footerData?.totalFloorPrice / SEI
  const TotalRarity = footerData?.totalRarity / SEI
  const TotalBuyPrice = footerData?.totalBuyPrice / SEI
  const TotalFee = footerData?.totalFee / SEI
  const TotalFloorValue = footerData?.totalFloorValue / SEI
  const TotalUnRealizedGains = footerData?.totalUnRealizedGains / SEI
  const TotalSinceTrade = footerData?.totalSinceTrade / SEI
  const TotalpercentageChange = (TotalSinceTrade - baseValue) / baseValue
  const TotalFormattedPercentageChange = `${
    (TotalpercentageChange >= 0 ? '+' : '') +
    TotalpercentageChange.toFixed(2)
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }%`

  const { tabName } = useDataSelector('toggle')

  const handleClick = (value: string) => {
    if (activeElement.includes(value)) {
      setActiveElement(prev => prev.filter(item => item !== value))
    } else {
      setActiveElement(prev => [...prev, value])
    }
  }

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

  const handleCheckboxChange = (id: string) => {
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

  return (
    <table className="rounded-corners w-full rounded-sm font-Lexend">
      <thead>
        <tr>
          {headData?.map((item: any, key: number) => {
            return (
              <th key={key} style={{ width: item.width }}>
                <div
                  className={`flex !w-full items-center gap-2 ${key === 0 ? 'justify-start' : 'justify-center'} gap-2`}
                >
                  {key === 0 && (
                    <Typography className="ml-4 mr-16">
                      <BookMarkButton isActive={isBookmarkedAll} onClick={handleBookMarkAll} />
                    </Typography>
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
        {!loading &&
          tabName === 1 &&
          data?.map((collection: any) => {
            const info =
              (collection?.nftsHold &&
                collection?.nftsHold?.reduce((acc: any, nft: any) => {
                  // acc.rank = (acc.rank || 0) + nft?.rarity?.rank || 0
                  acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
                  acc.estFee = (acc.estFee || 0) + formatUSei(nft?.floorPrice) * nft?.royaltyPercentage * 0.01 || 0
                  acc.unrealizedGains = (acc.unrealizedGains || 0) + formatUSei(nft?.unrealizedGains) || 0
                  acc.holdingTime =
                    (acc.holdingTime || 0) + (Date.now() - new Date(nft?.ts).getTime()) / (24 * 60 * 60 * 1000) || 0
                  acc.floorPrice = (acc.floorPrice || 0) + formatUSei(nft?.floorPrice) || 0
                  return acc
                }, {})) ||
              {}
            // info.rank = info.rank / collection?.userHoldingNfts?.length || 0
            info.holdingTime = info?.holdingTime / collection?.nftsHold?.length || 0

            const SinceTrade = collection?.sinceTrade / SEI

            const percentageChange = (SinceTrade - baseValue) / baseValue
            const formattedPercentageChange = `${
              (percentageChange >= 0 ? '+' : '') +
              percentageChange
                .toFixed(2)
                .replace('.', ',')
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }%`

            return (
              <React.Fragment key={collection?.contract}>
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
                      <Link
                        className="flex items-center justify-center gap-2 text-ellipsis"
                        href={{
                          pathname: '/single-collection-trades',
                          query: {
                            asset_name: collection?.name && collection?.name !== null ? collection?.name : '',
                            // item?.assetNameAscii,
                            policy: collection?.policy && collection?.policy !== null ? collection?.policy : '',
                            current_value: collection?.id && collection?.id !== null ? collection?.id : '',
                          }, // Add your custom props as query parameters
                        }}
                      >
                        {collection?.pfp && collection?.pfp !== null ? (
                          <Image
                            alt={'IMG'}
                            className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                            height={40}
                            src={collection.pfp}
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
                        <Typography className="w-max">
                          {collection?.name && collection?.name !== null ? collection?.name || '--' : '--'}
                        </Typography>
                      </Link>
                    </div>
                  </td>
                  <td className="">
                    {collection?.nftsHold && collection?.nftsHold !== null ? collection.nftsHold.length : '--'}
                  </td>
                  <td>
                    <div className="tooltip !w-[60px]">
                      <TETooltip title={`${((info.floorPrice * 100) / totalValue).toFixed(2)}%`}>
                        {info?.floorPrice !== undefined && totalValue !== 0
                          ? `${((info.floorPrice * 100) / totalValue).toFixed(2)}%`
                          : '--'}
                      </TETooltip>
                    </div>
                  </td>
                  <td className="overflow-hidden overflow-ellipsis">
                    <div>
                      <TETooltip title={collection?.floorPrice}>
                        {collection?.floorPrice !== undefined && collection?.floorPrice !== null
                          ? `${formatUSei(collection.floorPrice).toFixed(2)} ${crypto?.symbol}`
                          : '--'}
                      </TETooltip>
                    </div>
                  </td>
                  <td>{info?.rank && info?.rank !== null ? info?.rank : '--'}</td>
                  <td>
                    <div>
                      <TETooltip title={info.buyPrice}>
                        {info.buyPrice ? `${Number(info.buyPrice)?.toFixed(2)} ${crypto?.symbol}` : '--'}
                      </TETooltip>
                    </div>
                  </td>
                  <td>
                    <div>
                      {info?.estFee && info?.estFee !== null
                        ? `${Number(info.estFee)?.toFixed(2)} ${crypto?.symbol}`
                        : '--'}
                    </div>
                  </td>
                  <td className="w-[100px] overflow-hidden overflow-ellipsis">
                    <div>
                      {info?.floorPrice && info?.floorPrice !== null
                        ? `${Number(info.floorPrice)?.toFixed(2)} ${crypto?.symbol}`
                        : '--'}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col gap-[4px]">
                      <div>
                        <Typography>
                          {info?.unrealizedGains && info?.unrealizedGains !== null
                            ? `${Number(info.unrealizedGains).toFixed(2)} ${crypto?.symbol}`
                            : '--'}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={percentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                    <TETooltip title={formattedPercentageChange}>
                      <Typography>
                        {collection?.sinceTrade && collection?.sinceTrade !== null
                          ? `${formattedPercentageChange}`
                          : '--'}
                      </Typography>
                    </TETooltip>
                  </td>
                  <td>{info && info?.holdingTime !== null ? `${info.holdingTime.toFixed(2)} d` : '--'}</td>
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
                      <td className={percentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                        <TETooltip title={formattedPercentageChange}>
                          <Typography>
                            {collection?.sinceTrade && collection?.sinceTrade !== null
                              ? `${formattedPercentageChange}`
                              : '--'}
                          </Typography>
                        </TETooltip>
                      </td>
                      <td>
                        {nft && nft?.ts && nft?.ts !== null
                          ? `${((Date.now() - new Date(nft.ts).getTime()) / (24 * 60 * 60 * 1000)).toFixed(2)} d`
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
              </React.Fragment>
            )
          })}
        {!loading &&
          tabName === 2 &&
          data?.map((token: any) => {
            // const info =
            //   token &&
            //   token?.reduce((acc: any, nft: any) => {
            //     // acc.rank = (acc.rank || 0) + nft?.rarity?.rank || 0
            //     acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
            //     acc.estFee = (acc.estFee || 0) + formatUSei(nft?.floorPrice) * nft?.royaltyPercentage * 0.01 || 0
            //     acc.unrealizedGains = (acc.unrealizedGains || 0) + formatUSei(nft?.unrealizedGains) || 0
            //     acc.holdingTime =
            //       (acc.holdingTime || 0) + (Date.now() - new Date(nft?.ts).getTime()) / (24 * 60 * 60 * 1000) || 0
            //     acc.floorPrice = (acc.floorPrice || 0) + formatUSei(nft?.floorPrice) || 0
            //     return acc
            //   }, {})
            const info: any = {}
            // info.rank = info.rank / collection?.userHoldingNfts?.length || 0
            // info.holdingTime = info?.holdingTime / collection?.nftsHold?.length || 0

            const SinceTrade = token?.sinceTrade / SEI

            const percentageChange = (SinceTrade - baseValue) / baseValue
            const formattedPercentageChange = `${
              (percentageChange >= 0 ? '+' : '') +
              percentageChange
                .toFixed(2)
                .replace('.', ',')
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }%`

            return (
              <React.Fragment key={token?.demon}>
                <tr className="cursor-pointer">
                  <td className="min-w-[230px]">
                    <>
                      <div className="flex items-center justify-center gap-2">
                        <div onClick={() => handleBookMark(token?.seiAddress)}>
                          {bookmarkedItems.includes(token?.seiAddress) ? (
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
                          className={`${activeElement.includes(token.demon) ? 'rotate-90' : ''}`}
                          onClick={() => handleClick(token.demon)}
                        >
                          <RightArrowIcons />
                        </div>

                        <Link
                          className="flex items-center gap-3 text-ellipsis"
                          href={{
                            pathname: '/single-collection-trades',
                            query: {
                              asset_name: token?.name && token?.name !== null ? token?.name : '',
                              // item?.assetNameAscii,
                              policy: token?.policy && token?.policy !== null ? token?.policy : '',
                              current_value: token?.id && token?.id !== null ? token?.id : '',
                            }, // Add your custom props as query parameters
                          }}
                        >
                          {token?.logoUrl && token?.logoUrl !== null ? (
                            <Image
                              alt={'IMG'}
                              className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                              height={48}
                              src={token.logoUrl}
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
                          <Typography className="w-max">
                            {token?.name && token?.name !== null ? token.name || '--' : '--'}
                          </Typography>
                          {/* SEI {token.type ? `(${token.type})`.toUpperCase() : ''} */}
                        </Link>
                      </div>
                    </>
                  </td>
                  <td className="">
                    <TETooltip title={token?.amount}>
                      {token?.amount ? `${formatUnits(token.amount, token.decimals).toFixed(2)}` : '--'}
                    </TETooltip>
                  </td>
                  <td className="">
                    <TETooltip title={`${((formatUnits(token?.worthUsei, 6) * 100) / totalValue)?.toFixed(2)}%`}>
                      {token?.worthUsei && totalValue !== 0
                        ? `${((formatUnits(token?.worthUsei, 6) * 100) / totalValue)?.toFixed(2)}%`
                        : '--'}
                    </TETooltip>
                  </td>
                  <td className=" overflow-hidden overflow-ellipsis">
                    <div>
                      {token?.amount && token?.worthUsei
                        ? `${(formatUnits(token?.worthUsei, 6) / formatUnits(token.amount, token.decimals))?.toFixed(
                            6
                          )} SEI`
                        : '--'}
                    </div>
                  </td>
                  <td className="">{info?.rank && info?.rank !== null ? info?.rank?.toFixed(2) : '--'}</td>
                  <td className="">
                    <div>{token?.price ? `${Number(token.price)?.toFixed(2)} $` : '--'}</div>
                  </td>
                  <td className="">
                    <div>
                      {info?.fee && info?.fee !== null ? `${Number(info.fee)?.toFixed(2)} ${crypto?.symbol}` : '--'}
                    </div>
                  </td>
                  <td className=" overflow-hidden overflow-ellipsis">
                    <div>
                      {token?.floor && token?.floor !== null
                        ? `${Number(token.floor * token.userHoldingAmount)?.toFixed(2)} ${crypto?.symbol}`
                        : '--'}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex flex-col gap-[4px]">
                      <div>
                        <Typography>
                          {info?.unrealizedGains && info?.unrealizedGains !== null
                            ? `${Number(info.unrealizedGains).toFixed(2)} ${crypto?.symbol}`
                            : '--'}
                        </Typography>
                        <Typography className={percentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                          {token?.sinceTrade && token?.sinceTrade !== null ? `${formattedPercentageChange}` : '--'}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={` ${percentageChange < 0 ? 'text-warning-300' : 'text-green'}`}>
                    {token?.sinceTrade && token?.sinceTrade !== null ? `${formattedPercentageChange}` : '--'}
                  </td>
                  <td className="">
                    {token && token?.holdingTime !== null
                      ? token?.holdingTime
                        ? `${token?.holdingTime} d`
                        : '--'
                      : '--'}
                  </td>
                  <td className="">
                    {token?.link && token?.link !== null ? (
                      <Link
                        className="flex flex-col items-center justify-center"
                        href={token && token?.link}
                        target={`${token ? (token?.link !== '' && token?.link !== null ? '_blank' : '') : ''}`}
                      >
                        <div className="rounded-[8px] bg-black225_05 p-1">
                          <LinkIcon />
                        </div>
                      </Link>
                    ) : (
                      '--'
                    )}
                  </td>
                  <td className="">
                    <div className="flex !w-full justify-end" onChange={() => handleCheckboxChange(token?.demon)}>
                      <Checkbox checked={checkboxes.includes(token?.demon)} />
                    </div>{' '}
                  </td>
                </tr>
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
      {tabName !== 2 && data && data?.length > 0 && !loading ? (
        <tfoot>
          <tr>
            <td colSpan={2}>
              <div className="flex !w-full items-center justify-between">
                <Typography>Total</Typography>
                <div className="flex items-center justify-center gap-4">
                  <Typography>
                    <span className="flex items-center justify-center gap-1">
                      <InfoIcons /> Tokens: {footerData?.nftTotal}
                    </span>
                    <Typography className={TotalpercentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                      {TotalFormattedPercentageChange}
                    </Typography>
                  </Typography>
                  <Typography>
                    NFT: {footerData?.nftTotal}
                    <Typography className={TotalpercentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                      {TotalFormattedPercentageChange}
                    </Typography>
                  </Typography>
                </div>
              </div>
            </td>
            {/* <td></td> */}
            {/* <td></td> */}
            <td>
              {/* {TotalWeight.toFixed(5)} */}
              <div className="tooltip !w-[60px]">
                <TETooltip title={TotalWeight}>{TotalWeight ? TotalWeight.toFixed(2) + '%' : '--'}</TETooltip>
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
                {TotalBuyPrice.toFixed(2)} {crypto?.symbol}
              </Typography>
            </td>
            <td>
              {TotalFee.toFixed(2)} {crypto?.symbol}
            </td>
            <td>
              {TotalFloorValue} {crypto?.symbol}
            </td>
            <td>
              <Typography className="">
                <Typography>
                  {TotalUnRealizedGains.toFixed(2)} {crypto?.symbol}
                </Typography>
                <Typography className={TotalpercentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                  {TotalFormattedPercentageChange}
                </Typography>
              </Typography>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      ) : (
        <></>
      )}
    </table>
  )
}

export default HoldingTable
