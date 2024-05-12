/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import Image from 'next/image'
import React, { useState } from 'react' // Import the props interface
import { TECollapse } from 'tw-elements-react'

import TableProps from '../IndexTable/interface'

import { BookMarkEmpty, LinkIcon, RightArrowIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Checkbox } from 'design-systems/Atoms/CheckBox'

const RevenuLendingTable: React.FC<TableProps> = ({ data, headData }) => {
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
      <table className="rounded-corners w-full rounded-sm    font-Lexend">
        <thead>
          <tr>
            <th>
              <BookMarkEmpty />
            </th>
            {headData?.map((item: any, key: number) => {
              return (
                <th key={key}>
                  <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                    {item.name}
                  </Typography>
                </th>
              )
            })}
            <th>
              <div className="!flex !w-full !justify-end">
                <div className="flex items-center justify-end gap-2">
                  <Typography>All</Typography>
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
                <td className="">
                  <div className="flex">
                    <BookMarkEmpty />
                    <div className={`${activeElement === index && 'rotate-90'}`} onClick={() => handleClick(index)}>
                      <RightArrowIcons />
                    </div>
                  </div>
                </td>
                <td className="flex gap-3">
                  <Image alt={'IMG'} height={48} src={item.img} width={48} />
                  {item?.name}
                </td>
                <td className="!w-[20px] !overflow-hidden !overflow-ellipsis">{item?.amount}</td>
                <td className="w-[40px] overflow-hidden overflow-ellipsis">{item?.weight}</td>
                <td className="w-[100px] overflow-hidden overflow-ellipsis">{item?.floor}</td>
                <td>{item.rarity}</td>
                <td className="w-[100px] overflow-hidden overflow-ellipsis">{item.token}</td>
                <td>{item.tokenPrice}</td>
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
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>Token: 1.024.241</td>
            <td>NFT: 46</td>
            <td></td>
            <td>7.377,40 ₳</td>
            <td>168.080</td>
            <td></td>
            <td>975.000 ₳</td>
            <td></td>
            <td>975.000 ₳</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default RevenuLendingTable
