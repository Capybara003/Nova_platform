import Image from 'next/image'

import Typography from '../Typography'

import { NoDataProps } from './interface'

import { IMG } from 'assets/images'

export const NoData: React.FC<NoDataProps> = ({ label = 'Data Not Found' }) => {
  return (
    <div className="mx-auto my-4 flex h-full flex-col items-center justify-center gap-[22px] font-Lexend">
      <div className="flex h-full w-1/2 justify-center md:w-auto">
        <Image alt={'IMG'} className="aspect-square object-cover" src={IMG.LogoXXL} />
      </div>
      <Typography className="font-normal" size="h2">
        {label}
      </Typography>
    </div>
  )
}
