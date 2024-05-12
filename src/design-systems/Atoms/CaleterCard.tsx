/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

import Button from './Button'
import { BotIconsBig, TwitterIcons } from './Icons'
import Typography from './Typography'

import { IMG } from 'assets/images'

export const CalendarCard = ({ dataDate, img, title }: any) => {
  return (
    <div className="rounded-[24px] bg-gradient-to-t !from-blue !to-primary pl-[2px]">
      <div className="grid grid-cols-3 gap-[22px] rounded-[24px] bg-bg25 p-[22px] shadow-[2px_0px_0px_#181620]">
        <div className="col-span-3 h-full w-full xsm:!col-span-2">
          <Image alt={'IMG'} className="aspect-square h-full w-full rounded-[4px]" height={500} src={img} width={500} />
        </div>
        <div className="col-span-3 flex w-full flex-col justify-between gap-[12px] text-left xsm:!col-span-1">
          <div className="flex flex-col gap-[12px]">
            <Typography size="subtitle-25">{title}</Typography>
            <div className="flex items-center gap-3">
              <BotIconsBig className="h-auto w-[8%] md:!w-[10%]" />
              <TwitterIcons className="h-auto w-[8%] md:!w-[10%]" />
              <Image alt={'IMG'} className="h-auto w-[8%] md:!w-[10%]" height={25} src={IMG.nftImage44} width={25} />
              <Image alt="global" className="h-auto w-[8%] md:!w-[10%]" height={25} src={IMG.global} width={25} />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[22px]">
            {dataDate.map((item: any, key: number) => (
              <div
                className="gap-[12px] rounded-[4px] bg-black225_05 p-[12px] text-center font-Inter text-grayDB"
                key={key}
              >
                <Typography className="!text-[14px] xsm:!text-[25px]" size="subtitle-25">
                  {item.label}
                </Typography>
                <Typography className="text-[12px] xsm:!text-[20px]" size="paragraph">
                  {item.subtitle}
                </Typography>
              </div>
            ))}
          </div>
          <Button className="rounded-[4px] bg-button-gradient p-[12px]">
            <Typography>Minting Page</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}
