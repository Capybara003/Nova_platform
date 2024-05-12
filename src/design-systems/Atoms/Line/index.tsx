import React from 'react'

import { LineProps } from './interface'

const Line: React.FC<LineProps> = ({ className }) => {
  return <div className={` h-[2px] w-full !bg-gradint-dark-pink  ${className} my-5`} />
}

export default Line
