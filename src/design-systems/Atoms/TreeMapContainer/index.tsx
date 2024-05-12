import Typography from '../Typography'

import { TreeMapContainerProps } from './interface'

export const TreeMapContainer = ({
  className,
  classNameHeader,
  classNameDiv,
  negtive,
  label,
  value,
  des,
  classNameDes,
}: TreeMapContainerProps) => {
  return (
    <div className={` ${className} flex flex-col rounded-[4px]`}>
      <div
        className={` ${classNameHeader} flex  w-full items-center justify-center rounded-t-[4px] border-b-2 px-[10px] py-4 ${
          negtive ? 'border-red bg-[#F32A5A4D]' : 'border-green bg-[#00C68A4D]'
        }`}
      >
        <Typography>{label}</Typography>
      </div>
      <div
        className={` ${classNameDiv} flex h-full flex-col items-center justify-center gap-2 rounded-b-[4px] px-[54px] py-[36px] ${
          negtive ? 'bg-redark' : 'bg-[#00C68A0D]'
        }`}
      >
        <div>
          <Typography className={`${classNameDes} text-h4 font-semibold md:!text-h3`}>{des}</Typography>
          <Typography className="text-success-600" size="small">
            {value}
          </Typography>
        </div>
      </div>
    </div>
  )
}
