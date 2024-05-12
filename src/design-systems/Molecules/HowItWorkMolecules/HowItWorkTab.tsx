/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArrowRightCircleIcon,
  EyeCheckBlueIcons,
  FairDisIcon,
  OrderPlaceIcon,
  TeamBlueIcons,
  TelescopeBlueIcon,
} from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

export const HowItWorkTab = ({ activeTab, handlesetFairTabChange, fairActivetab }: any) => {
  return (
    <>
      {activeTab === 0 ? (
        <div className="flex flex-col items-center justify-between gap-[22px] md:flex-row">
          <div className="mt-[28px] w-full md:!h-full md:!w-[250px]">
            <div className="flex w-full flex-col gap-[14px]">
              <Typography></Typography>
              <div
                className="flex  w-full cursor-pointer items-center justify-evenly"
                onClick={() => handlesetFairTabChange(0)}
              >
                <div
                  className={` ${
                    fairActivetab === 0 ? 'bg-gradient-to-r from-primary to-secondary-25' : 'bg-gradint-dark-pink'
                  } flex h-full w-full  flex-col items-center justify-center rounded-[10px] p-[1px] font-Lexend`}
                >
                  <div className="h-full w-full rounded-[10px] bg-[#1d1b25] py-3 shadow-xl md:!h-[134px] md:!p-[23px]">
                    <div className=" flex items-center  justify-center gap-2 ">
                      <div className="flex flex-row items-center gap-[21px]  md:!flex-col">
                        <EyeCheckBlueIcons />
                        <Typography size="lg">Overview</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center ">{key !== 0 && key !== 3 && <ArrowRightCircleIcon />}</div> */}
              </div>
            </div>
          </div>
          <div className="rotate-90 md:!mt-[40px] md:rotate-0"></div>
          <div className="w-full md:!h-full md:!w-[250px]">
            <div className="flex w-full flex-col gap-[14px]">
              <Typography className="hidden md:!block" size="subtitle">
                1.
              </Typography>
              <div
                className="flex w-full cursor-pointer items-center justify-evenly"
                onClick={() => handlesetFairTabChange(1)}
              >
                <div
                  className={` ${
                    fairActivetab === 1 ? 'bg-gradient-to-r from-primary to-secondary-25' : 'bg-gradint-dark-pink'
                  } flex h-full w-full flex-col items-center justify-center rounded-[10px] p-[1px] font-Lexend`}
                >
                  <div className="h-full w-full rounded-[10px] bg-[#1d1b25] py-3 shadow-xl md:!h-[134px] md:!p-[21px]">
                    <div className=" flex items-center  justify-center gap-2 ">
                      <div className="flex flex-row items-center gap-[22px]  md:!flex-col">
                        <Typography className="block md:!hidden" size="subtitle">
                          1.
                        </Typography>
                        <TeamBlueIcons />
                        <Typography size="lg">Enter Queue</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center ">{key !== 0 && key !== 3 && <ArrowRightCircleIcon />}</div> */}
              </div>
            </div>
          </div>
          <div className="rotate-90 md:!mt-[40px] md:rotate-0">
            <ArrowRightCircleIcon />
          </div>
          <div className="w-full md:!h-full md:!w-[250px]">
            <div className="flex w-full flex-col gap-[14px]">
              <Typography className="hidden md:!block" size="subtitle">
                2.
              </Typography>
              <div
                className="flex w-full cursor-pointer items-center justify-evenly"
                onClick={() => handlesetFairTabChange(2)}
              >
                <div
                  className={` ${
                    fairActivetab === 2 ? 'bg-gradient-to-r from-primary to-secondary-25' : 'bg-gradint-dark-pink'
                  } flex h-full w-full flex-col items-center justify-center rounded-[10px] p-[1px] font-Lexend`}
                >
                  <div className="h-[98%] w-[99.7%] rounded-[10px] bg-[#1d1b25] py-3 shadow-xl md:!h-[134px] md:!p-[21px]">
                    <div className=" flex items-center  justify-center gap-2   ">
                      <div className="flex flex-row items-center gap-[22px]  md:!flex-col">
                        <Typography className="block md:!hidden" size="subtitle">
                          2.
                        </Typography>
                        <OrderPlaceIcon />
                        <Typography size="lg">Place Order</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center ">{key !== 0 && key !== 3 && <ArrowRightCircleIcon />}</div> */}
              </div>
            </div>
          </div>
          <div className="rotate-90 md:!mt-[40px] md:rotate-0">
            <ArrowRightCircleIcon />
          </div>
          <div className="w-full md:!h-full md:!w-[250px]">
            <div className="flex w-full flex-col gap-[14px]">
              <Typography className="hidden md:!block" size="subtitle">
                3.
              </Typography>
              <div
                className="flex w-full cursor-pointer items-center justify-evenly"
                onClick={() => handlesetFairTabChange(3)}
              >
                <div
                  className={` ${
                    fairActivetab === 3 ? 'bg-gradient-to-r from-primary to-secondary-25' : 'bg-gradint-dark-pink'
                  } flex h-full w-full flex-col items-center justify-center rounded-[10px] p-[1px] font-Lexend`}
                >
                  <div className="h-full w-full rounded-[10px] bg-[#1d1b25] py-3 shadow-xl md:!h-[134px] md:!p-[21px]">
                    <div className=" flex items-center  justify-center gap-2   ">
                      <div className="flex flex-row items-center gap-[21px]  md:!flex-col">
                        <Typography className="block md:!hidden" size="subtitle">
                          3.
                        </Typography>
                        <FairDisIcon />
                        <Typography size="lg">Fair Distribution</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center ">{key !== 0 && key !== 3 && <ArrowRightCircleIcon />}</div> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-[22px] md:flex-row">
          <div className="mt-[28px] w-full md:!h-full md:!w-[250px]">
            <div className="flex w-full flex-col gap-[14px]">
              <Typography></Typography>
              <div
                className="flex  w-full cursor-pointer items-center justify-evenly"
                onClick={() => handlesetFairTabChange(0)}
              >
                <div
                  className={` ${
                    fairActivetab === 0 ? 'bg-gradient-to-r from-primary to-secondary-25' : 'bg-gradint-dark-pink'
                  } flex h-full w-full  flex-col items-center justify-center rounded-[10px] p-[1px] font-Lexend`}
                >
                  <div className="h-full w-full rounded-[10px] bg-[#1d1b25] py-3 shadow-xl md:!h-[134px] md:!p-[23px]">
                    <div className=" flex items-center  justify-center gap-2   ">
                      <div className="flex flex-row items-center gap-[21px]  md:!flex-col">
                        <EyeCheckBlueIcons />
                        <Typography size="lg">Overview</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center ">{key !== 0 && key !== 3 && <ArrowRightCircleIcon />}</div> */}
              </div>
            </div>
          </div>
          <div className="rotate-90 md:!mt-[40px] md:rotate-0"></div>
          <div className="w-full md:!h-full md:!w-[250px]">
            <div className="flex w-full flex-col gap-[14px]">
              <Typography className="hidden md:!block" size="subtitle">
                1.
              </Typography>
              <div
                className="flex w-full cursor-pointer items-center justify-evenly"
                onClick={() => handlesetFairTabChange(1)}
              >
                <div
                  className={` ${
                    fairActivetab === 1 ? 'bg-gradient-to-r from-primary to-secondary-25' : 'bg-gradint-dark-pink'
                  } flex h-full w-full flex-col items-center justify-center rounded-[10px] p-[1px] font-Lexend`}
                >
                  <div className="h-full w-full rounded-[10px] bg-[#1d1b25] py-3 shadow-xl md:!h-[134px] md:!p-[21px]">
                    <div className=" flex items-center  justify-center gap-2 ">
                      <div className="flex flex-row items-center gap-[22px]  md:!flex-col">
                        <Typography className="block md:!hidden" size="subtitle">
                          1.
                        </Typography>
                        <OrderPlaceIcon />
                        <Typography size="lg">Place Order</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center ">{key !== 0 && key !== 3 && <ArrowRightCircleIcon />}</div> */}
              </div>
            </div>
          </div>
          <div className="rotate-90 md:!mt-[40px] md:rotate-0">
            <ArrowRightCircleIcon />
          </div>
          <div className="w-full md:!h-full md:!w-[250px]">
            <div className="flex w-full flex-col gap-[14px]">
              <Typography className="hidden md:!block" size="subtitle">
                2.
              </Typography>
              <div
                className="flex w-full cursor-pointer items-center justify-evenly"
                onClick={() => handlesetFairTabChange(2)}
              >
                <div
                  className={` ${
                    fairActivetab === 2 ? 'bg-gradient-to-r from-primary to-secondary-25' : 'bg-gradint-dark-pink'
                  } flex h-full w-full flex-col items-center justify-center rounded-[10px] p-[1px] font-Lexend`}
                >
                  <div className="h-[98%] w-[99.7%] rounded-[10px] bg-[#1d1b25] py-3 shadow-xl md:!h-[134px] md:!p-[21px]">
                    <div className=" flex items-center justify-center gap-2   ">
                      <div className="flex flex-row items-center gap-[22px]  md:!flex-col">
                        <Typography className="block md:!hidden" size="subtitle">
                          2.
                        </Typography>
                        <FairDisIcon />
                        <Typography size="lg">Fair Distribution</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center ">{key !== 0 && key !== 3 && <ArrowRightCircleIcon />}</div> */}
              </div>
            </div>
          </div>
          <div className="rotate-90 md:!mt-[40px] md:rotate-0">
            <ArrowRightCircleIcon />
          </div>
          <div className="w-full md:!h-full md:!w-[250px]">
            <div className="flex w-full flex-col gap-[14px]">
              <Typography className="hidden md:!block" size="subtitle">
                3.
              </Typography>
              <div
                className="flex w-full cursor-pointer items-center justify-evenly"
                onClick={() => handlesetFairTabChange(3)}
              >
                <div
                  className={` ${
                    fairActivetab === 3 ? 'bg-gradient-to-r from-primary to-secondary-25' : 'bg-gradint-dark-pink'
                  } flex h-full w-full flex-col items-center justify-center rounded-[10px] p-[1px] font-Lexend`}
                >
                  <div className="h-full w-full rounded-[10px] bg-[#1d1b25] py-3 shadow-xl md:!h-[134px] md:!p-[21px]">
                    <div className=" flex items-center  justify-center gap-2   ">
                      <div className="flex flex-row items-center gap-[22px]  md:!flex-col">
                        <Typography className="block md:!hidden" size="subtitle">
                          3.
                        </Typography>
                        <TelescopeBlueIcon />
                        <Typography size="lg">Price Discovery Phase</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center ">{key !== 0 && key !== 3 && <ArrowRightCircleIcon />}</div> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  )
}
