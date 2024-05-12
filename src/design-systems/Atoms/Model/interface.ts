/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

export interface ModelProps {
  className?: string
  children?: ReactNode
  onClick?: any
  setShow: (value: boolean) => void
  showModal: boolean
  heading?: ReactNode
  category?: boolean
  activeTabIndex?: number
  valueCal?: boolean
  showCase?: boolean
  wallets?: boolean
  text?: string
  isShowIcon?: boolean
}
