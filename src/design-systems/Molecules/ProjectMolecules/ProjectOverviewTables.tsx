/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

import Graph from '../Graph'
import TableProps from '../IndexTable/interface'

import { BookMarkEmpty, BookMarkFill } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Graphdata } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'

const ProjectOverviewTables: React.FC<TableProps> = ({ headData, data }) => {
  return (
    <div className="h-full max-h-[500px] w-full overflow-auto  pe-[12px]">
      <table className="rounded-corners h-full w-full  font-Lexend">
        <thead className="bg-black225_05">
          <tr>
            <th>
              <BookMarkEmpty />
            </th>
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
                  <Image alt="IMG" className="!rounded-br-[10px] !rounded-tl-[10px]" src={item.img} />
                  <Typography>
                    <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                      {item.name}
                    </Typography>
                  </Typography>
                </div>
              </td>
              <td>{item.price}</td>
              <td className="!max-w-[120px]">
                <div>
                  <Graph
                    data={Graphdata}
                    height={31}
                    hideXAxis={true}
                    lineColor="#17D178"
                    lineWidth={2}
                    width="100%"
                    xKey="month"
                    yKey="value"
                  />
                </div>
              </td>
              <td>{item.weight}</td>
              <td>{item.mc}</td>
              <td>{item.dilutedMC}</td>
              <td>{item.volume}</td>
              <td>{item.liquidity}</td>
              <td>{item.holder}</td>
              <td>{item.buyer}</td>
              <td>{item.seller}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-blackBg">
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Tokens: 4.000</td>
            <td>100%</td>
            <td></td>
            <td>975.000 ₳</td>
            <td>975.000 ₳</td>
            <td>975.000 ₳</td>
            <td>975.000 ₳</td>
            <td>975.000 ₳</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default ProjectOverviewTables
