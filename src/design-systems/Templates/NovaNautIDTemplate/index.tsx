'use client'
import { useState } from 'react'

import backgroundImage from '../../../assets/images/B&W-bg.png'

import Button from 'design-systems/Atoms/Button'
import {
  AstronodHelmet,
  BotIconsBig,
  ClipBoardCopyIcon,
  EyeS,
  InternetBigIcons,
  PlusOutlined,
  ShieldIcons,
  TwitterIconsBig,
} from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import DynamicDonutChart from 'design-systems/Molecules/DynamicDonutChart'
import WalletSignUp from 'design-systems/Molecules/ModalMolecules/WalletSignUp'
import { YourNFT } from 'design-systems/Molecules/NovaNautMolecules/YourNFT'
import { FaitTrans } from 'design-systems/data/data'

const NovaNautTemplate: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const [count, setCount] = useState<number>(0)
  const [queue, setQueue] = useState({
    ticket: false,
    connetWallet: false,
    mint: false,
  })
  const PolicyID = 'a2e719...26d7c5'
  return (
    <div className="overflow-x-hidden">
      <div
        className="h-full w-screen bg-no-repeat px-[19px] pt-[45%] text-left md:!bg-contain md:px-[80px] md:!pt-[13%] lg:px-[140px]"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <div className="rounded-[24px] bg-gradint-dark-pink p-[2px] ">
          <div className="rounded-[24px]  bg-bg25 p-[22px]">
            <div className=" flex flex-col gap-[44px] md:flex-row">
              <div className="flex justify-center">
                <AstronodHelmet />
              </div>
              <div className="flex w-full flex-col gap-[16px]">
                <div className="flex w-full flex-wrap justify-between gap-[22px]">
                  <div className="flex flex-wrap items-center gap-[27px]">
                    <Typography className="text-h4 font-medium md:!text-h3">NOVA-Naut</Typography>
                    <div className="flex gap-[22px]">
                      <ShieldIcons />
                      <EyeS />
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-[10px]">
                    <div>
                      <BotIconsBig />
                    </div>
                    <div>
                      <TwitterIconsBig />
                    </div>
                    <div>
                      <InternetBigIcons />
                    </div>
                  </div>
                </div>
                <div className="flex !flex-col items-center justify-between gap-[22px] md:!flex-row">
                  <Typography className="flex gap-[11px] text-grayDB" size="body">
                    <Typography>Mint Price</Typography>
                    <Typography>400 ₳</Typography>
                  </Typography>
                  <div className="flex w-full !flex-col items-center gap-[6px] text-center xsm:!w-auto xsm:!flex-row  ">
                    <div className="!w-full rounded-[6px] bg-black225_05   px-[22px] py-[14px]">Utility</div>
                    <div className="w-full rounded-[6px] bg-black225_05  px-[22px] py-[14px]">Art</div>
                    <div className="w-full rounded-[6px] bg-black225_05  px-[22px] py-[14px]">PFP</div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-[22px]">
                  <div className="flex flex-wrap gap-[22px]">
                    <Typography className="flex gap-[11px] text-grayDB" size="body">
                      <Typography>Supply</Typography>
                      <Typography>6000</Typography>
                    </Typography>
                  </div>
                  <div className="flex cursor-pointer items-end justify-end gap-[10px] font-medium text-secondary-25">
                    <Typography>Policy ID:</Typography>
                    <Typography>{PolicyID}</Typography>
                    <div>
                      <ClipBoardCopyIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[68px] grid !grid-cols-1 gap-[22px] xxsm:!grid-cols-2 lg:!grid-cols-3">
          <div className="flex h-full w-full flex-col content-between gap-[24px] rounded-[24px] bg-black225_05 p-[22px]">
            <div className="flex h-full w-full flex-col gap-[24px]">
              <Typography className="text-left  !font-medium" size="subtitle-25">
                Live Statistics
              </Typography>
              <div className="flex h-full w-full items-center justify-center">
                {/* <PaiChart /> */}
                <DynamicDonutChart
                  centerContent={
                    <>
                      <ul className="w-full">
                        <li className="text-white flex w-full items-center justify-center gap-3 text-[10px] md:!text-[18px]">
                          <div className="color h-2 w-2 rounded-full bg-[#2592D9] shadow-[0_0_10px_2px_#2592D9]"></div>
                          <p>In Payment: 350/3500</p>
                        </li>

                        <li className="text-white flex w-full items-center justify-center gap-3 text-[10px] md:!text-[18px]">
                          <div className="color h-2 w-2 rounded-full bg-[#00C68A] shadow-[0_0_10px_2px_#00C68A]"></div>
                          <p>In Payment: 350/3500</p>
                        </li>

                        <li className="text-white flex w-full items-center justify-center gap-3 text-[10px] md:!text-[18px]">
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
          <div className="flex h-full w-full flex-col  rounded-[24px] bg-black225_05 p-[22px]">
            <Typography className="text-left  font-medium" size="subtitle-25">
              Information
            </Typography>
            <Typography className="mt-[16px] text-center text-[16px] font-medium xsm:text-[23px]">Whitelist</Typography>
            <div className="h-[1px] w-full rounded-full bg-gradient-to-r from-primary to-secondary-25"></div>
            <div className="flex h-full flex-col flex-wrap justify-between">
              <div>
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
                {queue.ticket && (
                  <>
                    <div className="flex justify-between  py-[18px]">
                      <Typography className="flex flex-col items-center justify-center" size="body">
                        Quantity
                      </Typography>
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
                      <Typography size="body">380 ₳</Typography>
                    </div>
                  </>
                )}
              </div>
              {!queue.ticket && !queue.mint && (
                <Button
                  className="rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px]"
                  onClick={() => setQueue({ ...queue, ticket: !queue.ticket })}
                >
                  <Typography>Enter Queue</Typography>
                </Button>
              )}
              {queue.ticket && !queue.mint && (
                <Button
                  className=" rounded-[6px] bg-gradient-pink p-[2px]"
                  onClick={() => setQueue({ ...queue, mint: !queue.mint })}
                >
                  <div className=" flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink px-[30px] py-[12px] font-Lexend">
                    <Typography>Ticket Number: 1980</Typography>
                  </div>
                </Button>
              )}
              {queue.mint && !queue.connetWallet && (
                <Button
                  className="rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px]"
                  onClick={() => setQueue({ ...queue, connetWallet: !queue.connetWallet })}
                >
                  <Typography className="text-[18px]">Mint</Typography>
                </Button>
              )}
              {queue.connetWallet && (
                <Button
                  className="flex h-[52px] rounded-[6px]  bg-gradint-dark-pink p-[3px] font-Inter"
                  onClick={() => openModal()}
                >
                  <div className="flex h-full w-full items-center justify-center gap-[10px] rounded-[6px] bg-[#181620] px-4">
                    <div>
                      <PlusOutlined />
                    </div>
                    <Typography>Wallet Connect</Typography>
                  </div>
                </Button>
              )}
            </div>
          </div>
          <div className="flex h-full w-full flex-col content-between rounded-[24px] bg-black225_05 p-[22px]">
            <Typography className="text-left font-medium" size="subtitle-25">
              All Transactions
            </Typography>
            <div className="mt-[16px] max-h-[600px] w-full overflow-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="!bg-[#1d1b25] text-[#DBDBDB]">Address</th>
                    <th className="!bg-[#1d1b25] text-[#DBDBDB]">Quantity</th>
                    <th className="!bg-[#1d1b25] text-[#DBDBDB]">ADA</th>
                    <th className="!bg-[#1d1b25] text-[#DBDBDB]">Time</th>
                  </tr>
                </thead>
                {FaitTrans.map((item, key) => (
                  <tr key={key}>
                    <td className="pt-[15px]">{item.address}</td>
                    <td className="pt-[15px]">{item.qua}</td>
                    <td className="pt-[15px]">{item.ada}</td>
                    <td className="pt-[15px]">{item.time}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
        <div className="mt-[22px]">
          <YourNFT />
        </div>
      </div>
      <WalletSignUp setShow={setModalOpen} showModal={modalOpen} />
    </div>
  )
}

export default NovaNautTemplate
