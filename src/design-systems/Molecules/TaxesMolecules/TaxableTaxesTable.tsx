/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import Image from 'next/image'
import React, { useState } from 'react' // Import the props interface
import { TECollapse, TETooltip } from 'tw-elements-react'
import Link from 'next/link'
import { FiInfo } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'

import TableProps from '../IndexTable/interface'
import { TableSkeletan } from '../Skeletan/TableSkeletan'

import { BookMarkEmpty, InfoIcons, LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Checkbox } from 'design-systems/Atoms/CheckBox'
import { IMG } from 'assets/images'
import { NoData } from 'design-systems/Atoms/NoData'

const TaxableTaxesTable: React.FC<TableProps> = ({ data, headData, footerData, loading }) => {
  const [checkboxes, setCheckboxes] = useState<any>([])
  const [activeElement, setActiveElement] = useState<string>('')
  const ADA = 1000000
  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement('')
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
  const TotalIncome = footerData?.totalIncome / ADA
  const TotalRealiste = footerData?.totalRealizedGain / ADA
  return (
    <table className="rounded-corners h-full w-full  font-Lexend">
      <thead>
        <tr>
          {/* <th>
            <BookMarkEmpty />
          </th> */}
          {headData?.map((item: any, key: number) => {
            return (
              <th key={key}>
                <div className="flex items-center justify-center gap-2">
                  {key === 0 && (
                    <div className="mr-12 flex items-center">
                      <BookMarkEmpty />
                      {/* <IconAtom alt={''} className="flex-shrink-0" height={10} src={scrollIcon} width={6} /> */}
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
          <th>
            <div className="flex h-full !w-full items-center justify-end gap-2">
              <div className="flex h-full items-center justify-end gap-2">
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
            const Income = item.income / ADA
            const SinceTrade = Number(item?.sinceTrade) / ADA
            const Fee = item?.fee / ADA
            const Grain = item?.realizedGains / ADA
            const date = new Date(item.confirmedAt)

            const year = date.getFullYear().toString().slice(-2) // Get the last two digits of the year
            const month = ('0' + (date.getMonth() + 1)).slice(-2) // Add leading zero if needed
            const day = ('0' + date.getDate()).slice(-2) // Add leading zero if needed

            const formattedDate = year + '.' + month + '.' + day
            return (
              <>
                <tr className="cursor-pointer">
                  {/* <td>
                  {' '}
                  <div className="flex gap-2">
                    <BookMarkEmpty />
                    <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
                      <RightArrowIcons />
                    </div>
                  </div>
                </td> */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <BookMarkEmpty />
                        <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
                          <RightArrowIcons />
                        </div>
                      </div>
                      {item.thumbnail !== null ? (
                        <Image
                          alt={'IMG'}
                          className="rounded-[4px] rounded-ee-[10px] rounded-ss-[10px]"
                          height={48}
                          src={item.thumbnail}
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
                      <Typography className="w-max">{item ? item.name || '--' : '--'}</Typography>
                    </div>
                  </td>
                  <td>{item?.amount}</td>
                  <td>{item?.sellPrice ? item?.sellPrice : '--'}</td>
                  <td>
                    <Typography>
                      <Typography>{`${Income.toFixed(3)} ₳`}</Typography>
                      <Typography className={item?.sinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                        <TETooltip title={SinceTrade}>
                          {item?.sinceTrade ? SinceTrade.toFixed(3) + '%' : '--'}
                        </TETooltip>
                      </Typography>
                    </Typography>
                  </td>
                  <td>
                    <div className="flex w-full justify-center">{item?.fee ? `${Fee.toFixed(3)} ₳` : '--'}</div>
                  </td>
                  <td>
                    <Typography>
                      <Typography>{`${Grain.toFixed(3)} ₳`}</Typography>
                      <Typography className={item?.sinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                        <TETooltip title={SinceTrade}>
                          {item?.sinceTrade ? SinceTrade.toFixed(3) + '%' : '--'}
                        </TETooltip>
                      </Typography>
                    </Typography>
                  </td>
                  <td>{item.confirmedAt ? formattedDate : '--'}</td>
                  <td>
                    {item?.link ? (
                      <Link
                        className="flex flex-col items-center justify-center"
                        href={item && item?.link}
                        target={`${item ? (item?.link !== '' ? '_blank' : '') : ''}`}
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
                    {item.innerData &&
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
                      ))}
                  </TECollapse>
                </tr>
              </>
            )
          })}
        {data && data?.length < 0 && (
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
      {data?.length > 0 && !loading && (
        <tfoot>
          <tr>
            {/* <td>Total</td>
          <td>
            <Typography>
              <span className="flex items-center justify-center gap-1">
                <InfoIcons /> Tokens: {footerData?.nftTotal}
              </span>
              <Typography className={TotalSinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                {TotalSinceTrade.toFixed(2) + '%'}
              </Typography>
            </Typography>
          </td>
          <td>
            <Typography>
              NFT: {footerData?.nftTotal}
              <Typography className={TotalSinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                {TotalSinceTrade.toFixed(2) + '%'}
              </Typography>
            </Typography>
          </td> */}
            <td colSpan={2}>
              <div className="flex !w-full items-center justify-between">
                <Typography>Total</Typography>
                <div className="flex gap-4">
                  <Typography>
                    <span className="flex items-center justify-center gap-1">
                      <InfoIcons /> Tokens: {footerData?.nftTotal}
                    </span>
                    <Typography className={TotalSinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                      {TotalSinceTrade.toFixed(2) + '%'}
                    </Typography>
                  </Typography>
                  <Typography>
                    NFT: {footerData?.nftTotal}
                    <Typography className={TotalSinceTrade < 0 ? 'text-warning-300' : 'text-green'}>
                      {TotalSinceTrade.toFixed(2) + '%'}
                    </Typography>
                  </Typography>
                </div>
              </div>
            </td>
            <td>
              {/* {TotalWeight.toFixed(5)} */}
              {/* <div className="tooltip !w-[60px]">
              <TETooltip title={`${TotalBuyPrice} ₳`}>
                {TotalBuyPrice ? TotalBuyPrice.toFixed(2) + '₳' : '--'}
              </TETooltip>
             
            </div> */}
            </td>
            <td>
              <TETooltip title={`${TotalFee} ₳`}>{TotalFee ? TotalFee.toFixed(3) + '₳' : '--'}</TETooltip>
            </td>
            <td>
              <TETooltip title={`${TotalIncome} ₳`}>{TotalIncome ? TotalIncome.toFixed(3) + '₳' : '--'}</TETooltip>
            </td>
            <td>{/* <Typography className="w-max">{TotalRealiste?.toFixed(2)} ₳</Typography> */}</td>
            <td></td>
            <td></td>
            <td>{footerData?.totalHolding && footerData?.totalHolding}</td>
          </tr>
        </tfoot>
      )}
    </table>
  )
}

export default TaxableTaxesTable
