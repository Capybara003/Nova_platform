import { useState } from 'react'

import DynamicDonutChart from '../DynamicDonutChart'

import Button from 'design-systems/Atoms/Button'
import Typography from 'design-systems/Atoms/Typography'
import { FaitTrans } from 'design-systems/data/data'

export const OverViewTab = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="grid w-full grid-cols-1 gap-[22px] font-Lexend lg:!grid-cols-3">
      <div className="flex h-full w-full flex-col content-between gap-[24px] rounded-[24px] bg-[#1d1b25] p-[22px]">
        <div className="flex h-full w-full flex-col gap-[24px]">
          <Typography className="text-left  font-medium" size="subtitle-25">
            Live Statistics
          </Typography>
          <div className="flex w-full flex-1 items-center justify-center">
            <DynamicDonutChart
              centerContent={
                <>
                  <ul className="w-full">
                    <li className="text-white flex w-full items-center justify-center gap-3 text-[10px] md:!text-[16px]">
                      <div className="color h-2 w-2 rounded-full bg-[#2592D9] shadow-[0_0_10px_2px_#2592D9]"></div>
                      <p>In Payment: 350/3500</p>
                    </li>

                    <li className="text-white flex w-full items-center justify-center gap-3 text-[10px] md:!text-[16px]">
                      <div className="color h-2 w-2 rounded-full bg-green shadow-[0_0_10px_2px_#00C68A]"></div>
                      <p>In Payment: 350/3500</p>
                    </li>

                    <li className="text-white flex w-full items-center justify-center gap-3 text-[10px] md:!text-[16px]">
                      <div className="color h-2 w-2 rounded-full bg-[#FFBA38] shadow-[0_0_10px_2px_#FFBA38]"></div>
                      <p>In Payment: 350/3500</p>
                    </li>
                  </ul>
                </>
              }
              colors={['#2592D9', '#00C68A', '#FFBA38', '#3D3B43']}
              height={400}
              labels={['0-5K ', '5K-25k', '25K-100K']}
              series={[350, 780, 1500, 3500]}
              type="type2"
              width={400}
            />
          </div>
        </div>
        <Button className="rounded-[5px] bg-black225_05 p-3">
          <Typography>Users In Queue: 3500</Typography>
        </Button>
      </div>
      <div className="flex h-full w-full flex-col  rounded-[24px] bg-[#1d1b25] p-[22px]">
        <Typography className="text-left  font-medium" size="subtitle-25">
          Information
        </Typography>
        <Typography className="mt-[16px] text-[16px] font-medium xsm:text-[23px]">Public</Typography>
        <div className="h-[1px] w-full rounded-full bg-gradient-to-r from-primary to-secondary-25"></div>
        <div className="flex h-full flex-col justify-between text-whiteE8">
          <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
            <Typography className="" size="body">
              Starts At
            </Typography>
            <Typography size="body">5PM UTC</Typography>
          </div>
          <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
            <Typography className="" size="body">
              Ends At
            </Typography>
            <Typography size="body">5PM UTC</Typography>
          </div>
          <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
            <Typography className="" size="body">
              Supply
            </Typography>
            <Typography size="body">1200</Typography>
          </div>
          <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
            <Typography className="" size="body">
              Price
            </Typography>
            <Typography size="body">380 ₳</Typography>
          </div>
          <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
            <Typography className="" size="body">
              Guaranteed after Payment
            </Typography>
            <Typography size="body">1</Typography>
          </div>
          <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
            <Typography className="" size="body">
              Max Order per User
            </Typography>
            <Typography size="body">5</Typography>
          </div>
          <div className="flex justify-between  py-[18px]">
            <Typography className="flex flex-col items-center justify-center" size="body">
              Quantity
            </Typography>
            <div className="flex items-center justify-center gap-[6px] font-Lexend">
              <Button className="p-[12px]" onClick={() => setCount(count - 1)}>
                <Typography className="text-[14px] font-medium">-</Typography>
              </Button>
              <div className="flex items-center justify-center rounded-[4px] !bg-button-gradient p-[2px] opacity-70">
                <Typography className="rounded-[4px] px-[12px] py-[10px]">{count}</Typography>
              </div>
              <Button className="p-[12px]" onClick={() => setCount(count + 1)}>
                <Typography className="text-[14px] font-medium">+</Typography>
              </Button>
            </div>
          </div>
          <div className="flex justify-between  py-[18px]">
            <Typography className="" size="body">
              Cost
            </Typography>
            <Typography size="body">380 ₳</Typography>
          </div>
          <Button className="rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px]">
            <Typography>Enter Queue</Typography>
          </Button>
        </div>
      </div>
      <div className="flex h-full w-full flex-col content-between rounded-[24px] bg-[#1d1b25] p-[22px]">
        <Typography className="text-left font-medium" size="subtitle-25">
          All Transactions
        </Typography>
        <div className="max-h-[600px] w-full overflow-auto">
          <table className="w-full">
            <thead className="!border-b-0 !bg-[transparent]">
              <tr>
                <th className="!border-b-0 !bg-[#1d1b25] text-[#DBDBDB]">Address</th>
                <th className="!border-b-0 !bg-[#1d1b25] text-[#DBDBDB]">Quantity</th>
                <th className="!border-b-0 !bg-[#1d1b25] text-[#DBDBDB]">ADA</th>
                <th className="!border-b-0 !bg-[#1d1b25] text-[#DBDBDB]">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="pointer-events-none sticky top-[56px]">
                <td className="!border-0 !p-0" colSpan={4}>
                  <div className="h-[1px] w-full rounded-full bg-gradient-to-r from-primary to-secondary-25"></div>
                </td>
              </tr>
              {FaitTrans.map((item, key) => (
                <tr key={key}>
                  <td className="!border-0">{item.address}</td>
                  <td className="!border-0">{item.qua}</td>
                  <td className="!border-0">{item.ada}</td>
                  <td className="!border-0">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
