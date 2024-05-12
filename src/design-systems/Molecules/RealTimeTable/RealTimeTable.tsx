/* eslint-disable @typescript-eslint/no-explicit-any */
import TableProps from '../IndexTable/interface'

import Typography from 'design-systems/Atoms/Typography'
import { LinkIcon, SatelliteIcons } from 'design-systems/Atoms/Icons'

const RealTimeTable: React.FC<TableProps> = ({ headData, data }) => {
  return (
    <table className="rounded-corners w-full rounded-sm   pe-[12px] font-Lexend">
      <thead className="bg-black225_05">
        <tr>
          {headData?.map((item: any, key: any) => (
            <th key={key}>
              <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                {item.name}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, key: number) => (
          <tr className="!border-b-2 !border-black225_05" key={key}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.floor}</td>
            <td>{item.buyPrice}</td>
            <td>{item.EstFees}</td>
            <td>{item.income}</td>
            <td>{item.gains}</td>
            <td>{item.trade}</td>
            <td>{item.holdingTime}</td>
            <td>{item.date}</td>
            <td>
              <div className="flex justify-center gap-3 rounded-[8px] bg-black225_05 p-3">
                <SatelliteIcons />
                <Typography>{item.trader}</Typography>
              </div>
            </td>
            <td>
              <div className="flex justify-center">
                <div className="rounded-[8px] bg-black225_05 p-1">
                  <LinkIcon />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default RealTimeTable
