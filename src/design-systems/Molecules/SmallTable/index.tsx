/* eslint-disable @typescript-eslint/no-explicit-any */
// DataTable.tsx
import React, { useState } from 'react'

import { TableSkeletan } from '../Skeletan/TableSkeletan'

import logo from 'assets/images/nova-logo.png'
import { BookMarkEmpty, BookMarkFill, TrandingIcon } from 'design-systems/Atoms/Icons'
import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'
import { useMarket } from 'hooks/apis/useMarket'
import { NoData } from 'design-systems/Atoms/NoData'

const SmallDataTable: React.FC = () => {
  const [activeBookmark, setActiveBookmark] = useState<number | any>()
  const { marketTrendingDataQuery } = useMarket()
  const handleBookmarkClick = (key: number) => {
    if (activeBookmark === key) {
      setActiveBookmark(null)
    } else {
      setActiveBookmark(key)
    }
  }
  return (
    <div className="max-h-[362px] min-h-full w-full overflow-auto  pe-[12px]">
      <table className="rounded-corners w-full rounded-sm  ">
        <thead className="rounded-sm ">
          <tr className="">
            <th className="w-5">
              <div className="flex gap-x-[20px] ">
                <div className="flex items-center">
                  <TrandingIcon />
                </div>
                <Typography className="text-[25px] text-[#DBDBDB]">Trending</Typography>
              </div>
            </th>
            <th className="">Price</th>
            <th className="">Volume</th>
            <th className="">Seller</th>
            <th className="">Buyer</th>
          </tr>
        </thead>
        <tbody className="max-h-[320px] overflow-auto rounded-sm">
          {!marketTrendingDataQuery?.isLoading &&
            marketTrendingDataQuery.data?.data &&
            marketTrendingDataQuery.data?.data.map((item: any, key: number) => {
              return (
                //   <tr key={key}>
                // <td>ffff</td>    </tr>
                <tr className=" px-3 py-[10px]" key={key}>
                  <td className=" px-3 py-[10px] ">
                    <div className="flex items-center gap-x-3 text-center">
                      <div className="cursor-pointer" onClick={() => handleBookmarkClick(key)}>
                        {activeBookmark === key ? <BookMarkFill /> : <BookMarkEmpty />}
                      </div>
                      <Typography className="text-[18px]">{key + 1}</Typography>
                      <IconAtom alt={''} className="flex-shrink-0" height={48} src={logo} width={48} />
                      <span>
                        <Typography className="font-normal" size="body">
                          <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                            {item.name}
                          </Typography>
                        </Typography>
                      </span>
                    </div>
                  </td>
                  <td className=" px-3 py-[10px] ">
                    <div className="flex w-full flex-col  self-center text-center">
                      <div>{item.price}</div>
                      <div className={item.priceChange > 0 ? 'text-success-400' : 'text-danger-600'}>
                        {item.priceChange}%
                      </div>
                    </div>
                  </td>
                  <td className=" flex flex-col px-3 py-[10px] text-center">
                    <div>{item.volume}</div>
                    <div className={item.volumeChange > 0 ? 'text-success-400' : 'text-danger-600'}>
                      {item.volumeChange}%
                    </div>
                  </td>
                  <td className=" flex-col px-3  py-[10px] text-center">
                    <div className="flex w-full flex-col  self-center text-center">
                      <div>{item.seller}</div>
                      <div className={item.sellerChange > 0 ? 'text-success-400' : 'text-danger-600'}>
                        {item.sellerChange}%
                      </div>
                    </div>
                  </td>
                  <td className=" flex flex-col px-3 py-[10px] text-center">
                    <div>{item.buyer}</div>
                    <div className={item.changeBuyer > 0 ? 'text-success-400' : 'text-danger-600'}>
                      {item.changeBuyer}%
                    </div>
                  </td>
                </tr>
              )
            })}

          {!marketTrendingDataQuery.isLoading &&
            marketTrendingDataQuery.data?.data &&
            marketTrendingDataQuery.data?.data?.length === 0 && (
              <tr>
                <td colSpan={5}>
                  <NoData />
                </td>
              </tr>
            )}

          {marketTrendingDataQuery?.isLoading &&
            Array(7)
              .fill('')
              .map((_, key) => (
                <tr key={key}>
                  <td colSpan={5}>
                    <TableSkeletan limit={1} />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}
export default SmallDataTable
