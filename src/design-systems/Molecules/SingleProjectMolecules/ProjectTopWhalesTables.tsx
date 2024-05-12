/* eslint-disable @typescript-eslint/no-explicit-any */

import { FiInfo } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'

import TableProps from '../IndexTable/interface'

import { BookMarkEmpty, BookMarkFill } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

export const ProjectTopWhalesTables: React.FC<TableProps> = ({ headData, data }) => {
  return (
    <div className="h-full max-h-[500px] w-full overflow-auto  pe-[12px]">
      <table className="rounded-corners h-full w-full  font-Lexend">
        <thead className="bg-black225_05">
          <tr>
            <th>
              <BookMarkEmpty />
            </th>
            {headData?.map((item: any, key: number) => (
              <th key={key}>
                <div className="flex items-center justify-center gap-2">
                  {item.isInfo && <FiInfo className="text-md" />}
                  <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                    {item.name}
                  </Typography>
                  {item.isSort && <RxCaretSort className="text-md" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, key: any) => (
            <tr className="!border-b-2 !border-black225_05" key={key}>
              <td>
                <div className="flex items-center gap-3">
                  <BookMarkFill />
                  <Typography>{key + 1}</Typography>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3 ">
                  <div>{item.icon}</div>
                  <Typography>{item.topWales}</Typography>
                </div>
              </td>
              <td>{item.floor}</td>
              <td>{item.buy}</td>
              <td>{item.paidFees}</td>
              <td>{item.incomeFloor}</td>
              <td>{item.grains}</td>
              <td>{item.volumn}</td>
              <td>{item.holdingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
