import DynamicDonutChart from '../DynamicDonutChart'

import Button from 'design-systems/Atoms/Button'
import { BlueGradiantDot } from 'design-systems/Atoms/Icons'
import RangeBar from 'design-systems/Atoms/Rangebar'
import Typography from 'design-systems/Atoms/Typography'

export const Queue = () => {
  return (
    <div className="grid !grid-cols-1 font-Lexend lg:!grid-cols-3">
      <div className="flex h-full flex-col content-between justify-between rounded-l-[24px] rounded-br-[24px] bg-[#1d1b25] p-[22px]">
        <Typography className="text-left font-medium" size="subtitle-25">
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
        <Button className="w-full rounded-[5px] bg-[#1d1b25] p-[12px]">
          <Typography>Participants: 1.500</Typography>
        </Button>
      </div>
      <div className="flex flex-col ">
        <div className="relative mt-[22px] flex flex-col before:absolute before:bottom-0 before:right-0 before:h-[25px] before:w-[25px] before:rotate-180 before:rounded-tl-lg before:shadow-[-7px_-7px_0px_7px_#1e1c26] after:h-[28px] after:rounded-br-lg after:rounded-tl-lg after:shadow-[-56px_-5px_0px_2px_#1e1c26] md:mt-0">
          <div className="flex  after:mr-[28px] ">
            <div className="flex gap-[8px] rounded-br-[12px] rounded-tr-[24px] bg-[#1d1b25] p-[22px] pl-[44px] pr-[10px] text-left">
              <BlueGradiantDot />
              <div className="">
                <Typography className="text-[18px]">Ordered Allocation</Typography>
                <Typography className="mt-[18px] font-Inter" size="body">
                  Supply which has been ordered from the participants.
                </Typography>
                <Typography className="mt-[25px] font-Inter" size="body">
                  Note: In case of over allocation, everyone will get the same percentage. The token distribution will
                  be based on their order volume and the over allocation
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full md:before:ml-[28px]">
          <div className="flex flex-col gap-[12px] rounded-bl-[24px] rounded-tl-[12px] bg-[#1d1b25] p-[22px]">
            <div className="flex flex-col gap-[12px] p-[12px] text-left font-Inter">
              <div className="flex items-center justify-between gap-[10px]">
                <Typography size="body">Cost</Typography>
                <RangeBar />
                <div className="flex h-[32px] w-full items-center justify-center rounded-[6px] bg-black225_05">
                  <Typography>SEI Amount</Typography>
                </div>
              </div>
              <Typography size="body">
                Users can choose the amount of SEI to send from their wallet using either the custom amount box or the
                slider for a range of 0-100%.
              </Typography>
            </div>
            <div className=" flex flex-col gap-[12px] p-[12px]  text-left">
              <div className="flex justify-between rounded-[8px] bg-black225_05 p-[12px] text-[8px]">
                <Typography size="body">Estimated $NOVA</Typography>
                <Typography className="text-whiteE8" size="body">
                  5.010.131
                </Typography>
              </div>
              <Typography size="body">
                The estimated $NOVA amount represents the maximum distribution after payment. If the maximum SEI cap is
                reached, participants will receive a percentage of their ordered volume based on the over allocation.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-r-[24px] rounded-t-[24px] bg-[#1d1b25] p-[22px]">
        <Typography className="text-left font-medium" size="subtitle-25">
          Information
        </Typography>
        <Typography className="mt-[16px] text-[16px] font-medium xsm:text-[23px]">Public</Typography>
        <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-primary to-secondary-25"></div>
        <div className="flex flex-col text-whiteE8">
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
              max. SEI Cap
            </Typography>
            <Typography size="body">4.000.000 SEI</Typography>
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
            <Typography size="body">0,25 SEI </Typography>
          </div>
          <div className="flex items-center justify-between gap-[10px] border-b-[1.155px] border-black225_05 py-[25px]">
            <Typography size="body">Cost</Typography>
            <RangeBar />
            <div className="flex h-[32px] w-full items-center justify-center rounded-[6px] bg-black225_05">
              <Typography>SEI Amount</Typography>
            </div>
          </div>
          <div className="flex justify-between border-b-[1.155px] border-black225_05 py-[18px]">
            <Typography className="" size="body">
              Estimated $NOVA
            </Typography>
            <Typography size="body">5.010.131</Typography>
          </div>
          <Button className="rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px] font-Lexend">
            <Typography className="text-[18px]" size="body">
              Mint
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}
