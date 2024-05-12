import { SkeletanProps } from './interface'

export const LineBreakSkeleton = ({ className, limit, classNameSkeletan }: SkeletanProps) => {
  const numbers = []
  if (limit != undefined) {
    for (let i = 1; i <= limit; i++) {
      numbers.push(i)
    }
  }
  return (
    <div className={`${className} flex w-full flex-col gap-[12px]`}>
      {numbers?.map((item, key) => (
        <div className={`${classNameSkeletan} flex w-full animate-pulse gap-4 rounded-full `} key={key}>
          <div className={`h-3 w-full animate-pulse rounded-full bg-gradint-dark-pink`}></div>
          <div className={`h-3 w-full animate-pulse rounded-full bg-gradint-dark-pink`}></div>
        </div>
      ))}
    </div>
  )
}
