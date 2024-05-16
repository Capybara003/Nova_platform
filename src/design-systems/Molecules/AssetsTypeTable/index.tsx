/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

import TableProps from '../IndexTable/interface'

import Typography from 'design-systems/Atoms/Typography'

export const AssetsTypeTable = ({ data, headData }: TableProps) => {
  return (
    <div className="h-full max-h-full min-h-[428px] w-full overflow-auto">
      <table className="rounded-corners h-full w-full pe-[12px] font-Lexend">
        <thead className="bg-black225_05">
          <tr className="">
            {headData.map((item: any, key: number) => {
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
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-500 min-h-[20px] min-w-[20px] rounded"></div>
                      <Image alt={'IMG'} className="rounded-br rounded-tl" src={item.img} />
                      <div>{item?.collection}</div>
                    </div>
                  </td>
                  <td>{item?.marketCap}</td>
                  <td>{item?.weight}</td>
                </tr>
              ))}
            </>
          ) : (
            <div>Empty Data</div>
          )}
        </tbody>

        <tfoot>
          <tr className="bg-blackBg">
            <td>Total</td>
            <td>7.377,40 SEI</td>
            <td>7.377,40 SEI</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
