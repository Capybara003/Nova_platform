/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import { TECollapse } from 'tw-elements-react'
import { useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'

import TableProps from '../IndexTable/interface'
import Graph from '../Graph'

import { BigDownArrow, BookMarkEmpty, BookMarkFill } from 'design-systems/Atoms/Icons'
import { Graphdata } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'
import Typography from 'design-systems/Atoms/Typography'

const ProjectTables: React.FC<TableProps> = ({ headData, data }) => {
  const [activeElement, setActiveElement] = useState<string>('')

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement('')
    } else {
      setActiveElement(value)
    }
  }
  return (
    <div className="h-full w-full overflow-auto pe-[12px]">
      <table className="rounded-corners h-full w-full   font-Lexend">
        <thead>
          <tr>
            {headData?.map((item: any, key: number) => (
              <th key={key}>
                <div className="flex items-center justify-center gap-2">
                  {key === 0 && <BookMarkEmpty />}
                  {item.isInfo && <FiInfo className="text-md" />}
                  <Typography
                    className={`line-clamp-2 overflow-hidden text-ellipsis ${key === 0 && 'ml-14'}`}
                    size="md"
                  >
                    <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                      {item.name}
                    </Typography>
                  </Typography>

                  {item.isSort && <RxCaretSort className="text-md" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, key: any) => (
            <>
              <tr className="!border-b-2 !border-black225_05" key={key}>
                <td>
                  <div className="flex items-center gap-3 ">
                    <div className="flex items-center gap-3">
                      <BookMarkFill />
                      <BigDownArrow
                        className={`${
                          activeElement === item.key ? '' : '-rotate-90'
                        } delay-250 cursor-pointer transition-transform ease-in-out`}
                        onClick={() => handleClick(key)}
                      />
                    </div>
                    <Image alt="IMG" className="!rounded-br-[10px] !rounded-tl-[10px]" src={item.image} />
                    <Typography>
                      <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                        {item.name}
                      </Typography>
                    </Typography>
                  </div>
                </td>
                <td>{item.price}</td>
                <td className="!max-w-[120px]">
                  <div className="!w-full">
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
                <td>{item.mc}</td>
                <td>{item.diluted_mc}</td>
                <td>{item.volume}</td>
                <td>{item.liquidity}</td>
                <td>{item.holder}</td>
                <td>{item.buyer}</td>
                <td>{item.seller}</td>
              </tr>

              <tr>
                <td className="!b-0 !border-b-0 !p-0" colSpan={headData.length}>
                  <TECollapse
                    className=" Collapse !mt-0 !rounded-b-none text-left !shadow-none"
                    show={activeElement === item.key}
                  >
                    {item.innerData &&
                      item.innerData?.map((res: any, index: number) => (
                        <tr key={index}>
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
                            <td className="text-black7f">Bought</td>
                            <td>
                              <Image alt={'IMG'} src={res?.bought?.StakeIMG} />
                            </td>
                            <td>{res?.bought?.StakeName}</td>
                          </tr>
                        </tr>
                      ))}
                  </TECollapse>
                </td>
              </tr>
            </>
          ))}
        </tbody>

        <tfoot className="transparent-footer-bg">
          <tr>
            <td colSpan={headData.length || 0}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default ProjectTables
