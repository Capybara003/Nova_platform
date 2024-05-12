import Image from 'next/image'

import { IMG } from 'assets/images'
import { PiggieBanckIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import Button from 'design-systems/Atoms/Button'

export const MintDistribution = () => {
  const Height1 = `81%`
  const Height2 = `15%`
  const Height3 = `6%`
  return (
    <div className="grid !grid-cols-1 gap-[40px] lg:!grid-cols-2">
      <div className="grid !grid-cols-1 gap-[12px] xsm:!grid-cols-3">
        <div className="flex min-h-[100px] items-center justify-center rounded-[12px] bg-black225_05 p-[22px] xsm:min-h-[357px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-center">
              <PiggieBanckIcon />
            </div>
            <Typography size="body">Mint Income</Typography>
          </div>
        </div>
        <div className="flex h-full w-full flex-col gap-[8px] xsm:col-span-2">
          <div
            className={`  flex w-full items-center justify-center rounded-bl-[3px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] border-l-[6px] !border-primary bg-black225_05 p-[10px] font-semibold`}
            style={{ height: `${Height1}` }}
          >
            <div className="flex gap-[40px]">
              <Typography className="text-[11px] !text-primary xsm:text-[14px]">{Height1}</Typography>
              <div className="flex items-center gap-[10px]">
                <Typography className="text-[11px] font-semibold xsm:text-[16px]">Development</Typography>
                <div className="flex items-center">
                  <Image alt={'IMG'} src={IMG.CarDano20} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex w-full items-center  justify-center rounded-bl-[3px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] border-l-[6px] !border-blue bg-black225_05 p-[10px] font-semibold`}
            style={{ height: `${Height2}` }}
          >
            <div className="flex gap-[40px]">
              <Typography className="text-[11px] !text-blue xsm:text-[14px]">{Height2}</Typography>
              <div className="flex items-center gap-[10px]">
                <Typography className="text-[11px] font-semibold xsm:text-[16px]">Liquidity Pair</Typography>
                <div className="flex items-center">
                  <Image alt={'IMG'} src={IMG.CarDano20} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex w-full items-center justify-center rounded-bl-[3px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] border-l-[6px] !border-yellow bg-black225_05 p-[10px] font-semibold`}
            style={{ height: `${Height3}` }}
          >
            <div className="flex gap-[40px]">
              <Typography className="text-[11px] !text-yellow xsm:text-[14px]">{Height3}</Typography>
              <div className="flex items-center gap-[10px]">
                <Typography className="text-[11px] font-semibold xsm:text-[16px]">Tax + Legal</Typography>
                <div className="flex items-center">
                  <Image alt={'IMG'} src={IMG.CarDano20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col flex-wrap justify-between gap-[22px]">
        <Typography className=" text-[18px] font-medium xsm:text-[30px]">Fair Launch: 0% to the founders</Typography>
        <Typography className="text-[14px] text-whiteE8 xsm:text-[16px]">
          The effective management of a company`s resources is curcial for its success, a significance that extends to
          our community and you, our investors. With this in mind, we aim to provide you with a comprehensive and
          transparent understanding of how we allocate the mint income. .<br />
          <br />
          In addition, a dedicated wallet for each distribution segment will be established, offering the community
          profound insights into the fund utilization.
          <br />
          <br />
          Our commitment is clear: We will not divert any funds from the mint. Instead, all resources will be directed
          towards ensuring the sustainable development of the NOVA-Ecosystem and solutions.
        </Typography>
        <Button className="w-full max-w-[395px] rounded-[6px] bg-gradient-to-r from-primary  to-blue px-[30px] py-[12px]">
          <Typography>More Information</Typography>
        </Button>
      </div>
    </div>
  )
}
