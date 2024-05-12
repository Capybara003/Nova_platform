import { GradintDivDark } from '../GradintDivDark'
import { GreenCheckIcon, RedCheckIcons, YellowCheckIcon } from '../Icons'
import Typography from '../Typography'

import { CardProps } from './interface'

export const Card = ({ label, subtitle, icon, className, classNameDiv, statusIcon }: CardProps) => {
  return (
    <GradintDivDark className={` ${className} relative h-full`}>
      {statusIcon && (
        <div className="absolute right-1 top-[5px]">
          {statusIcon === 'active' && <GreenCheckIcon />}
          {statusIcon === 'warning' && <YellowCheckIcon />}
          {statusIcon === 'danger' && <RedCheckIcons />}
        </div>
      )}
      <div className={`${classNameDiv} mt-[27px] flex w-full flex-col items-center gap-[22px]`}>
        <div>{icon}</div>
        <Typography className=" !font-medium" size="paragraph">
          {label}
        </Typography>
        <Typography className="font-Inter text-[14px] text-grayDB">{subtitle}</Typography>
      </div>
    </GradintDivDark>
  )
}
