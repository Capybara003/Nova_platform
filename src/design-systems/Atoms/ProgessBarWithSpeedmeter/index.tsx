/* eslint-disable @typescript-eslint/no-explicit-any */
import { SpaceCraftIcon14 } from '../Icons'

import CustomSingleBar from 'design-systems/Molecules/CustomSingleBar'
import Speedometer from 'design-systems/Molecules/Speedometer'

export const ProgessBarWithSpeedmeter = ({ headerData }: any) => {
  return (
    <div className="flex h-full w-full !flex-col items-center gap-[22px] xsm:!flex-row">
      <div className="table-norounded-corners w-full">
        <table className="w-full ">
          <thead>
            <tr className="font-Inter font-medium uppercase opacity-50">
              {headerData.map((item: any, key: number) => (
                <th key={key}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(6)
              .fill('500/600')
              .map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div>
                        <SpaceCraftIcon14 />
                      </div>
                    </td>
                    <td className="w-full">
                      <CustomSingleBar
                        downValue={`${index + 1 * Math.floor(Math.random() * 100)}`}
                        upValue={`${index + 1 * Math.floor(Math.random() * 100)}`}
                      />
                    </td>
                    <td>{item}</td>
                    <td>+100</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div className=" xsm:h-[99%]  ">
        <Speedometer
          className="rotate-90"
          content={
            <div className="text-sm">
              <div className="value">NET</div>
              <div className="label text-xl">+1.250</div>
            </div>
          }
          endVal="250"
          isShowStartEndValue
          percentageValue={40}
          startVal="200"
          width="200px"
        />
      </div>
    </div>
  )
}
