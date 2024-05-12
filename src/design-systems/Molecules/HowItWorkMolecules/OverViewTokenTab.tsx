import DynamicRadialChart from '../DynamicRadialChart'

import Button from 'design-systems/Atoms/Button'
import RangeBar from 'design-systems/Atoms/Rangebar'
import Typography from 'design-systems/Atoms/Typography'
import { FaitTrans } from 'design-systems/data/data'

export const OverViewTokenTab = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-[22px] font-Lexend lg:grid-cols-3">
      <div className="flex h-full w-full flex-col content-between gap-[24px] rounded-[24px] bg-[#1d1b25] p-[22px]">
        <div className="flex h-full w-full flex-col gap-[24px]">
          <Typography className="text-left  font-medium" size="subtitle-25">
            Live Statistics
          </Typography>
          <div className="flex w-full flex-1 items-center justify-center">
            <DynamicRadialChart
              centerContent={
                <>
                  <ul>
                    <li className="text-white flex w-full items-center justify-center gap-3 text-[10px] md:!text-[16px]">
                      <div className="color h-2 w-2 rounded-full bg-[#2592D9] shadow-[0_0_10px_2px_#2592D9]"></div>
                      <p>Order Allocation: 350/3500</p>
                    </li>
                  </ul>
                </>
              }
              height={'440px'}
              series={[75]}
              width={'440px'}
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
        <div className="flex flex-1 flex-col text-whiteE8">
          <div className="flex flex-1 flex-col">
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
                max. ADA Cap
              </Typography>
              <Typography size="body">4.000.000 ₳ </Typography>
            </div>
            <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
              <Typography className="" size="body">
                Supply
              </Typography>
              <Typography size="body">100.000.000</Typography>
            </div>
            <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
              <Typography className="" size="body">
                Price
              </Typography>
              <Typography size="body">0,25 ₳ </Typography>
            </div>

            <div className="flex items-center justify-between gap-[10px] border-b-[1.155px] border-black225_05 py-[25px]">
              <Typography size="body">Cost</Typography>
              {/* <input className="w-full" type="range" /> */}
              <RangeBar />
              <div className="flex h-[32px] w-[241px] items-center justify-center rounded-[6px] bg-black225_05">
                <Typography>ADA Amount</Typography>
              </div>
            </div>
            <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
              <Typography className="" size="body">
                Estimated $NOVA
              </Typography>
              <Typography size="body">5.010.131</Typography>
            </div>
          </div>
          <Button className="rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px]">
            <Typography>Mint</Typography>
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
