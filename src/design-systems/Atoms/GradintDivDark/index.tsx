import { GradiantProps } from './interface'

export const GradintDivDark = ({
  className,
  children,
  onClick,
  classNameOuterDiv,
  isWidthRemove = false,
}: GradiantProps) => {
  return (
    <div
      className={`${classNameOuterDiv} flex h-full justify-center rounded-[10px] bg-gradint-dark-pink p-[1px] ${
        !isWidthRemove ? 'w-full' : ''
      }`}
      onClick={onClick}
    >
      <div className={` ${className} w-full rounded-[10px] bg-bg25 p-[22px] shadow-xl backdrop-blur-md`}>
        {children}
      </div>
    </div>
  )
}
