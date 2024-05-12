import React from 'react'

interface CustomSingleBarProps {
  upValue: string
  downValue: string
  className?: string
}
const CustomSingleBar: React.FC<CustomSingleBarProps> = ({ upValue, downValue, className = 'w-full' }) => {
  return (
    <div className={`flex h-1 items-center gap-[2px] overflow-hidden rounded-md ${className}`}>
      <div className="h-full bg-red" style={{ flexBasis: `${downValue}%` }}></div>
      <div className="h-full bg-green" style={{ flexBasis: `${upValue}%` }}></div>
    </div>
  )
}

export default CustomSingleBar
