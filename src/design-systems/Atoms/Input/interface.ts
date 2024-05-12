import { ChangeEvent } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  className?: string
  type?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string
}
