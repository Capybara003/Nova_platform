/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import React from 'react'
import { useRouter } from 'next/navigation'

import TableProps from './interface' // Import the props interface

import scrollIcon from 'assets/images/scroll.svg'
import { BookMarkEmpty } from 'design-systems/Atoms/Icons'
import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'

const LargeDataTable: React.FC<TableProps> = ({ data, headData }) => {
  const router = useRouter()
  return (
    <table className="rounded-corners w-full rounded-sm   pe-[12px] font-Lexend">
      <thead className="bg-black225_05">
        <tr className="">
          <th className="flex items-center justify-start px-4 py-2 ">
            <div className="flex items-center space-x-2">
              <BookMarkEmpty />
              <IconAtom alt={''} className="flex-shrink-0" height={10} src={scrollIcon} width={6} />
            </div>
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
        </tr>
      </thead>
      <tbody>
        {data ? (
          <>
            {data?.map((item: any, index: any) => (
              <tr key={index} onClick={() => router.push('/single-collection')}>
                <td>
                  <BookMarkEmpty />
                </td>
                <td className="flex gap-3">
                  <div className="text-[18px] font-medium">{index + 1}</div>
                  <div className="min-w-[48px]">
                    <img alt={'IMG'} height={48} src={item.thumbnail} width={48} />
                  </div>
                  <div className="w-[100px] overflow-hidden overflow-ellipsis">{item?.highestSale?.assetName}</div>
                </td>
                <td className="!w-[20px] !overflow-hidden !overflow-ellipsis">{item?.floorPrice}</td>
                <td className="w-[40px] overflow-hidden overflow-ellipsis">{item?.totalVolume}</td>
                <td className="w-[100px] overflow-hidden overflow-ellipsis">{item?.highestSale?.price}</td>
                {/* <td>{item.buyer}</td> */}
                <td className="w-[100px] overflow-hidden overflow-ellipsis">{item.marketcap}</td>
                {/* <td>{item.fdmc}</td> */}
                {/* <td>{item.liquidity}</td> */}
              </tr>
            ))}
          </>
        ) : (
          <div>Empty Data</div>
        )}
      </tbody>
    </table>
  )
}

export default LargeDataTable
