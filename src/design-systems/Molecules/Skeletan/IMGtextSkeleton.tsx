import { SkeletanProps } from './interface'

export const IMGtextSkeleton = ({ className, limit }: SkeletanProps) => {
  const numbers = []
  if (limit != undefined) {
    for (let i = 1; i <= limit; i++) {
      numbers.push(i)
    }
  }
  return (
    <div className={`${className} flex w-full items-center gap-[24px]`}>
      <div className="h-[50px] w-[60px] animate-pulse rounded-[6px] bg-gradint-dark-pink"></div>
      <div className="h-5 w-full animate-pulse rounded-[24px] bg-gradint-dark-pink"></div>
    </div>
  )
}
