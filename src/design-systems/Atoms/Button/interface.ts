/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

export interface ButtonProps {
  className?: string
  children: ReactNode
  onClick?: any
  type?: 'button' | 'reset' | 'submit' | undefined
  disabled?: boolean
}
