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

import { TableSkeletan } from '../Skeletan/TableSkeletan'

import { Checkbox } from 'design-systems/Atoms/CheckBox'
import { BookMarkEmpty, InfoIcons, LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { cryptoProps } from 'lib/redux/slices/navToggleSlice/interface'
import { NoData } from 'design-systems/Atoms/NoData'
import BookMarkButton from '../Table/BookMarkButton'

interface HoldingIndexTableProps {
  data: NFTData['data']
  headData: any[]
  loading?: boolean
  footerData?: Omit<NFTData, 'data'>
  crypto: cryptoProps
}

const HoldingIndexTable: React.FC<HoldingIndexTableProps> = ({ data, headData, footerData, crypto, loading }) => {
  const [activeElement, setActiveElement] = useState<number>(-1)
  const [checkboxes, setCheckboxes] = useState<any>([])
  const ADA = crypto.value
  const TotalBuyPrice = footerData && footerData?.totalBuyPrice / ADA
  const TotalFee = footerData && footerData?.totalFee / ADA
  const TotalIncome = footerData && footerData?.totalIncome / ADA
  const TotalUnRealizedGains = footerData && footerData?.totalUnRealizedGains / ADA
  const TotalSinceTrade = footerData && footerData?.totalSinceTrade / ADA
  const TotalWeight = footerData && footerData?.totalWeight / ADA

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
            data?.map((item, index: number) => {
              const Floor = item?.floor / ADA
              const BuyPrice = item?.buyPrice / ADA
              const Fees = item?.fee / ADA
              const Income = item?.income / ADA
              const RealisedGain = item?.realizedGains / ADA
              const SinceTrade = item?.sinceTrade / ADA
              return (
                <>
                  <tr className="cursor-pointer bg-[#181620]">
                    {/* <td className="">
                    <div className="flex">
                      <BookMarkEmpty />
                      <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
                        <RightArrowIcons />
                      </div>
                    </div>
                  </td> */}
                    <td>
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
                          <Image
                            alt={'IMG'}
                            className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                            height={48}
                            src={item.thumbnail ? item.thumbnail : '/images/placeholder.png'}
                            style={{ objectFit: 'cover' }}
                            width={48}
                          />
                          <Typography className="w-max">{item.name ? item.name : '--'}</Typography>
                        </Link>
                      </div>
                    </td>
                    <td className="!w-[20px] !overflow-hidden !overflow-ellipsis">
                      {item?.amount ? item?.amount : '--'}
                    </td>
                    <td className="w-[40px] overflow-hidden overflow-ellipsis">
                      <TETooltip title={`${item?.weight}%`}>
                        {item?.weight ? `${item?.weight.toFixed(3)}%` : '--'}
                      </TETooltip>
                    </td>
                    <td className="w-[100px] overflow-hidden overflow-ellipsis">
                      <TETooltip title={`${Floor} ₳`}>
                        <Typography className="w-max">
                          {item?.floor ? `${Floor.toFixed(3)} ${crypto.symbol}` : '--'}
                        </Typography>
                      </TETooltip>
                    </td>
                    <td>{item.rarity ? item.rarity : '--'}</td>
                    <td>
                      <TETooltip title={`${BuyPrice} ${crypto.symbol}`}>
                        <Typography className="w-max">
                          {item.buyPrice ? `${BuyPrice.toFixed(3)} ${crypto.symbol}` : '--'}
                        </Typography>
                      </TETooltip>
                    </td>
                    <td>
                      <Typography>{item.fee ? `${Fees.toFixed(3)} ${crypto.symbol}` : '--'}</Typography>{' '}
                    </td>
                    <td className="w-[100px] overflow-hidden overflow-ellipsis">
                      <Typography>{item?.income ? `${Income.toFixed(3)} ${crypto.symbol}` : '--'}</Typography>
                    </td>
                    <td>
                      <div className="flex flex-col gap-[4px]">
                        <Typography>
                          {item?.realizedGains ? `${RealisedGain.toFixed(3)} ${crypto.symbol}` : '--'}
                        </Typography>
                        {item?.sinceTradePercent ? (
                          <Typography className={item?.sinceTradePercent < 0 ? 'text-warning-300' : 'text-green'}>
                            {item?.sinceTradePercent.toFixed(2) + '%'}
                          </Typography>
                        ) : (
                          '--'
                        )}
                      </div>
                    </td>
                    <td>
                      <TETooltip title={`${item?.sinceTrade}%`}>
                        <Typography className={item?.sinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                          {item?.sinceTrade ? item?.sinceTrade?.toFixed(2) + '%' : '--'}
                        </Typography>
                      </TETooltip>
                    </td>
                    <td>{item.holdingTime ? `${item.holdingTime} d` : '--'}</td>
                    <td>
                      <Link className="flex flex-col items-center justify-center" href={item.link ? item.link : ''}>
                        <div className="rounded-[8px] bg-black225_05 p-1">
                          <LinkIcon />
                        </div>
                      </Link>
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
                      {/* {item.innerData &&
                      item.innerData?.map((res: any, index: number) => (
                        <>
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
                        </>
                      ))} */}
                    </TECollapse>
                  </tr>
                </>
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
