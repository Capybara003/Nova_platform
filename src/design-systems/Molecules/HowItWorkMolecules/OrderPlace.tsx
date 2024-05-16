import { useState } from 'react'

import DynamicDonutChart from '../DynamicDonutChart'

import Button from 'design-systems/Atoms/Button'
import { GreenDot, PurpalDot, RedDot } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

export const OrderPlace = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="grid !grid-cols-1 gap-[24px] font-Lexend lg:!grid-cols-3">
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
      <div className="grid grid-cols-1 gap-[24px] rounded-[24px] bg-[#1d1b25] md:col-span-2 md:grid-cols-2 ">
        <div className="flex h-full w-full flex-col p-[22px]">
          <Typography className="text-left  font-medium" size="subtitle-25">
            Information
          </Typography>
          <Typography className="mt-[16px] text-[16px] font-medium xsm:text-[23px]">Public</Typography>
          <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-primary to-secondary-25"></div>
          <div className="flex flex-col text-whiteE8 ">
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
              <Typography size="body">380 SEI</Typography>
            </div>
            <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
              <div className="flex gap-[8px]">
                <GreenDot />
                <Typography className="" size="body">
                  Guaranteed after Payment
                </Typography>
              </div>
              <Typography size="body">1</Typography>
            </div>
            <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
              <div className="flex gap-[8px]">
                <RedDot />
                <Typography className="" size="body">
                  Max Order per User
                </Typography>
              </div>
              <Typography size="body">5</Typography>
            </div>
            <div className="flex items-center justify-between border-b-[1.155px] border-black225_05 py-[18px]">
              <div className="flex gap-[8px] ">
                <PurpalDot />
                <Typography className="flex flex-col items-center justify-center" size="body">
                  Quantity
                </Typography>
              </div>
              <div className="flex items-center justify-center gap-[6px] font-Lexend">
                <Button className="p-[12px]" onClick={() => setCount(count - 1)}>
                  <Typography className="text-[14px] font-medium">-</Typography>
                </Button>
                <div className="flex items-center justify-center rounded-[4px] !bg-button-gradient p-[2px]">
                  <Typography className="rounded-[4px] bg-[#181620] px-[12px] py-[10px]">{count}</Typography>
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
              <Typography size="body">380 SEI</Typography>
            </div>
            <Button className="rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px]">
              <Typography className="text-[18px]">Enter Queue</Typography>
            </Button>
          </div>
        </div>
        <div className="flex h-full flex-col justify-center gap-[22px] p-[22px] ">
          <Typography className="text-left  font-medium" size="subtitle">
            Explanation
          </Typography>
          <div className="flex h-full flex-col justify-between text-left">
            <div className="flex gap-[8px]">
              <div>
                <GreenDot />
              </div>
              <div>
                <Typography size="lg">Guaranteed After Payment</Typography>
                <Typography className="font-Inter" size="body">
                  Guaranteed amount which is reserved after the payment.
                </Typography>
              </div>
            </div>
            <div className="flex gap-[8px]">
              <div>
                <RedDot />
              </div>
              <div>
                <Typography size="lg">Max Order Per User</Typography>
                <Typography className="font-Inter" size="body">
                  The Maximum possible order which one user is able to place.
                  <br /> If supply is remaining at the end of the minting phase, the remaining supply will be
                  distributed fairly on a First come First serve base.
                </Typography>
              </div>
            </div>
            <div className="flex gap-[8px]">
              <div>
                <PurpalDot />
              </div>
              <div>
                <Typography size="lg">Quantity</Typography>
                <Typography className="font-Inter" size="body">
                  Quantitiy which defines the order amount. Note: This quantity is not the guaranteed.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
