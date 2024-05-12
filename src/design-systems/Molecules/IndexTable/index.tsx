/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-sort-props */
// DataTable.tsx
import React, { useState } from 'react'

import { TableSkeletan } from '../Skeletan/TableSkeletan'

import { Checkbox } from 'design-systems/Atoms/CheckBox'
import { BigDownArrow, BookMarkEmpty, InfoIcons, SatelliteIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { NoData } from 'design-systems/Atoms/NoData'

interface IndexDataTableProps {
  data: MarketIndexDataType[] | undefined
  isLoading: boolean
  headData: { name: string; key: string }[]
}
const IndexDataTable: React.FC<IndexDataTableProps> = ({ data, headData, isLoading }) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const handleSelectedItems = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, index])
    } else {
      setSelectedItems(selectedItems.filter(item => item !== index))
    }
  }

  return (
    <div>
      <table className="rounded-corners h-full w-full font-Lexend">
        <thead>
          <tr className="">
            {headData.map((item: any, key: number) => {
              return (
                <th key={key}>
                  <div className={`flex w-full items-center gap-2`}>
                    {['index', 'marketCapMC'].includes(item.key) && <InfoIcons />}
                    <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                      {item.name}
                    </Typography>
                  </div>
                </th>
              )
            })}
            <th>
              <div className="flex !w-full items-center justify-end gap-2">
                <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                  All
                </Typography>
                <Checkbox
                  onChange={e => {
                    const indexes = data?.map((_, index) => index) || []

                    if (e.target.checked) {
                      setSelectedItems(indexes)
                    } else {
                      setSelectedItems([])
                    }
                  }}
                  checked={selectedItems.length === data?.length}
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data &&
            data?.length > 0 &&
            data?.map((item, index: number) => (
              <tr key={index}>
                <td>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <BookMarkEmpty />
                      </div>
                      <div>
                        <BigDownArrow />
                      </div>
                    </div>
                    <SatelliteIcons />
                    <div>
                      <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                        {item.name}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td>{item.marketCap}</td>
                <td>
                  <div>
                    <span>
                      <Typography size="md">{item.volume}</Typography>
                    </span>
                  </div>
                  <div className={item.changeVolume > 0 ? 'text-success-500' : 'text-warning-300'}>
                    <Typography size="small">{item.changeVolume}%</Typography>
                  </div>
                </td>
                <td>
                  <div>
                    <span>
                      <Typography size="md">{item.seller}</Typography>
                    </span>
                  </div>
                  <div className={0 ? 'text-success-500' : 'text-warning-300'}>
                    <Typography size="small">0.00%</Typography>
                  </div>
                </td>
                <td>
                  <div>
                    <span>
                      <Typography size="md">{item.buyer}</Typography>
                    </span>
                  </div>
                  <div className={item.changeBuyer > 0 ? 'text-success-500' : 'text-warning-300'}>
                    <Typography size="small">{item.changeBuyer}%</Typography>
                  </div>
                </td>
                <td>{item.holder}</td>
                <td>
                  <div className="flex !w-full justify-end">
                    <Checkbox checked={selectedItems.includes(index)} onChange={e => handleSelectedItems(e, index)} />
                  </div>
                </td>
              </tr>
            ))}

          {!isLoading && data && data?.length === 0 && (
            <tr>
              <td colSpan={headData.length + 1}>
                <NoData />
              </td>
            </tr>
          )}

          {isLoading &&
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
      </table>
    </div>
  )
}

export default IndexDataTable
