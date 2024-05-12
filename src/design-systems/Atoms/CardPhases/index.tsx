import Image from 'next/image'

import Typography from '../Typography'
import Button from '../Button'

import { CardPhasesProps } from './interface'

export const CardPhases = ({ start, end, supply, price, buttonText, title, img, onClick }: CardPhasesProps) => {
  return (
    <div className="flex flex-col content-between justify-center gap-[22px] rounded-[24px] bg-black225_05 p-[22px] text-center">
      <div>
        <Typography className="text-grayDB" size="lg">
          {title}
        </Typography>
        <div className="!my-0 !bg-gradient-to-r from-primary to-secondary-25 p-[1px]"></div>
      </div>
      <div>
        <Image alt={''} className="rounded-[10px]" src={img} />
      </div>
      <div className="flex flex-col gap-[19px]">
        <div className="flex justify-between gap-[22px] font-Inter text-grayDB">
          <Typography size="body">Start</Typography>
          <Typography size="body">{start}</Typography>
        </div>
        <div className="flex justify-between gap-[22px] font-Inter text-grayDB">
          <Typography size="body">End</Typography>
          <Typography size="body">{end}</Typography>
        </div>
        <div className="flex justify-between gap-[22px] font-Inter text-grayDB">
          <Typography size="body">Price</Typography>
          <Typography size="body">{price}</Typography>
        </div>
        <div className="flex justify-between gap-[22px] font-Inter text-grayDB">
          <Typography size="body">Supply</Typography>
          <Typography size="body">{supply}</Typography>
        </div>
      </div>
      <Button
        className={` ${buttonText === 'Sold Out' && 'bg-black225_05'} ${
          buttonText === 'Start Mint' && 'bg-gradient-to-r from-primary to-secondary-25'
        } ${buttonText === '15d 04h 52m 41s' && 'bg-gradint-dark-pink'} rounded-[6px] px-[30] py-[12px]`}
        onClick={onClick}
      >
        <Typography>{buttonText}</Typography>
      </Button>
    </div>
  )
}
