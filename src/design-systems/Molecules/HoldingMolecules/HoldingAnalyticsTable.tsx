/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react' // Import the props interface
import { TECollapse } from 'tw-elements-react'
import { FiInfo } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'

import TableProps from '../IndexTable/interface'
import BookMarkButton from '../Table/BookMarkButton'

import { LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Checkbox } from 'design-systems/Atoms/CheckBox'
import { IMG } from 'assets/images'
import { formatUSei } from 'utils/formatUnit'

const HoldingAnalyticsTable: React.FC<TableProps> = ({ crypto, data, headData, loading }) => {
  const [activeElement, setActiveElement] = useState<string>('')
  const [checkboxes, setCheckboxes] = useState<any>([])

  const SEI = crypto?.value || 0
  const baseValue = 100

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement('')
    } else {
      setActiveElement(value)
    }
  }

  const handleSelectAllChange = (checked: boolean) => {
    if (checked) {
      const allIds = data.map((item: any) => item.id)
      setCheckboxes(allIds)
    } else {
      setCheckboxes([])
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

  const totalValue = useMemo(() => {
    return (
      data &&
      data.length > 0 &&
      data.reduce((acc: any, item: any) => {
        const info =
          item?.nftsHolding &&
          item?.nftsHolding?.reduce((acc: any, nft: any) => {
            acc = (acc || 0) + formatUSei(nft?.floorPrice) || 0
            return acc
          }, 0)

        acc = (acc || 0) + (info || 0)

        return acc
      }, 0)
    )
  }, [data])

  return (
    <>
      <table className="rounded-corners w-full rounded-sm font-Lexend">
        <thead>
          <tr>
            {headData?.map((item: any, key: number) => {
              return (
                <th key={key} style={{ width: item.width }}>
                  <div className={`flex !w-full items-center gap-2 ${key === 0 ? 'justify-start' : 'justify-center'}`}>
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
                collection?.nftsHolding &&
                collection?.nftsHolding?.reduce((acc: any, nft: any) => {
                  // acc.rank = (acc.rank || 0) + nft?.rarity?.rank || 0
                  acc.buyPrice = (acc.buyPrice || 0) + formatUSei(nft?.buyPrice) || 0
                  acc.estFee = (acc.estFee || 0) + formatUSei(nft?.floorPrice) * nft?.royaltyPercentage * 0.01 || 0
                  acc.unrealizedGains = (acc.unrealizedGains || 0) + formatUSei(nft?.unrealizedGains) || 0
                  acc.holdingTime =
                    (acc.holdingTime || 0) +
                      ((Date.now() - new Date(nft?.ts).getTime()) / (24 * 60 * 60 * 1000)).toFixed(2) || 0
                  acc.floorPrice = (acc.floorPrice || 0) + formatUSei(nft?.floorPrice) || 0
                  return acc
                }, {})
              // info.rank = info.rank / collection?.userHoldingNfts?.length || 0
              info.holdingTime = info.holdingTime / collection?.nftsHolding?.length || 0

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
                <React.Fragment key={index}>
                  <tr className="cursor-pointer">
                    <td className="min-w-[230px]">
                      <div className="flex items-center justify-center gap-2">
                        <BookMarkButton isActive={false} />
                        <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
                          <RightArrowIcons />
                        </div>
                        <div className="flex items-center justify-center gap-[3px]">
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
                          {collection?.name && collection?.name !== null ? collection?.name || '--' : '--'}
                        </div>
                      </div>
                    </td>
                    <td className="!w-[20px] !overflow-hidden !overflow-ellipsis">
                      {collection?.nftsHolding && collection?.nftsHolding !== null
                        ? collection.nftsHolding.length
                        : '--'}
                    </td>
                    <td className="w-[40px] overflow-hidden overflow-ellipsis">
                      {info?.floorPrice !== undefined && totalValue !== 0
                        ? `${((info.floorPrice * 100) / totalValue).toFixed(2)}%`
                        : '--'}
                    </td>
                    <td className="w-[100px] overflow-hidden overflow-ellipsis">
                      {collection?.floorPrice !== undefined && collection?.floorPrice !== null
                        ? `${formatUSei(collection.floorPrice)?.toFixed(2)} ${crypto?.symbol}`
                        : '--'}
                    </td>
                    <td>{info?.rank && info?.rank !== null ? info?.rank : '--'}</td>
                    {/* <td className="w-[100px] overflow-hidden overflow-ellipsis">{item.token}</td> */}
                    <td>{info?.buyPrice ? `${Number(info.buyPrice)?.toFixed(2)} ${crypto?.symbol}` : '--'}</td>
                    <td>
                      {info?.estFee && info?.estFee !== null
                        ? `${Number(info.estFee)?.toFixed(2)} ${crypto?.symbol}`
                        : '--'}
                    </td>
                    <td>
                      {info?.floorPrice && info?.floorPrice !== null
                        ? `${Number(info.floorPrice)?.toFixed(2)} ${crypto?.symbol}`
                        : '--'}
                    </td>
                    <td>
                      {info?.unrealizedGains && info?.unrealizedGains !== null
                        ? `${Number(info.unrealizedGains).toFixed(2)} ${crypto?.symbol}`
                        : '--'}
                    </td>
                    <td className={` ${percentageChange < 0 ? 'text-warning-300' : 'text-green'}`}>
                      {collection?.sinceTrade && collection?.sinceTrade !== null
                        ? `${formattedPercentageChange}`
                        : '--'}
                    </td>
                    <td className="">
                      {info && info?.holdingTime !== null
                        ? info?.holdingTime
                          ? `${info?.holdingTime} d`
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
                  {collection?.nftsHolding &&
                    collection?.nftsHolding?.map((nft: any) => (
                      <tr
                        className={`${activeElement === index ? 'table-row' : 'hidden'} cursor-pointer`}
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
                              ? `${formatUSei(nft.floorPrice)?.toFixed(2)} ${crypto?.symbol}`
                              : '--'}
                          </div>
                        </td>
                        <td>{nft?.rarity?.rank && nft?.rarity?.rank !== null ? nft?.rarity?.rank : '--'}</td>
                        <td>
                          <div>
                            {nft?.buyPrice && nft?.buyPrice !== null
                              ? `${formatUSei(nft.buyPrice)?.toFixed(2)} ${crypto?.symbol}`
                              : '--'}
                          </div>
                        </td>
                        <td>
                          <div>
                            {nft?.royaltyPercentage && nft?.royaltyPercentage !== null
                              ? `${(formatUSei(nft?.floorPrice) * nft?.royaltyPercentage * 0.01).toFixed(2)} ${
                                  crypto?.symbol
                                }`
                              : '--'}
                          </div>
                        </td>
                        <td className="w-[100px] overflow-hidden overflow-ellipsis">
                          <div>
                            {nft?.floorPrice && nft?.floorPrice !== null
                              ? `${formatUSei(nft.floorPrice)?.toFixed(2)} ${crypto?.symbol}`
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
                          <Typography>
                            {collection?.sinceTrade && collection?.sinceTrade !== null
                              ? `${formattedPercentageChange}`
                              : '--'}
                          </Typography>
                        </td>
                        <td>
                          {nft && nft?.ts !== null
                            ? nft?.ts
                              ? `${((Date.now() - new Date(nft?.ts).getTime()) / (24 * 60 * 60 * 1000)).toFixed(2)} d`
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
                    ))}
                </React.Fragment>
              )
            })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>Tokens: 4.000</td>
            <td>NFT: 4.000</td>
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
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default HoldingAnalyticsTable
