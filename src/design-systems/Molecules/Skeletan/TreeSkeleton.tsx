export const TreeSkeleton = () => {
  return (
    <div className="flex h-full w-full animate-pulse flex-col gap-2">
      <div className="grid h-[200px] w-full animate-pulse grid-cols-4 !gap-2 rounded ">
        <div className="rounded bg-gradint-dark-pink"></div>
        <div className="rounded bg-gradint-dark-pink"></div>
        <div className="rounded bg-gradint-dark-pink"></div>
        <div className="rounded bg-gradint-dark-pink"></div>
      </div>
      <div className="grid h-[200px] w-full animate-pulse grid-cols-3 !gap-2 rounded ">
        <div className="rounded bg-gradint-dark-pink"></div>
        <div className="rounded bg-gradint-dark-pink"></div>
        <div className="rounded bg-gradint-dark-pink"></div>
      </div>
      <div className="grid h-[200px] w-full animate-pulse grid-cols-4 !gap-2 rounded ">
        <div className="rounded bg-gradint-dark-pink"></div>
        <div className="rounded bg-gradint-dark-pink"></div>
        <div className="rounded bg-gradint-dark-pink"></div>
        <div className="rounded bg-gradint-dark-pink"></div>
      </div>
    </div>
  )
}
