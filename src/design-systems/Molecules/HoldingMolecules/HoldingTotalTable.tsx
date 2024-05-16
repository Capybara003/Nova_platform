/* eslint-disable no-constant-condition */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import Image from 'next/image'
import React, { useState } from 'react' // Import the props interface
import { TECollapse } from 'tw-elements-react'
import { FiInfo } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'

import TableProps from '../IndexTable/interface'
import BookMarkButton from '../Table/BookMarkButton'

import { InfoIcons, LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Checkbox } from 'design-systems/Atoms/CheckBox'

const HoldingTotalTable: React.FC<TableProps> = ({ data, headData }) => {
  const [activeElement, setActiveElement] = useState<string>('')

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement('')
    } else {
      setActiveElement(value)
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
                  <div className={`flex !w-full items-center gap-2 ${key === 0 ? 'justify-start' : 'justify-center'}`}>
                    {key === 0 && (
                      <div className="ml-4 mr-16">
                        <BookMarkButton isActive />
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
                  <Checkbox checked={true} />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: any) => (
            <>
              <tr className="cursor-pointer">
                <td className="min-w-[230px]">
                  <div className="flex items-center justify-center gap-2">
                    <BookMarkButton isActive={false} />
                    <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
                      <RightArrowIcons />
                    </div>
                    <div className="flex items-center justify-center gap-[3px]">
                      <Image alt={'IMG'} height={40} src={item.img} width={40} />
                      {item?.name}
                    </div>
                  </div>
                </td>
                <td className="!w-[20px] !overflow-hidden !overflow-ellipsis">{item?.amount}</td>
                <td className="w-[40px] overflow-hidden overflow-ellipsis">{item?.weight}</td>
                <td className="w-[100px] overflow-hidden overflow-ellipsis">{item?.floor}</td>
                <td>{item.rarity}</td>
                <td className="w-[100px] overflow-hidden overflow-ellipsis">{item.token}</td>
                <td>{item.tokenPrice}</td>
                <td>{item.buyPrice}</td>
                <td>{item.floorValue}</td>
                <td>{item.tokenReard}</td>
                <td>{item.ROI}</td>
                <td>
                  <div className="flex flex-col items-center justify-center">
                    <div className="rounded-[8px] bg-black225_05 p-1">
                      <LinkIcon />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex !w-full justify-end">
                    <Checkbox />
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
                            <td className="w-[100px] !pl-0 text-center text-[14px] text-black7f">AirDrop</td>
                            <td className="w-[40px] !px-0">
                              <Image alt={'IMG'} src={res?.airdrop?.StakeIMG} />
                            </td>
                            <td className="w-[90px] !px-0 text-center">{res?.airdrop?.StakeName}</td>
                          </tr>
                          <tr className="flex w-full items-center" key={index}>
                            <td className="w-[100px] !pl-0 text-center text-[14px] text-black7f">Mint</td>
                            <td className="w-[40px] !px-0">
                              <Image alt={'IMG'} src={res?.mint?.StakeIMG} />
                            </td>
                            <td className="w-[90px] !px-0 text-center">{res?.mint?.StakeName}</td>
                          </tr>
                          <tr className="flex w-full items-center" key={index}>
                            <td className="w-[100px] !pl-0 text-center text-[14px] text-black7f">Bought</td>
                            <td className="w-[40px] !px-0">
                              <Image alt={'IMG'} src={res?.bought?.StakeIMG} />
                            </td>
                            <td className="w-[90px] !px-0 text-center">{res?.bought?.StakeName}</td>
                          </tr>
                        </tbody>
                      </>
                    ))}
                </TECollapse>
              </tr>
            </>
          ))}
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
