/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react' // Import the props interface
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

const HoldingTable: React.FC<TableProps> = ({ data, headData, loading, footerData, crypto }) => {
  const [activeElement, setActiveElement] = useState<string>('')
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([])
  const [checkboxes, setCheckboxes] = useState<any>([])
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
  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement('')
    } else {
      setActiveElement(value)
    }
  }
  const { tabName } = useDataSelector('toggle')
  const handleBookMark = (id: number) => {
    // Check if the item is already bookmarked
    if (bookmarkedItems.includes(id)) {
      // If bookmarked, remove it from the list
      setBookmarkedItems(bookmarkedItems.filter(item => item !== id))
    } else {
      // If not bookmarked, add it to the list
      setBookmarkedItems([...bookmarkedItems, id])
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
    <table className="rounded-corners w-full rounded-sm font-Lexend">
      {' '}
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
                      <BookMarkButton isActive={true} />
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
          data?.map((collection: any, index: any) => {
            const info =
              collection?.userHoldingNfts &&
              collection?.userHoldingNfts?.reduce((acc: any, nft: any) => {
                acc.rank = (acc.rank || 0) + nft?.rarity?.rank || 0
                acc.buyPrice = (acc.buyPrice || 0) + nft?.buyPrice?.amount / SEI || 0
                acc.estFee = (acc.estFee || 0) + nft?.estFee?.amount / SEI || 0
                acc.unrealizedGains = (acc.unrealizedGains || 0) + nft?.unrealizedGains?.amount / SEI || 0
                acc.holdingTime = (acc.holdingTime || 0) + nft?.holdingTime || 0
                return acc
              }, {})

            const SinceTrade = collection?.sinceTrade / SEI

            const percentageChange = (SinceTrade - baseValue) / baseValue
            const formattedPercentageChange = `${
              (percentageChange >= 0 ? '+' : '') +
              percentageChange
                .toFixed(2)
                .replace('.', ',')
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }%`

            if (tabName === 2) {
              if (!collection?.asset?.includes(crypto?.label)) return <></>
              return (
                <React.Fragment key={index}>
                  <tr className="cursor-pointer">
                    <td className="min-w-[230px]">
                      <>
                        <div className="flex items-center justify-center gap-2">
                          <div onClick={() => handleBookMark(collection?.seiAddress)}>
                            {bookmarkedItems.includes(collection?.seiAddress) ? (
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
                            className={`${activeElement === index ? 'rotate-90' : ''}`}
                            onClick={() => handleClick(index)}
                          >
                            <RightArrowIcons />
                          </div>

                          <Link
                            className="flex items-center gap-3 text-ellipsis"
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
                            <Image
                              alt={'IMG'}
                              className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                              height={48}
                              src={collection?.pfp}
                              width={48}
                            />
                            SEI {collection.type ? `(${collection.type})`.toUpperCase() : ''}
                          </Link>
                        </div>
                      </>
                    </td>
                    <td className="">
                      <TETooltip title={collection?.free}>
                        {collection?.free ? `${parseInt(collection?.free).toFixed(2)}%` : '--'}
                      </TETooltip>
                    </td>
                    <td className="">
                      <TETooltip title={collection?.size}>
                        {collection?.size ? parseInt(collection?.size).toFixed(2) : '--'}
                      </TETooltip>
                    </td>
                    <td className=" overflow-hidden overflow-ellipsis">
                      <div>{collection?.floor ? `${Number(collection.floor)?.toFixed(2)} $` : '--'}</div>
                    </td>
                    <td className="">{info?.rank && info?.rank !== null ? info?.rank?.toFixed(2) : '--'}</td>
                    <td className="">
                      <div>{collection?.price ? `${Number(collection.price)?.toFixed(2)} $` : '--'}</div>
                    </td>
                    <td className="">
                      <div>
                        {info?.fee && info?.fee !== null ? `${Number(info.fee)?.toFixed(2)} ${crypto?.symbol}` : '--'}
                      </div>
                    </td>
                    <td className=" overflow-hidden overflow-ellipsis">
                      <div>
                        {collection?.floor && collection?.floor !== null
                          ? `${Number(collection.floor * collection.userHoldingAmount)?.toFixed(2)} ${crypto?.symbol}`
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
                            {collection?.sinceTrade && collection?.sinceTrade !== null
                              ? `${formattedPercentageChange}`
                              : '--'}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={` ${percentageChange < 0 ? 'text-warning-300' : 'text-green'}`}>
                      {collection?.sinceTrade && collection?.sinceTrade !== null
                        ? `${formattedPercentageChange}`
                        : '--'}
                    </td>
                    <td className="">
                      {collection && collection?.holdingTime !== null
                        ? collection?.holdingTime
                          ? `${collection?.holdingTime} d`
                          : '--'
                        : '--'}
                    </td>
                    <td className="">
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
                    <td className="">
                      <div className="flex !w-full justify-end">
                        <Checkbox />
                      </div>{' '}
                    </td>
                  </tr>
                  {index === 1 && (
                    <tr>
                      <td className="!border-0 !border-b-0 !p-0" colSpan={headData.length + 1}>
                        <TECollapse
                          className="Collapse !mt-0 !w-full !rounded-b-none text-left !shadow-none"
                          show={activeElement === index}
                        >
                          <div className="px-2 py-1">
                            <table className="w-full">
                              <tbody>
                                {footerData.transData &&
                                  footerData.transData.map((item: any, key: number) => {
                                    return (
                                      <tr key={item?.id}>
                                        <td className="w-[12%]">{item.details.title}</td>
                                        <td className="">{item.amount.amount}</td>
                                        <td className="">{item.weight.toFixed(3)}</td>
                                        <td className="">--</td>
                                        <td className="">--</td>
                                        <td className="">{item?.advancedTradeFill?.fillPrice}</td>
                                        <td className="">{item?.network?.transactionFee?.amount}</td>
                                        <td className=""></td>
                                        <td className="">{item?.gain?.toFixed(3)}</td>
                                        <td className=""></td>
                                        <td className=""></td>
                                        <td className="">
                                          {item && item?.network?.transactionUrl && (
                                            <Link
                                              className="flex flex-col items-center justify-center"
                                              href={(item && item?.network?.transactionUrl) || ''}
                                              target={`${
                                                item
                                                  ? item?.network?.transactionUrl !== '' &&
                                                    item?.network?.transactionUrl !== null
                                                    ? '_blank'
                                                    : ''
                                                  : ''
                                              }`}
                                            >
                                              <div className="rounded-[8px] bg-black225_05 p-1">
                                                <LinkIcon />
                                              </div>
                                            </Link>
                                          )}
                                        </td>
                                        <td className=""></td>
                                      </tr>
                                    )
                                  })}
                              </tbody>
                            </table>
                          </div>
                        </TECollapse>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              )
            }
            return (
              <React.Fragment key={index}>
                <tr className="cursor-pointer">
                  <td className="min-w-[230px]">
                    <div className="flex items-center justify-center gap-2">
                      <div onClick={() => handleBookMark(collection?.id)}>
                        {bookmarkedItems.includes(collection?.id) ? (
                          <div>
                            <BookMarkFill />
                          </div>
                        ) : (
                          <div>
                            <BookMarkEmpty />
                          </div>
                        )}
                      </div>
                      <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
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
                            src={collection?.pfp}
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
                    {collection?.userHoldingAmount && collection?.userHoldingAmount !== null
                      ? collection?.userHoldingAmount
                      : '--'}
                  </td>
                  <td>
                    <div className="tooltip !w-[60px]">
                      <TETooltip title={collection?.weight}>
                        {collection?.weight !== undefined && collection?.weight !== null
                          ? `${collection?.weight?.toFixed(2)}%`
                          : '--'}
                      </TETooltip>
                    </div>
                  </td>
                  <td className="overflow-hidden overflow-ellipsis">
                    <div>
                      <TETooltip title={collection?.floor}>
                        {collection?.floor !== undefined && collection?.floor !== null
                          ? `${Number(collection.floor)?.toFixed(2)} ${crypto?.symbol}`
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
                      {collection?.floor && collection?.floor !== null
                        ? `${Number(collection.floor * collection.userHoldingAmount)?.toFixed(2)} ${crypto?.symbol}`
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
                  <td>
                    {collection && collection?.holdingTime !== null
                      ? collection?.holdingTime
                        ? `${collection?.holdingTime} d`
                        : '--'
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
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCheckboxChange(collection?.seiAddress, e)
                      }
                    >
                      <Checkbox checked={checkboxes.includes(collection?.seiAddress)} />
                    </div>{' '}
                  </td>
                </tr>
                {collection?.userHoldingNfts &&
                  collection?.userHoldingNfts?.map((nft: any) => (
                    <tr className={`${activeElement === index ? 'table-row' : 'hidden'} cursor-pointer`} key={nft.key}>
                      <td className="!p-0">
                        <div className="flex w-full items-center">
                          <div className="w-[100px] !pl-0 text-center text-[14px] text-black7f">
                            {nft?.status?.status}
                          </div>
                          <div className="w-[40px] !px-0">
                            <Image alt={'IMG'} height={40} src={nft?.imageLink} width={40} />
                          </div>
                          <div className="w-[90px] !px-0 text-center">{nft?.name}</div>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td className="overflow-hidden overflow-ellipsis">
                        <div>
                          {nft?.floor !== undefined && nft?.floor !== null
                            ? `${Number(nft.floor)?.toFixed(2)} ${crypto?.symbol}`
                            : '--'}
                        </div>
                      </td>
                      <td>{nft?.rarity?.rank && nft?.rarity?.rank !== null ? nft?.rarity?.rank : '--'}</td>
                      <td>
                        <div>
                          <TETooltip title={info.buyPrice}>
                            {nft?.buyPrice?.amount
                              ? `${Number(nft?.buyPrice?.amount / SEI)?.toFixed(2)} ${crypto?.symbol}`
                              : '--'}
                          </TETooltip>
                        </div>
                      </td>
                      <td>
                        <div>
                          {nft?.estFee && nft?.estFee !== null
                            ? `${Number(nft?.estFee.amount / SEI)?.toFixed(2)} ${crypto?.symbol}`
                            : '--'}
                        </div>
                      </td>
                      <td className="w-[100px] overflow-hidden overflow-ellipsis">
                        <div>
                          {nft?.floor && nft?.floor !== null
                            ? `${Number(nft.floor)?.toFixed(2)} ${crypto?.symbol}`
                            : '--'}
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col gap-[4px]">
                          <div>
                            <Typography>
                              {nft?.unrealizedGains && nft?.unrealizedGains !== null
                                ? `${Number(nft?.unrealizedGains.amount / SEI).toFixed(2)} ${crypto?.symbol}`
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
                        {collection && collection?.holdingTime !== null
                          ? collection?.holdingTime
                            ? `${collection?.holdingTime} d`
                            : '--'
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
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleCheckboxChange(collection?.seiAddress, e)
                          }
                        >
                          <Checkbox checked={checkboxes.includes(collection?.seiAddress)} />
                        </div>{' '}
                      </td>
                      {/* </TECollapse> */}
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
