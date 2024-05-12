import Image from 'next/image'

import { IMG } from 'assets/images'
import Typography from 'design-systems/Atoms/Typography'

export const PriceDisPhase = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <div className="flex justify-center">
          <Image alt={'IMG'} src={IMG.LogoXXL} />
        </div>
        <Typography className="font-Lexend text-[28px] xsm:text-[85px]">Coming Soon</Typography>
      </div>
    </div>
  )
}
