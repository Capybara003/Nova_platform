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

import { Checkbox } from 'design-systems/Atoms/CheckBox'
import { BookMarkEmpty, BookMarkFill, InfoIcons, LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { useDataSelector } from 'lib/redux/store'
import { IMG } from 'assets/images'
import { NoData } from 'design-systems/Atoms/NoData'
import BookMarkButton from '../Table/BookMarkButton'

const HoldingTable: React.FC<TableProps> = ({ data, headData, loading, footerData, crypto }) => {
  const [activeElement, setActiveElement] = useState<string>('')
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([])
  const [checkboxes, setCheckboxes] = useState<any>([])
  const ADA = crypto?.value || 0
  const baseValue = 100
  const NftTotal = footerData?.nftTotal / ADA
  const TotalAmount = footerData?.totalAmount / ADA
  const TotalWeight = footerData?.totalWeight / ADA
  const TotalFloorPrice = footerData?.totalFloorPrice / ADA
  const TotalRarity = footerData?.totalRarity / ADA
  const TotalBuyPrice = footerData?.totalBuyPrice / ADA
  const TotalFee = footerData?.totalFee / ADA
  const TotalFloorValue = footerData?.totalFloorValue / ADA
  const TotalUnRealizedGains = footerData?.totalUnRealizedGains / ADA
  const TotalSinceTrade = footerData?.totalSinceTrade / ADA
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
                <div className={`flex !w-full items-center ${key === 0 ? 'justify-start' : 'justify-center'} gap-2`}>
                  {key === 0 && (
                    <Typography className="mr-12">
                      <BookMarkButton isActive={true} />
                    </Typography>
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
          data?.map((item: any, index: any) => {
            const Floor = item?.floor / ADA
            const BuyPrice = item.buyPrice / ADA
            const Fees = item.fee / ADA
            const FloorValue = item?.floorValue / ADA
            const UnRealizedGains = item?.unrealizedGains / ADA
            const SinceTrade = item?.sinceTrade / ADA

            const percentageChange = (SinceTrade - baseValue) / baseValue
            const formattedPercentageChange = `${
              (percentageChange >= 0 ? '+' : '') +
              percentageChange
                .toFixed(2)
                .replace('.', ',')
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }%`

            if (tabName === 2) {
              if (!item?.asset?.includes(crypto?.label)) return <></>
              return (
                <React.Fragment key={index}>
                  <tr className="cursor-pointer">
                    <td className="">
                      <>
                        <div className="flex items-center justify-center gap-2">
                          <div onClick={() => handleBookMark(item?.id)}>
                            {bookmarkedItems.includes(item?.id) ? (
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
                                asset_name: item?.name && item?.name !== null ? item?.name : '',
                                // item?.assetNameAscii,
                                policy: item?.policy && item?.policy !== null ? item?.policy : '',
                                current_value: item?.id && item?.id !== null ? item?.id : '',
                              }, // Add your custom props as query parameters
                            }}
                          >
                            <Image
                              alt={'IMG'}
                              className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                              height={48}
                              src={'/cardano-logo.jpg'}
                              width={48}
                            />
                            ADA {item.type ? `(${item.type})`.toUpperCase() : ''}
                          </Link>
                        </div>
                      </>
                    </td>
                    <td className="">
                      <TETooltip title={item?.free}>
                        {item?.free ? `${parseInt(item?.free).toFixed(2)}%` : '--'}
                      </TETooltip>
                    </td>
                    <td className="">
                      <TETooltip title={item?.size}>{item?.size ? parseInt(item?.size).toFixed(2) : '--'}</TETooltip>
                    </td>
                    <td className=" overflow-hidden overflow-ellipsis">
                      <div>{item?.floor ? `${Number(item.floor)?.toFixed(2)} $` : '--'}</div>
                    </td>
                    <td className="">{item?.rarity && item?.rarity !== null ? item?.rarity?.toFixed(2) : '--'}</td>
                    <td className="">
                      <div>{item?.price ? `${Number(item.price)?.toFixed(2)} $` : '--'}</div>
                    </td>
                    <td className="">
                      <div>
                        {item?.fee && item?.fee !== null ? `${Number(Fees)?.toFixed(2)} ${crypto?.symbol}` : '--'}
                      </div>
                    </td>
                    <td className=" overflow-hidden overflow-ellipsis">
                      <div>
                        {item?.floorValue && item?.floorValue !== null
                          ? `${Number(FloorValue)?.toFixed(2)} ${crypto?.symbol}`
                          : '--'}
                      </div>
                    </td>
                    <td className="">
                      <div className="flex flex-col gap-[4px]">
                        <div>
                          <Typography>
                            {item?.unrealizedGains && item?.unrealizedGains !== null
                              ? `${Number(UnRealizedGains).toFixed(2)} ${crypto?.symbol}`
                              : '--'}
                          </Typography>
                          <Typography className={percentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                            {item?.sinceTrade && item?.sinceTrade !== null ? `${formattedPercentageChange}` : '--'}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={` ${percentageChange < 0 ? 'text-warning-300' : 'text-green'}`}>
                      {item?.sinceTrade && item?.sinceTrade !== null ? `${formattedPercentageChange}` : '--'}
                    </td>
                    <td className="">
                      {item && item?.holdingTime !== null
                        ? item?.holdingTime
                          ? `${item?.holdingTime} d`
                          : '--'
                        : '--'}
                    </td>
                    <td className="">
                      {item?.link && item?.link !== null ? (
                        <Link
                          className="flex flex-col items-center justify-center"
                          href={item && item?.link}
                          target={`${item ? (item?.link !== '' && item?.link !== null ? '_blank' : '') : ''}`}
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
                  {/* <td className="">
                  <div className="flex">
                    <div onClick={() => handleBookMark(item?.id)}>
                      {bookmarkedItems.includes(item?.id) ? (
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
                  </div>
                </td> */}
                  <td>
                    <div className="flex items-center justify-center gap-2">
                      <div onClick={() => handleBookMark(item?.id)}>
                        {bookmarkedItems.includes(item?.id) ? (
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
                        className="flex items-center gap-3 text-ellipsis"
                        href={{
                          pathname: '/single-collection-trades',
                          query: {
                            asset_name: item?.name && item?.name !== null ? item?.name : '',
                            // item?.assetNameAscii,
                            policy: item?.policy && item?.policy !== null ? item?.policy : '',
                            current_value: item?.id && item?.id !== null ? item?.id : '',
                          }, // Add your custom props as query parameters
                        }}
                      >
                        {item?.thumbnail && item?.thumbnail !== null ? (
                          <Image
                            alt={'IMG'}
                            className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                            height={48}
                            src={item?.thumbnail}
                            width={48}
                          />
                        ) : (
                          <Image
                            alt={'IMG'}
                            className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                            height={48}
                            src={IMG.Nova}
                            width={48}
                          />
                        )}
                        <Typography className="w-max">
                          {item?.name && item?.name !== null ? item?.name || '--' : '--'}
                        </Typography>
                      </Link>
                    </div>
                  </td>
                  <td className="">{item?.amount && item?.amount !== null ? item?.amount : '--'}</td>
                  <td>
                    <div className="tooltip !w-[60px]">
                      <TETooltip title={item?.weight}>
                        {item?.weight !== undefined && item?.weight !== null ? `${item?.weight?.toFixed(2)}%` : '--'}
                      </TETooltip>
                      {/* <div className=" overflow-hidden text-ellipsis whitespace-nowrap">
                    </div>
                    <span className="tooltiptext">
                      {item?.weight !== undefined && item?.weight !== null ? `${item?.weight}%` : '--'}
                    </span> */}
                    </div>
                  </td>
                  <td className="overflow-hidden overflow-ellipsis">
                    <div>
                      <TETooltip title={Floor}>
                        {item?.floor !== undefined && item?.floor !== null
                          ? `${Number(Floor)?.toFixed(2)} ${crypto?.symbol}`
                          : '--'}
                      </TETooltip>
                    </div>
                  </td>
                  <td>{item?.rarity && item?.rarity !== null ? item?.rarity?.toFixed(2) : '--'}</td>
                  <td>
                    <div>
                      <TETooltip title={BuyPrice}>
                        {BuyPrice ? `${Number(BuyPrice)?.toFixed(2)} ${crypto?.symbol}` : '--'}
                      </TETooltip>
                    </div>
                  </td>
                  <td>
                    <div>
                      {item?.fee && item?.fee !== null ? `${Number(Fees)?.toFixed(2)} ${crypto?.symbol}` : '--'}
                    </div>
                  </td>
                  <td className="w-[100px] overflow-hidden overflow-ellipsis">
                    <div>
                      {item?.floorValue && item?.floorValue !== null
                        ? `${Number(FloorValue)?.toFixed(2)} ${crypto?.symbol}`
                        : '--'}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col gap-[4px]">
                      <div>
                        <Typography>
                          {item?.unrealizedGains && item?.unrealizedGains !== null
                            ? `${Number(UnRealizedGains).toFixed(2)} ${crypto?.symbol}`
                            : '--'}
                        </Typography>
                        <Typography className={percentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                          {item?.sinceTrade && item?.sinceTrade !== null ? `${formattedPercentageChange}` : '--'}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={percentageChange < 0 ? 'text-warning-300' : 'text-green'}>
                    <TETooltip title={formattedPercentageChange}>
                      <Typography>
                        {item?.sinceTrade && item?.sinceTrade !== null ? `${formattedPercentageChange}` : '--'}
                      </Typography>
                    </TETooltip>
                  </td>
                  <td>
                    {item && item?.holdingTime !== null ? (item?.holdingTime ? `${item?.holdingTime} d` : '--') : '--'}
                  </td>
                  <td>
                    {item?.link && item?.link !== null ? (
                      <Link
                        className="flex flex-col items-center justify-center"
                        href={item && item?.link}
                        target={`${item ? (item?.link !== '' && item?.link !== null ? '_blank' : '') : ''}`}
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
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(item.id, e)}
                    >
                      <Checkbox checked={checkboxes.includes(item.id)} />
                    </div>{' '}
                  </td>
                </tr>
                <tr>
                  <TECollapse
                    className=" Collapse !mt-0 !rounded-b-none text-left !shadow-none"
                    show={activeElement === index}
                  >
                    {item?.innerData &&
                      item?.innerData?.map((res: any, index: number) => (
                        <React.Fragment key={index}>
                          <tbody>
                            <tr className="flex w-full items-center" key={index}>
                              <td></td>
                              <td className="text-black7f">AirDrop</td>
                              <td>
                                <Image alt={'IMG'} src={res?.airdrop?.StakeIMG} />
                              </td>
                              <td>{res?.airdrop?.StakeName}</td>
                            </tr>
                            <tr className="flex w-full items-center" key={index}>
                              <td></td>
                              <td className="text-black7f">Mint</td>
                              <td>
                                <Image alt={'IMG'} src={res?.mint?.StakeIMG} />
                              </td>
                              <td>{res?.mint?.StakeName}</td>
                            </tr>
                            <tr className="flex w-full items-center" key={index}>
                              <td></td>
                              <td className="text-black7f">Yield Farming</td>
                              <td>
                                <Image alt={'IMG'} src={res?.yieldFarming?.StakeIMG} />
                              </td>
                              <td>{res?.yieldFarming?.StakeName}</td>
                            </tr>
                          </tbody>
                        </React.Fragment>
                      ))}
                  </TECollapse>
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
