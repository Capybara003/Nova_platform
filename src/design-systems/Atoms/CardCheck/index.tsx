/* eslint-disable @typescript-eslint/no-explicit-any */
import { GradintDivDark } from '../GradintDivDark'
import { GreenCheckIcon, HammerIcon, RedCheckIcons, UpcommingIcon, YellowCheckIcon } from '../Icons'
import Typography from '../Typography'

import { CardCheckProps } from './interface'

export const CardCheck = ({
  title,
  subtitle,
  icon,
  className,
  classNameDiv,
  data,
  classNameOuterDiv,
}: CardCheckProps) => {
  return (
    <GradintDivDark
      className={` ${className} relative h-full  `}
      classNameOuterDiv={`${classNameOuterDiv} !max-w-full xsm:!max-w-[344px] min-h-[349px] `}
    >
      <div className="xsm:text-center">
        <div className="flex justify-start xsm:!justify-center">{icon}</div>
        <Typography className="mt-[22px] font-medium" size="paragraph">
          {title}
        </Typography>
        <Typography className="text-[11px] xsm:text-[14px]">{subtitle}</Typography>
      </div>
      {data.map((item: any, key: number) => (
        <div className={`${classNameDiv} mt-[24px] flex items-center gap-[12px]`} key={key}>
          {item.statusIcon && (
            <div className="">
              {item.statusIcon === 'active' && <GreenCheckIcon />}
              {item.statusIcon === 'warning' && <YellowCheckIcon />}
              {item.statusIcon === 'danger' && <RedCheckIcons />}
              {item.statusIcon === 'upcomming' && <UpcommingIcon />}
              {item.statusIcon === 'hammer' && <HammerIcon />}
            </div>
          )}
          <Typography className={`${item.statusIcon === 'upcomming' && 'blur'} text-[16px] text-grayDB`} size="body">
            {item.list}
          </Typography>
        </div>
      ))}
    </GradintDivDark>
  )
}
