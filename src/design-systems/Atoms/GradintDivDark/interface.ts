/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

export interface GradiantProps {
  className?: string
  children: ReactNode
  onClick?: any
  disabled?: boolean
  classNameOuterDiv?: string
  isWidthRemove?: boolean
}
