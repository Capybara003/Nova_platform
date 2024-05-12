import Typography from '../Typography'

import { TreeMapContainerProps2 } from './interface'

export const TreeMapContainer2 = ({ className, negtive, value, des, classNameDes }: TreeMapContainerProps2) => {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center rounded-[4px] border-t-[4px] px-[21.66px] py-[19.43px] ${
        negtive ? 'border-red bg-redark ' : 'border-green bg-[#00C68A0D]'
      } `}
    >
      {' '}
      <Typography className={` ${classNameDes} font-semibold`}>{des}</Typography>
      <Typography className="text-success-600" size="small">
        {value}
      </Typography>
    </div>
  )
}
