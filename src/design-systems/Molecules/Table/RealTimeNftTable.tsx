/* eslint-disable @typescript-eslint/no-explicit-any */
import { RxCaretSort } from 'react-icons/rx'
import { FiInfo } from 'react-icons/fi'

import BookMarkButton from './BookMarkButton'

import { getNestedValue } from 'utils/function'
import Typography from 'design-systems/Atoms/Typography'

interface RealTimeNftTableProps {
  headData: { title: string; isSortable: boolean; isInfo: boolean; key: string; width?: number | string }[]
  data: any
  isShowCheckBox?: boolean
}

const RealTimeNftTable: React.FC<RealTimeNftTableProps> = ({ headData, data, isShowCheckBox = false }) => {
  return (
    <div className="overflow-y-hidden overflow-x-scroll">
      <table className="rounded-corners mt-4 w-full pe-[12px] font-Lexend">
        <thead className="[&>tr>th:first-child>div]:justify-start [&>tr>th>div]:justify-center">
          <tr>
            {isShowCheckBox && (
              <th style={{ width: 50 }}>
                <div className="flex items-center justify-start gap-1">
                  <BookMarkButton isActive />
                </div>
              </th>
            )}
            {headData?.map((item: any, key: number) => (
              <th key={key} style={{ width: item.width, textAlign: 'center' }}>
                <div className="flex !w-full items-center gap-[2px] text-left text-md">
                  {item.isInfo ? <FiInfo className="text-body" /> : ''}
                  <Typography className="font-normal">{item.title}</Typography>
                  {item.isSortable ? <RxCaretSort className="text-body" /> : ''}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, key: number) => (
            <tr className="!border-b-2 !border-black225_05" key={key}>
              {isShowCheckBox && (
                <td>
                  <div className="flex items-center justify-start gap-1">
                    <BookMarkButton isActive={false} />
                    {key + 1}
                  </div>
                </td>
              )}
              {headData.map((head, index) => {
                return (
                  <td className="text-center font-Inter font-light" key={index}>
                    {getNestedValue(item, head.key)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>

        <tfoot className="transparent-footer-bg">
          <tr>
            <td colSpan={headData.length + 1}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default RealTimeNftTable
