import React from 'react'

import { ButtonProps } from './interface'

const Button: React.FC<ButtonProps> = ({ className, children, onClick, type, disabled }) => {
  return (
    <button
      className={`${className} ${
        disabled && '!cursor-not-allowed !bg-gradint-dark-pink'
      } text-[12px] transition-transform ease-in-out active:scale-95 xsm:text-[18px]`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
