/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import Image from 'next/image'
import React, { useState } from 'react' // Import the props interface
import { TECollapse } from 'tw-elements-react'
import { useRouter } from 'next/navigation'
import { FiInfo } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'

import TableProps from '../IndexTable/interface'

import { BookMarkEmpty, LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Checkbox } from 'design-systems/Atoms/CheckBox'

const StakingTable: React.FC<TableProps> = ({ data, headData }) => {
  const [activeElement, setActiveElement] = useState<string>('')
  const router = useRouter()
  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement('')
    } else {
      setActiveElement(value)
    }
  }
  return (
    <>
      <table className="rounded-corners w-full rounded-sm   font-Lexend" id="holding-table">
        <thead>
          <tr>
            {headData?.map((item: any, key: number) => {
              return (
                <th key={key}>
                  <div className="flex items-center justify-center gap-2">
                    {key === 0 && (
                      <div className="mr-8">
                        <BookMarkEmpty />
                      </div>
                    )}
                    {item.isInfo && <FiInfo className="text-md" />}
                    <Typography>
                      <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                        {item.name}
                      </Typography>
                    </Typography>
                    {item.isSort && <RxCaretSort className="text-md" />}
                  </div>
                </th>
              )
            })}
            <th>
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
              <tr className="cursor-pointer bg-[#181620]">
                <td className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <BookMarkEmpty />
                      <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
                        <RightArrowIcons />
                      </div>
                    </div>
                    <div className="flex items-center gap-2" onClick={() => router.push('/single-collection-trades')}>
                      <Image alt={'IMG'} height={48} src={item.img} width={48} />
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
                  <div className="flex !w-full flex-col items-center justify-center">
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
                <td className="!b-0 !border-b-0 !p-0" colSpan={headData.length + 1}>
                  <TECollapse
                    className=" Collapse !mt-0 w-full !rounded-b-none px-4 text-left !shadow-none"
                    show={activeElement === index}
                  >
                    <table className="w-full">
                      <tbody>
                        {Array(3)
                          .fill('')
                          .map((res: any, index: number) => (
                            <>
                              <tr key={index}>
                                <td className="w-[6%]">AirDrop</td>
                                <td className="w-[6%]">
                                  <div className="flex items-center gap-2">
                                    <Image alt={'IMG'} src={item.img} />
                                    Ape Society
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </>
                          ))}
                      </tbody>
                    </table>
                  </TECollapse>
                </td>
              </tr>
            </>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <div className="flex !w-full items-center justify-between">
                <div>
                  <Typography>Total</Typography>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Typography>Tokens: 4.000</Typography>
                  <Typography>NFT: 4.000</Typography>
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

export default StakingTable
