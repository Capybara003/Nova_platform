'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import Button from 'design-systems/Atoms/Button'
import { BlueCustomsIcons, BlueFolderIcons, BlueMintIcons, StackingIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

const DashboardIndex: React.FC = () => {
  const router = useRouter()
  // const [disable, setDisable] = useState(false)
  const LocalToken = localStorage.getItem('token')
  // useMemo(() => {
  //   if (LocalToken === null) {
  //     setDisable(true)
  //   } else {
  //     setDisable(false)
  //   }
  // }, [LocalToken])
  // const LoginDisPop = () => {
  //   toast.info('Login/Sign first.... ', {
  //     position: toast.POSITION.TOP_RIGHT,
  //   })
  // }
  return (
    <div className="flex h-full w-full  flex-col gap-5  xsm:h-screen xsm:items-center xsm:justify-center">
      <div className="my-[100px] flex flex-col gap-12 xsm:mt-0 md:my-0">
        <Typography className="hidden md:!block" size="h3">
          Dashboard
        </Typography>
        <div className="grid min-h-[300px] !grid-cols-1 justify-center justify-items-center gap-[20px] xsm:!grid-cols-2 md:!grid-cols-4">
          <div className="maskingBorder flex w-full max-w-[280px] justify-center overflow-hidden rounded-[10px] border bg-black225_05 px-2 py-[24px] backdrop-blur-sm">
            <div className="flex h-full flex-col content-between items-center justify-between gap-3 ">
              <BlueFolderIcons />
              <Typography className="font-Lexend" size="lg">
                NOVA-Analytics
              </Typography>
              <Typography className="font-Inter text-[14px]">
                Redefine your knowledge about your portfolio and the market
              </Typography>
              <Button
                className=" w-full max-w-[232px] rounded-xs bg-button-gradient p-[12px] px-[30px]"
                onClick={() => {
                  router.push('/market-analitics')
                }}
              >
                <Typography className="font-normal " size="md">
                  Launch
                </Typography>
              </Button>
            </div>

            <div className="maskingBorder-on-top absolute left-[-4px] top-[-4px] h-[50px] w-[50px] rounded-tl-[inherit] border-[4px] border-b-0 border-r-0 bg-transparent"></div>
            <div className="maskingBorder-on-top absolute bottom-[-4px] left-[-4px] h-[50px] w-[50px] rounded-bl-[inherit] border-[4px] border-r-0 border-t-0 bg-transparent"></div>
          </div>
          <div className="maskingBorder flex w-full max-w-[280px] justify-center rounded-[10px] border bg-black225_05 px-2 py-[24px] backdrop-blur-sm">
            <div className="flex h-full flex-col content-between items-center justify-between gap-3 ">
              <BlueMintIcons />
              <Typography className="font-Lexend" size="lg">
                NOVA-Launchpad
              </Typography>
              <Typography className="h-[42px] font-Inter text-[14px]">Smart and Smooth Mint Experience</Typography>
              {!LocalToken ? (
                <Button
                  className="  w-full max-w-[232px] rounded-xs bg-button-gradient p-[12px] px-[30px]"
                  onClick={() => router.push('/login')}
                >
                  <Typography className="text-[14px] font-normal">Log In</Typography>
                </Button>
              ) : (
                <Button
                  className="  w-full max-w-[232px] rounded-xs bg-button-gradient p-[12px] px-[30px]"
                  onClick={() => router.push('/mint')}
                >
                  <Typography className="text-[14px] font-normal">Launch</Typography>
                </Button>
              )}
            </div>
          </div>
          <div className="maskingBorder flex w-full max-w-[280px] justify-center rounded-[10px] border bg-black225_05 px-2 py-[24px] backdrop-blur-sm">
            <div className="flex h-full flex-col content-between items-center justify-between gap-3 ">
              <StackingIcons />
              <Typography className="font-Lexend" size="lg">
                NOVA-Stacking
              </Typography>
              <Typography className="h-[42px] font-Inter text-[14px]">Smart and Smooth On-Chain staking</Typography>
              <Button className="w-full cursor-not-allowed rounded-xs bg-gradint-dark-pink p-[12px] px-[30px]">
                <Typography className="font-normal" size="md">
                  Soon
                </Typography>
              </Button>
            </div>
          </div>
          <div className="maskingBorder flex w-full max-w-[280px] justify-center rounded-[10px] border bg-black225_05 px-2 py-[24px] backdrop-blur-sm">
            <div className="flex h-full flex-col content-between items-center justify-between gap-3 ">
              <BlueCustomsIcons />
              <Typography className="font-Lexend md:!px-5" size="lg">
                Custom Development
              </Typography>
              <Typography className="font-Inter text-[14px]">
                We code your vision. <br />
                Development / Art / Website / Solutions
              </Typography>
              <Button className="  w-full max-w-[232px] rounded-xs bg-button-gradient p-[12px] px-[30px]">
                <Typography className="font-normal " size="md">
                  Apply
                </Typography>
              </Button>
            </div>

            <div className="maskingBorder-on-top absolute right-[-4px] top-[-4px] h-[50px] w-[50px] rounded-tr-[inherit] border-[4px] border-b-0 border-l-0 bg-transparent"></div>
            <div className="maskingBorder-on-top absolute bottom-[-4px] right-[-4px] h-[50px] w-[50px] rounded-br-[inherit] border-[4px] border-l-0 border-t-0 bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardIndex
